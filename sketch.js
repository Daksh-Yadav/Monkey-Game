var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var BananaGroup, obstacleGroup;
var score;
var ground;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

var score = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);

  ground = createSprite(300, 555, 600, 10);

  monkey = createSprite(50, 500, 50, 100);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.2;
  //BananaGroup = new Group();
  //obstacleGroup = new Group();
  FoodGroup = new Group();
 bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
//if (gameState === PLAY) {
    spawnBananas();
    spawnObstacles();
 // }
  

  text("score:" + score, 500, 100);
score=Math.ceil(frameCount/frameRate()) 
  if (keyDown("space") && monkey.y >= 159) {
    monkey.velocityY = -12;
  }

  

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.debug = true;
  monkey.collide(ground);

 
  

  //if (FoodGroup.isTouching(monkey)) {
  //  bananaGroup.destroyEach();
   // score = score + 2;
  //}

  if (obstacleGroup.isTouching(monkey)) {
   // gameState = "END";
     ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
}
  

  drawSprites();
}





//if (gameState === END) {
  //obstacleGroup.destroyEach();
  //FoodGroup.destroyEach();
  //monkey.destroy();
 


function spawnBananas() {
  if (frameCount % 200 === 0) {

    banana = createSprite(630, 300, 20, 20);
    banana.addImage("image", bananaImage);
    banana.y = Math.round(random(300, 450));
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     banana.lifetime=320;

    monkey.depth = banana.depth + 1;
    banana.debug = true;
    FoodGroup.add(banana);
  }


}

function spawnObstacles() {
  if (frameCount % 150 === 0) {
    obstacle = createSprite(630, 515, 50, 50);
    obstacle.addImage("image2", obstacleImage);
    obstacle.velocityX = -7;
    obstacle.scale = 0.2;
    obstacleGroup.setLifetimeEach(320);
    obstacleGroup.add(obstacle);
  }
}