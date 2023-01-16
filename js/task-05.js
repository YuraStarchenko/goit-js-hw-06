const ref = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output')
};

ref.input.addEventListener('input', onInoutListener);

function onInoutListener(event) {
	ref.output.textContent = event.currentTarget.value || 'Anonymous';
}

// Черновой вариант 
// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', onInoutListener);
// output.addEventListener('output', onInoutListener);

// function onInoutListener(event) {
// 	input.textContent = event.currentTarget.value || 'Anonymous';
// 	output.textContent = event.currentTarget.value || 'Anonymous';
// }