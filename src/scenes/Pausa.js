export default class Pausa extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Pausa");
  }

  init() {
    this.escenaActual = this.scene.key;
  }

  create() {

    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUp");

    this.textoPausa = this.add.text(390, 200, "PAUSA", {
      fontFamily: "Pixellari",
      fontSize: "65px",
      fill: "#ff4db3",
    });

    const volverButton = this.add.sprite(400, 350, "atras1").setInteractive();
    // Agrega eventos de clic a los botones.
    volverButton.on("pointerover", () => {
      volverButton.setTexture("atras2");
    });

    volverButton.on("pointerout", () => {
      volverButton.setTexture("atras1");
    });

    volverButton.on("pointerdown", () => {
      volverButton.setTexture("atras2");
    });

    volverButton.on("pointerup", () => {
      volverButton.setTexture("atras1");

      this.scene.stop("Pausa");

      this.scene.resume(this.scene.escenaActual);
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
    });
  }

  // reanudarJuego() {}

  update() {}
}
