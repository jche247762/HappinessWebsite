function setBestWorstDomain() {
	var rawScores = new Array();
	var categoryScores = new Array();

	// Get all scores
	for (var i=1; i<19; i++) {
		var questionScore = 'input[name="q' + i + '"]:checked';
		rawScores[i-1] = parseInt(document.querySelector(questionScore).value);
	}

	// Separate and add scores into different categories
	for (var i=0; i<9; i++) {
		categoryScores[i] = rawScores[i*2] + rawScores[i*2+1];
	}
	var bestDomain = getMaxIndex(categoryScores);
	var worstDomain = getMinIndex(categoryScores);

	// Put into local storage
	if (localStorage.getItem("currentUsername") == null) {
		localStorage.setItem("tempUserBestDomain", JSON.stringify(bestDomain));
		localStorage.setItem("tempUserWorstDomain", JSON.stringify(worstDomain));
	} else {
		var currentUser = localStorage.getItem("currentUsername")
		localStorage.setItem(currentUser + "BestDomain", JSON.stringify(bestDomain));
		localStorage.setItem(currentUser + "WorstDomain", JSON.stringify(worstDomain));
	}
}

function indexToDomain(arr) {
	for (var i=0; i < arr.length; i++) {
		switch(arr[i]) {
			case 0:
				arr[i] = "Mental Health";
				break;
			case 1:
				arr[i] = "Physical Health";
				break;
			case 2:
				arr[i] = "Time Use";
				break;
			case 3:
				arr[i] = "Education";
				break;
			case 4:
				arr[i] = "Culture";
				break;
			case 5:
				arr[i] = "Government";
				break;
			case 6:
				arr[i] = "Relationships";
				break;
			case 7:
				arr[i] = "Environment";
				break;
			case 8:
				arr[i] = "Finances";
				break;
			default:
				console.log("Something's wrong with this array!");
		}
	}
	return arr;
}

function lowerCapsNoSpaces(str) {
	return str.replace(/\s+/g, '').toLowerCase();
}

function getMaxIndex(arr) {
	var maxIndex = new Array();;
	var max = -1;

	// Find the maximum
	for (var i=0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	// Find all values that match maximum
	var maxIndexCount = 0;
	for (var i=0; i < arr.length; i++) {
		if (arr[i] == max) {
			maxIndex[maxIndexCount] = i;
			maxIndexCount++;
		}
	}

	return indexToDomain(maxIndex);
}

function getMinIndex(arr) {
	var minIndex = new Array();;
	var min = 9;

	// Find the minimum
	for (var i=0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	// Find all values that match minimum
	var minIndexCount = 0;
	for (var i=0; i < arr.length; i++) {
		if (arr[i] == min) {
			minIndex[minIndexCount] = i;
			minIndexCount++;
		}
	}

	return indexToDomain(minIndex);
}
