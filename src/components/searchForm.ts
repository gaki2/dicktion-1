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
    setInputValue: (_value: string) => void,
    setSearchedData: (data: any) => void,
    setOpenAlert: (bool: boolean) => void
  ) {
    this.createEl(setInputValue, setSearchedData, setOpenAlert);
    this.createWrapper();
    this.createInputField(value, setInputValue);
  }

  private createEl(
    setInputValue: (data: any) => void,
    setSearchedData: (data: any) => void,
    setOpenAlert: (bool: boolean) => void
  ) {
    this.$Form = DOM.createEl("form") as HTMLFormElement;
    this.$Form.onsubmit = this.handleSubmit(
      setInputValue,
      setSearchedData,
      setOpenAlert
    ).bind(this);
  }

  private createWrapper() {
    this.$Wrapper1 = DOM.createEl("div", "mt-3 form-group m-auto div_width_50");
    this.$Wrapper2 = DOM.createEl("div", "input-group mb-3");
    this.$Wrapper1.appendChild(this.$Wrapper2);
    this.$Form.appendChild(this.$Wrapper1);
  }

  private createInputField(value: string, setInputValue: any) {
    const input = DOM.createEl(
      "input",
      "form-control form-control-lg"
    ) as HTMLInputElement;
    input.type = "text";
    input.placeholder = "단어를 입력하세요.";
    input.id = "inputLarge";
    input.value = value;

    input.oninput = this.handleInputChange(setInputValue);
    input.autocomplete = "off";
    this.$InputField = input;
  }

  private handleInputChange(setInputValue: any) {
    return () => {
      setInputValue(this.$InputField.value);
    };
  }

  private handleSubmit(
    setInputValue: any,
    setSearchedData: any,
    setOpenAlert: (bool: boolean) => void
  ) {
    return async (ev: Event) => {
      ev.preventDefault();
      try {
        const res = await fetch(`${apiUrl}/${this.$InputField.value}`);
        const data = await res.json();
        setSearchedData(data[0]);
      } catch (e) {
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 3000);
      } finally {
        setInputValue("");
        this.$InputField.value = "";
      }
    };
  }

  render($parent: HTMLElement) {
    this.$Wrapper2.appendChild(this.$InputField);
    $parent.appendChild(this.$Form);
  }
}
