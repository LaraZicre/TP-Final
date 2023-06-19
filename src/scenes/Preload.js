export default class Preload extends Phaser.Scene {
    constructor() {

      super("Preload");
    }
  
    init() {

    }
  
    preload() {
      // load assets
      this.load.tilemapTiledJSON("level1", "public\assets\tilemaps\Map1.json");
      this.load.image("tiles", "public\assets\images\Tileset.png");

    
      //


    }
  
    create() {
      // create game objects
      //  Our player animations, turning, walking left and walking right.
    }
  

    update() {

      this.scene.start("Menu");
      // update game objects
    }
  }
  