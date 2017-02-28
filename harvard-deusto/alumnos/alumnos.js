
function setURL(img){
var url = document.URL;
var enlace = img.parentElement;
if(url.match(/campus.eae.es/)){
     enlace.href = "https://www.harvard-deusto.com/?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_eae";
	 } else if (url.match(/campus.ostelea.com/)){
     enlace.href = "https://www.harvard-deusto.com/?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_ostelea";
	 } else if (url.match(/campus.obs-edu.com/)){ 
	 enlace.href = "https://www.harvard-deusto.com/?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_obs"; 
	 } else if (url.match(/campus.eaeprogramas.es/)){
     enlace.href = "https://www.harvard-deusto.com/?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_eae";
	 } else if (url.match(/campus.esdesignbarcelona.com/)){
     enlace.href = "https://www.harvard-deusto.com/?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_esdesign";
	 } else if (url.match(/campus.unibarcelona.com/)){
     enlace.href = "https://www.harvard-deusto.com/learning-pedagogics?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_uniba";
	 } else if (url.match(/campus.viu.es/)){
     enlace.href = "https://www.harvard-deusto.com/learning-pedagogics?utm_source=referrer&utm_medium=affiliate&utm_content=cta&utm_campaign=campus_viu";
	 } else{
		enlace.href = "https://www.harvard-deusto.com";
		console.log('default URL');
	 }
}

// Funcion para descargar distintos documentos según la URL.
function manual(inpt) { 
var url = document.URL; 
var linkPdfManual = inpt.parentElement;
if(url.match(/campus.eae.es/)){
     linkPdfManual.href = "/modules/_3256_1/EAE-Manual%20plataforma%20Harvard%20Deusto%202016-2017.pdf"; 
	 } else if (url.match(/campus.ostelea.com/)){
     linkPdfManual.href = "/modules/_3256_1/OSTELEA-Manual%20plataforma%20HD%202016-2017.pdf";
	 } else if (url.match(/campus.obs-edu.com/)){ 
	 linkPdfManual.href = "/modules/_3256_1/OBS-Manual%20plataforma%20Harvard%20Deusto%202016-2017.pdf"; 
	 } else if (url.match(/campus.eaeprogramas.es/)){
     linkPdfManual.href = "/modules/_3256_1/EAE%20Distancia-Manual%20plataforma%20HD%202016-2017.pdf";
	 } else if (url.match(/campus.esdesignbarcelona.com/)){
     linkPdfManual.href = "/modules/_3256_1/ESDESIGN-Manual%20plataforma%20Harvard%20Deusto%202016-2017.pdf";
	 } else if (url.match(/campus.unibarcelona.com/)){
     linkPdfManual.href = "/modules/_3256_1/UNIBA-HDLP-%20Manual%20plataforma%20HD%202016-2017.pdf";
	  } else if (url.match(/campus.viu.es/)){
     linkPdfManual.href = "/modules/_3256_1/VIU-HDLP-%20Manual%20plataforma%20HD%202016-2017.pdf";
	 } else{ 
		console.log('no hay manual todavía')
	 } 
}

