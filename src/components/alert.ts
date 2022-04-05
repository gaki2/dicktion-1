import DOM from "../utils/index";

export default class Alert {
  private $Alert: HTMLElement;
  private $Button: HTMLButtonElement;
  constructor(openAlert: boolean) {
    this.createAlert(openAlert);
    this.createButton();
  }

  private createAlert(openAlert: boolean) {
    this.$Alert = DOM.createEl("div", "alert alert-dismissible alert-danger");
    this.$Alert.style.position = "absolute";
    this.$Alert.style.left = "0";
    this.$Alert.style.bottom = "0";
    this.$Alert.style.transition = "all 1s";
    if (!openAlert) this.$Alert.style.left = "-1200px";
  }

  public update(openAlert: boolean) {
    if (openAlert) {
      this.$Alert.style.left = "0";
    } else {
      this.$Alert.style.left = "-1200px";
    }
  }

  private createButton() {
    this.$Button = DOM.createEl("button", "btn-close") as HTMLButtonElement;
    this.$Button.type = "button";
    this.$Button.setAttribute("data-bs-dismiss", "alert");
    this.$Alert.appendChild(this.$Button);
    this.$Alert.insertAdjacentHTML(
      "beforeend",
      `<strong>존재하지 않는 단어입니다.</strong> 단어를 다시 확인해주세요.`
    );
  }

  render($Parent: HTMLElement) {
    $Parent.appendChild(this.$Alert);
  }
}
