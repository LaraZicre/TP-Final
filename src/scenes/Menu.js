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

  create() {

    this.add.image(400, 300, "menuFondo").setScale(1.1);
//añadir boton play

    {
//boton quieto
    const playpointerover = this.add.image(400, 300, "play1").setInteractive();

    playpointerover.on('pointerover', function (event)
    {
     
      
      });

//mouse sobre boton
    const playpointerout = this.add.image(400, 300, "play2").setInteractive();

    playpointerout.on('pointerout', function (event)
    {

      
      
      });
    }

//presionar boton
    const playpointerup =  this.add.image(400, 300, "play3").setInteractive();

    playpointerup.on('pointerup', function (event)
    {

    
      this.scene.start("Nivel1");  
      
      });
   }
}
