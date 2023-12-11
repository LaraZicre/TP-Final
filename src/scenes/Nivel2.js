export default class Nivel2 extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Nivel2");
  }

  init() {
    this.cartasComparada = "";
    this.cartasRecolectadas = 0;
    this.nivelSuperado = false;
    this.reintentarNivel = false;
    this.escenaActual = "nivel2";
    this.moverOso = true;
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
    capafondo.setDepth(0);

    const capatiles = map.createLayer("tiles", tileset, 0, 0);
    const capaplataformas = map.createLayer("plataformas", tileset, 0, 0);
    const capatablerofondo = map.createLayer("tablerofondo", tablero, 0, 0);
    const capapisocaja = map.createLayer("pisocaja", tablero, 0, 0);

    const capatablero = map.createLayer("tablero", tablero, 0, 0);
    capatablero.setDepth(2);

    const capaobjetos = map.getObjectLayer("objetos");

    const candado = this.add.sprite(838, 50, "candado1").setDepth(3);
    // Configurar un evento personalizado llamado 'abrirCandado'
    this.events.on("abrirCandado", function () {
      candado.setTexture("candado2");
    });

    //Load object for player from tiles
    let spawntPoint = map.findObject("objetos", (obj) => obj.name === "oso");
    console.log(spawntPoint);

    //add sprite to the player
    this.oso = this.physics.add.sprite(spawntPoint.x, spawntPoint.y, "oso");

    //Player physics properties. Give the little guy a slight bounce.
    this.oso.setBounce(0.1);
    this.oso.setCollideWorldBounds(true);
    // Configurar el tamaño del cuadro de colisión del jugador
    this.oso.body.setSize(20, 60);

    spawntPoint = map.findObject("objetos", (obj) => obj.name === "medialuna");
    console.log(spawntPoint);
    this.medialuna = this.physics.add.sprite(
      spawntPoint.x,
      spawntPoint.y,
      "desayuno"
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    //add colision for tile and platforms with the player
    capatiles.setCollisionByProperty({ colision: true });
    capaplataformas.setCollisionByProperty({ colision: true });
    capatablero.setCollisionByProperty({ colision: true });
    capapisocaja.setCollisionByProperty({ colision: true });
    this.physics.add.collider(this.oso, capatiles);
    this.physics.add.collider(this.oso, capaplataformas);
    this.physics.add.collider(this.oso, capatablero);
    this.physics.add.collider(this.oso, capapisocaja);
    console.log(capapisocaja);

    //grupo vacío de las cartas
    this.cartas = this.physics.add.group();
    // añadir colisiones de cartas
    this.physics.add.collider(this.cartas, capaplataformas);
    this.physics.add.collider(this.cartas, capatablero);
    this.physics.add.collider(this.cartas, capatiles);
    this.physics.add.collider(
      this.oso,
      this.cartas,
      function (obj1, obj2) {
        this.recolectarCartas(obj1, obj2, capapisocaja);
      },
      null,
      this
    );

    //medialuna fisicas
    this.medialuna.setDepth(1);
    this.medialuna.setBounce(0.8);
    // colision
    this.physics.add.collider(this.medialuna, capatablero);
    this.physics.add.collider(this.medialuna, capatiles);
    this.physics.add.collider(this.medialuna, capapisocaja);
    this.physics.add.collider(
      this.oso,
      this.medialuna,
      this.recolectarPremio,
      null,
      this
    );

    capaobjetos.objects.forEach((objData) => {
      console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "tierra": {
          //añadir en pantalla
          this.cartas.create(x, y, name);
          break;
        }
        case "agua": {
          //añadir en pantalla
          this.cartas.create(x, y, name);
          break;
        }
        case "fuego": {
          //añadir en pantalla
          this.cartas.create(x, y, name);
          break;
        }
        case "aire": {
          //añadir en pantalla
          this.cartas.create(x, y, name);
          break;
        }
      }
    });
    this.cartas.children.iterate(function (child, index) {
      switch (child.texture.key) {
        case "tierra": {
          //añadir nombre
          child.setName(child.texture.key);
          break;
        }
        case "agua": {
          //añadir nombre
          child.setName(child.texture.key);
          break;
        }
        case "fuego": {
          //añadir nombre
          child.setName(child.texture.key);
          break;
        }
        case "aire": {
          //añadir nombre
          child.setName(child.texture.key);
          break;
        }
      }
    });

    // Pausa antes de voltear cartas
    this.time.addEvent({
      delay: 5000, // tiempo en milisegundos (en este caso, 2000 ms = 2 segundos)
      callback: () => {
        //Cambiar la textura de todos los elementos en el grupo
        this.cartas.children.iterate((objeto) => {
          objeto.setTexture("cartareverso");
        });
        this.moverOso = false;
      },
      // esto significa que el evento se ejecutará solo una vez
      loop: false,
    });

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

    pausaButton.on("pointerup", () => {
      pausaButton.setTexture("pausa1");
      this.scene.pause("Nivel2");
      this.scene.launch("Pausa", { escenaActual: this.escenaActual });
    });
  }

  detenerOso() {
    this.oso.setVelocity(0);
    this.oso.anims.play("turn");
  }

  recolectarCartas(oso, carta, capapisocaja) {
    const tipoCarta = carta.name;
    carta.destroy();
    if (this.cartasComparada === "") {
      this.cartasComparada = tipoCarta;
      console.log("carta comparada despues del if: ", this.cartasComparada);
    } else {
      if (tipoCarta === this.cartasComparada) {
        switch (tipoCarta) {
          case "tierra": {
            this.add.sprite(129, 38, tipoCarta);
            break;
          }
          case "agua": {
            this.add.sprite(129, 38, tipoCarta);
            break;
          }
          case "fuego": {
            this.add.sprite(129, 38, tipoCarta);
            break;
          }
          case "aire": {
            this.add.sprite(129, 38, tipoCarta);
            break;
          }
        }
        this.cartasComparada = "";
        this.cartasRecolectadas++;
      } else {
        this.reintentarNivel = true;
      }
    }
    if (this.cartasRecolectadas === 4) {
      // Emitir el evento 'abrirCandado' cuando se cumple la condición
      this.events.emit("abrirCandado");
      // Si son iguales, realiza las acciones correspondientes
      capapisocaja.setCollisionByProperty({ colision: true }, false);
    }
  }

  recolectarPremio(cartasRecolectadas, oso) {
    //reproducir sonido
    this.medialuna.destroy();
    this.nivelSuperado = true;
  }

  update() {
    if (this.moverOso) {
      this.oso.setVelocity(0);
      this.oso.anims.play("turn");
    } else {
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

    if (this.nivelSuperado) {
      this.scene.pause("nivel2");
      this.scene.launch("NivelGanado", {
        escenaActual: this.escenaActual,
      });
    }

    if (this.reintentarNivel) {
      this.scene.pause("nivel2");
      this.scene.launch("NivelPerdido", {
        escenaActual: this.escenaActual,
      });
    }
  }
}
