import Navbar from "./components/navbar.js";
import Heading from "./components/heading.js";
import { StateType } from "./types/index.type";

class App {
  $App: HTMLDivElement;
  $Navbar: Navbar;
  $Heading: Heading;
  state: StateType;
  constructor() {
    this.$App = document.createElement("div");
    this.$App.className = "root";
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
  }

  render($parent: HTMLElement) {
    this.$Navbar.render(this.$App);
    this.$Heading.render(this.$App);
    $parent.appendChild(this.$App);
  }
}

window.onload = () => {
  const app = new App();
  app.render(document.body);
};
