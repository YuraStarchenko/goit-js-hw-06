// Черновик ->
// const inputFontSize = document.getElementById('font-size-control');
// console.log(input);
// const spanText = document.getElementById('text');
// console.log(spanText);

// input.addEventListener('input', handleInputRange);
// function handleInputRange(event) {
// 	span.style.fontSize = event.currentTarget.value + "px";
// }

const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const handleInputRange = () => {
  spanText.style.fontSize = `${inputFontSize.value}px`;
};

inputFontSize.addEventListener("input", handleInputRange);
