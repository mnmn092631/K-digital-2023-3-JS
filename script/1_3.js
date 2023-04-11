const h2 = document.getElementById("h2id");
const btn = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  h2.innerHTML = "안녕하세요";
});
