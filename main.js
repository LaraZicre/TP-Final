import Preload from "./src/scenes/Preload.js";
import Intro from "./src/scenes/Intro.js";
import Menu from "./src/scenes/Menu.js";
import Tutorial from "./src/scenes/Tutorial.js";
import Nivel1 from "./src/scenes/Nivel1.js";
import Nivel2 from "./src/scenes/Nivel2.js";
import Nivel3 from "./src/scenes/Nivel3.js";
import Pausa from "./src/scenes/Pausa.js";
import NivelPerdido from "./src/scenes/NivelPerdido.js";
import NivelGanado from "./src/scenes/NivelGanado.js";
import JuegoSuperado from "./src/scenes/JuegoSuperado.js";
import Creditos from "./src/scenes/Creditos.js";

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
      debug: false,
    },
    
  },
  scene: [Preload, Intro, Menu, Tutorial, Nivel1, Nivel2, Nivel3, Pausa, NivelGanado, NivelPerdido, JuegoSuperado, Creditos],
};


window.game = new Phaser.Game(config);
