document.addEventListener("DOMContentLoaded", () => {
  let selectedFrom = document.querySelector("#from");
  let selectedTo = document.querySelector("#to");

  const FromLabel = document.querySelector("div.fromInput");
  const toLabel = document.querySelector("div.toInput");

  const input = document.querySelector("#input");
  const result = document.querySelector("#result");

  FromLabel.innerHTML = selectedFrom.value;
  toLabel.innerHTML = selectedTo.value;

  selectedFrom.addEventListener("change", (e) => {
    FromLabel.innerHTML = e.target.value;
    selectedFrom = e.target;
    getResult();
  });

  selectedTo.addEventListener("change", (e) => {
    toLabel.innerHTML = e.target.value;
    selectedTo = e.target;
    getResult();
  });

  input.addEventListener("input", () => {
    if (input.value === "") {
      result.value !== "" && (result.value = "");
      return;
    }
    getResult();
  });

  const getResult = () => {
    if (selectedFrom.value === selectedTo.value) result.value = input.value;
    else {
      if (selectedFrom.value === "ºC")
        result.value = (input.value * 1.8 + 32).toFixed(2);
      else result.value = ((input.value - 32) / 1.8).toFixed(2);
    }
  };
});
