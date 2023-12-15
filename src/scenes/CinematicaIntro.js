export default class CinematicaIntro extends Phaser.Scene {
  constructor() {
    super("CinematicaIntro");
  }

  init() {}

  preload() {}

  create() {
    this.add.image(496, 300, "cinematica1").setScale(1.1);
    this.add.image(496, 300, "cinematica2").setScale(1.1);
    this.add.image(496, 300, "cinematica3").setScale(1.1);

    this.musica = this.sound.add("musicaCinematica");
    this.boton = this.sound.add("boton");
    this.musica.play();

    this.viñetaActual = 0;

    this.imagenes = ["cinematica1", "cinematica2", "cinematica3"];

    this.imagen = this.add
      .image(496, 300, this.imagenes[this.viñetaActual])
      .setOrigin(0.5, 0.5);

    const continuarButton = this.add
      .sprite(315, 340, "seguir1")
      .setInteractive();

    continuarButton.on("pointerup", () => {
      continuarButton.setTexture("seguir1");
      this.siguienteImagen();
      this.boton.play();
    });

    continuarButton.on("pointerover", () => {
      continuarButton.setTexture("seguir2");
    });
    continuarButton.on("pointerout", () => {
      continuarButton.setTexture("seguir1");
    });
    continuarButton.on("pointerdown", () => {
      continuarButton.setTexture("seguir2");
    });
  }

  siguienteImagen() {
    this.viñetaActual++;

    if (this.viñetaActual >= this.imagenes.length) {
      this.musica.stop();
      this.scene.start("Nivel1", { musica: this.musica });
    } else {
      this.imagen.setTexture(this.imagenes[this.viñetaActual]);
    }
  }
  update() {}
}
