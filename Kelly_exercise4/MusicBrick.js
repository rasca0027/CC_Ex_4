
function MusicBrick(x, y) {
  this.base_x = x;
  this.base_y = y;
  this.x = x;
  this.y = y;
  this.osc = new p5.Oscillator();
  this.speed = 0.08;
  
  this.display = function() {
    noStroke();
    rectMode(CENTER);
    fill(this.x, 60, 150);
    //fill(random(255), 60, 150);
    rect(this.x, this.y, 40, 40);
    //this.osc.start();
  }
  
  this.update = function() {
    noStroke();
    rectMode(CENTER);
    // make gradient color
    fill(map(this.x, 0, 600, 0, 255), 60, 150);
    //console.log('drop!');
    

    // gravity
    this.y += this.speed * (this.y);
     if (this.y >= 580) {
      this.y = 580;
    }
    
    // finally draw it
    rect(this.x, this.y, 40, 40);
    
    
    
  }
  
  
}