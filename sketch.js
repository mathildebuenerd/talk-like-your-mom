let lines, markov, data, data2, x = 160, y = 240;

function preload() {
  data = loadStrings('data/input1.txt');
  data2 = loadStrings('data/input2.txt');
  console.log(data, data2);
}

function setup() {

  createCanvas(500, 500);
  textFont('times', 16);
  textAlign(LEFT);
  

  lines = ["click to (re)generate!"];

  // create a markov model w' n=4
  markov = new RiMarkov(3);

  // load text into the model
  markov.loadText(data.join(' '));
  markov.loadText(data2.join(' '));

  drawText();
  console.log("setup");
}

function drawText() {

  background(250);
  fill('red');
  stroke('blue');
  text(lines.join(' '), x, y, 400, 400);
  console.log(lines);
}

function mouseClicked() {
  console.log("mouseClicked");    
  x = y = 50;
  lines = markov.generateSentences(1);
  drawText();
}