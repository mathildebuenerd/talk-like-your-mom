export class TextGeneration {

    constructor() {
        console.log(`je construis`)
        // The parameter is the n-grams
        this.markov = new RiMarkov(3);
    }

    setup() {
        this.setupButtons();

        RiTa.loadString('data/rem.txt', (strings) => {
            console.log(`data1`, strings)
            this.markov.loadText(strings);
            this.countWords(strings);
            this.generate(this.markov);
        });
    }

    generate(mark) {
        const sentences = [];
        for (let i=0; i<10; i++) {
            sentences.push(mark.generateSentences(1));
        }
        const sentencesElt = document.querySelector(`#sentences`);
        sentencesElt.textContent = sentences;
    }

    countWords(strings) {
        // Return the occurence of each word
        console.log(RiTa.concordance(strings));
    }

    setupButtons() {
        // Add the listeners to the UI elements
        const generateButton = document.querySelector(`#generateSentence`);
        generateButton.addEventListener(`click`, () => {
            console.log("button markov", this.markov)
            this.generate(this.markov);
        });
    }

}

const app = new TextGeneration();
app.setup();






