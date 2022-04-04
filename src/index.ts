import Navbar from "./components/navbar.js";

class App {
  $App: HTMLDivElement;
  $Navbar: Navbar;

  constructor() {
    this.$App = document.createElement("div");
    this.$App.className = "root";
<<<<<<< HEAD

=======
>>>>>>> 69c094d (feat: createEl함수 작성, navbar 렌더로직만 작성)
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
