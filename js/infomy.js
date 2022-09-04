// prints user information onto the myinfo.html page
$(document).ready( function() {
	var userid = localStorage.getItem("currentUsername");
	if (userid == null) return;
	
	// Put user information onto page
	$('#firstname').replaceWith(localStorage.getItem(userid+'FirstName'));
	$('#lastname').replaceWith(localStorage.getItem(userid+'LastName'));
	$('#gender').replaceWith(localStorage.getItem(userid+'Gender'));
	$('#userid').replaceWith(userid);
	$('#email').replaceWith(localStorage.getItem(userid+'Email'));
});

