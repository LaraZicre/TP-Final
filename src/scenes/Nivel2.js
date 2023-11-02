export default class Nivel1 extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Nivel2");

    }
  
    init() {
      this.nivel = 2;
    
    }
  
    create() {
      //Load Map
      const map = this.make.tilemap({ key: "level2" });
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

      //añadir boton play
      this.pausaButton()

      }

      pressPausa() {
        this.scene.launch('Pausa')
      }
    
      pausaButton() {
        //boton quieto
          const pausapointer= this.add.sprite(45, 55, "pausa1").setInteractive();
          pausapointer.on('pointerover', function (event) {
            this.setTexture("pausa2");
          });
          //mouse sobre boton
          pausapointer.on('pointerout', function (event) {
            this.setTexture("pausa2");
          });
          //presionar boton
          pausapointer.on('pointerdown', function (event) {
            pausapointer.setTexture("pausa1");
            
          });
          //soltar boton
          pausapointer.on('pointerup', function (event) {
            pausapointer.setTexture("pausa1");
            this.pressPausa();
          }, this);
      }

      update(){

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
      }
    }