
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survival = 0;
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(100,100);
  monkey.addAnimation ("running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(200,350,650,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  foodGroup = new Group();

  obstaclesGroup = new Group();
  
}


function draw() {
  background("white");
  
  
    survival = Math.round(frameCount/frameRate())
    textSize(15)
    text("Survival Time = "+survival,150,40);
  
      if (ground.x <= 10){
      ground.x = ground.width/2;
    }
     
    monkey.collide(ground);
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  

  food();
  Obstacles();
  
  if (monkey.isTouching(obstaclesGroup)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    survival = 0;
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  
  

  
  drawSprites();

  
}

function food(){
    if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
  
    foodGroup.add(banana);
  }
}

function Obstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(300,324,10,40);
    obstacle.addImage (obstacleImage);
    
     obstacle.velocityX = -6 
    
    
           
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;

    obstaclesGroup.add(obstacle);
  }
}






