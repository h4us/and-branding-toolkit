class PointText extends Point {
  constructor(id, x, y, letters, size) {
    super(id, x, y);
    this.letters = letters;
    this.size = size;
  }

  draw() {
    if (this.isOver) {
      fill(0);
    } else {
      fill("#009944");
    }
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    fill(255);
    textAlign(CENTER);
    text(this.letters[this.id%3], this.x, this.y+3)
  }
}