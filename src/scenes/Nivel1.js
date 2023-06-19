
export default class Nivel1 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Nivel1");

    }

    init() {
      this.nivel = 1;

    }
  
    create() {
      const map = this.make.tilemap({ key: "level1" });

      const tileset = map.addTilesetImage("TilesetFondo", "tiles");


      const capafondo = map.createLayer("fondo", tileset, 0, 0);
      const capatiles = map.createLayer("tiles", tileset, 0, 0);
      const capaplataformas = map.createLayer("plataformas", tileset, 0, 0);


      capatiles.setCollisionByProperty({ colision: true });
      capaplataformas.setCollisionByProperty({ colision: true });
    
    }
  

    update() {
  
    }
  }

  