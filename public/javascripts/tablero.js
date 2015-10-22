function dibujaTablero(posiciones){
	
	var top = 548;
	var diferencia = 80;
	

	for (var x = 0; x < 7; x++) {
		left = 168;		
		z = 3;
		if (x >=  2 && x <= 4){
			left = 8;
			z = 7;
		}

		for (var y = 0; y < z; y++) {			
			$("#tablero").append("<div class='posicion' id='p"+x+"-"+y+"' >"+x+"-"+y+"</div>");
			$("#p"+x+"-"+y).offset({
				top:top,
				left:left
			});
			left = left + diferencia;

			posiciones[x+"-"+y]=0;
		}
		top = top - diferencia;
	}
	console.log(posiciones)
	
};