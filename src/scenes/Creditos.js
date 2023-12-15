export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  preload() {}

  init() {}

  create() {
    this.add.image(496, 300, "creditos").setScale(1.1);

    const menuButton = this.add.sprite(45, 55, "menu1").setInteractive();

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
      this.musica.stop();
      this.scene.stop("Creditos");
      this.scene.start("Menu");
    });

    this.musica = this.sound.add("musicaCreditos");
    this.boton = this.sound.add("boton");

    this.musica.play();
  }

  update() {}
}
