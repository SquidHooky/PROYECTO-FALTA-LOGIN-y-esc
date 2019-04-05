function TipoCarta() {

	var ClaseCarta = document.getElementById("tipo").value;
	var CalidadCarta = document.getElementById("calidad").value;


	switch(ClaseCarta){

		case 'personaje':

			switch(CalidadCarta){

				case 'comun':
					
					$("#LaCalidad").removeClass().addClass( "cartarara" );

				break;

				case 'rara':

					$("#LaCalidad").removeClass("cartacomun" ).addClass( "cartarara" );

				break;

  					
  				
			}
	}


}