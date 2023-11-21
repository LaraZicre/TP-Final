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


      //grupo vacío de las cartas tierra
      this.tierra = this.physics.add.group();
      //tipo tierra
      capaobjetos.objects.forEach((objData) => {
        console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
        switch (name) {
        case "tierra": {
          //añadir en pantalla
          const tierra = this.tierra.create(x, y, "tierra");
          break;
          }
        }
      });

      // Pausa antes de cambiar las texturas
      this.time.addEvent({
        delay: 2000, // tiempo en milisegundos (en este caso, 2000 ms = 2 segundos)
        callback: () => {
      //Cambiar la textura de todos los elementos en el grupo
      this.tierra.children.iterate(objeto => {
       objeto.setTexture('cartareverso');
       });
      },

        // esto significa que el evento se ejecutará solo una vez
        loop: false  
     });

      //grupo vacío de las cartas aire
      this.aire = this.physics.add.group();

      capaobjetos.objects.forEach((objData) => {
        console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
        switch (name) {
        case "aire": {
          const aire = this.aire.create(x, y, "aire");
          break;
          }
        }
      });

      this.time.addEvent({
        delay: 2000,
        callback: () => {    
      this.aire.children.iterate(objeto => {
        objeto.setTexture('cartareverso');
        });
      },

      loop: false  
    });

      //grupo vacío de las cartas agua
      this.agua = this.physics.add.group();

      capaobjetos.objects.forEach((objData) => {
        console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
        switch (name) {
        case "agua": {
          const agua = this.agua.create(x, y, "agua");
          break;
          }
        }
      });

      this.time.addEvent({
        delay: 2000,
        callback: () => {    
      this.agua.children.iterate(objeto => {
        objeto.setTexture('cartareverso');
        });
      },

      loop: false  
    });

      // grupo vacío de las cartas fuego
      this.fuego = this.physics.add.group();

      capaobjetos.objects.forEach((objData) => {
        console.log(objData.name, objData.type, objData.x, objData.y);
        const { x = 0, y = 0, name } = objData;
        switch (name) {
        case "fuego": {
          const fuego = this.fuego.create(x, y, "fuego");
          break;
          }
        }
      });

      this.time.addEvent({
        delay: 2000,
        callback: () => {  
      this.fuego.children.iterate(objeto => {
        objeto.setTexture('cartareverso');
      });
    },

    loop: false  
  });

      // añadir colisiones 
      this.physics.add.collider(this.tierra, capaplataformas);
      this.physics.add.collider(this.tierra, capatablero);
      this.physics.add.collider(this.tierra, capatiles);
      this.physics.add.collider(
        this.oso,
        this.tierra,
      //this.recolectarCartas,
        null,
        this,
        this.capapiso

      );

      this.physics.add.collider(this.aire, capaplataformas);
      this.physics.add.collider(this.aire, capatablero);
      this.physics.add.collider(this.aire, capatiles);
      this.physics.add.collider(
        this.oso,
        this.aire,
      //this.recolectarCartas,
        null,
        this,
        this.capapiso

      );

       this.physics.add.collider(this.agua, capaplataformas);
       this.physics.add.collider(this.agua, capatablero);
       this.physics.add.collider(this.agua, capatiles);
       this.physics.add.collider(
         this.oso,
         this.agua,
       //this.recolectarCartas,
         null,
         this,
         this.capapiso
 
       );
       
       this.physics.add.collider(this.fuego, capaplataformas);
       this.physics.add.collider(this.fuego, capatablero);
       this.physics.add.collider(this.fuego, capatiles);
       this.physics.add.collider(
         this.oso,
         this.fuego,
       //this.recolectarCartas,
         null,
         this,
         this.capapiso
 
       );  

      const pausaButton = this.add.sprite(45, 55, "pausa1").setInteractive();
      // Agrega eventos de clic a los botones.
      pausaButton.on("pointerover", () => 
              {pausaButton.setTexture("pausa2"); 
          });

          pausaButton.on("pointerout", () => 
              {pausaButton.setTexture("pausa1"); 
          });

          pausaButton.on("pointerdown", () => 
              {pausaButton.setTexture("pausa2"); 
          });
          
          pausaButton.on("pointerup", () => 
              {pausaButton.setTexture("pausa1"); 
                this.scene.launch("Pausa")
                
          });
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
  