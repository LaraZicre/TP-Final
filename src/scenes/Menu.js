export default class Menu extends Phaser.Scene {
  constructor() {

    super("Menu");
  }

  preload() {
    //fondo menu
    this.load.image("menuFondo", "public/assets/images/Menu/fondomenu.png");
    //botonplay
    this.load.image("play1", "public/assets/images/Menu/botonplay1.png");
    this.load.image("play2", "public/assets/images/Menu/botonplay2.png");
    this.load.image("play3", "public/assets/images/Menu/botonplay3.png");
    //botontutorial

  }

  init() {
    //const playpointer = this.add.sprite(400, 300, "play1").setInteractive();
  }

  create() {
    this.add.image(400, 300, "menuFondo").setScale(1.1);
    //añadir boton play
    this.playButton()
  }

  pressPlay() {
    this.scene.start("Nivel1");
  }

  playButton() {
    //boton quieto
    const playpointer= this.add.sprite(400, 300, "play1").setInteractive();
    playpointer.on('pointerover', function (event) {
      this.setTexture("play2");
    });
    //mouse sobre boton
    playpointer.on('pointerout', function (event) {
      this.setTexture("play1");
    });
    //presionar boton
    playpointer.on('pointerdown', function (event) {
      playpointer.setTexture("play3");
      
    });
    //soltar boton
    playpointer.on('pointerup', function (event) {
      playpointer.setTexture("play2");
      this.pressPlay();
    }, this);
  }

  update() {  
    //this.scene.start("Nivel1");
  }
}
