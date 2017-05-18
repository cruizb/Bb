/* CSS Módulo Blog ESLSCA */

var css = 'div#clock {'
    +'width: 40%;'
    +'height: 75px;'
    +'background: #ffffff;'
    +'float: left;'
    +'text-align: center;'
    +'display: table;'
    +'margin-bottom: 10px;'
+'}'
+'span#clock-data {'
    +'color: #3d535f;'
    +'background: #eef5f9;'
    +'font-size: 45px;'
    +'text-align: center;'
    +'display: table-cell;'
    +'vertical-align: middle;'
+'}'
+'div#date-fr {'
    +'width: 59%;'
    +'height: 75px;'
    +'float: right;'
    +'display: table;'
    +'text-align: center;'
+'}'
+'span#date-day {'
    +'display: table-cell;'
    +'color: white;'
    +'vertical-align: middle;'
    +'font-size: 36px;'
    +'border-right: 1px solid white;'
    +'background: #006aa4;'
+'}'
+'span#date-mmyy {'
    +'display: table-cell;'
    +'color: #ffffff;'
    +'vertical-align: middle;'
    +'font-size: 16px;'
    +'background: #ff8f00;'
+'}'
;
console.log("cargando css blog");
head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
