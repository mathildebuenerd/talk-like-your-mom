'use strict'

// @ts-ignore
import './../libraries/rita/rita-full.js';


export class TextGeneration {

    data: string;
    data2: string;

    constructor() {
        this.data = '';
        this.data2 = '';
    }


    preload() {
        // create a markov model w' n=4
        const markov = new RiMarkov(2);
        console.log(markov)
        // this.data = loadStrings('data/input1.txt');
        // this.data2 = loadStrings('data/input2.txt');
        console.log(this.data, this.data2);

    }

    generateSentence() {

    }

}

const myApp = new TextGeneration();
myApp.preload();
//
// function preload() {
//
// }

// console.log('je lis sketch')
// declare function require(name:string);
//
// const loadedModule: any = require('rita');
//

// console.log(loadedModule);

// const R = new Rita();
// console.log(new Rita());
// console.log(R.RiString("The element took a bite of fires"));

// let markov, data, data2;
//

//
// function setup() {
//
//   // Adds a listener on the button
//   document.querySelector("#generateSentence").addEventListener("click", drawText);
//

//
//   // load text into the model
//   markov.loadText(data.join(' '));
//   markov.loadText(data2.join(' '));
//
//   drawText();
// }
//
// function drawText() {
//   const sentence = generateSentence();
//   console.log(sentence);
//   document.querySelector('#sentences').textContent = sentence;
// }
//
//
// function generateSentence(numberOfSentences = 1) {
//     return markov.generateSentences(numberOfSentences);
// }
