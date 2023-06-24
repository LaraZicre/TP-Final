export default class Preload extends Phaser.Scene {
    constructor() {
      super("Preload");
    }
  
    init() {

    }
  
    preload() {
      // load assets
      this.load.tilemapTiledJSON("level1", "public/assets/tilemaps/map1.json");
      this.load.tilemapTiledJSON("level2", "public/assets/tilemaps/map2.json");
      this.load.image("tiles", "public/assets/images/Tileset.png");
      this.load.image("tablero", "public/assets/images/Tablerotile.png");
      //dados
      this.load.image("d1", "public/assets/images/Objets/dado1.png");
      this.load.image("d2", "public/assets/images/Objets/dado2.png");
      this.load.image("d3", "public/assets/images/Objets/dado3.png");
      this.load.image("d4", "public/assets/images/Objets/dado4.png");
      this.load.image("d5", "public/assets/images/Objets/dado5.png");
      this.load.image("d6", "public/assets/images/Objets/dado6.png");
      this.load.image("d7", "public/assets/images/Objets/dado7.png");
      this.load.image("d8", "public/assets/images/Objets/dado8.png");
      this.load.image("d9", "public/assets/images/Objets/dado9.png");
      this.load.image("d10", "public/assets/images/Objets/dado10.png");
      //spritesheet
      this.load.spritesheet("oso", "./public/assets/images/SpriteSheet/oso 40x60.png", {
        frameWidth: 40,
        frameHeight: 60,
      });

    }
  
    create() {
      //animaciones caminar izquierda y derecha y quedarse quieto
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

      //INTENTO DE HACER EL SALTO
      /*/
      this.anims.create({
        key: "jump left",
        frames: this.anims.generateFrameNumbers("oso", { start: 9, end: 13 }),
        frameRate: 10,
        repeat: -1,

      });

      this.anims.create({
        key: "jump right",
        frames: this.anims.generateFrameNumbers("oso", { start: 14, end: 18 }),
        frameRate: 10,
        repeat: -1,

      }); /*/

    }
  

    update() {
      this.scene.start("Menu");
    }
  }
  