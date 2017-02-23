var loading = setTimeout(function(){
var x = parent.document.getElementById("navFrame");
var width = x.style.width;
if (width == "20px"){
	console.log('el width de X es: ' + width)
}
else{
var inicio = setTimeout(function(){
  x.contentDocument.getElementById("switchTopframe").click();
},500);
}

},2500);
