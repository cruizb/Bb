function showInfo(element){
var items = document.getElementsByClassName("desc-biblioteca");
var elem = document.getElementById(element).children[0];
var parentelem = document.getElementById(element).parentNode;
if (elem.style.display != "none"){
}
else{
  for (var i = 0; i < items.length; i++){
  items[i].style.display = "none";
  }
  elem.style.display = "table-cell";
  fadeIn(elem);
  }
}

function reset(container){
var divs = document.getElementById(container).children.length;
var items = document.getElementsByClassName("desc-biblioteca");

for (var i = 0; i < divs; i++){
document.getElementById(container).children[i].style.width = "calc(50% - 1px)";
}

for (var j = 0; j < items.length; j++){
  items[j].style.display = "none";
}
}


function fadeIn(el) {
  el.style.opacity = 0;
 
 
  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.02;
 
 
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };
 
  tick();
}

var contraido = false;

function contraerMenu(){
if (contraido){
}
else{
var x = parent.document.getElementById("navFrame");
x.contentDocument.getElementById("switchTopframe").click();
contraido = true;
}
}
