import { apiUrl } from "../utils/api.js";
import DOM from "../utils/index.js";

export default class SearchForm {
  private $Form: HTMLFormElement;
  private $Wrapper1: HTMLElement;
  private $Wrapper2: HTMLElement;
  private $InputField: HTMLInputElement;
  private $SubmitButton: HTMLButtonElement;

  constructor(
    value: string,
    setValue: (_value: string) => void,
    setSearchedData: (data: any) => void
  ) {
    this.createEl(setSearchedData);
    this.createWrapper();
    this.createInputField(value, setValue);
  }

  private createEl(setSearchedData: (data: any) => void) {
    this.$Form = DOM.createEl("form") as HTMLFormElement;
    this.$Form.onsubmit = this.handleSubmit(setSearchedData).bind(this);
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
      setValue(this.$InputField.value);
    };
  }

  private handleSubmit(setSearchedData: any) {
    return async (ev: Event) => {
      ev.preventDefault();
      const res = await fetch(`${apiUrl}/${this.$InputField.value}`);
      const data = await res.json();
      setSearchedData(data);
      alert(data);
    };
  }

  render($parent: HTMLElement) {
    this.$Wrapper2.appendChild(this.$InputField);
    $parent.appendChild(this.$Form);
  }
}
