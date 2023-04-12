document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const clickBtn = document.querySelector("form button[type='submit']");
  clickBtn.addEventListener("click", () => {
    const imgDiv = document.querySelector("article > div");
    imgDiv.style.textAlign = "center";

    const checkedInput = document.querySelector("input:checked");
    if (checkedInput === null) return alert("숫자를 선택해주세요.");

    let diceNum = Math.floor(Math.random() * 6) + 1;
    imgDiv.innerHTML = `<img src="./img/${diceNum}.png" alt="dice num${diceNum}" / >`;

    const h2 = document.querySelector("#h2id");
    if (diceNum === Number(checkedInput.value)) h2.innerHTML = "정답입니다.";
    else h2.innerHTML = "틀렸습니다.";
    h2.style.textAlign = "center";
  });
});
