var res = window.location.search;
res = res.slice(8);
var element = document.getElementById("score");
element.innerHTML = res+"/100";
