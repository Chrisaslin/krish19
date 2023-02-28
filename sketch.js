var PLAY = 3;
var END = 0;
var gameState = PLAY;

var spaceship, spaceship_flying, spaceship_crashed;
var background, backgroundImage;
var asteroid;

var Points;
var gameOver;
var restart;
var gameOverImg, restartImg;
var flySound, crashSound;

function preload(){
   // spaceship_flying = loadAnimation("spaceship.jpg");/*   the name of the image file has to  be checked upon
   /* there  is no file called as spaceship*/
    //spaceship_crashed = loadAnimation("crashed_spaceship.jpg");// file name  missing 
    backgroundImage = loadImage("Space.jpg");// i had changed the  name 
    asteroid = loadImage("asteroid.jpg");//i had changed the  name 
    
   // gameOverImg = loadImage("game_over.jpg");// there is no game over image file added 
    //restartImg = loadImage("restart.png");// there is no restart image file added 

   // flySound = loadSound("plane_flying.mp3");// there are no sound file added 
   // crashSound = loadSound("plane_crash.mp3");// there  are no sound file added - please add all the image and sound files respectively 



}
function setup(){
    createCanvas(windowWidth, windowHeight);
    spaceship = createSprite(100,100,50,50);
    //spaceship.addAnimation("flying", spaceship_flying);image file
    //spaceship.addAnimation("crashed", spaceship_crashed);image file
    
    spaceship.scale = 2;
    
   space = createSprite(windowWidth, windowHeight);//  use the concept of ghost runner for infinte movement of background
   
   // background.addImage("background", backgroundImage);
    space.y = background.windowHeight/2;

    gameOver=createSprite(300,100);
    gameOver.addImage(gameOverImg);// image file missing

    restart=createSprite(300,140);
    restart.addImage(restartImg);// image file missing


    gameOver.scale = 0.5;
    restart.scale = 0.5;

spaceship.setCollider("rectangle",0,0,spaceship.width,spaceship.height);
  spaceship.debug = true

  Points = 0;
}

function draw() {

    background(255, 255,255);// is it background or moving background
    text("Points:"+ Points, 500,50);



    if(gameState === PLAY){

        gameOver.visible = false;
        restart.visible = false;

      background.velocityY = -(4 + 3* score/100)
        spaceship.changeAnimation("flying",spaceship_flying);/// file missing
        flySound.play();// sound file missing
       
}

if(asteroid > windowHeight){
    Points = Points + 1;
    asteroid.destroy();
}
  if(keyDown("A")){
    spaceship.x = -2;// spaceship.x-=2
  }
  if(keyDown("D")){
    spaceship.x = 2;//spaceship.x+=2
  }
  if (background.y < 0){
    background.y = background.height/2;
  }


  if(asteroid.isTouching(spaceship)){
    gameState === END;
    crashSound.play();
  }


 if (gameState === END){
  gameOver.visible = true;
  restart.visible = true;
  
  spaceship.changeAnimation(spaceship,spaceship_crashed);
  background.velocityY = 0;
  spaceship.velocityY= 0;// include a line to displaay the text gameover
}
asteroid.setLifetime(-1);
asteroid.setVelocityY(1);//each missing



if (mousePressedOver(restart)){
  reset();
}


drawSprites();
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
  asteroid.destroy();
}
function mousePressedOver(){// is this function required 
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  score = 0;
  asteroid.destroy();
}
