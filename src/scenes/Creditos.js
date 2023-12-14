export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  preload() {
    //imagen creditos
    this.load.image("creditos", "public/assets/images/Creditos/creditos.png");
  }

  init() {}

  create() {
    // cargar imagen
    this.add.image(496, 300, "creditos").setScale(1.1);

    this.textoSuperarJuego = this.add.text(345, 250, "Creditos", {
      fontFamily: "Pixellari",
      fontSize: "30px",
      fill: "#ff4db3",
    });

    const menuButton = this.add.sprite(570, 350, "menu1").setInteractive();

    menuButton.on("pointerover", () => {
      menuButton.setTexture("menu2");
    });

    menuButton.on("pointerout", () => {
      menuButton.setTexture("menu1");
    });

    menuButton.on("pointerdown", () => {
      menuButton.setTexture("menu2");
    });

    menuButton.on("pointerup", () => {
      menuButton.setTexture("menu1");
      this.musica.stop();
      this.scene.stop("Creditos");
      this.scene.start("Menu");
    });

    this.musica = this.sound.add("musicaCreditos");
    this.musica.play();
      
  }

  update() {}
}
