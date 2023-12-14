export default class CinematicaIntro extends Phaser.Scene {
  constructor() {
    super("CinematicaIntro");
  }

  preload() {}

  init() {}

  create() {

    this.musica = this.sound.add("musicaCinematica");
    this.musica.play();
  }

  update() {}
}
