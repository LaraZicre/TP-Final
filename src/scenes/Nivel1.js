
export default class Nivel1 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Nivel1");

    }

    init() {
      this.nivel = 1;
      this.dado = 0;
    }
  
    create() {
      const Map1 = this.make.tilemap({ key: "Map1" });

      const capaFondo = Map1.addTilesetImage("sky1", "sky1");
      const capaPlataformas = Map1.addTilesetImage("platform", "platform");
      const fondoLayer = Map1.createLayer("fondo", capaFondo, 0, 0);
      const plataformaLayer = Map1.createLayer("plataforma", capaPlataformas, 0, 0 );
      const objectosLayer = Map1.getObjectLayer("objetos");
      plataformaLayer.setCollisionByProperty({ colision: true });

      const spawnPoint = Map1.findObjet("objetos",(obj) => obj.name == "oso");
      this.oso = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "oso");

      //  Player physics properties. Give the little guy a slight bounce.
      //this.oso.setBounce(0.1);
      //this.oso.setCollideWorldBounds(true);

      /*spawnPoint = map.findObject("objetos", (obj) => obj.name === "salida");
      console.log("spawn point salida ", spawnPoint);
      this.salida = this.physics.add
        .sprite(spawnPoint.x, spawnPoint.y, "salida")
        .setScale(0.2);*/

      //  Input Events
      //this.cursors = this.input.keyboard.createCursorKeys();

      // Create empty group of starts
      //this.dado = this.physics.add.group();

      // find object layer
      // if type is "stars", add to stars group
      //objectosLayer.objects.forEach((objData) => {
      //console.log(objData.name, objData.type, objData.x, objData.y);

      //const { x = 0, y = 0, name } = objData;
      //switch (name) {
      //  case "dado": {
      //    const dado = this.dado.create(x, y, "daod");
      //    break;
      //  }
      //}
    }
  

    update() {
  
    }
  }

  