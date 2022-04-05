import DOM from "../utils/index";
import { SearchedData } from "../types/index.type";

export default class DataView {
  data: SearchedData;
  $wrapper: HTMLElement;
  $heading: HTMLElement;
  $hr: HTMLElement;
  $heading2: HTMLElement;
  $wrapper2: HTMLElement;
  $name: HTMLElement;
  $phonetic: HTMLElement;
  $audio: HTMLAudioElement;
  $playButton: HTMLButtonElement;
  $title: HTMLElement;
  $wrapper3: HTMLElement;
  $norm: HTMLElement;
  $definition: HTMLElement;
  $wrapper4: HTMLElement;
  $link: HTMLAnchorElement;
  constructor() {
    this.data = null;
  }

  play() {
    this.$audio.play();
  }

  createView() {
    this.$wrapper = DOM.createEl("div", "m-auto mt-5 div_width_50");
    this.$heading = DOM.createEl("h1", "mb-3 mt-5", this.data && "검색결과");
    this.$hr = DOM.createEl("hr");
    this.$heading2 = DOM.createEl(
      "h2",
      "m-1 mt-4 text-success",
      this.data && "발음"
    );
    this.$wrapper2 = DOM.createEl("div", "d-flex align-items-center");
    DOM.appendEl(
      this.$wrapper,
      this.$heading,
      this.$hr,
      this.$heading2,
      this.$wrapper2
    );
    this.$name = DOM.createEl(
      "h3",
      "d-inline m-1",
      this.data && this.data.name
    );
    this.$phonetic = DOM.createEl(
      "h3",
      "d-inline m-2",
      this.data && this.data.phonetic
    );
    this.$audio = document.createElement("audio");
    this.$playButton = document.createElement("button");
    this.$title = DOM.createEl(
      "h2",
      "m-1 mt-5 text-success",
      this.data && "정의"
    );
    this.$wrapper3 = DOM.createEl("div", "d-flex align-items-center");
    this.$norm = DOM.createEl(
      "h3",
      "d-inline m-1",
      this.data && this.data.meaning.partOfSpeech
    );
    this.$definition = DOM.createEl(
      "h4",
      "d-inline m-4",
      this.data && this.data.meaning.definition
    );
    this.$wrapper4 = DOM.createEl("h3", "mt-5");
    if (this.data?.audio) {
      this.$audio.src = this.data?.audio;
    }
    this.$playButton.className = "play";
    this.$playButton.disabled = this.data?.audio === null;
    this.$playButton.innerText = "듣기";
    this.$playButton.addEventListener("click", this.play.bind(this));
    this.$link = document.createElement("a");
    DOM.appendEl(this.$wrapper2, this.$name, this.$phonetic, this.$audio);
    if (this.data) {
      DOM.appendEl(this.$wrapper2, this.$playButton);
    }
    DOM.appendEl(
      this.$wrapper,
      this.$title,
      this.$wrapper3,
      this.$norm,
      this.$definition,
      this.$wrapper4
    );

    this.$link.target = "_blank";
    this.$link.href = `https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/${this.data?.name}`;
    this.$link.innerText = this.data ? "자세히 보러가기" : "";

    DOM.appendEl(this.$wrapper4, this.$link);
  }

  update(data: SearchedData, $parent: HTMLElement) {
    this.data = data;
    this.remove($parent);
    this.createView();
    this.render($parent);
  }

  remove($parent: HTMLElement) {
    $parent.removeChild(this.$wrapper);
  }

  render($parent: HTMLElement) {
    this.createView();
    $parent.appendChild(this.$wrapper);
  }
}
