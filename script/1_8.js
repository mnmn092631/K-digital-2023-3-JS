document.addEventListener("DOMContentLoaded", () => {
  const resultTxt = document.querySelector("#resultTxt");
  const fruit = {
    사과: "🍎",
    바나나: "🍌",
    오렌지: "🍊",
    수박: "🍉",
    당근: "🥕",
    오이: "🥒",
    아보카도: "🥑",
    브로콜리: "🥦",
  };
  let arr = [];

  // 배열에 자료 추가
  const createBtns = document.querySelectorAll("div.create > button");
  createBtns.forEach((createBtn) => {
    createBtn.addEventListener("click", () => {
      arr.push(fruit[createBtn.innerHTML]);
      resultTxt.value = arr.join("");
    });
  });

  // 배열에 자료 삭제
  const deleteBtns = document.querySelectorAll("div.delete > button");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      let clickedValue = deleteBtn.innerHTML.replace("삭제", "");
      if (arr.lastIndexOf(fruit[clickedValue]) === -1) return;
      arr.splice(arr.lastIndexOf(fruit[clickedValue]), 1);
      resultTxt.value = arr.join("");
    });
  });

  const deleteAllBtns = document.querySelectorAll("div.deleteAll > button");
  deleteAllBtns.forEach((deleteAllBtn) => {
    deleteAllBtn.addEventListener("click", () => {
      let clickedValue = deleteAllBtn.innerHTML.replace("전체삭제", "");
      arr = arr.filter((item) => {
        return item !== fruit[clickedValue];
      });
      resultTxt.value = arr.join("");
    });
  });

  // 배열에 자료 변경
  const updateBtns = document.querySelectorAll("div.update > button");
  updateBtns.forEach((updateBtn) => {
    updateBtn.addEventListener("click", () => {
      let fromValue = updateBtn.innerHTML.split("-&gt;")[0];
      let toValue = updateBtn.innerHTML.split("-&gt;")[1];
      arr = arr.map((item) => {
        return item === fruit[fromValue] ? fruit[toValue] : item;
      });
      resultTxt.value = arr.join("");
    });
  });

  // reset 버튼
  const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", () => {
    resultTxt.value = "";
    arr = [];
  });
});
