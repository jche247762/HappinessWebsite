window.onload = function() {
	/* Logs in user on page */

	var user = localStorage.getItem("currentUsername");
	if (user != "undefined" && user != "null" && user != "" && user != undefined && user != null) {
		loginUser(user);
	}
}

function checkLogin() {
	alert("Submitted.");
	var inputUsername = document.getElementById("usernameLogin").value;
	var inputPassword = document.getElementById("passwordLogin").value;
	var expectedPassword = localStorage.getItem(inputUsername);

	if (expectedPassword == null) {
		alert("No user with that name was found.");
	}
	else if (expectedPassword == inputPassword) {
		loginUser(inputUsername);
	}
	else {
		alert("Wrong username or password. Please try again");
	}
}

function loginUser(username) {
	// Amy to add nav bar stuff
	localStorage.setItem("currentUsername", username);
	// alert("You've logged in. Welcome, " + localStorage.getItem("currentUsername"));
	// This will hide the login button & display the username
	$("#loginButton").hide(1);
	$("#username-custom").append(localStorage.getItem("currentUsername", username));
	
		// show drop down box when user signed in
	$("#username-custom").hover(function() {
		$(".user-account").css("display", "block");
		}, function(){
        $(".user-account").css("display", "none");
	});
}

/* Not used yet -- add it to the sign out option! */
function signOut() {
	localStorage.remove("currentUsername");
}
