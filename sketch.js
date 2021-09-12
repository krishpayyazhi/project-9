
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW)){
    background("blue")
  }
  if (keyDown(RIGHT_ARROW)){
    background("white")
  }
  if (keyDown(UP_ARROW)){ 
    background("yellow")
  }
  if (keyDown(DOWN_ARROW)){
    background("red")
  }
}




