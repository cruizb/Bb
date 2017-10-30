var videoscript = document.getElementById('html5videoscript');

console.log(videoscript);

var videoUrl = videoscript.getAttribute('data-videourl');
var videoWidth = videoscript.getAttribute('data-width');
var videoHeight = videoscript.getAttribute('data-height');
var videoTitle = videoscript.getAttribute('data-title');

if (videoWidth == "undefined" || videoWidth == null){
	videoWidth = "auto";
	}
if (videoHeight == "undefined" || videoHeight == null){
	videoHeight = "auto";
	}
if (videoTitle == "undefined" || videoTitle == null){
	videoTitle = "";
	}


if (videoUrl !== "undefined" || videoUrl !== null){

var videocontainer = document.createElement('div');
videocontainer.id = "html5scriptvideo-container";
videocontainer.style.cssText = "display: table;position: relative;margin: auto;padding: 0px 6px;border: 2px solid rgba(1, 0, 1, 0.2);background: #fff;"
videocontainer.innerHTML = '\
	<div style="color: #5a5a5a;font-size: 15px;font-family: sans-serif;font-weight: bold;padding: 7px 0px;text-align: center;">' + videoTitle + '</div>\
	<video width="' + videoWidth + '" height="' + videoHeight + '" controls poster="play.png">\
	<source src="' + videoUrl + '" type="video/mp4">\
	Your browser does not support the video tag.\
	</video>';
videoscript.parentElement.appendChild(videocontainer);

}
