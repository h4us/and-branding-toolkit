class Segment {
  constructor(a, b, len) {
    this.a = a;
    this.b = b;
    this.prevA = Object.assign({}, a);
    this.prevB = Object.assign({}, b);
    this.len = len || 30;
    this.angle;
  }

  update() {
    if (this.a.x !== this.prevA.x || this.a.y !== this.prevA.y) {
      let dx = this.b.x - this.a.x;
      let dy = this.b.y - this.a.y;
      let angle = atan2(dy, dx);
      this.b.x = this.a.x + cos(angle) * this.len;
      this.b.y = this.a.y + sin(angle) * this.len;
    } else if (this.b.x !== this.prevB.x || this.b.y !== this.prevB.y) {
      let dx = this.a.x - this.b.x;
      let dy = this.a.y - this.b.y;
      let angle = atan2(dy, dx);
      this.a.x = this.b.x + cos(angle) * this.len;
      this.a.y = this.b.y + sin(angle) * this.len;
    }
    this.prevA = Object.assign({}, this.a);
    this.prevB = Object.assign({}, this.b);
  }

  draw() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}