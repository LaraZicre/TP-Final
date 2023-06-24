import Preload from "./src/scenes/Preload.js";
import Menu from "./src/scenes/Menu.js";
import Tutorial from "./src/scenes/Tutorial.js";
import Nivel1 from "./src/scenes/Nivel1.js";
//import Nivel2 from "./src/scenes/Nivel2";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 992,
  height: 608,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 992,
      height: 608,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },

  scene: [Preload, Menu, Tutorial, Nivel1],
};

window.game = new Phaser.Game(config);
