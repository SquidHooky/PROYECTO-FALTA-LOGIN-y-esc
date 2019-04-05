function cargarCartasP(){

	var personajeinstanciado = new _Personaje();

	personajeinstanciado.Seleccionartodos().then(function(response) {


		for (var ele in response){
			

			document.getElementById('tablapersonajes').innerHTML +=


			"<div class='"+response[ele].CALIDAD+"'>" +
			"<div class='fotopersonaje' align='center'>" +
			"<img src='"+response[ele].IMAGEN+"' width='220px' height='180px' align='center' /> " +
			"</div>" +
			"<div class='espacio'></div>" +
			"<div class='card'>" +
			"<div class='elemento' align='center'>"+response[ele].NOMBRE+"</div>" +
			"<div class='elemento2'>Habilidad1: "+response[ele].HABILIDAD1+"</div>" +
			"<div class='elemento2'>Habilidad2: "+response[ele].HABILIDAD2+"</div>" +
			"<div class='elemento2'>Ataque: "+response[ele].ATAQUE+"</div>" +
			"<div class='elemento2'>Defensa: "+response[ele].DEFENSA+"</div>" +
			"<div class='espacio'></div>" +
			"<div class='espacio'></div>" +
			"<div class='elemento2'>ULTIMATE: "+response[ele].ULTIMATE+"</div>";
			
			if(ele > 3){
				document.getElementById('tablapersonajes').style.gridTemplateRows += " 1fr";	
			}
			
		}
	 }, function(error) {
		console.error("Failed!", error); //Indica el fallo en el proceso
		alert("error" + error);
	});
}
//width: 220px;
//	height: 180px;
