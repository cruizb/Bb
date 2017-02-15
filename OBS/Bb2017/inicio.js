function mensajeBienvenida() {
     
    document.getElementById("mensajebienvenida").innerHTML = getMensaje();
	document.getElementsByClassName("containerPortal clearfix")[0].style.padding = "20px 5px";
}

function getMensaje(mensaje){
	var nombre = document.getElementById("nombre").innerHTML;
    var fecha = new Date();
    var horasFecha = fecha.getHours();
    var parteDia = {
    manana: "Buenos días, ",
    tarde: "Buenas tardes, ",	
    noche: "Buenas noches, "  
    };
	console.log(nombre);
    
	if ((horasFecha > 6 && horasFecha < 15) || horasFecha == 15){
		return parteDia.manana + '<b><span style="color: #0071b3;font-family:\'Enriqueta\', sans-serif!important;font-size: 26px;text-transform: capitalize;">' + nombre + ' !</span></b>';
	}       
    else if (horasFecha > 15 && horasFecha < 21){
    	return parteDia.tarde + '<b><span style="color: #0071b3;font-family:\'Enriqueta\', sans-serif!important;font-size: 26px;text-transform: capitalize;">' + nombre + ' !</span></b>';
    }
    else{
        return parteDia.noche + '<b><span style="color: #0071b3;font-family:\'Enriqueta\', sans-serif!important;font-size: 26px;text-transform: capitalize;">' + nombre + ' !</span></b>';    
	}
}

mensajeBienvenida();
