function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      readData(this);
    }
  };
  xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.eslsca-paris.com%2Ffr%2Fblog%3Ffield_article_category%3D45%26search_api_viewed%3D'%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22blog-post-item%22%5D'&format=xml&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
  xhttp.send();
}

function readData(xml) {
  var xmlDoc = xml.responseXML;
  var blogData = "";
  var entries = xmlDoc.getElementsByClassName("blog-post-item");
  var entriesLength = entries.length;

  for (var i = 0; i < 5; i++) {  
  var img = entries[i].querySelector('.field-items img');
  var title = entries[i].querySelector('.blog-title a');
  var text = entries[i].querySelector('.blog-text');
  
 
    blogData += "<button class=\"accordion\">" + title.innerHTML + "</button>" +
	"<div class=\"panel\">" + "<div class=\"panel-left\"><p>" + text.innerHTML + "</p><a class=\"lireplus\" href=\"http://eslsca-paris.com" + title.getAttribute("href") + "\" target=\"_blank\">Lire plus</a></div><div class=\"panel-right\">" + verifyImg(img) + "</div></div>";
    
    
  	function verifyImg(elem){
		if (elem != null){
   		var imgsrc = elem.getAttribute("data-src");
		return "<img src=\"http:" + imgsrc + "\">";
    	}
    	else{
    	return "<img src=\"http://dev.meilleurs-masters.com/logo_ecole/eslsca-3-1485510395.jpg\">";
		}
  	}
  }
  document.getElementById("blog-data").innerHTML = blogData;
  addEvents();
}


function addEvents(){
var acc = document.getElementsByClassName("accordion");
accLength = acc.length;

for (var i = 0; i < accLength; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

acc[0].click();

}


(function() {
loadDoc();
})();
