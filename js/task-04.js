const counterValue = {
	value: 0,
	increment() {
		console.log('increment -> this', this);
		this.value += 1;
	},
	decrement() {
		console.log('decrement -> this', this);
		this.value -= 1;
	},
};



const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
	console.log('клик по кнопке минус');

	counterValue.decrement();
	console.log(counterValue);
	valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
	console.log('клик по кнопке плюс');

	counterValue.increment();
	console.log(counterValue);
	valueEl.textContent = counterValue.value;
});
