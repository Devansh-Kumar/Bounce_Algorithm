var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);

fixedRect =createSprite(400,250,30,10);
fixedRect.shapeColor = ("green");
movingRect =createSprite(300,250,50,15);
movingRect.shapeColor = ("green");
movingRect.velocityX = 5;
fixedRect.velocityX = -5;
}

function draw() {
  background(0); 

  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2) {
     fixedRect.velocityX = fixedRect.velocityX*(-1)
     movingRect.velocityX = movingRect.velocityX*(-1)  
     }
     if (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
  fixedRect.velocityY = fixedRect.velocityY*(-1)
  movingRect.velocityY = movingRect.velocityY*(-1)
  }
  else{
  movingRect.shapeColor ="green"
  fixedRect.shapeColor = "green"  
  }
  drawSprites();
}
