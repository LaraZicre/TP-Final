export default class JuegoSuperado extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("JuegoSuperado");
    }
  
    init() {
    }
  
    create() {
      // Cargar la imagen transparente como fondo.
      this.add.image(496, 300, "popopUpGanarJuego");

      this.textoSuperarJuego = this.add.text(345, 250, "¡Felicitaciones!", {
        fontFamily: "Pixellari",
        fontSize: "30px",
        fill: "#ff4db3",
      });
  
      const continuarButton = this.add
        .sprite(400, 350, "seguir1")
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
        continuarButton.setTexture("seguir1"); {
          this.scene.stop("Nivel3");
          this.scene.stop("JuegoSuperado");
          this.scene.start("Creditos");
        }
      });
    }
  
    update() {}
  }
  