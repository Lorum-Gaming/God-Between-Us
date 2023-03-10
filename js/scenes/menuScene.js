import serverScene from "./serverScene.js";
export default class menuScene extends Phaser.Scene {
    constructor() {
        super("menuScene");
        this.button;
    }

    preload () {
        this.load.image("backgroundImage", "../../assets/backgroundMenu.png");
        alert('Enter in ServerScene');
    }

    create() {
        this.button = this.add.image(400, 225, "backgroundImage", 0)
            .setInteractive()

        this.button.on(
            "pointerdown",
            function () {
                this.scene.start(serverScene);
            },
            this
        )
    };

    update() {
        if (this.game.socket.connected) {
            this.game.socket.emit("scene", {
                scene: 1,
                player: this.game.socket.id,
            });
        }
    }
}