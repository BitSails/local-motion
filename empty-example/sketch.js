var w = 640;
var h = 480;
var vid;

function setup() {
  // put setup code here
  //createCanvas(w,h);
  
  createCanvas(w,h);
  background(51);
  vid = createCapture(VIDEO);
  vid.size(w,h);
}

function draw() {
  // put drawing code here
  tint(255,0,100);
  image(vid,0,0);
  
}