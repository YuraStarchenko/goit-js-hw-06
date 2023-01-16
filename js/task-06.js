const input = document.getElementById('validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
	input.classList = [];
	if(event.target.value.length === 6){
			input.classList.add('valid');
	}else{
			input.classList.add('invalid');
	}
};
