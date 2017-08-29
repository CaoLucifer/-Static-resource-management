var personalcenter = document.getElementById("layout-1");
var sortview = document.getElementById("layout-2");
var nav = document.getElementById("nav");

var links = nav.getElementsByTagName("li"); 
console.log(links);
links[0].onclick = function(){
	personalcenter.style.display = "block";
	sortview.style.display = "none";
	return false;
}
links[5].onclick = function(){
	personalcenter.style.display = "none";
	sortview.style.display = "block";
	return false;
}
