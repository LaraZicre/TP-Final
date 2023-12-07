export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  init() {
  }

  create() {
    this.add.image(496, 300, "menuFondo").setScale(1.1);

    //añadir boton tutorial
    this.tutorialButton();

    //añadir boton play
    this.playButton();
  }

  playButton() {
    //boton quieto
    const playpointer = this.add.sprite(260, 300, "play1").setInteractive();
    //soltar boton
    playpointer.on("pointerup", () => {
      playpointer.setTexture("play2");
      this.scene.start("Nivel3");
    });
    playpointer.on("pointerover", () => {
      playpointer.setTexture("play2");
    });
    //mouse sobre boton
    playpointer.on("pointerout", function () {
      playpointer.setTexture("play1");
    });
    //presionar boton
    playpointer.on("pointerdown", () => {
      playpointer.setTexture("play3");
    });
  }

  tutorialButton() {
    //boton quieto
    const tutopointer = this.add.sprite(50, 560, "tuto1").setInteractive();
    tutopointer.on("pointerover", () => {
      tutopointer.setTexture("tuto2");
    });

    //soltar boton
    tutopointer.on(
      "pointerup",
      () => {
        tutopointer.setTexture("tuto2");
        this.scene.start("Tutorial");
      },
      this
    );
    //mouse sobre boton
    tutopointer.on("pointerout", () => {
      tutopointer.setTexture("tuto1");
    });
    //presionar boton
    tutopointer.on("pointerdown", () => {
      tutopointer.setTexture("tuto3");
    });
    //soltar boton
    tutopointer.on(
      "pointerup",
      () => {
        tutopointer.setTexture("tuto2");
        this.scene.start("Tutorial");
      },
      this
    );
  }

  update() {}
}
