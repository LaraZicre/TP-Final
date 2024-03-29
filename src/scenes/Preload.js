export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  init() {}

  preload() {
    // MAPAS, TILESET Y UI
    this.load.tilemapTiledJSON("level1", "public/assets/tilemaps/map1.json");
    this.load.tilemapTiledJSON("level2", "public/assets/tilemaps/map2.json");
    this.load.tilemapTiledJSON("level3", "public/assets/tilemaps/map3.json");
    this.load.image("tiles", "public/assets/images/Tileset.png");
    this.load.image("tablero", "public/assets/images/Interfaz/Tablerotile.png");
    this.load.image(
      "candado1",
      "public/assets/images/Interfaz/candadocerrado.png"
    );
    this.load.image(
      "candado2",
      "public/assets/images/Interfaz/candadoabierto.png"
    );
    this.load.image("reloj", "public/assets/images/Interfaz/Reloj.png");

    //cinematicas
    this.load.image(
      "cinematica1",
      "public/assets/images/Intro/cinematica1.png"
    );
    this.load.image(
      "cinematica2",
      "public/assets/images/Intro/cinematica2.png"
    );
    this.load.image(
      "cinematica3",
      "public/assets/images/Intro/cinematica3.png"
    );

    //fondo menu
    this.load.image("menuFondo", "public/assets/images/Menu/fondomenu.png");
    //botonplay
    this.load.image("play1", "public/assets/images/Menu/botonplay1.png");
    this.load.image("play2", "public/assets/images/Menu/botonplay2.png");
    this.load.image("play3", "public/assets/images/Menu/botonplay3.png");
    //botontutorial
    this.load.image("tuto1", "public/assets/images/Menu/botontutorial1.png");
    this.load.image("tuto2", "public/assets/images/Menu/botontutorial2.png");
    this.load.image("tuto3", "public/assets/images/Menu/botontutorial3.png");

    //fondo tuto
    this.load.image("tutoFondo", "public/assets/images/Tutorial/fondotuto.png");

    //imagen creditos
    this.load.image("creditos", "public/assets/images/Credits/creditos.png");

    //pop ups
    this.load.image("popUp", "public/assets/images/PopUps/popup.png");
    this.load.image(
      "popUpGanarJuego",
      "public/assets/images/PopUps/popupganarjuego.png"
    );

    //teclas tuto
    this.load.spritesheet(
      "tutoTeclas",
      "public/assets/images/Tutorial/teclas-736x160.png",
      { frameWidth: 736, frameHeight: 160 }
    );

    //boton atras
    this.load.image("atras1", "public/assets/images/Buttons/botonatras1.png");
    this.load.image("atras2", "public/assets/images/Buttons/botonatras2.png");

    //boton reintentar
    this.load.image(
      "seguir1",
      "public/assets/images/Buttons/botoncontinuar1.png"
    );
    this.load.image(
      "seguir2",
      "public/assets/images/Buttons/botoncontinuar2.png"
    );

    //boton reintentar
    this.load.image(
      "reintentar1",
      "public/assets/images/Buttons/botonreiniciar1.png"
    );
    this.load.image(
      "reintentar2",
      "public/assets/images/Buttons/botonreiniciar2.png"
    );

    //boton pausa
    this.load.image("pausa1", "public/assets/images/Buttons/botonpausa1.png");
    this.load.image("pausa2", "public/assets/images/Buttons/botonpausa2.png");

    //boton menu
    this.load.image("menu1", "public/assets/images/Buttons/botonmenu1.png");
    this.load.image("menu2", "public/assets/images/Buttons/botonmenu2.png");

    //ASSETS (objetos y personaje)
    //dados
    this.load.image("d1", "public/assets/images/Objets/dado1.png");
    this.load.image("d2", "public/assets/images/Objets/dado2.png");
    this.load.image("d3", "public/assets/images/Objets/dado3.png");
    this.load.image("d4", "public/assets/images/Objets/dado4.png");
    this.load.image("d5", "public/assets/images/Objets/dado5.png");
    this.load.image("d6", "public/assets/images/Objets/dado6.png");
    this.load.image("d7", "public/assets/images/Objets/dado7.png");
    this.load.image("d8", "public/assets/images/Objets/dado8.png");
    this.load.image("d9", "public/assets/images/Objets/dado9.png");
    this.load.image("d10", "public/assets/images/Objets/dado10.png");

    //cartas
    this.load.image("tierra", "public/assets/images/Objets 1/carta-tierra.png");
    this.load.image("agua", "public/assets/images/Objets 1/carta-agua.png");
    this.load.image("fuego", "public/assets/images/Objets 1/carta-fuego.png");
    this.load.image("aire", "public/assets/images/Objets 1/carta-aire.png");
    this.load.image(
      "cartareverso",
      "public/assets/images/Objets 1/carta-volteada.png"
    );

    //estrellas
    this.load.image("estrella", "public/assets/images/Objets 2/Estrella.png");

    //premio nivel 1
    this.load.image("desayuno", "public/assets/images/Food/medialuna.png");

    //premio nivel 2
    this.load.image("comida", "public/assets/images/Food/milanesa.png");

    //premios nivel 3
    this.load.image("postre1", "public/assets/images/Food/postre1.png");
    this.load.image("postre2", "public/assets/images/Food/postre2.png");
    this.load.image("postre3", "public/assets/images/Food/postre3.png");

    //AUDIO
    //musica
    this.load.audio(
      "musicaMenu",
      "public/assets/music/Lesiakower-cutesong-Menu.mp3"
    );
    this.load.audio(
      "musicaCinematica",
      "public/assets/music/K00sin-highway-Cinematica.mp3"
    );
    this.load.audio(
      "musicaNivel1",
      "public/assets/music/moodmode-8-bit-dream-land-Nivel1.mp3"
    );
    this.load.audio(
      "musicaNivel2",
      "public/assets/music/august_rain-future-8bit-Nivel2.mp3"
    );
    this.load.audio(
      "musicaNivel3",
      "public/assets/music/Lightyeartraxx-kim-lightyear-legends-Nivel3.mp3"
    );
    this.load.audio(
      "musicaCreditos",
      "public/assets/music/Lesiakower-waiting-time-Creditos.mp3"
    );

    //SFX
    this.load.audio("boton", "public/assets/music/SFX/sfx-button-beep.mp3");
    this.load.audio("salto", "public/assets/music/SFX/sfx-jump.mp3");
    this.load.audio(
      "sonidoTablero",
      "public/assets/music/SFX/sfx-Lesiakower-impact-sound-domino.mp3"
    );
    this.load.audio("agarrar", "public/assets/music/SFX/sfx-pickup.mp3");
    this.load.audio(
      "abrirCandado",
      "public/assets/music/SFX/sfx-Lesiakower-open-lock.mp3"
    );
    this.load.audio("ganarNivel", "public/assets/music/SFX/sfx-win-level.mp3");
    this.load.audio("perderNivel", "public/assets/music/SFX/sfx-game-over.mp3");
    this.load.audio("ganarJuego", "public/assets/music/SFX/sfx-win-game.mp3");

    //tipografia
    loadFont("Pixellari", "public/assets/fonts/Pixellari.ttf");

    //spritesheet oso
    this.load.spritesheet(
      "oso",
      "public/assets/images/Spritesheet/oso-40x60.png",
      {
        frameWidth: 40,
        frameHeight: 60,
      }
    );
    this.load.spritesheet(
      "osoJump",
      "public/assets/images/Tutorial/osojump-40x120.png",
      { frameWidth: 40, frameHeight: 120 }
    );
  }


  create() {
    //animaciones caminar izquierda y derecha y quedarse quieto
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "oso", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("oso", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    this.scene.start("Intro");
  }
}

function loadFont(name, url) {
  var newFont = new FontFace(name, `url(${url})`);
  newFont.load().then(function (loaded) {
      document.fonts.add(loaded);
  }).catch(function (error) {
      return error;
  });
}
