export default class Preload extends Phaser.Scene {
    constructor() {

      super("Preload");
    }
  
    init() {

    }
  
    preload() {
      // load assets

      this.load.tilemapTiledJSON("Map1", "./public/assets/tilemaps/Map1.json");

      this.load.image("menuFondo", "./public/assets/images/fondomenu.png");
      this.load.image("platform", "./public/assets/images/platform_atlas.png");
      this.load.image("sky1", "./public/assets/images/sky1_atlas.png");
      
      this.load.image("dado1", "./public/assets/images/dado1.png");
      this.load.image("dado2", "./public/assets/images/dado2.png");
      this.load.image("dado3", "./public/assets/images/dado3.png");
      this.load.image("dado4", "./public/assets/images/dado4.png");
      this.load.image("dado5", "./public/assets/images/dado5.png");
  
      this.load.spritesheet("oso", "./public/assets/images/oso.png", {
        frameWidth: 40,
        frameHeight: 60,
      });
    }
  
    create() {
      // create game objects
      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: "walk_left",
        frames: this.anims.generateFrameNumbers("oso", { start: 1, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "idle",
        frames: [{ key: "oso", frame: 7 }],
        frameRate: 20,
      });
  
      this.anims.create({
        key: "walk_left",
        frames: this.anims.generateFrameNumbers("oso", { start: 4, end: 6 }),
        frameRate: 10,
        repeat: -1,
      });
  
  
    }
  

    update() {

      this.scene.start("Menu");
      // update game objects
    }
  }
  