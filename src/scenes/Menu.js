export default class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  init(data) {
    this.musica = data.musica;

  }

  create() {

    this.musica = this.sound.add("musicaMenu");
    this.musica.play();

    this.boton = this.sound.add("boton");

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
      this.boton.play();
      this.musica.stop({ loop: false });
      this.scene.start("Nivel1");
    });
  }

  tutorialButton() {
    //boton quieto
    const tutopointer = this.add.sprite(50, 560, "tuto1").setInteractive();
    //soltar boton
    tutopointer.on("pointerup", () => {
      tutopointer.setTexture("tuto2");
    });
    tutopointer.on("pointerover", () => {
      tutopointer.setTexture("tuto2");
    });
    //mouse sobre boton
    tutopointer.on("pointerout", function () {
      tutopointer.setTexture("tuto1");
    });
    //presionar boton
    tutopointer.on("pointerdown", () => {
      tutopointer.setTexture("tuto3");
      this.boton.play();
      this.scene.pause("Menu");
      this.scene.launch("Tutorial");
    });
  }

  update() {}
}
