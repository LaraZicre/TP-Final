export default class Tutorial extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Tutorial");
      
    }
 
    preload(){
      //tecla atras
      this.load.image("atras1", "public/assets/images/Buttons/botonatras1.png");
      this.load.image("atras2", "public/assets/images/Buttons/botonatras2.png");
    }

    init(){

    }

    create() {
      this.add.image(496, 300, "tutoFondo");

      //añadir boton atras
      this.backButton()
    }
  
    pressBack() {
      this.scene.start("Menu");
    }
  
    backButton() {
      //boton quieto
      const backpointer= this.add.sprite(45, 55, "atras1").setInteractive();
      backpointer.on('pointerover', function (event) {
        this.setTexture("atras2");
      });
      //mouse sobre boton
      backpointer.on('pointerout', function (event) {
        this.setTexture("atras1");
      });
      //presionar boton
      backpointer.on('pointerdown', function (event) {
        backpointer.setTexture("atras2");
        
      });
      //soltar boton
      backpointer.on('pointerup', function (event) {
        backpointer.setTexture("atras1");
        this.pressBack();
      }, this);
  
    

      const teclas = this.add.sprite(496, 250);
      this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("tutoTeclas", { start: 0, end: 8 }),
        frameRate: 10,
        repeat: -1
      });
      teclas.play('idle')

      const osoLeft = this.add.sprite(240, 510);
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
      osoLeft.play('left', true)

      const osoRight = this.add.sprite(750, 510)
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });  
      osoRight.play('right', true)

      const osoJump = this.add.sprite(496, 510)
      this.anims.create({
        key: "jump",
        frames: this.anims.generateFrameNumbers("osoJump", { start: 0, end: 7 }),
        frameRate: 7,
        repeat: -1,
      });  
      osoJump.play('jump', true)
    }

  update() {  
    
  }
}
