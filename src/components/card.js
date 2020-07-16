export default class Card {
  constructor(content, index) {
    this.html = this.createHtml(content);
    this.changePosition(index);
  }

  createHtml(content) {
    const fragment = document.createDocumentFragment();
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = content;
    div.style.backgroundColor = `rgba(${this.random255()}, ${this.random255()}, ${this.random255()}, 0.5)`;
    return fragment.appendChild(div);
  }

  random255() {
    return Math.floor(Math.random() * 255);
  }

  getHtml() {
    return this.html;
  }

  destroy() {
    this.html.remove();
  }

  changeValue(value) {
    this.html.innerText = value;
  }

  changePosition(index) {
    this.html.style.top = 200 * (index - 1);
  }
}
