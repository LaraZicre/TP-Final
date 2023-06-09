export default class Nivel1 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Nivel2");

    }

    init() {
      this.nivel = 2;
      this. pinturarecolectada = 0
    }

    
  
    create() {
      //Load Map
      const map = this.make.tilemap({ key: "level2" });
      console.log(map);

      //Is the name of the tilesSet in tiled json
      const tileset = map.addTilesetImage("TilesetFondo", "tiles");

      //create layers variables using tiles
      const capafondo = map.createLayer("fondo", tileset, 0, 0);
      const capatiles = map.createLayer("tiles", tileset, 0, 0);
      const capaplataformas = map.createLayer("plataformas", tileset, 0, 0);
      const capaobjetos = map.getObjectLayer("objetos");

      //Load object for player from tiles
      let spawntPoint = map.findObject("objetos", (obj) => obj.name === "oso");
      console.log(spawntPoint);
      //add sprite to the player
      this.oso = this.physics.add.sprite(spawntPoint.x, spawntPoint.y, "oso");

      

      //  Player physics properties. Give the little guy a slight bounce.
      this.oso.setBounce(0.1);
      this.oso.setCollideWorldBounds(true);
      
      //add colision for tile and platforms with the player
      capatiles.setCollisionByProperty({ colision: true });
      capaplataformas.setCollisionByProperty({ colision: true });
      this.physics.add.collider(this.oso, capatiles);
      this.physics.add.collider(this.oso, capaplataformas);

      this.cursors = this.input.keyboard.createCursorKeys();

    // Create empty group of dados
      this.dados = this.physics.add.group();

    // find object layer
    // if type is "stars", add to stars group
      capaobjetos.objects.forEach((objData) => { 
      //console.log(objData.dados, objData.dice, objData.x, objData.y);

      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "dado": {
          // add star to scene
          // console.log("estrella agregada: ", x, y);
          const dices = this.dados.create(x, y, "dice");
          break;
        }
      }
    });

    }

    update() {

      //move left
      if (this.cursors.left.isDown) {
        this.oso.setVelocityX(-160);
        this.oso.anims.play("left", true);
      }
      //move right
      else if (this.cursors.right.isDown) {
        this.oso.setVelocityX(160);
        this.oso.anims.play("right", true);
      }
      //stop
      else {
        this.oso.setVelocityX(0);
        this.oso.anims.play("turn");
      }
  
      //jump
      if (this.cursors.up.isDown && this.oso.body.blocked.down) {
        this.oso.anims.play("turn");
        this.oso.setVelocityY(-330);
      }

      //INTENTO DE HACER EL SALTO

     /* else if (this.cursors.up.isDown && this.cursors.left.isDown) {
          this.oso.anims.play("jump left");
          this.oso.setVelocityY(-330);
      }
  
      else if (this.cursors.up.isDown && this.cursors.left.isDown) {
          this.oso.anims.play("jump right");
          this.oso.setVelocityY(-330);  
          
      }
      //*/


    }
  }

  