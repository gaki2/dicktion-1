import DOM from "../utils/index.js";

export default class SearchLog {
  words: string[];
  $wrapper: HTMLElement;
  $$buttons: HTMLElement[];
  constructor(words: string[]) {
    this.words = words;
    this.$wrapper = DOM.createEl(
      "div",
      "mt-2 m-auto flex-row pt-3 div_width_50 min_height_span"
    );
    this.$$buttons = [];
  }

  createButton(word: string) {
    const $h4 = DOM.createEl("h4", "d-inline");
    const $button = DOM.createEl(
      "button",
      "btn badge rounded-pill bg-light m-1 align-content-center"
    );
    $button.innerText = word;
    $h4.appendChild($button);
    this.$$buttons.push($h4);
  }

  render($parent: HTMLElement) {
    this.words.forEach((word) => {
      this.createButton(word);
    });
    for (let i = 0; i < this.$$buttons.length; i += 1) {
      const $elem = this.$$buttons[i];
      this.$wrapper.appendChild($elem);
    }
    $parent.appendChild(this.$wrapper);
  }
}
