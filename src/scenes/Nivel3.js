export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("Nivel3");
  }

  init() {
    this.nivel = 3;
    this.contadorEstrellas = 0;
    this.temporizador = 90;
    this.temporizadorActivo = true;
    this.objetivoEstrellas = 20;
    this.nivelSuperado = false;
    this.reintentarNivel = false;
    this.escenaActual = "nivel3";
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
    this.oso.setBounce(0.2);
    this.oso.setCollideWorldBounds(true);
    // Configurar el tamaño del cuadro de colisión del jugador
    this.oso.body.setSize(20, 60);

    //add colision for tile and platforms with the player
    capatiles.setCollisionByProperty({ colision: true });
    capaplataformas.setCollisionByProperty({ colision: true });
    capatablero.setCollisionByProperty({ colision: true });
    this.physics.add.collider(this.oso, capatiles);
    this.physics.add.collider(this.oso, capaplataformas);
    this.physics.add.collider(this.oso, capatablero);

    this.cursors = this.input.keyboard.createCursorKeys();

    //grupo vacío de las estrellas
    this.estrella = this.physics.add.group();

    //tipo estrella
    capaobjetos.objects.forEach((objData) => {
      console.log(objData.name, objData.type, objData.x, objData.y);
      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "estrella": {
          const estrella = this.estrella.create(x, y, "estrella");
          break;
        }
      }
    });

    // añadir colisiones
    this.physics.add.collider(this.estrella, capaplataformas);
    this.physics.add.collider(this.estrella, capatablero);
    this.physics.add.collider(this.estrella, capatiles);
    this.physics.add.collider(
      this.oso,
      this.estrella,
      this.recolectarEstrellas,
      null,
      this
    );

    // Configuración del grupo de postres
    this.grupoDePostres = this.physics.add.group();
    // Configura la colisión con el suelo o cualquier otra lógica necesaria
    this.physics.add.collider(this.grupoDePostres, capatiles);

    //camara
    this.cameras.main.startFollow(this.oso);
    //limites
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    //para que la camara no se vaya fuera del mapa
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //sprite estrella
    this.estrellaImagen = this.add
      .sprite(800, 40, "estrella")
      .setScrollFactor(0);
    this.contadorTexto = this.add.text(860, 40, "0", {
      fontFamily: "Pixellari",
      fontSize: "32px",
      fill: "#fff",
    });
    this.contadorTexto.setScrollFactor(0);

    //sprite temporizador
    this.temporizadorImagen = this.add
      .sprite(900, 40, "reloj")
      .setScrollFactor(0);
    //texto que muestra el temporizador
    this.temporizadorTexto = this.add
      .text(940, 40, this.temporizador, {
        fontFamily: "Pixellari",
        fontSize: "32px",
        fill: "#fff",
      })
      .setScrollFactor(0);

    this.pausaButton = this.add.sprite(45, 55, "pausa1").setInteractive();
    // Agrega eventos de clic a los botones.
    this.pausaButton.on("pointerover", () => {
      this.pausaButton.setTexture("pausa2");
    });

    this.pausaButton.on("pointerout", () => {
      this.pausaButton.setTexture("pausa1");
    });

    this.pausaButton.on("pointerdown", () => {
      this.pausaButton.setTexture("pausa2");
    });

    this.pausaButton
      .on("pointerup", () => {
        this.pausaButton.setTexture("pausa1");
        this.boton.play();
        this.musica.pause();
        this.scene.pause("Nivel3");
        this.scene.launch("Pausa", {
          escenaActual: this.escenaActual,
          musica: this.musica,
        });
      })
      .setScrollFactor(0);

    
    this.musica = this.sound.add("musicaNivel3");
    this.musica.play();

    this.boton = this.sound.add("boton");
    this.salto = this.sound.add("salto");
    this.agarrar = this.sound.add("agarrar");

    this.ganar = this.sound.add("ganarJuego");
    this.events.once('winSoundEvent', function () {
      // Play the sound once
      this.ganar.play();
  }, this);

    //temporizador
    this.time.addEvent({
      delay: 1000,
      callback: this.temporizadorDecreciendo,
      callbackScope: this,
      loop: true,
    });
  }

  recolectarEstrellas(oso, estrella) {
    // Incrementa el contador
    this.contadorEstrellas++;

    // Actualiza el texto del marcador
    this.contadorTexto.setText(this.contadorEstrellas);

    // Elimina el postre recolectable
    estrella.disableBody(true, true);
    this.agarrar.play();
  }

  temporizadorDecreciendo() {
    // Si el temporizador está activo y no se ha ganado el juego
    if (
      this.temporizadorActivo &&
      this.temporizador > 0 &&
      this.contadorEstrellas < this.objetivoEstrellas
    ) {
      this.temporizador = this.temporizador - 1;
      this.temporizadorTexto.setText(+this.temporizador);
    }
    // Si se alcanza el objetivo de recolección, el jugador gana
    if (this.contadorEstrellas >= this.objetivoEstrellas) {
      // Setear condicion para ganar
      this.nivelSuperado = true;
      // Detén el temporizador
      this.temporizadorActivo = false;
      //detener al oso
      this.detenerOso();
      //lluvia de comida
      this.lluviaDeComida(50, 0);
      //detener musica y sonido de victoria
      this.musica.stop();
      this.events.emit('winSoundEvent');
      // Esperar unos segundos y lanzar la escena de juego superado
      this.time.delayedCall(
        10000,
        function () {
          this.scene.launch("JuegoSuperado");
        },
        [],
        this
      );
    }
    // Si el temporizador llega a cero, el jugador pierde
    if (this.temporizador <= 0) {
      this.reintentarNivel = true;
    }
  }

  detenerOso() {
    this.oso.setVelocity(0);
    this.oso.anims.play("turn");
  }

  lluviaDeComida(cantidad, velocidad) {
    // Ejemplo de conjunto de objetos
    const conjuntoDePostres = ["postre1", "postre2", "postre3"];

    for (var i = 0; i < cantidad; i++) {
      // Esperar el intervalo de tiempo antes de crear el siguiente objeto
      this.time.delayedCall(
        i * 50,
        function () {
          // Elige un objeto aleatorio del conjunto
          const postreAleatorio = Phaser.Math.RND.pick(conjuntoDePostres);
          // Crea una instancia del objeto y configura su posición inicial
          const posicionAleatoria = Phaser.Math.RND.between(5000, 5900);

          // Añade el postre al grupo de postres
          const postre = this.grupoDePostres
            .create(posicionAleatoria, 0, postreAleatorio)
            .setBounce(0.8);

          // Configura la velocidad de caída
          postre.setVelocity(0, velocidad);
        },
        [],
        this
      );
    }
  }

  ocultarInterfaz(pausaButton) {
    // Ocultar el temporizador y el contador de objetos
    this.temporizadorTexto.setVisible(false);
    this.contadorTexto.setVisible(false);
    this.estrellaImagen.setVisible(false);
    this.temporizadorImagen.setVisible(false);
    // Ocultar boton pausa
    pausaButton.setVisible(false);
  }

  update() {
    // Verificar si el temporizador está activo
    if (this.temporizadorActivo) {
      //move left
      if (this.cursors.left.isDown) {
        this.oso.setVelocityX(-360);
        this.oso.anims.play("left", true);
      }
      //move right
      else if (this.cursors.right.isDown) {
        this.oso.setVelocityX(360);
        this.oso.anims.play("right", true);
      }
      //stop
      else {
        this.oso.setVelocityX(0);
        this.oso.anims.play("turn");
      }
      //jump
      if (this.cursors.up.isDown && this.oso.body.blocked.down) {
        this.sound.play("salto");
        this.oso.anims.play("turn");
        this.oso.setVelocityY(-330);
      }
    }

    console.log(this.nivelSuperado);
    if (this.nivelSuperado) {
      this.ocultarInterfaz(this.pausaButton);
    }

    if (this.reintentarNivel) {
      this.musica.stop();
      this.scene.pause("nivel3");
      this.scene.launch("NivelPerdido", {
        escenaActual: this.escenaActual,
      });
    }
  }
}
