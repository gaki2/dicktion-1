import DOM from "../utils";

export default class Navbar {
  private $El: HTMLElement;
  private $Content: HTMLElement;
  private $Title: HTMLAnchorElement;

  constructor() {
    this.createEl();
    this.createContent();
    this.createTitle("DickTion", "/");
  }

  private createEl() {
    this.$El = DOM.createEl(
      "nav",
      "navbar navbar-expand-lg navbar-dark bg-primary"
    );
  }

  private createContent() {
    this.$Content = DOM.createEl("div", "container-fluid");
  }

  private createTitle(title: string, href: string) {
    this.$Title = DOM.createEl("a", "navbar-brand") as HTMLAnchorElement;
    this.$Title.href = href;
    this.$Title.textContent = title;
  }

  render($parent: HTMLElement) {
    this.$Content.appendChild(this.$Title);
    this.$El.appendChild(this.$Content);
    $parent.appendChild(this.$El);
  }
}
