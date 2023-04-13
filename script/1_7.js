const palindrome = (inputTxt, resultTxt) => {
  let strValue = inputTxt.value;

  if (strValue === "") {
    alert("입력을 해주세요.");
    return;
  }

  let palin = strValue.split("").reverse().join("");

  if (strValue === palin) resultTxt.value = `${palin} : 회문입니다.`;
  else resultTxt.value = `${palin} : 회문이 아닙니다.`;
};

const numSum = (inputTxt, resultTxt) => {
  let numValue = inputTxt.value;

  if (numValue === "") {
    alert("입력을 해주세요.");
    return;
  }

  let sum = numValue.split(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g).reduce((acc, cur) => {
    return acc + +cur;
  }, 0);

  resultTxt.value = `숫자합계 : ${sum}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const inputTxt = document.querySelector("#inputTxt");
  const resultTxt = document.querySelector("#resultTxt");

  const btns = document.querySelectorAll("button[type='button']");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let isStrCheck = btn.getAttribute("id") === "strCheck";
      if (isStrCheck) palindrome(inputTxt, resultTxt);
      else numSum(inputTxt, resultTxt);
    });
  });

  inputTxt.addEventListener("input", () => {
    if (inputTxt.value === "") resultTxt.value = "";
  });
});
