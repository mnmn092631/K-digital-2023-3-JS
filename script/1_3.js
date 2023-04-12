// document.addEventListener("DOMContentLoaded", () => {});

const h2 = document.querySelector("#h2id");
// h2.innerHTML = "아이디 선택자 시작입니다.";

// const newBtn = document.createElement("button");
// // newBtn.innerHTML = "새로운 버튼입니다";
// newBtn.textContent = "확인";
// document.getElementById("hdiv").append(newBtn);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const clickBtn = document.querySelector("form button[type='submit']");
const imgDiv = document.querySelector("article > div");
imgDiv.style.textAlign = "center";

clickBtn.addEventListener("click", () => {
  // h2.innerHTML = "안녕하세요";
  const checkedInput = document.querySelector("input:checked");
  if (checkedInput == null) return alert("숫자를 선택해주세요.");

  let diceNum = Math.floor(Math.random() * 6) + 1;
  imgDiv.innerHTML = `<img src="./img/${diceNum}.png" alt="dice num${diceNum}" / >`;

  if (diceNum === Number(checkedInput.value)) h2.innerHTML = "정답입니다.";
  else h2.innerHTML = "틀렸습니다.";
  h2.style.textAlign = "center";
});

const resetBtn = document.querySelector("form button[type='reset']");
resetBtn.addEventListener("click", () => {
  imgDiv.innerHTML = "";
  h2.innerHTML = "";
});
