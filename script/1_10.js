document.addEventListener("DOMContentLoaded", () => {
  const boxDt = document.querySelector("#boxDt");
  boxDt.addEventListener("change", () => {
    let date = boxDt.value;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date.replaceAll(
      "-",
      ""
    )}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
        let boxTag = "";
        boxList.forEach((box) => {
          boxTag += `<details>
                    <summary>
                      <strong>
                      ${box.rank}위
                      </strong>
                      <span>${
                        box.rankOldAndNew == "NEW"
                          ? "NEW"
                          : box.rankInten === "0"
                          ? "(-)"
                          : box.rankInten > 0
                          ? `(↑${box.rankInten})`
                          : `(↓${box.rankInten.replace("-", "")})`
                      }
                      </span>
                      ${box.movieNm}
                    </summary>
                    <ul>
                      <li>개봉일 : ${
                        box.openDt.replaceAll("-", ". ") + "."
                      }</li>
                      <li>누적관객수 : ${Number(
                        box.audiAcc
                      ).toLocaleString()}명</li>
                      <li>매출 : ${Number(box.salesAmt).toLocaleString()}원</li>
                    </ul>
                    </details>`;
        });
        document.querySelector("#boxDiv").innerHTML = boxTag;
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
