var bricks = [];
var pads = [];
var mode = true; // mode true for creating bricks, false for creating pads
var startx, starty, endx, endy;

function setup() {
  createCanvas(800, 600);
  frameRate(15);
}

function draw() {
  background(255);
  fill(0);
  textSize(18);
  
  // show mode on screen
  strokeWeight(1);
  if (mode) {
    text("Mode: Bricks", 50, 50);
  } else {
    text("Mode: Draw", 50, 50);
  }
  

  // show all the bricks
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].update();
    for (var j =0; j < pads.length; j++) {
      var angle = bricks[i].check_collide(pads[j]);
      //console.log(angle);
      
    }
  }  

  // show all the pads
  for (var i = 0; i < pads.length; i++) {
    pads[i].display();
  }


  if (keyIsPressed) {
    if (keyCode == SHIFT) {
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