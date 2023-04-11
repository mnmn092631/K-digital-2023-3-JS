// document.addEventListener("DOMContentLoaded", () => {});

const h2 = document.querySelector("#h2id.h2Class");
h2.innerHTML = "아이디 선택자 시작입니다.";

const newBtn = document.createElement("button");
// newBtn.innerHTML = "새로운 버튼입니다";
newBtn.textContent = "확인";
document.getElementById("hdiv").append(newBtn);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const clickBtn = document.querySelector("form > button");
clickBtn.addEventListener("click", () => {
  h2.innerHTML = "안녕하세요";
});
