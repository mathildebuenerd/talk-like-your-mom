export class TextGeneration {

    constructor() {
        console.log(`je construis`)
        // The parameter is the n-grams
        this.markov = new RiMarkov(4);
    }

    setup() {
        // Add a listener to the button
        this.setupButtons();


        RiTa.loadString('data/rem.txt', (data1) => {
                this.markov.loadText(data1);
                // this.markov.loadText(data2);
                this.generate(this.markov);
        });
    }

    generate(mark) {
        const lines = mark.generateSentences(2);
        console.log(lines.join(' '));
        const sentences = document.querySelector(`#sentences`);
        sentences.textContent = lines.join(' ');
    }

    setupButtons() {
        const generateButton = document.querySelector(`#generateSentence`);
        generateButton.addEventListener(`click`, () => {
            console.log("button markov", this.markov)
            this.generate(this.markov);
        });
    }

}

const app = new TextGeneration();
app.setup();






