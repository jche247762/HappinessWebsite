function store() {
	var firName = document.getElementById('fname').value;
	localStorage.setItem('firstName',firName);

	var lasName = document.getElementById('lname').value;
	localStorage.setItem('lastName',lasName);

	var inputGender = document.getElementById('gender').value;
	localStorage.setItem('ugender',inputGender);

	var userName = document.getElementById('username').value;
	localStorage.setItem('usern',userName);

	var inputEmail = document.getElementById('email').value;
	localStorage.setItem('emailadd',inputEmail);

	var pass = document.getElementById('psw').value;
	localStorage.setItem('password',pass);
}
