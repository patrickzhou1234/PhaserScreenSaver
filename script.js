const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scene: {
        create: create,
        update: update,
        preload: preload
    }
};

var game = new Phaser.Game(config);

function preload() {
    
}

function create() {
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    player1 = this.add.ellipse(config.width*0.45, config.height*0.2, config.width*0.10, config.width*0.10, 0xffffff)
    this.player = this.physics.add.existing(player1);
    this.physics.world.on('worldbounds', onWorldBounds);
    player1.body.onWorldBounds = true;
    player1.body.collideWorldBounds = true;
    player1.body.bounce.y=1;
    player1.body.bounce.x=1;
    player2 = this.add.ellipse(config.width*0.55, config.height*0.2, config.width*0.10, config.width*0.10, 0xffffff)
    this.player = this.physics.add.existing(player2);
    player2.body.onWorldBounds = true;
    player2.body.collideWorldBounds = true;
    player2.body.bounce.y=1;
    player2.body.bounce.x=1;
}

function Dead() {
  player1.body.acceleration.x = 200;
  player2.body.acceleration.x = -200;
}

function onWorldBounds(body, up, down, left, right) {
  if (up || down || left || right) {
    Dead();
  }
}

function update() {
    
}

window.onresize = function() {
  document.getElementsByTagName("canvas")[0].style.width = 100+'vw';
  document.getElementsByTagName("canvas")[0].style.height = 100+'vh';
}