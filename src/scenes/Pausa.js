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


            const volverButton = this.add.sprite(400, 350, "atras1").setInteractive();
            // Agrega eventos de clic a los botones.
            volverButton.on("pointerover", () => 
                {volverButton.setTexture("atras2"); 
            });

            volverButton.on("pointerout", () => 
                {volverButton.setTexture("atras1"); 
            });

            volverButton.on("pointerdown", () => 
                {volverButton.setTexture("atras2"); 
            });
            
            volverButton.on("pointerup", () => 
                {volverButton.setTexture("atras1"); 
                this.scene.stop("Pausa");
                this.scene.resume('Nivel2');
            });
        
            const menuButton = this.add.sprite(570, 350, "menu1").setInteractive();
            // Agrega eventos de clic a los botones.
            menuButton.on("pointerover", () => 
                {menuButton.setTexture("menu2"); 
            });

            menuButton.on("pointerout", () => 
                {menuButton.setTexture("menu1"); 
            });

            menuButton.on("pointerdown", () => 
                {menuButton.setTexture("menu2"); 
            });
            
            menuButton.on("pointerup", () => 
                {menuButton.setTexture("menu1"); 
                this.scene.stop("Pausa");
                this.scene.stop("Nivel2");
                this.scene.start("Menu"); 
            });
        }
    

        update() {

        }
    }
