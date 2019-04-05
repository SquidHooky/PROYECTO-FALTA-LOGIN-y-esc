function cargarCartasO(){

	var objetoinstanciado = new _Objeto();

	objetoinstanciado.Seleccionartodos().then(function(responsed) {


		for (var elem in responsed){
			

			document.getElementById('tablaobjeto').innerHTML +=


			"<div class='"+responsed[elem].CALIDAD+"'>" +
			"<div class='fotopersonaje' align='center'>" +
			"<img src='"+responsed[elem].IMAGEN+"' width='220px' height='180px' align='center' /> " +
			"</div>" +
			"<div class='espacio'></div>" +
			"<div class='card'>" +
			"<div class='elemento' align='center'>"+responsed[elem].NOMBRE+"</div>" +
			"<div class='elemento2'>Efecto: "+responsed[elem].EFECTO+"</div>";

			
			if(elem > 3){
				document.getElementById('tablaobjeto').style.gridTemplateRows += " 1fr";	
			}
			
		}
	 }, function(error) {
		console.error("Failed!", error); //Indica el fallo en el proceso
		alert("error" + error);
	});
}
//width: 220px;
//	height: 180px;
