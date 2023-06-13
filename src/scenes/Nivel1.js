
import {dados} from "../../utils.js";

export default class Nivel1 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Nivel1");

    }


    init() {
      this.nivel = 1;
      this.dado = 0;
      console.log("Prueba !");
    }
  
    create() {
      // todo / para hacer: texto de puntaje

      const Map1 = this.make.tilemap({ key: "Map1" });
  
      // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
      // Phaser's cache (i.e. the name you used in preload)
      const capaFondo = Map1.addTilesetImage("sky1_atlas", "sky1");
      const capaPlataformas = Map1.addTilesetImage("platform_atlas", "platform");
      // Parameters: layer name (or index) from Tiled, tileset, x, y
      const fondoLayer = Map1.createLayer("fondo", capaFondo, 0, 0);
      const plataformaLayer = Map1.createLayer("plataforma", capaPlataformas, 0, 0 );
      const objectosLayer = Map1.getObjectLayer("objetos");

     // const objectosLayer = Map1.getObjectLayer("objetos");
      plataformaLayer.setCollisionByProperty({ colision: true });

      const spawnPoint = Map1.findObjet(
        "objetos",
        (obj) => obj.name === oso
      );
      console.log(spawnPoint);

      this.oso = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");


     
  }

  update() {
  
  }
  }

  