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
    this.add.image(496, 300, "menuFondo").setScale(1.1);

    //añadir boton tutorial
    this.tutorialButton()

    //añadir boton play
    this.playButton()
  }



  playButton() {
    //boton quieto
    const playpointer= this.add.sprite(260, 300, "play1").setInteractive();
    //soltar boton
    playpointer.on('pointerup', () => {
      playpointer.setTexture("play2");
      this.scene.start("Nivel1");
    })
    playpointer.on('pointerover', () => {
      playpointer.setTexture("play2");
    })
    //mouse sobre boton
    playpointer.on('pointerout', function () {
        playpointer.setTexture("play1");
      })
    //presionar boton
    playpointer.on('pointerdown', () => {
      playpointer.setTexture("play3");  
    })


  }


  tutorialButton(){
    //boton quieto
    const tutopointer= this.add.sprite(50, 560, "tuto1").setInteractive();
    tutopointer.on('pointerover', () => {
      this.setTexture("tuto2");
    });

    //soltar boton
    tutopointer.on('pointerup', () => {
      tutopointer.setTexture("tuto2");
      this.pressTuto();
    }, this);
    //mouse sobre boton
    tutopointer.on('pointerout', () => {
      this.setTexture("tuto1");
    });
    //presionar boton
    tutopointer.on('pointerdown', () => {
      tutopointer.setTexture("tuto3");
      
    });
    //soltar boton
    tutopointer.on('pointerup', () => {
      tutopointer.setTexture("tuto2");
      this.scene.start("Tutorial");
    }, this);

  }

  update() {  
  }
}
