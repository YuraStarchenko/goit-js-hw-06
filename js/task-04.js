const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
	valueEl.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
	valueEl.textContent = counterValue += 1;
});
