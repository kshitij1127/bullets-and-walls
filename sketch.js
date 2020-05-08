var bullet,thickness,weight,speed,wall;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  wall = createSprite(1250,200,thickness,height/2);
  bullet = createSprite(200,200,50,15);
  speed = random(223,321)
  
  bullet.velocityX = speed;
  weight = random(30,52)
}

function draw() {
  background(0);
  if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * weight *speed /(thickness*thickness*thickness)

  if (damage > 10){
  wall.shapeColor = color(255,0,0)
  }

  if (damage < 10){
  wall.shapeColor = color(0,255,0)
  }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width
wallLeftEdge = lwall.x;
if (bulletRightEdge >= wallLeftEdge){
return true
}
return false;


}