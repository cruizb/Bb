var x = parent.document.getElementById("navFrame");
if (x == "20px"){
}
else{
var inicio = setTimeout(function(){
  x.contentDocument.getElementById("switchTopframe").click();
},2500);
}
