export default class Preload extends Phaser.Scene {
    constructor() {
      super("Preload");
    }
  
    init() {

    }
  
    preload() {
      // load assets
      this.load.tilemapTiledJSON("level1", "public/assets/tilemaps/map1.json");
      this.load.image("tiles", "public/assets/images/Tileset.png");
      this.load.spritesheet("oso", "./public/assets/images/SpriteSheet/oso 40x60.png", {
        frameWidth: 40,
        frameHeight: 60,
      });

    }
  
    create() {
      // Create game objects
      // Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "turn",
        frames: [{ key: "oso", frame: 4 }],
        frameRate: 20,
      });
  
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("oso", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
      });  
    }
  

    update() {
      this.scene.start("Menu");
      // update game objects
    }
  }
  