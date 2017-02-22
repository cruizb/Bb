function tabSelector(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.background = "#222";
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.style.background = "#0071b3";
}

document.getElementById("defaultOpen").click();

/*var allenlaces = document.getElementsByClassName('enlace');
var allpdf = document.getElementsByClassName('pdf');
var allitems = document.getElementsByClassName('item');
var allitemsDesc = document.getElementsByClassName('item-desc');
var j = allpdf.length;

allitemsDesc.addEventListener("click", function(){
	console.log("hola soy el addEventListener");
});*/

function resaltar(elm){
	var allitemsDesc = document.getElementsByClassName('item-desc');
	var allpdf = document.getElementsByClassName('pdf');
	var j = allpdf.length;
	for (var i=0; i < j; i++){
	allitemsDesc[i].style.background = "none";
	}
    
  elm.style.background = "#d2d2d2";

}

function reset(){
	var allitemsDesc = document.getElementsByClassName('item-desc');
	var allpdf = document.getElementsByClassName('pdf');
	var j = allpdf.length;
	for (var i=0; i < j; i++){
	allitemsDesc[i].style.background = "none";
    }
}

function downloader(elm){
  var allitemsDesc = document.getElementsByClassName('item-desc');
  var allenlaces = document.getElementsByClassName('enlace');
  var allpdf = document.getElementsByClassName('pdf');
  var allitems = document.getElementsByClassName('item');
  var j = allpdf.length;
	
	for (var i=0; i<j; i++){
	allpdf[i].style.width = "0px";
    allenlaces[i].style.display = "none";
    allitems[i].style.background = "none";
    allitemsDesc[i].style.fontWeight = "normal";
    }
    
  elm.parentElement.nextElementSibling.style.display = "block";
  elm.previousElementSibling.style.width = "30px";
  elm.parentElement.style.background = "#d2d2d2";
  elm.style.fontWeight = "bold";
}
