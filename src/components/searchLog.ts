import DOM from "../utils/index.js";
import { apiUrl } from "../utils/api.js";

export default class SearchLog {
  words: string[];
  $wrapper: HTMLElement;
  $$buttons: HTMLElement[];
  constructor(words: string[], setSearchData: any, setOpenAlert: any) {
    this.words = words;
    this.$wrapper = DOM.createEl(
      "div",
      "mt-2 m-auto flex-row pt-3 div_width_50 min_height_span"
    );
    this.$wrapper.addEventListener("click", (e: any) => {
      // TODO:axios연동 후 수정
      if (!e.target) return;
      if (e.target.classList.contains("btn")) {
        fetch(`${apiUrl}/${e.target.textContent}`)
          .then((_res) => _res.json())
          .then((data) => {
            setSearchData(data[0]);
          })
          .catch(() => {
            setOpenAlert(true);
            setTimeout(() => {
              setOpenAlert(false);
            }, 3000);
          });
      }
    });
  }
  createButton(word: string) {
    const $h4 = DOM.createEl("h4", "d-inline");
    const $button = DOM.createEl(
      "button",
      "btn badge rounded-pill bg-light m-1 align-content-center"
    );
    $button.innerText = word;
    $h4.appendChild($button);
    this.$wrapper.appendChild($h4);
  }

  // 컴포넌트를 업데이트함. 기존에 존재하는 엘리먼트를 삭제하고, 새로운 엘리먼트를 생성해서 렌더링함.
  update(searchLog: string[], $parent: HTMLElement) {
    this.words = searchLog;
    this.remove();
    this.render($parent);
  }

  // 기존에 존재하는 컴포넌트를 삭제하는 메서드
  remove() {
    while (this.$wrapper.hasChildNodes()) {
      this.$wrapper.removeChild(this.$wrapper.childNodes[0]);
    }
  }

  // 컴포넌트를 렌더링하는 메서드
  render($parent: HTMLElement) {
    this.words.forEach((word) => {
      this.createButton(word);
    });
    // 이렇게 해준 이유는 이 컴포넌트가 리랜더링 될 때, this.$wrapper 가 $parent 에 항상 append 되어있는 상태로 유지하기 위함이다.
    // 만약 그렇지 않으면 레이아웃이 무너진다 => 서치 로그가 인풋컴포넌트 아래에 위치하게됨
    if (this.$wrapper.parentNode === null) {
      $parent.appendChild(this.$wrapper);
    }
  }
}
