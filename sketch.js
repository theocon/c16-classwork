var box2
var box1;

function setup() {
  createCanvas(600, 400);
  
  box1 = new Box();
  box2 = new Box();

}

function draw() {
  background(220);

  box2.show();
  box2.x = 60;
  box2.y = 80;
  box1.show();
}

