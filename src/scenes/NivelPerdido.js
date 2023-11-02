export default class NivelPerdido extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("NivelPerdido");

    }
  
    init() {
        
    }

    create() {
        // Cargar la imagen transparente como fondo.
        this.add.image(496, 300, 'perder');
    

        }


    update() {
    }

}
