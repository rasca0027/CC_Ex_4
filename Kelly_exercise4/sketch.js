var bricks = [];
var pads = [];
var mode = true; // mode true for creating bricks, false for creating pads
var startx, starty, endx, endy;

function setup() {
  createCanvas(600, 600);
  frameRate(15);
}

function draw() {
  background(255);
  

  // show all the bricks
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].update();
  }

  // show all the pads
  for (var i = 0; i < pads.length; i++) {
    pads[i].display();
  }

  if (keyIsPressed) {
    if (keyCode == 32) {
      mode = !mode;
      console.log('mode changed');
    }
  }
}

function mouseClicked() {

  if (mode) {
    var a = new MusicBrick(mouseX, mouseY);
    a.display();
    bricks.push(a);
  } else { // creating pads
    console.log('pad');
    stroke(0);
    var b = new Pad(startx, starty, endx, endy);
    b.display();
    pads.push(b);
  }

}

function mousePressed() {
  startx = mouseX;
  starty = mouseY;
}

function mouseReleased() {
  endx = mouseX;
  endy = mouseY;
}