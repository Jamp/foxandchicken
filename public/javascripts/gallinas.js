function dibujaGallinas(){
	
	var top = 548;
	var diferencia = 80;
	var gallina = "images/gallina.png";
	for (var x = 0; x < 4; x++) {
		left = 168;		
		z = 3;
		if (x >=  2 && x <= 4){
			left = 8;
			z = 7;
		}

		for (var y = 0; y < z; y++) {			
			
			$("#fichas").append("<div id='ficha' class='ficha pg"+x+"-"+y+"'><img src='"+gallina+"'></img></div>");
			$(".pg"+x+"-"+y).offset({
				top:top,
				left:left
			});
			left = left + diferencia;
		}
		top = top - diferencia;
	}
	
};