function crearCookieCarta() {
	var calidad = document.getElementById("calidad").value;
  	localStorage.setItem("calidadcarta", calidad);
  
}

function ValorCarta() {
  var calidad = localStorage.getItem("calidadcarta");
  switch(calidad){

  	case "comun":
		$("#LaCalidad").removeClass().addClass( "cartacomun" );
    $("#LaCalidad").val("cartacomun"); 	
  	break;
  	case "rara":
		$("#LaCalidad").removeClass().addClass( "cartarara" );
    $("#LaCalidad").val("cartarara"); 	
  	break;
  	case "epica":
		$("#LaCalidad").removeClass().addClass( "cartaepica" );
    $("#LaCalidad").val("cartaepica"); 	
  	break;
  	case "legendaria":
		$("#LaCalidad").removeClass().addClass( "cartalegendaria" );
    $("#LaCalidad").val("cartalegendaria"); 	
  	break;

  }
  
}