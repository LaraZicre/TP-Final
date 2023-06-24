export default class Tutorial extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Tutorial");
      
    }

    preload() {
      //fondo
      this.load.image("tutoFondo", "public/assets/images/Tutorial/fondotuto.png");
      //teclas
      this.load.spritesheet("tutoTeclas", "public/assets/images/Tutorial/teclas 606x94.png", {
        frameWidth: 606,
        frameHeight: 94,
      });

      //oso
    }

    init() {
    }
  
    create() {
      this.add.image(400, 300, "tutoFondo").setScale(1.1);

      this.anims.create({
        key: "turn",
        frames: this.anims.generateFrameNumbers("tutoT0eclas", { start: 0, end: 8 }),
        frameRate: 20,
      });

      this.add.sprite(500, 536)

      //oso.setOrigin(0.5, 1);
      //oso.setScale(8);
      oso.play('turn')
      //this.tutoteclas.anims.play("turn");
  }

  update() {  
    
  }
}
