export default class Pausa extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Pausa");
  }

  init(data) {
    this.escenaActual = data.escenaActual;
    this.musica = data.musica;
  }

  create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUp").setScale(1.1);

    this.textoPausa = this.add.text(390, 200, "PAUSA", {
      fontFamily: "Pixellari",
      fontSize: "65px",
      fill: "#ff4db3",
    });

    this.boton = this.sound.add("boton");

    const volverButton = this.add.sprite(400, 350, "atras1").setInteractive();

    volverButton.on("pointerover", () => {
      volverButton.setTexture("atras2");
    });
    volverButton.on("pointerout", () => {
      volverButton.setTexture("atras1");
    });
    volverButton.on("pointerdown", () => {
      volverButton.setTexture("atras2");
    });

    // Agrega eventos de clic a los botones.
    volverButton.on("pointerup", () => {
      this.boton.play();
      this.scene.stop();
      if (this.escenaActual === "nivel1") {
        this.scene.stop("Pausa");
        this.musica.resume(this.escenaActual);
        this.scene.resume("Nivel1");
      } else if (this.escenaActual === "nivel2") {
        this.musica.resume(this.escenaActual);
        this.scene.resume("Nivel2");
      } else if (this.escenaActual === "nivel3") {
        this.musica.resume(this.escenaActual);
        this.scene.resume("Nivel3");
      }
    });

    const menuButton = this.add.sprite(570, 350, "menu1").setInteractive();
    // Agrega eventos de clic a los botones.
    menuButton.on("pointerover", () => {
      menuButton.setTexture("menu2");
    });

    menuButton.on("pointerout", () => {
      menuButton.setTexture("menu1");
    });

    menuButton.on("pointerdown", () => {
      menuButton.setTexture("menu2");
    });

    menuButton.on("pointerup", () => {
      menuButton.setTexture("menu1");
      this.boton.play();
      this.scene.stop("Pausa");
      if (this.escenaActual === "nivel1") {
        this.scene.stop("Nivel1");
      } else if (this.escenaActual === "nivel2") {
        this.scene.stop("Nivel2");
      } else if (this.escenaActual === "nivel3") {
        this.scene.stop("Nivel3");
      }
      this.scene.start("Menu");
    });
  }

  update() {}
}
