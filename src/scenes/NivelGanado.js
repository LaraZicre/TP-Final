export default class NivelGanado extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("NivelGanado");
  }

  init(data) {
    this.escenaActual = data.escenaActual;
  }

  create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUp").setScale(1.1);

    this.textoGanarNivel = this.add.text(347, 200, "¡Muy bien!", {
      fontFamily: "Pixellari",
      fontSize: "65px",
      fill: "#ff4db3",
    });

    this.boton = this.sound.add("boton");

    const continuarButton = this.add
      .sprite(400, 350, "seguir1")
      .setInteractive();
    // Agrega eventos de clic a los botones.
    continuarButton.on("pointerup", () => {
      console.log(this.escenaActual);
      continuarButton.setTexture("seguir1");
      this.boton.play();
      if (this.escenaActual === "nivel1") {
        this.scene.stop("Nivel1");
        this.scene.stop("NivelGanado");
        this.scene.start("Nivel2");
      } else if (this.escenaActual === "nivel2") {
        this.scene.stop("Nivel2");
        this.scene.stop("NivelGanado");
        this.scene.start("Nivel3");
      }
    });
    continuarButton.on("pointerover", () => {
      continuarButton.setTexture("seguir2");
    });
    continuarButton.on("pointerout", () => {
      continuarButton.setTexture("seguir1");
    });
    continuarButton.on("pointerdown", () => {
      continuarButton.setTexture("seguir2");
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
      this.scene.stop("NivelGanado");
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
