export default class Intro extends Phaser.Scene {
  constructor() {
    super("Intro");
  }

  preload() {
    //imagen intro
    this.load.image("intro", "public/assets/images/Inicio.png");
  }

  init() {}

  create() {
    this.add.image(496, 300, "intro").setScale(1.1);

    this.time.delayedCall(3000, this.startNextScene, [], this);
  }

  startNextScene() {
    // Inicia la siguiente escena
    this.scene.start("Menu");
  }

  update() {}
}
