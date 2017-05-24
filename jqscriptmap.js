$(document).ready(function(){
	$("#mapa").argenmap();
	$("#mapa").centro(-34.6037389,-58.3837591);
	$("#mapa").zoom(15);
	$('#mapa').agregarMarcador( { lat:-34.6037389, lng:-58.3837591, contenido : '<p>Abierto de 10 am a 19pm'});
});
