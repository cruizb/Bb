var feedsLibrary = {
  informes: "http://www.obs-edu.com/es/informe-investigacion/rss"
};

$.each(feedsLibrary, function(siteId, feedsUrl) {
  var baseUrl = "https://query.yahooapis.com/v1/public/yql?q=";
  var queryString = encodeURI("SELECT * FROM feed WHERE url='" + feedsUrl + "' LIMIT 3");
  var format = "&format=json";

  var rssFeedPath = baseUrl.concat(queryString, format);

  $.getJSON(rssFeedPath, function(response) {
    var feedItems = response.query.results.item;
    console.log(feedItems);

    $.each(feedItems, function( index ) {
      var item = feedItems[index];
	  var img = item.enclosure.split("<");
      var imgsrc = img[4].split('"');
      console.log(imgsrc[5]);         
      
      
      var ulElement = $('#' + siteId);
  
      ulElement.append('<li class="feed-item" style="margin: 0px 0px 5px 0px;"><div id="feed-item" style="background: #fff;width: 100%;display:inline-block;padding: 8px 0px 8px 8px;border: 2px solid #ccc;border-radius: 5px;"><div id="feed-left" style="float:left; width:170px;"><img style="width:170px; height:98px; vertical-align: top;" src="'+imgsrc[5]+'"/></div><div id="feed-right" style="float:right; padding-left:8px; width:calc(100% - 185px);"><p style="margin: 0px;padding-bottom: 5px;color: #1c2d83; font-size: 13px; font-family: sans-serif;">' + item.pubDate + ' </p><a class="feed-link" style="font-size: 14px;font-family: \'Enriqueta\',Helvetica,Arial,sans-serif;font-weight: 700;margin-bottom: 10px;margin-top: 5px;color: #1c2d83;text-decoration: none;" target="_blank" href="' + item.link + '">' + item.title +'</a><br/><a class="feed-link-button" style="text-decoration: none;color: #0071b3;display: block;background: rgba(204, 204, 204, 0); width: 39px;padding: 4px 4px 5px 9px;border: 2px solid #ccc;border-radius: 50px;font-size: 13px;font-family: \'Enriqueta\',Helvetica,Arial,sans-serif;font-weight: bold;margin-top: 5px;" target ="_blank" href="'+item.link+'">LEER</a></div></div></li>');
    });	
  });
});

var checkInformes = setInterval(ulInformes, 50);
var j = 0;

function ulInformes(){
	var divInformes = document.getElementById('informes');
    if(divInformes.firstChild != null){
	document.getElementById('loader').style.display = "none";
    clearInterval(checkInformes);
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
