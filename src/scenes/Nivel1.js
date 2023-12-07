export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("Nivel1");
  }

  init() {
    this.nivel = 1;
    this.dadosRecolectados = [];
  }

  create() {
    const escenaActual = "n1";
    //Load Map
    const map = this.make.tilemap({ key: "level1" });
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

    const capatablero = map.createLayer("tablero", tablero, 0, 0);
    capatablero.setDepth(2);

    const capapisocaja = map.createLayer("pisocaja", tablero, 0, 0);
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

    this.cursors = this.input.keyboard.createCursorKeys();

    //Recolectables

    // Create empty group of dices
    this.dados = this.physics.add.group();
    //add colisions for the dices
    this.physics.add.collider(this.dados, capaplataformas);
    this.physics.add.collider(this.dados, capatablero);
    this.physics.add.collider(this.dados, capatiles);
    this.physics.add.collider(
      this.oso,
      this.dados,
      function (obj1, obj2) {
        this.recolectarDados(obj1, obj2, capapisocaja);
      },
      null,
      this
    );
    //create dices
    this.crearDados(capaobjetos, this.dados);

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

    //boton pausa
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

      this.scene.pause("n1");
      // Lanza la escena de pausa y pasa la clave de la escena actual
      this.scene.launch("Pausa", { escenaActual: escenaActual });
    });
  }

  crearDados(capaobjetos, dados) {
    console.log(capaobjetos);
    console.log(dados);
    capaobjetos.objects.forEach((objData) => {
      console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "dado1": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d1");
          break;
        }
        case "dado2": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d2");
          break;
        }
        case "dado3": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d3");
          break;
        }
        case "dado4": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d4");
          break;
        }
        case "dado5": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d5");
          break;
        }
        case "dado6": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d6");
          break;
        }
        case "dado7": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d7");
          break;
        }
        case "dado8": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d8");
          break;
        }
        case "dado9": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d9");
          break;
        }
        case "dado10": {
          //add dice to scene
          console.log("dado agregado: ", x, y);
          dados.create(x, y, "d10");
          break;
        }
      }
    });
  }

  recolectarDados(oso, dado, capapisocaja) {
    const ordenDados = [
      "d1",
      "d2",
      "d3",
      "d4",
      "d5",
      "d6",
      "d7",
      "d8",
      "d9",
      "d10",
    ];

    this.dadosRecolectados.push(dado.texture.key);
    dado.disableBody(true, true);

    // No verifiques después de cada recolección, espera hasta recolectar todos los dados
    if (this.dadosRecolectados.length === 10) {
      var sonIguales =
        JSON.stringify(ordenDados) === JSON.stringify(this.dadosRecolectados);

      if (sonIguales) {
        // Emitir el evento 'abrirCandado' cuando se cumple la condición
        this.events.emit("abrirCandado");

        // Si son iguales, realiza las acciones correspondientes
        capapisocaja.setCollisionByProperty({ colision: true }, false);
      } else {
        // Si no son iguales, realiza las acciones correspondientes
        this.reintentarNivel();
      }
    }

    switch (dado.texture.key) {
      case "d1": {
        dado.enableBody(true, 129, 38, true, true);
        break;
      }

      case "d2": {
        dado.enableBody(true, 196, 38, true, true);
        break;
      }

      case "d3": {
        dado.enableBody(true, 263, 38, true, true);
        break;
      }

      case "d4": {
        dado.enableBody(true, 332, 38, true, true);
        break;
      }

      case "d5": {
        dado.enableBody(true, 400, 38, true, true);
        break;
      }

      case "d6": {
        dado.enableBody(true, 468, 38, true, true);
        break;
      }

      case "d7": {
        dado.enableBody(true, 536, 38, true, true);
        break;
      }

      case "d8": {
        dado.enableBody(true, 604, 38, true, true);
        break;
      }

      case "d9": {
        dado.enableBody(true, 671, 38, true, true);
        break;
      }

      case "d10": {
        dado.enableBody(true, 740, 38, true, true);
        break;
      }
    }
  }

  reintentarNivel(sonIguales, oso) {
    //reproducir sonido
    //congelar escena 1 segundo mas o menos
    this.scene.launch("NivelPerdido");
  }

  recolectarPremio(sonIguales, oso) {
    //reproducir sonido
    this.medialuna.destroy();
    this.scene.launch("NivelGanado");
  }

  update() {
    //ANIMS DEL OSO
    //move left
    if (this.cursors.left.isDown) {
      this.oso.setVelocityX(-200);
      this.oso.anims.play("left", true);
    }
    //move right
    else if (this.cursors.right.isDown) {
      this.oso.setVelocityX(200);
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
      this.oso.setVelocityY(-250);
    }
  }
}
