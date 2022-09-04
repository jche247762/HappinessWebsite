var currentUsername;

function checkLogin() {
	alert("Submitted.");
	var expectedPassword = localStorage.getItem(document.getElementById("usernameLogin").value);
	if (expectedPassword == document.getElementById("passwordLogin").value) {
		function loginUser();
	}
	else {
		alert("Wrong username or password.");
	}
}

function loginUser() {
	// Amy to do nav bar stuff
	currentUsername = document.getElementById("usernameLogin").value;
	alert("You've logged in. Welcome, " + currentUsername);
}
