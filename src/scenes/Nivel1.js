
export default class Nivel1 extends Phaser.Scene {
    constructor() {
      super("Nivel1");

    }

    init() {
      this.nivel = 1;
      this.cantidadDados = 0
    }

    create() {
      //Load Map
      const map = this.make.tilemap({ key: "level1" });
      console.log(map);

      //Is the name of the tilesSet in tiled json
      const tileset = map.addTilesetImage("TilesetFondo", "tiles");
      const tablero = map.addTilesetImage("Tablerotile", "tablero");

      //create layers variables using tiles
      const capafondo = map.createLayer("fondo", tileset, 0, 0);
      const capatiles = map.createLayer("tiles", tileset, 0, 0);
      const capaplataformas = map.createLayer("plataformas", tileset, 0, 0);
      const capatablerofondo = map.createLayer("tablerofondo", tablero, 0, 0);
      const capatablero = map.createLayer("tablero", tablero, 0, 0);
      const capaobjetos = map.getObjectLayer("objetos");
      
      //Load object for player from tiles
      let spawntPoint = map.findObject("objetos", (obj) => obj.name === "oso");
      console.log(spawntPoint);
      //add sprite to the player
      this.oso = this.physics.add.sprite(spawntPoint.x, spawntPoint.y, "oso");

      //Player physics properties. Give the little guy a slight bounce.
      this.oso.setBounce(0.1);
      this.oso.setCollideWorldBounds(true);
      
      //add colision for tile and platforms with the player
      capatiles.setCollisionByProperty({ colision: true });
      capaplataformas.setCollisionByProperty({ colision: true });
      capatablero.setCollisionByProperty({ colision: true });
      this.physics.add.collider(this.oso, capatiles);
      this.physics.add.collider(this.oso, capaplataformas);
      this.physics.add.collider(this.oso, capatablero);

      this.cursors = this.input.keyboard.createCursorKeys();

      //Recolectables
      // Create empty group of dices
      this.dados = this.physics.add.group();
      //add colisions for the dices
      this.physics.add.collider(this.dados, capaplataformas);
      this.physics.add.collider(this.dados, capatablero);
      this.physics.add.collider(this.dados, capatiles);
      this.physics.add.collider(this.dados, capatablero);
      this.physics.add.collider(
        this.oso,
        this.dados,
        this.recolectarDados,
        null,
        this
      );
      //create dices
      this.crearDados(capaobjetos, this.dados)
      
    }  

    crearDados(capaobjetos, dados) {
      console.log(capaobjetos);
      capaobjetos.objects.forEach((objData) => {
        console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
        switch (name) {
          case "dado1": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice1 = dados.create(x, y, "d1");
            break;
          }
          case "dado2": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice2 = dados.create(x, y, "d2");
            break;
          }
          case "dado3": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice3 = dados.create(x, y, "d3");
            break;
          }
          case "dado4": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice4 = dados.create(x, y, "d4");
            break;
          }
          case "dado5": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice5 = dados.create(x, y, "d5");
            break;
          }
          case "dado6": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice6 = dados.create(x, y, "d6");
            break;
          }
          case "dado7": {
            //add dice to scene
            console.log("dado agregado: ", x, y);
            const dice7 = dados.create(x, y, "d7");
            break;
          }
      }
      });

    }

    recolectarDados(oso, dado) {
      dado.disableBody(true, true);

      this.cantidadDados++

      if(this.cantidadDados === 10) {
        recolectarComida()
      }

      switch (dado.texture.key) {
        case "d1": {
          dado.enableBody(true, 134, 63, true, true);
          break;
        }

        case "d2": {
          dado.enableBody(true, 204, 63, true, true);
          break;
        }

        case "d3": {
          dado.enableBody(true, 273, 63, true, true);
          break;
        }

        case "d4": {
          dado.enableBody(true, 343, 63, true, true);
          break;
        }

        case "d5": {
          dado.enableBody(true, 416, 63, true, true);
          break;
        }

        case "d6": {
          dado.enableBody(true, 486, 63, true, true);
          break;
        }

        case "d7": {
          dado.enableBody(true, 555, 63, true, true);
          break;
        }

        case "d8": {
          dado.enableBody(true, 479, 63, true, true);
          break;
        }

        case "d9": {
          dado.enableBody(true, 479, 63, true, true);
          break;
        }

        case "d10": {
          dado.enableBody(true, 479, 63, true, true);
          break;
        }
      }

      
    }

    recolectarComida() {
      //aca iria la logica para que caiga la comida y pasar al siguiente nivel al recolectarla
    }

    update() {

      //ANIMS DEL OSO
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
        this.oso.setVelocityY(-200);
      }
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

  