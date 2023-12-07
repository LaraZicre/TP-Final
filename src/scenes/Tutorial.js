export default class Tutorial extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Tutorial");
      
    }

    init(){

    }

    create() {
      this.add.image(496, 300, "tutoFondo");

      // Boton volver
      const volverButton = this.add.sprite(45, 55, "atras1").setInteractive();
      // Agrega eventos de clic a los botones.
      volverButton.on("pointerover", () => 
          {volverButton.setTexture("atras2"); 
      });

      volverButton.on("pointerout", () => 
          {volverButton.setTexture("atras1"); 
      });

      volverButton.on("pointerdown", () => 
          {volverButton.setTexture("atras2"); 
      });
      
      volverButton.on("pointerup", () => 
          {volverButton.setTexture("atras1"); 
          this.scene.start("Menu");
      });

      // Sprites

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

      const osoJump = this.add.sprite(496, 480)
      this.anims.create({
        key: "jump",
        frames: this.anims.generateFrameNumbers("osoJump", { start: 0, end: 54 }),
        frameRate: 20,
        repeat: -1,
      });  
      osoJump.play('jump', true)
    }

  update() {  
    
  }
}
