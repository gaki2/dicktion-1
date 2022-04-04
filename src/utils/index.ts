/**
 * class포함시켜서 DOM Element 만드는 함수
 */
function createEl(
  key: keyof HTMLElementTagNameMap,
  classList?: string[] | string
) {
  const el = document.createElement(key);
  if (typeof classList === "string") {
    el.classList.add(...classList.split(" "));
  } else if (typeof classList === "object") {
    el.classList.add(...classList);
  }
  return el;
}

const DOM = {
  createEl,
};
export default DOM;
