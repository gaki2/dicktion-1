import DOM from "../utils/index.js";

export default class SearchForm {
  private $Form: HTMLFormElement;
  private $Wrapper1: HTMLElement;
  private $Wrapper2: HTMLElement;
  private $InputField: HTMLInputElement;
  private $SubmitButton: HTMLButtonElement;

  constructor(value: string, setValue: (_value: string) => void) {
    this.createEl();
    this.createWrapper();
    this.createInputField(value, setValue);
  }

  private createEl() {
    this.$Form = DOM.createEl("form") as HTMLFormElement;
    this.$Form.onsubmit = this.handleSubmit.bind(this);
  }

  private createWrapper() {
    this.$Wrapper1 = DOM.createEl("div", "mt-3 form-group m-auto div_width_50");
    this.$Wrapper2 = DOM.createEl("div", "input-group mb-3");
    this.$Wrapper1.appendChild(this.$Wrapper2);
    this.$Form.appendChild(this.$Wrapper1);
  }

  private createInputField(value: string, setValue: any) {
    const input = DOM.createEl(
      "input",
      "form-control form-control-lg"
    ) as HTMLInputElement;
    input.type = "text";
    input.placeholder = "단어를 입력하세요.";
    input.id = "inputLarge";
    input.value = value;

    input.oninput = this.handleInputChange(setValue);
    input.autocomplete = "off";
    this.$InputField = input;
  }

  private handleInputChange(setValue: any) {
    return () => {
      console.log(this.$InputField.value);
      setValue(this.$InputField.value);
    };
  }

  private handleSubmit(ev: Event) {
    ev.preventDefault();
    alert(this.$InputField.value);
  }

  render($parent: HTMLElement) {
    this.$Wrapper2.appendChild(this.$InputField);
    $parent.appendChild(this.$Form);
  }
}
