
export default class Nivel1 extends Phaser.Scene {
    constructor() {
      super("Nivel1");

    }

    init() {
      this.nivel = 1;
      this.dadoRecolectado = 0
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

  