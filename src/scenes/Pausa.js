export default class Pausa extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Pausa");

    }
  
    init() {
        
    }

    create() {
    // Cargar la imagen transparente como fondo.
    this.add.image(496, 300, 'pausa');
    
    //añadir boton play
    this.volverButton()

    }

    pressVolver() {
        // Para ocultar la escena de pausa al principio.
        this.scene.setVisible(false);
        
    }

    volverButton() {
        //boton quieto
    const backpointer = this.add.sprite(260, 300, "atras1").setInteractive();
    backpointer.on('pointerover', function (event) {
      this.setTexture("atras2");
    });
    //mouse sobre boton
    backpointer.on('pointerout', function (event) {
      this.setTexture("atras1");
    });
    //presionar boton
    backpointer.on('pointerdown', function (event) {
        backpointer.setTexture("atras2");
      
    });
    //soltar boton
    backpointer.on('pointerup', function (event) {
        backpointer.setTexture("atras1");
        this.pressVolver();
    }, this);



  }


    update() {
    }

}
