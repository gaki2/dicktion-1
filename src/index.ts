import Navbar from "./components/navbar.js";
import Heading from "./components/heading.js";
import SearchLog from "./components/searchLog.js";
import DataView from "./components/dataView.js";
import { StateType } from "./types/index.type";
import SearchForm from "./components/searchForm.js";
import DOM from "./utils/index.js";

class App {
  $App: HTMLElement;
  $Navbar: Navbar;
  $Heading: Heading;
  $SearchLog: SearchLog;
  $SearchForm: SearchForm;
  $DataView: DataView;
  state: StateType;

  constructor() {
    this.$App = DOM.createEl("div", "root");
    this.state = {
      inputValue: "",
      searchedData: null,
      openAlert: false,
      searchLog: [],
      loading: false,
      isFocus: false,
    };
    this.$Navbar = new Navbar();
    this.$Heading = new Heading("영어 발음 검색기");
    this.$SearchLog = new SearchLog(this.state.searchLog);
    this.$SearchForm = new SearchForm(
      this.state.inputValue,
      this.setInputValue.bind(this),
      this.setSearchedData.bind(this)
    );
    this.$DataView = new DataView();
  }

  setSearchedData(data: any) {
    // 데이터 파싱
    let phonetic = data.phonetic ?? "";
    if (phonetic) {
      phonetic = `[${phonetic.slice(1, -1)}]`;
    }
    let audio = null;
    for (let i = 0; i < data.phonetics.length; i += 1) {
      const temp = data.phonetics[i];
      if (temp.text && !phonetic) {
        phonetic = `[${temp.text.slice(1, -1)}]`;
      }
      if (temp.audio && !audio) {
        audio = temp.audio;
      }
    }
    const name = data.word;
    const partOfSpeech = data.meanings[0].partOfSpeech ?? "";
    const definition = data.meanings[0].definitions[0].definition ?? "";

    // 스테이트 변경
    this.state = {
      ...this.state,
      searchedData: {
        name,
        audio,
        phonetic,
        meaning: {
          partOfSpeech,
          definition,
        },
      },
    };
    this.setSearchLog(name);
    this.$DataView.update(this.state.searchedData, this.$App);
  }

  setInputValue(value: any) {
    this.state = { ...this.state, inputValue: value };
  }

  setSearchLog(newWord: string) {
    let newSearchLog = this.state.searchLog.concat(newWord);
    const dupIndex = this.state.searchLog.indexOf(newWord);
    if (dupIndex !== -1) {
      newSearchLog.splice(dupIndex, 1);
    }
    if (newSearchLog.length > 10) {
      newSearchLog = newSearchLog.slice(1);
    }
    this.state = { ...this.state, searchLog: newSearchLog };
    this.$SearchLog.update(this.state.searchLog, this.$App);
  }

  render($parent: HTMLElement) {
    this.$Navbar.render(this.$App);
    this.$Heading.render(this.$App);
    this.$SearchLog.render(this.$App);
    this.$SearchForm.render(this.$App);
    this.$DataView.render(this.$App);
    $parent.appendChild(this.$App);
  }
}

window.onload = () => {
  const app = new App();
  app.render(document.body);
};
