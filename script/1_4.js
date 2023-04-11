const btns = document.querySelectorAll("button");
const h2 = document.querySelector("#h2id");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    h2.textContent = `선택 : ${btn.textContent}`;
  });
});
