const NUM_POINTS = 24;
let segments = [];
let points = [];
let p0, p1, p2, p3;
let pickedId = -1;
let font;

function preload() {
  font = loadFont("assets/Inter-Medium.ttf");
}

function setup() {
  createCanvas(800, 800);
  while (points.length < NUM_POINTS) {
    points.push(new PointText(points.length, random(width), random(height), "AND", 30));
  }

  for (let i = 0; i < points.length - 1; i++) {
    segments.push(new Segment(points[i], points[i + 1], 50));
  }
  textFont(font);
}

function draw() {
  background(255);
  segments.forEach(s => s.update());
  strokeWeight(40);
  stroke("#009944");
  segments.forEach(s => s.draw());
  noStroke();
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