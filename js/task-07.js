const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const handleInput = () => {
  spanText.style.fontSize = `${inputFontSize.value}px`;
};

inputFontSize.addEventListener("input", handleInput);