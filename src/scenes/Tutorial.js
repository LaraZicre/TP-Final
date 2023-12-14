export default class Tutorial extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("Tutorial");
      
    }

    init(){

    }

    create() {
      this.add.image(496, 300, "tutoFondo").setScale(1.1);

      this.textoPantallaCompleta = this.add.text(208, 323, "Presiona la tecla 'F' para jugar en pantalla completa", {
        fontFamily: "Pixellari",
        fontSize: "25px",
        fill: "#ff4db3",
      });

      this.boton = this.sound.add("boton");

      // Boton volver
      const volverButton = this.add.sprite(45, 55, "atras1").setInteractive();
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
          this.boton.play();
          this.scene.stop("Tutorial");
          this.scene.resume("Menu");
      });

    

      // Sprites

      const teclas = this.add.sprite(496, 250);
      this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("tutoTeclas", { start: 0, end: 8 }),
        frameRate: 10,
        repeat: -1
      });
      teclas.play('idle')

      const osoLeft = this.add.sprite(240, 533);
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
      osoLeft.play('left', true)

      const osoRight = this.add.sprite(750, 533)
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("oso", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });  
      osoRight.play('right', true)

      const osoJump = this.add.sprite(496, 503)
      this.anims.create({
        key: "jump",
        frames: this.anims.generateFrameNumbers("osoJump", { start: 0, end: 54 }),
        frameRate: 20,
        repeat: -1,
      });  
      osoJump.play('jump', true)
    }

  update() {  
    
  }
}
