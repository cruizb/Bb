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
  parentelem.style.width = "calc(100% - 2px)";
  	if (element.toString().match(/left/)){
  	parentelem.nextElementSibling.style.width = "calc(0% - 2px)";
    }
    else{
    parentelem.previousElementSibling.style.width = "calc(0% - 2px)";
    }
  fadeIn(elem);
  }
}

function reset(container){
var divs = document.getElementById(container).children.length;

for (var i = 0; i < divs; i++){
document.getElementById(container).children[i].style.width = "calc(50% - 1px)";
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