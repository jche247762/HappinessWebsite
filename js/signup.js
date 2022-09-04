function signUp() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var gender = document.querySelector('input[name="gender"]:checked').value; // Radio input, that's why it's different
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value; 
	var password = document.getElementById('psw').value
	
	localStorage.setItem(username, password); // Sets userid and password
	localStorage.setItem(username + "FirstName", fname);
	localStorage.setItem(username + "LastName", lname);
	localStorage.setItem(username + "Email", email);
	localStorage.setItem(username + "Gender", gender);
	
	// initialise goals status
	var statusOfGoals = new Array();
	for (var i = 0; i < 9; i++){
		var nestedArr = new Array();
		for (var j = 0; j < 4; j++){
			nestedArr[j] = "unchecked";
		}
		statusOfGoals[i] = nestedArr;
	}
	localStorage.setItem(username+"Goals", JSON.stringify(statusOfGoals));
	
	// Automatically logs in user when they sign up
	loginUser(username);
}
