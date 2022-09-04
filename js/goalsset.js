// prints the the goal tiles onto a rsrch page
// goal tiles will be printed according to their status if a user is logged in
$(document).ready( function() {
	// get the perspective from the url
	var fileName = location.pathname.split('/').slice(-1)[0];
	var perspective = fileName.substring(5,fileName.indexOf('.'));
	
	var userid = localStorage.getItem("currentUsername");
	perspectiveIndex = getPerspectiveIndex(perspective);
	
	$('#'+perspective).empty();
	
	if (userid == null) {
		for (var j = 0; j < allGoals[perspectiveIndex].length; j++){
			$('#'+perspective).append(getGoalHtml(perspectiveIndex,j,"unchecked"));
		}
	} else {
		var statusOfGoals = JSON.parse(localStorage.getItem(userid+"Goals"));
		for (var j = 0; j < statusOfGoals[perspectiveIndex].length; j++){ 
			$('#'+perspective).append(getGoalHtml(perspectiveIndex,j,statusOfGoals[perspectiveIndex][j]));
		}
	}
});
