const NUM_POINTS = 25;
let segments = [];
let points = [];
let p0, p1, p2, p3;
let pickedId = -1;
function setup() {
  createCanvas(500, 500);
  while (points.length < NUM_POINTS) {
    points.push(new Point(points.length, random(width), random(height)));
  }

  for (let i = 0; i < points.length - 1; i++) {
    segments.push(new Segment(points[i], points[i + 1]));
  }
  strokeWeight(10);
}

function draw() {
  background(255);
  segments.forEach(s => s.update());
  stroke("#009944");
  strokeWeight(10);
  segments.forEach(s => s.draw());
  points.forEach(p => p.draw());
}

function mouseMoved() {
  points.forEach(p => {
    if (p.hitTest(mouseX, mouseY)) {
      p.isOver = true;
    }
  });
}

function mousePressed() {
  points.forEach(p => {
    if (p.hitTest(mouseX, mouseY)) {
      pickedId = p.id;
    }
  });
}

function mouseDragged() {
  points.forEach(p => {
    if (p.id === pickedId) {
      p.setPos(mouseX, mouseY);
    }
  });
}

function mouseReleased() {
  pickedId = -1;
}