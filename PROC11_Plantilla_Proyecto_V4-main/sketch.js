var sea, seaImg
var ship, ship_moving

function preload(){
     ship_moving = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
     seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(1300,600);

  sea = createSprite(200,200,0,0);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  
  ship = createSprite(240,300,200,250);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.5;
  }

function draw() {
   background("blue");

   if (sea.x <0) {
      sea.x=sea.width/2;
   }
  
   drawSprites();
}