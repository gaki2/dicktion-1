/**
 * class포함시켜서 DOM Element 만드는 함수
 */
function createEl(
  key: keyof HTMLElementTagNameMap,
  classList?: string[] | string,
  innerText?: string | null
) {
  const el = document.createElement(key);
  if (typeof classList === "string") {
    el.classList.add(...classList.split(" "));
  } else if (typeof classList === "object") {
    el.classList.add(...classList);
  }
  if (innerText) {
    el.innerText = innerText;
  }
  return el;
}

function appendEl($parent: HTMLElement, ...$children: HTMLElement[]) {
  if ($children.length < 1) {
    return false;
  }
  for (let i = 0; i < $children.length; i += 1) {
    $parent.appendChild($children[i]);
  }
  return true;
}

const DOM = {
  createEl,
  appendEl,
};
export default DOM;
