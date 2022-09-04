// All goals by perspective in an array   
var allGoals = [[ /* mentalhealth */
		"Set realistic goals, when you achieve those goals, enjoy yourself. It’s good to relish the good memories.",
		"Appreciate others. Be thankful for the little things and do things for people and they will do it for you.", 
		"Love yourself. Say and do nice things for yourself and stop the negative self talk.",
		"Follow your bliss. Go towards what makes you happy at work and go away from things that make you unhappy."
	], [	/* physicalhealth */
		"Explore the full range of emotions and express them in a healthy way.",
		"Take health breaks, take 10 minutes to stretch, walk or breath deeply.",
		"Eat local Veggies. Plant a garden. Get to know what fruits and vegetables grow locally.",
		"Sleep. Give yourself extra time to sleep. Catch up on some rest."
	], [	/* timeuse */
		"Schedule downtime. Schedule some me time and keep it unless there is a real emergency.",
		"Help others. Some say the key to happiness is helping others.",
		"Get picky. learn to savour life. This means slowing down so you have time to enjoy the moment.",
		"Sleep and exercise. Get enough sleep. You will have more energy and are more efficient."
	], [	/* education */
		"Re-think learning. Book learning is one method but there are other ways to learn, take a new hobby.",
		"Break out of your comfort zone. Learn another perspective.",
		"Get in touch with your core values.",
		"Go somewhere where you haven’t been to before."
	], [	/* culture */
		"Put yourself in social situation where you are the only one of your cultural group.",
		"Celebrate/go to a festival.",
		"Be authentic. Be yourself.",
		"Get in touch with your values."
	], [	/* government */
		"Get involved, or amp up involvement to get money out of politics.",
		"Volunteer for causes you believe in.",
		"Start an online petition. Invite your friends and family.",
		"Become a history buff. Learn about your history of you nation, state or city."
	], [	/* relationships */
		"Detach from love. Do some soul searching. Do some Eat. Pray. Love.",
		"Express appreciation. You should experiment with that.",
		"Be the person you want to be.",
		"Be wierd. Instead of trying to fit in be different, be yourself."
	], [	/* environment */
		"Take a mini-vacation in your hometown or visit the museums.",
		"Go to the farmer’s market or festival.",
		"Plant a garden in your parking strip. Donate extra to a local food bank.",
		"Exercise in community: Do a social exercise you enjoy."
	], [	/* finances */
		"Remember to save for the future. It will be here soon enough.",
		"Don’t let what other people think of your car dictate what you drive. You shouldn't care.",
		"Don’t torture yourself. Shopping is torture when you don’t have money to buy what you want.",
		"Take care of your stuff."
	]	];

// Names of all perspectives. Same order as AllGoals array
var allPerspectives = [ "mentalhealth", "physicalhealth", "timeuse", "education", "culture",
					    "government", "relationships", "environment", "finances"]

// returns the index given the name of the perspective
function getPerspectiveIndex(perspective){
	for (var i = 0; i < allPerspectives.length; i++){
		if (perspective == allPerspectives[i]) {
			return i;
		}
	}
	return -1;
}

// changes the goal tile on the page to a "checked" status
function addGoal(perspective,goalIndex){
	var userid = localStorage.getItem("currentUsername");
	if (userid == null){
		alert("User not logged in. Please log in to save goals.")
	}
	// change tile
	var perspectiveIndex = getPerspectiveIndex(perspective);
	$('#'+perspective+goalIndex).replaceWith(getGoalHtml(perspectiveIndex,goalIndex,"checked"));
	// update memory
	var statusOfGoals = JSON.parse(localStorage.getItem(userid+"Goals"));
	statusOfGoals[perspectiveIndex][goalIndex] = "checked";
	localStorage.setItem(userid+"Goals",JSON.stringify(statusOfGoals));
}

// changes the goal tile on the page to an "unchecked" status
function removeGoal(perspective,goalIndex){
	var userid = localStorage.getItem("currentUsername");
	if (userid == null){
		alert("User not logged in. Please log in to save goals.")
	}
	// change tile
	var perspectiveIndex = getPerspectiveIndex(perspective);
	$('#'+perspective+goalIndex).replaceWith(getGoalHtml(perspectiveIndex,goalIndex,"unchecked"));
	// update memory
	var statusOfGoals = JSON.parse(localStorage.getItem(userid+"Goals"));
	statusOfGoals[perspectiveIndex][goalIndex] = "unchecked";
	localStorage.setItem(userid+"Goals",JSON.stringify(statusOfGoals));
}

// changes the goal tile on the page to a "completed" status
function completeGoal(perspective,goalIndex){
	var userid = localStorage.getItem("currentUsername");
	if (userid == null){
		alert("User not logged in. Please log in to save goals.")
	}
	// change tile
	var perspectiveIndex = getPerspectiveIndex(perspective);
	$('#'+perspective+goalIndex).replaceWith(getGoalHtml(perspectiveIndex,goalIndex,"completed"));
	// update memory
	var statusOfGoals = JSON.parse(localStorage.getItem(userid+"Goals"));
	statusOfGoals[perspectiveIndex][goalIndex] = "completed";
	localStorage.setItem(userid+"Goals",JSON.stringify(statusOfGoals));
}

// get the html of a goal, given the index of the perspective, the index of the goal and it's status
function getGoalHtml(perspectiveIndex,goalIndex,status){
	var html = '<li class="tile--single-step" id="' + allPerspectives[perspectiveIndex] + goalIndex +
			'"><div class="tile--content"><p class="tile--text">' + allGoals[perspectiveIndex][goalIndex] +
			'</p>';
	if (status == "unchecked"){
		html = html + '<button onclick="addGoal(\'' + allPerspectives[perspectiveIndex] + '\',' + goalIndex + 
			')" class="tile--button-text">&#x271A; Add to my goals</button>';
	} else if (status == "checked") {
		html = html + '<div class="tile--button-container"><button onclick="removeGoal(\'' + allPerspectives[perspectiveIndex] + '\','+ goalIndex +
		  ')" class="tile--button-in-container">&#x2715; Remove Goal</button><button onclick="completeGoal(\'' + allPerspectives[perspectiveIndex] +
		  '\',' + goalIndex + ')" class="tile--button-in-container">&#x2610; Complete Goal</button></div>';
			
	} else if (status == "completed") {
		html = html + '<button onclick="addGoal(\'' + allPerspectives[perspectiveIndex] + '\',' + goalIndex + 
			')" class="tile--button-text">&#x2714; Undo Complete</button>';
	}
	html = html + '</div></li>';
	return html;
}

		
