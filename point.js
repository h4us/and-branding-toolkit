class Point {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.isOver = false;
    this.size = 10;
  }

  draw() {
    if (this.isOver) {
      fill(0);
      this.size = 20;
    } else {
      fill("#009944");
      this.size = 10;
    }
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  hitTest(x, y) {
    if (dist(this.x, this.y, x, y) < this.size) {
      this.isOver = true;
      return true;
    } else {
      this.isOver = false;
      return false;
    }
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
}