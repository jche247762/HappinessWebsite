var res = window.location.search;
res = res.slice(8);
var element = document.getElementById("score");
element.innerHTML = res+"/100";

var bestDomain = new Array();
var worstDomain = new Array();
if (localStorage.getItem("currentUsername") == null) {
  bestDomain = JSON.parse(localStorage.getItem("tempUserBestDomain"));
  worstDomain = JSON.parse(localStorage.getItem("tempUserWorstDomain"));
} else {
  currentUser = localStorage.getItem("currentUsername");
  bestDomain = JSON.parse(localStorage.getItem(currentUser + "BestDomain"));
  worstDomain = JSON.parse(localStorage.getItem(currentUser + "WorstDomain"));

  console.log("working 1");
}

var domain, tile, item;
for (var i=0; i<bestDomain.length; i++) {
  domain = lowerCapsNoSpaces(bestDomain[i]);
  tile = '<div class="tile--single"><a href="rsrch' + domain + '.html">' +
             '<img src="img/box-' + domain + '.jpg" class="tile--img" />' + '<div class="label--background">' +
             '<p class="tile--label">' + bestDomain[i] + '</p></div></a></div>';
  item = document.createElement('li');
  item.innerHTML = tile;
  document.getElementById("top-domain").appendChild(item);
  console.log("working 2");
}

for (var j=0; j<worstDomain.length; j++) {
  domain = lowerCapsNoSpaces(worstDomain[j]);
  tile = '<div class="tile--single"><a href="rsrch' + domain + '.html">' +
             '<img src="img/box-' + domain + '.jpg" class="tile--img" />' + '<div class="label--background">' +
             '<p class="tile--label">' + worstDomain[j] + '</p></div></a></div>';
  item = document.createElement('li');
  item.innerHTML = tile;
  document.getElementById("worst-domain").appendChild(item);
  console.log("working 3");
}
