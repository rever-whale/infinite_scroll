import Card from "./components/card.js";

const $app = document.querySelector("#app");
const $wrapper = document.querySelector("#wrapper");

let uid = 0;
const renderList = [];
while (uid < 6) {
  let card = new Card(`card${++uid}`, uid);
  renderList.push(card);
  $wrapper.appendChild(card.getHtml());
}

let getCount = () => uid % 6;
let isEnded = false;
const DEFAULT_CARD_HEIGHT = 200;
$app.addEventListener("scroll", (e) => {
  requestAnimationFrame(() => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    console.log(offsetHeight + scrollTop, scrollHeight);
    if (offsetHeight + scrollTop > scrollHeight) {
      const targetCard = renderList[getCount()];
      targetCard.changeValue(`card${++uid}`);
      targetCard.changePosition(uid);
      $wrapper.style.height =
        $wrapper.clientHeight + DEFAULT_CARD_HEIGHT + "px";
      isEnded = true;
    } else if (
      isEnded &&
      uid > 1 &&
      offsetHeight + scrollTop < scrollHeight - DEFAULT_CARD_HEIGHT
    ) {
      const targetCard = renderList[5 - getCount()];
      targetCard.changeValue(`card${--uid}`);
      targetCard.changePosition(uid);
      $wrapper.style.height =
        $wrapper.clientHeight - DEFAULT_CARD_HEIGHT + "px";
      isEnded = offsetHeight + scrollTop != 0;
    }
  });
});
