let l = 720;
let seeed;
const N_FRAMES = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeCap(SQUARE);
  seeed = random(100000);
}

function draw() {
  clear();
  background(0);
  randomSeed(seeed);
  blendMode(ADD)
  translate(width/2, height/2);
	rotate(frameCount/15);
  let z = (frameCount%N_FRAMES)/N_FRAMES;
  
  for (let i = 0; i < 6; i++) {
    stroke(random(0,500),random(0,500),random(0,500));
    strokeWeight(random(2, 5));
    let n = floor(random(1, 2))*random([-5, 1]);
    let h = random(100,400);
		h *= -sq(2*z-1)+1;
    let sp = random([-3, -2, -2, -1, -1, -1, 1, 1, 1, 2, 2, 3]);
    makeWave(n, h, sp);
  }
  

  if (frameCount % N_FRAMES === 0) {
    seeed = random(1000*frameCount);
  }
}

function makeWave(n, h, sp) {
  let t = TWO_PI*(frameCount%N_FRAMES)/N_FRAMES;
  beginShape();
  for (let x = -l/2; x < l/2; x++) {
    let z = map(x, -l/2, l/2, 0, 1);
    let alpha = -sq(2*z-1)+1;
    let off = sin(n*TWO_PI*(x+l/2)/l+sp*t)*h*alpha;
    curveVertex(x, off);
  }
  
  
  endShape();
}

