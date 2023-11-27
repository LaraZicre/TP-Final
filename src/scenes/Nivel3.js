export default class Nivel1 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Nivel3");
  }

  init() {
    this.nivel = 3;
  }

  create() {
    //Load Map
    const map = this.make.tilemap({ key: "level3" });
    console.log(map);

    //Is the name of the tilesSet in tiled json
    const tileset = map.addTilesetImage("Tileset", "tiles");
    const tablero = map.addTilesetImage("Tablerotile", "tablero");

    //fondo y tiles con posicion
    const capafondo = map.createLayer("fondo", tileset, 0, 0).setOrigin(0);

    const capatiles = map.createLayer("tiles", tileset, 0, 0).setOrigin(0);

    const capaplataformas = map
      .createLayer("plataformas", tileset, 0, 0)
      .setOrigin(0);

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

    //ARREGLAR

    //grupo vacío de las estrellas
    this.estrella = this.physics.add.group();
    //tipo estrella
    capaobjetos.objects.forEach((objData) => {
      console.log("pasa por aca", objData.name)
      console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "estrella": {
          const estrella = this.estrella.create(x, y, "estrella");
          break;
        }
      }
    });

    //ARREGLAR

    // añadir colisiones
    this.physics.add.collider(this.estrella, capaplataformas);
    this.physics.add.collider(this.estrella, capatablero);
    this.physics.add.collider(this.estrella, capatiles);

    //camara
    this.cameras.main.startFollow(this.oso);
    //limites
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    //para que la camara no se vaya fuera del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    const pausaButton = this.add.sprite(45, 55, "pausa1").setInteractive();
    // Agrega eventos de clic a los botones.
    pausaButton.on("pointerover", () => {
      pausaButton.setTexture("pausa2");
    });

    pausaButton.on("pointerout", () => {
      pausaButton.setTexture("pausa1");
    });

    pausaButton.on("pointerdown", () => {
      pausaButton.setTexture("pausa2");
    });

    pausaButton
      .on("pointerup", () => {
        pausaButton.setTexture("pausa1");
        this.scene.launch("Pausa");
      })
      .setScrollFactor(0);
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
  }
}
