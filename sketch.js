let markov, data, data2;

function preload() {
  data = loadStrings('data/input1.txt');
  data2 = loadStrings('data/input2.txt');
  console.log(data, data2);
}

function setup() {

  // Adds a listener on the button
  document.querySelector("#generateSentence").addEventListener("click", drawText);

  // create a markov model w' n=4
  markov = new RiMarkov(2);

  // load text into the model
  markov.loadText(data.join(' '));
  markov.loadText(data2.join(' '));

  drawText();
}

function drawText() {
  const sentence = generateSentence();
  console.log(sentence);
  document.querySelector('#sentences').textContent = sentence;
}


function generateSentence(numberOfSentences = 1) {
    return markov.generateSentences(numberOfSentences);
}
