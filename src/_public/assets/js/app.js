/* -------------------------------- VALIDATE -------------------------------- */
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const survey = document.getElementById('survey');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
  console.log('usernameValue', usernameValue)
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const surveyValue = survey.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	// } else if (!isEmail(emailValue)) {
	// 	setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else {
		setSuccessFor(phone);
	}
	if(surveyValue === '') {
		setErrorFor(survey, 'Survey cannot be blank');
	} else {
		setSuccessFor(survey);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'p-form__item error p-form__item--require';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'p-form__item success';
}
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }