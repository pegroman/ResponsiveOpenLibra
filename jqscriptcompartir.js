$(document).ready(function() {
	
	var mail=$(".mail").value;
	var amail=$(".amail").value;
	var asunto1=$(".titulo").value;
	var cuerpo=$(".descripcion").value;
	$(".enviar").click(function() {
		window.open("mailto:"+mail+"&subject="+asunto1+"&body="+cuerpo+ ,"_blank");
	});
});
