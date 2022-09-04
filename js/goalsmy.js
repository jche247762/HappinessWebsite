// prints added and completed goals onto the mygoals.html page
$(document).ready( function() {
	var userid = localStorage.getItem("currentUsername");
	if (userid == null) return;
	var statusOfGoals = JSON.parse(localStorage.getItem(userid+"Goals"));
	for (var i = 0; i < statusOfGoals.length; i++){
		for (var j = 0; j < statusOfGoals[i].length; j++){
			if (statusOfGoals[i][j] == "completed"){
				$("#goalscompleted").append(getGoalHtml(i,j,"completed"));
			} else if (statusOfGoals[i][j] == "checked"){
				$("#goalsincomplete").append(getGoalHtml(i,j,"checked"));
			}
		}
	}
});
