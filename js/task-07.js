// const input = document.getElementById('font-size-control');
// console.log(input);
// const span = document.getElementById('text');
// console.log(span);

// input.addEventListener('input', handleInputRange);
// function handleInputRange(event) {
// 	span.style.fontSize = event.currentTarget.value + "px";
// }

const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);