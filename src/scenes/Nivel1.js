
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
      //Load Map
      const map = this.make.tilemap({ key: "level1" });
      console.log(map);

      //Is the name of the tilesSet in tiled json
      const tileset = map.addTilesetImage("TilesetFondo", "tiles");

      //create layers variables using tiles
      const capafondo = map.createLayer("fondo", tileset, 0, 0);
      const capatiles = map.createLayer("tiles", tileset, 0, 0);
      const capaplataformas = map.createLayer("plataformas", tileset, 0, 0);

      //Load object for player from tiles
      let spawntPoint = map.findObject("objetos", (obj) => obj.name === "oso");
      console.log(spawntPoint);
      //add sprite to the player
      this.oso = this.physics.add.sprite(spawntPoint.x, spawntPoint.y, "oso");
      
      //add colision for tile and platforms with the player
      capatiles.setCollisionByProperty({ colision: true });
      capaplataformas.setCollisionByProperty({ colision: true });
      this.physics.add.collider(this.oso, capatiles);
      this.physics.add.collider(this.oso, capaplataformas);
    }

    update() {
  
    }
  }

  