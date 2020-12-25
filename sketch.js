var shape1, shape2;

function setup() {
  createCanvas(600,600);

  shape1 = createSprite(250,250,20,20);
  shape1.shapeColor = "red";

  shape2 = createSprite(100,100,20,20);
  shape2.shapeColor = "red";
}

function draw() {
  background("black");

  shape2.x = World.mouseX;
  shape2.y = World.mouseY;

 
  if(shape1.x + shape1.width === shape2.x || 
    shape1.y + shape1.height === shape2.y || 
    shape1.y === shape2.y + shape2.height || 
    shape2.x + shape2.width === shape1.x  ) {
    shape1.shapeColor = "green";
  }
  else{
    shape1.shapeColor = "red";
  }

  drawSprites();
}