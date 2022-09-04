function score(){
	var inputs = document.getElementById("quiz").elements;
	var count=0, total=0;

	for(var i=0; i<inputs.length; i++){
		if(inputs[i].checked){
			total += parseInt(inputs[i].value);
			count++;
		}
	}

	var result = (total/(count*4))*100;
	result = result.toFixed(0);
	window.location.assign("quizresults.html?result="+result);
}






