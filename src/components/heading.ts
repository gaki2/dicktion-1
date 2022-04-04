class Heading {
  sentence: string;
    
  $h1: 

  constructor(sentence: string) {
    this.sentence = sentence;
    this.$h1 = document.createElement("h1");
    this.$h1.className = "text-center mt-4";
  }

  update(text) {
    if (text === this.sentence) {
    } else {
      this.sentence = text;
      this.$h1.innerText = this.sentence;
    }
  }

  draw($Parent) {}
}
