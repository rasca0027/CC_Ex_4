function Pad(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  
  this.display = function() {
    strokeWeight(10);
    stroke(0);
    line(this.x1, this.y1, this.x2, this.y2);
  }
  
  this.get_length = function() {
    return sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
  }
  
  this.vec = function() {
    var vec = createVector(this.x2 - this.x1, this.y2 - this.y1);
    return vec;
  }
  
}