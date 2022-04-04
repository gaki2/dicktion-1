import Navbar from "./components/navbar.js";

class App {
  $App: HTMLDivElement;
  $Navbar: Navbar;

  constructor() {
    this.$App = document.createElement("div");
    this.$App.className = "root";

    this.$Navbar = new Navbar();
  }

  render($parent: HTMLElement) {
    this.$Navbar.render(this.$App);
    $parent.appendChild(this.$App);
  }
}

window.onload = () => {
  const app = new App();
  app.render(document.body);
};
