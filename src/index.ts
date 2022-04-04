import { StateType } from "./types/index.type";

class App {
  $App: HTMLDivElement;

  $body: HTMLElement;

  state: StateType;

  // state: StateType;

  constructor() {
    this.$App = document.createElement("div");
    this.$body = document.body;
    this.$App.className = "root";
    this.$body.appendChild(this.$App);
    this.state = {
      inputValue: "",
      searchedData: null,
      openAlert: false,
      searchLog: [],
      loading: false,
      isFocus: false,
    };

    this.render();
  }

  render() {
    console.log(this.state.inputValue);
  }
}

window.onload = () => {
  // eslint-disable-next-line no-new
  new App();
};
