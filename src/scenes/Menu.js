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
    this.load.image("tuto1", "public/assets/images/Menu/botontutorial1.png");
    this.load.image("tuto2", "public/assets/images/Menu/botontutorial2.png");
    this.load.image("tuto3", "public/assets/images/Menu/botontutorial3.png");

  }

  init() {
  }

  create() {
    this.add.image(400, 300, "menuFondo").setScale(1.1);

    //añadir boton tutorial
    this.tutorialButton()

    //añadir boton play
    this.playButton()
  }

  pressPlay() {
    this.scene.start("Nivel1");
  }

  playButton() {
    //boton quieto
    const playpointer= this.add.sprite(550, 300, "play1").setInteractive();
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

  pressTuto() {
    this.scene.start("Tutorial");
  }

  tutorialButton(){
    //boton quieto
    const tutopointer= this.add.sprite(250, 300, "tuto1").setInteractive();
    tutopointer.on('pointerover', function (event) {
      this.setTexture("tuto2");
    });
    //mouse sobre boton
    tutopointer.on('pointerout', function (event) {
      this.setTexture("tuto1");
    });
    //presionar boton
    tutopointer.on('pointerdown', function (event) {
      tutopointer.setTexture("tuto3");
      
    });
    //soltar boton
    tutopointer.on('pointerup', function (event) {
      tutopointer.setTexture("tuto2");
      this.pressTuto();
    }, this);


  }

  update() {  
  }
}
