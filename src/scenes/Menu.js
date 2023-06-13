export default class Menu extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Menu");
  }

  preload() {
    this.load.image("menuFondo", "./public/assets/images/fondomenu.png");

  }

  create() {
    this.add.image(400, 300, "menuFondo").setScale(1.1);

    const button = this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 + 50,
        "JUGAR",
        {
          fontFamily: "Arial",
          fontSize: 20,
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: {
            x: 16,
            y: 8,
          },
        }
      )
      .setOrigin(0.5)
      .setInteractive();

    button.on("pointerover", () => {
      button.setStyle({ backgroundColor: "#888888" });
    });

    button.on("pointerout", () => {
      button.setStyle({ backgroundColor: "#000000" });
    });

    button.on("pointerup", () => {
      this.scene.start("Nivel1");
    });
  }
}