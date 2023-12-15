export default class NivelPerdido extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("NivelPerdido");
  }

  init(data) {
    this.escenaActual = data.escenaActual;
  }

  create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUp").setScale(1.1);

    this.textoPerderNivel = this.add.text(430, 190, "¡Ups!", {
      fontFamily: "Pixellari",
      fontSize: "50px",
      fill: "#ff4db3",
    });

    this.textoPerderNivel = this.add.text(345, 250, "La comida no apareció", {
      fontFamily: "Pixellari",
      fontSize: "30px",
      fill: "#ff4db3",
    });

    this.textoPerderNivel1 = this.add.text(
      315,
      285,
      "¡Volvamos a intentarlo!",
      {
        fontFamily: "Pixellari",
        fontSize: "35px",
        fill: "#ff4db3",
      }
    );

    this.boton = this.sound.add("boton");
    this.perderNivel = this.sound.add("perderNivel");

    this.perderNivel.play();

    const reintentarButton = this.add
      .sprite(400, 370, "reintentar1")
      .setInteractive();
    // Agrega eventos de clic a los botones.
    reintentarButton.on("pointerover", () => {
      reintentarButton.setTexture("reintentar2");
    });

    reintentarButton.on("pointerout", () => {
      reintentarButton.setTexture("reintentar1");
    });

    reintentarButton.on("pointerdown", () => {
      reintentarButton.setTexture("reintentar2");
    });

    reintentarButton.on("pointerup", () => {
      reintentarButton.setTexture("reintentar1");
      this.boton.play();
      if (this.escenaActual === "nivel1") {
        this.scene.start("Nivel1");
      } else if (this.escenaActual === "nivel2") {
        this.scene.start("Nivel2");
      } else if (this.escenaActual === "nivel3") {
        this.scene.start("Nivel3");
      }
    });

    const menuButton = this.add.sprite(570, 370, "menu1").setInteractive();
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
      this.scene.stop("NivelPerdido");
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
