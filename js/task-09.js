function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const	changeColorsBtn = document.querySelector('.change-color');
const	spanColor = document.querySelector('.color');
const	body = document.body;

changeColorsBtn.addEventListener('click', () => {
	body.style.backgroundColor = getRandomHexColor();
	spanColor.textContent = getRandomHexColor();
});