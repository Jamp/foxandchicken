
var zorro = "images/zorro.png";
var gallina = "images/gallina.png";	
function dibujaGallinas(posiciones){

	
	var top = 548;
	var diferencia = 80;
	
	for (var x = 0; x < 4; x++) {
		left = 168;		
		z = 3;
		if (x >=  2 && x <= 4){
			left = 8;
			z = 7;
		}

		for (var y = 0; y < z; y++) {			
			
			$("#tablero").append("<div id='gallina"+x+"-"+y+"' class='ficha'><img src='"+gallina+"'></img></div>");
			$("#gallina"+x+"-"+y).offset({
				top:top,
				left:left
			});
			left = left + diferencia;
			posiciones[x+"-"+y]="gallina";
		}
		top = top - diferencia;
	}
	
};

function dibujaZorros(posiciones){
	
	$("#tablero").append("<div id='zorro1' class='zorro'><img src='"+zorro+"'></img></div>");
	$("#zorro1").offset({
				top:228,
				left:168
			});
	posiciones["4-2"]="zorro1";

	$("#tablero").append("<div id='zorro2' class='zorro'><img src='"+zorro+"'></img></div>");
		$("#zorro2").offset({
				top:228,
				left:328
			});	
	posiciones["4-4"]="zorro2";
}