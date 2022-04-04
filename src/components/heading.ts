import DOM from "../utils/index.js";

export default class Heading {
  $h1: HTMLElement;
  text: string;
  constructor(text: string) {
    this.$h1 = DOM.createEl("h1", "text-center mt-4");
    this.text = text;
  }

  // 업데이트 후 자동으로 리랜더. (리액트랑 비슷)
  update(newText: string, $parent: HTMLElement) {
    if (this.text !== newText) {
      this.text = newText;
      this.delete($parent);
      this.render($parent);
    }
  }

  delete($parent: HTMLElement) {
    $parent.removeChild(this.$h1);
  }

  render($parent: HTMLElement) {
    this.$h1.innerText = this.text;
    $parent.appendChild(this.$h1);
  }
}
