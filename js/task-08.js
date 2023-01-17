const form = document.querySelector('.login-form');

const onFormSubmin = (event) => {
	event.preventDefault();

	const email = event.currentTarget.elements.email;
	const password = event.currentTarget.elements.password;

	if (email.value === '' || password.value === '') {
		alert('Користувач, всі поля мають бути заповнені!');
	} else {
		event.email = email.value;
		event.password = password.value;
	}
	console.log({email: email.value,
		password: password.value });
	event.currentTarget.reset();
};
form.addEventListener('submit', onFormSubmin);
