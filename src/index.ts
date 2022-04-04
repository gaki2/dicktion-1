import Navbar from "./components/navbar.js";
import Heading from "./components/heading.js";
import SearchLog from "./components/searchLog.js";
import { StateType } from "./types/index.type";
import SearchForm from "./components/searchForm.js";
import DOM from "./utils/index.js";

class App {
  $App: HTMLElement;
  $Navbar: Navbar;
  $Heading: Heading;
  $SearchLog: SearchLog;
  $SearchForm: SearchForm;
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
    this.$SearchLog = new SearchLog(["정적", "로그", "입니다"]);
    this.$SearchForm = new SearchForm(
      this.state.inputValue,
      this.setInputValue.bind(this)
    );
  }

  setInputValue(value: any) {
    this.state = { ...this.state, inputValue: value };
  }

  render($parent: HTMLElement) {
    this.$Navbar.render(this.$App);
    this.$Heading.render(this.$App);
    this.$SearchLog.render(this.$App);
    this.$SearchForm.render(this.$App);
    $parent.appendChild(this.$App);
  }
}

window.onload = () => {
  const app = new App();
  app.render(document.body);
};
