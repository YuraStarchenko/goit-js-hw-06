const widget = {
	changeColorsBtn: document.querySelector('.change-color'),
	body: document.querySelector('body'),
	spanColor: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

widget.changeColorsBtn.addEventListener('click', () => {
	widget.body.style.backgroundColor = getRandomHexColor();
	widget.spanColor.textContent = getRandomHexColor();
});
