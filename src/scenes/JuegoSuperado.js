export default class JuegoSuperado extends Phaser.Scene {
  constructor() {
    super("JuegoSuperado");
  }

  init() {}

  create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, "popUpGanarJuego").setScale(1.1);

    this.textoSuperarNivel = this.add.text(327, 190, "¡Felicitaciones!", {
      fontFamily: "Pixellari",
      fontSize: "50px",
      fill: "#ff4db3",
    });

    this.textoSuperarNivel1 = this.add.text(
      305,
      250,
      "¡Has superado todos los desafíos!",
      {
        fontFamily: "Pixellari",
        fontSize: "25px",
        fill: "#ff4db3",
      }
    );

    this.textoSuperarNivel2 = this.add.text(
      360,
      300,
      "Ahora Osito se irá a dormir...",
      {
        fontFamily: "Pixellari",
        fontSize: "20px",
        fill: "#ff4db3",
      }
    );

    const continuarButton = this.add
      .sprite(485, 380, "seguir1")
      .setInteractive();
    // Agrega eventos de clic a los botones.
    continuarButton.on("pointerover", () => {
      continuarButton.setTexture("seguir2");
    });

    continuarButton.on("pointerout", () => {
      continuarButton.setTexture("seguir1");
    });

    continuarButton.on("pointerdown", () => {
      continuarButton.setTexture("seguir2");
    });

    continuarButton.on("pointerup", () => {
      continuarButton.setTexture("seguir1");
      {
        this.scene.stop("Nivel3");
        this.scene.stop("JuegoSuperado");
        this.scene.start("Creditos");
      }
    });
  }

  update() {}
}
