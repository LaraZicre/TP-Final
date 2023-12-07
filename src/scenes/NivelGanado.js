export default class NivelGanado extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("NivelGanado");
  }

  init() {
  }

  create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUp");

    this.textoGanarNivel = this.add.text(347, 200, "¡Muy bien!", {
      fontFamily: "Pixellari",
      fontSize: "65px",
      fill: "#ff4db3",
    });

    const continuarButton = this.add
      .sprite(400, 350, "seguir1")
      .setInteractive();
    // Agrega eventos de clic a los botones.
    continuarButton.on("pointerover", () => {
      continuarButton.setTexture("seguir2");
    });

    continuarButton.on("pointerout", () => {
      continuarButton.setTexture("seguir1");
    });

    continuarButton.on("pointerdown", () => {
      continuarButton.setTexture("seguir2");
    });

    continuarButton.on("pointerup", () => {
      continuarButton.setTexture("seguir1");
      if (this.escenaActual === "nivel1") {
        this.scene.stop("nivel1");
        this.scene.stop("nivelGanado");
        this.scene.start("nivel2");
      }
      else if (this.escenaActual === "nivel2") {
        this.scene.stop("nivel2");
        this.scene.stop("nivelGanado");
        this.scene.start("nivel3");
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
      this.scene.stop("NivelGanado");
      this.scene.stop(this.escenaActual);
      this.scene.start("Menu");
    });
  }

  update() {}
}
