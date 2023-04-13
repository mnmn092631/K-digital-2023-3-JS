document.addEventListener("DOMContentLoaded", () => {
  const resultTxt = document.querySelector("#resultTxt");
  let arr = [];

  // 배열에 자료 추가
  const createBtns = document.querySelectorAll("div.create > button");
  createBtns.forEach((createBtn) => {
    createBtn.addEventListener("click", () => {
      switch (createBtn.innerHTML) {
        case "사과":
          arr.push("🍎");
          break;
        case "바나나":
          arr.push("🍌");
          break;
        case "오렌지":
          arr.push("🍊");
          break;
        case "수박":
          arr.push("🍉");
          break;
      }
      resultTxt.value = arr.join("");
    });
  });

  // 배열에 자료 삭제
  const deleteBtns = document.querySelectorAll("div.delete > button");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      switch (deleteBtn.innerHTML) {
        case "사과삭제":
          if (arr.lastIndexOf("🍎") === -1) break;
          arr.splice(arr.lastIndexOf("🍎"), 1);
          break;
        case "바나나삭제":
          if (arr.lastIndexOf("🍌") === -1) break;
          arr.splice(arr.lastIndexOf("🍌"), 1);
          break;
        case "오렌지삭제":
          if (arr.lastIndexOf("🍊") === -1) break;
          arr.splice(arr.lastIndexOf("🍊"), 1);
          break;
        case "수박삭제":
          if (arr.lastIndexOf("🍉") === -1) break;
          arr.splice(arr.lastIndexOf("🍉"), 1);
          break;
      }
      resultTxt.value = arr.join("");
    });
  });

  const deleteAllBtns = document.querySelectorAll("div.deleteAll > button");
  deleteAllBtns.forEach((deleteAllBtn) => {
    deleteAllBtn.addEventListener("click", () => {
      switch (deleteAllBtn.innerHTML) {
        case "사과전체삭제":
          arr = arr.filter((item) => {
            return item !== "🍎";
          });
          break;
        case "바나나전체삭제":
          arr = arr.filter((item) => {
            return item !== "🍌";
          });
          break;
        case "오렌지전체삭제":
          arr = arr.filter((item) => {
            return item !== "🍊";
          });
          break;
        case "수박전체삭제":
          arr = arr.filter((item) => {
            return item !== "🍉";
          });
          break;
      }
      resultTxt.value = arr.join("");
    });
  });

  // 배열에 자료 변경
  const updateBtns = document.querySelectorAll("div.update > button");
  updateBtns.forEach((updateBtn) => {
    updateBtn.addEventListener("click", () => {
      switch (updateBtn.innerHTML) {
        case "사과-&gt;당근":
          arr = arr.map((item) => {
            return item === "🍎" ? (item = "🥕") : item;
          });
          break;
        case "바나나-&gt;오이":
          arr = arr.map((item) => {
            return item === "🍌" ? (item = "🥒") : item;
          });
          break;
        case "오렌지-&gt;아보카도":
          arr = arr.map((item) => {
            return item === "🍊" ? (item = "🥑") : item;
          });
          break;
        case "수박-&gt;브로콜리":
          arr = arr.map((item) => {
            return item === "🍉" ? (item = "🥦") : item;
          });
          break;
      }
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
