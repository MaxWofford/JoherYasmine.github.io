var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
 isGameOver = false;
 createCanvas(400, 400);
 player = createSprite(width/2, height-25, 50, 50);
 player.addImage(playerImage);
 enemy = createSprite(width/2, 0, 10, 30);
 enemy.addImage(enemyImage);
 enemy.rotationSpeed = 4.0;
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    if (enemy.overlap(player)) {
      gameOver();
    }
    background('#fae')
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
      player.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
      player.position.x -= 2;
    }
    enemy.position.y = enemy.position.y + 1;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(15, width - 15);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width/2;
  player.position.y = height-25;
  enemy.position.x = width/2;
  enemy.position.y = 0;
}