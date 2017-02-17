var feedsLibrary = {
  noticias: "http://www.obs-edu.com/es/noticias/rss",
  agenda: "http://www.obs-edu.com/es/agenda-obs/rss",
  investigacion: "http://www.obs-edu.com/es/blog-investigacion/rss"
};

$.each(feedsLibrary, function(siteId, feedsUrl) {
  var baseUrl = "http://query.yahooapis.com/v1/public/yql?q=";
  var queryString = encodeURI("SELECT * FROM feed WHERE url='" + feedsUrl + "' LIMIT 2");
  var format = "&format=json";

  var rssFeedPath = baseUrl.concat(queryString, format);

  $.getJSON(rssFeedPath, function(response) {
    var feedItems = response.query.results.item;

    $.each(feedItems, function( index ) {
      var item = feedItems[index];

      var ulElement = $('#' + siteId);

      ulElement.append('<li class="feed-item" style="margin: 0px 0px 15px 0px;"><p style="margin: 0px;padding-bottom: 5px;color: #1c2d83; font-size: 13px; font-family: sans-serif;">' + item.pubDate + ' </p><a class="feed-link" style="font-size: 14px;font-family: \'Enriqueta\',Helvetica,Arial,sans-serif;font-weight: 700;margin-bottom: 10px;margin-top: 5px;color: #1c2d83;text-decoration: none;" target="_blank" href="' + item.link + '">' + item.title +'</a><br></br><a class="feed-link-button" style="text-decoration: none;color: #0071b3;display: block;background: rgba(204, 204, 204, 0); width: 39px;padding: 4px 4px 5px 9px;border: 2px solid #ccc;border-radius: 50px;font-size: 13px;font-family: \'Enriqueta\',Helvetica,Arial,sans-serif;font-weight: bold;" target ="_blank" href="'+item.link+'">LEER</a></li>');
    });	
  });
});

var checkInvestigacion = setInterval(ulInvestigacion, 50);
var checkAgenda = setInterval(ulAgenda, 50);
var i = 0;
var j = 0;

function ulAgenda(){
	var divAgenda = document.getElementById('agenda');
    if(divAgenda.firstChild != null){
	document.getElementById('loader').style.display = "none";
    clearInterval(checkAgenda);
	}
    else{
    j++;
		if(j==120){
		console.log("Tiempo de espera agotado (Agenda): " + j)
		clearInterval(checkAgenda);
		document.getElementById('loader').style.display = "none";
		}
	}
}
	
function ulInvestigacion(){
	var divInvestigacion = document.getElementById('investigacion');
	
	if(divInvestigacion.firstChild != null){
	clearInterval(checkInvestigacion);
	setTimeout(function(){customize()}, 50);
	}
	else{
	i++;
		if(i==120){
		console.log("Tiempo de espera agotado (Investigacion: " + i);
		clearInterval(checkInvestigacion);
		}
	}
}
	
function customize(){
    var divInvestigacion = document.getElementById("divinvestigacion");
    
	divInvestigacion.children[1].children[0].style.backgroundColor = "#0071b3";
	divInvestigacion.children[1].children[0].style.marginBottom = "0px";
	divInvestigacion.children[1].children[0].style.padding = "10px 0px 15px 15px";
	divInvestigacion.children[1].children[0].firstChild.innerHTML = "Publicaciones";
	divInvestigacion.children[1].children[0].firstChild.style.color = "#fff";
	divInvestigacion.children[1].children[0].children[1].style.color = "#fff";
	divInvestigacion.children[1].children[0].children[4].style.color = "#fff";
	divInvestigacion.children[1].children[0].children[4].style.borderColor = "#fff";
	divInvestigacion.children[1].children[0].children[4].id = "feed-link-button-2";
	
	divInvestigacion.children[1].children[1].style.backgroundColor = "#2b3b8b";
	divInvestigacion.children[1].children[1].style.marginBottom = "0px";
	divInvestigacion.children[1].children[1].style.padding = "10px 0px 15px 15px";
	divInvestigacion.children[1].children[1].firstChild.innerHTML = "Publicaciones";
	divInvestigacion.children[1].children[1].firstChild.style.color = "#fff";
	divInvestigacion.children[1].children[1].children[1].style.color = "#fff";
	divInvestigacion.children[1].children[1].children[4].style.color = "#fff";
	divInvestigacion.children[1].children[1].children[4].style.borderColor = "#fff";
	divInvestigacion.children[1].children[1].children[4].id = "feed-link-button-2";
}
