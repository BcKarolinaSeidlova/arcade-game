// Enemies our player must avoid
var Enemy = function(x,y,speed) {
   this.x = x;
   this.y = y;
   this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x+=this.speed*dt;
    // if enemy gets to the end of screen, it is reset on its start
    if (this.x>=505) {
        this.x =0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y,speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
	 //Prevent player getting out of the screen
    if (player.x < 0) {player.x = 0}
    if (player.x > 400) {player.x = 400}
    if (player.y < 5) {player.y = 5}
    if (player.y > 390) {player.y = 390}
};

Player.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
	if (key == 'left') {
        player.x -= player.speed;
    }
    if (key == 'up') {
        player.y -= player.speed - 15;
    }
    if (key == 'right') {
        player.x += player.speed;
    }
    if (key == 'down') {
        player.y += player.speed - 15;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player(200, 390, 50);
var enemy = new Enemy(0, Math.random()*250, Math.random() * 150);
allEnemies.push(enemy);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
