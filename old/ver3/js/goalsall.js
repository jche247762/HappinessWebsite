/*
in this order:
Mental Heath
Physical Health
Time Use
Work / Education
Culture
Government
Relationships and Community
The Environment
Standard of Living
*/


var allGoals = [ /* mentalhealth */
	[	"Set realistic goals, when you achieve those goals, enjoy yourself. It’s good to relish the good memories.",
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
function getPerspectiveNum(perspective){
	var perspectiveNum = -1;
	if (perspective.equals("mentalhealth")){
		perspectiveNum = 0;
	} else if (perspective.equals("physicalhealth")){
		perspectiveNum = 1;
	} else if (perspective.equals("timeuse")){
		perspectiveNum = 2;
	} else if (perspective.equals("education")){
		perspectiveNum = 3;
	} else if (perspective.equals("culture")){
		perspectiveNum = 4;
	} else if (perspective.equals("government")){
		perspectiveNum = 5;
	} else if (perspective.equals("relationships")){
		perspectiveNum = 6;
	} else if (perspective.equals("environment")){
		perspectiveNum = 7;
	} else if (perspective.equals("finances")){
		perspectiveNum = 8;
	}
	return perspectiveNum;
}
function getGoal(perspective, goalNum){
	var perspectiveNum = getPerspectiveNum(perspective)
	return allGoals[perspectiveNum][num-1];
}

function removeGoal(perspective,goalNum){
	var user = localStorage.getItem(currentUser);
	$(perspective+num).replaceWith(getGoalHtml(perspective,num,"unchecked"));
	var statusOfGoals = JSON.parse(localStorage.getItem(currentUser+"Goals"));
	statusOfGoals[getPerspectiveNum(perspective)][goalNum-1] = "unchecked";
	localStorage.setItem(currentUser+"Goals",JSON.stringify(statusOfGoals));
}

function getGoalHtml(perspective,num,status){
	var goal = getGoal(perspective,num);
	var html = '<li class="tile--single-step" id="physicalhealth1"><div class="tile--content"><p class="tile--text">'
				+ goal +
'</p><div class="tile--button-container"><button class="tile--button-in-container">&#x2715; Remove Goal</button><button class="tile--button-in-container font--light-blue">&#x2610; Complete Goal</button></div></div></li>';
	return html;
}

function
