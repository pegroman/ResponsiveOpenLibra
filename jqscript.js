$(document).ready(function() {
	$(".menu").click(function() {
		$(".items").slideToggle("fast"); 
	});
	
	$(".btn-buscar").click(function() {
		$(".contenido").empty();
		var busqueda= $(".buscador").val();
		 $.getJSON("http://www.etnassoft.com/api/v1/get/?keyword='" + busqueda +"'&?results_range=0,10&lang=spanish&callback=?",function(data) {
			if (data.length== 0) {
				$(".contenido").append("Sin resultados, intenta otra busqueda!");
			}
			else {
				$.each(data, function(i) {
					$(".contenido").append("<div class=elemento'"+i+"' > <h2>" + data[i].title +"</h2>" + "<h4> Escrito por: " +data[i].author +", en el " + data[i].publisher_date + ".</h4>" +"<br><img id=imagen src="+data[i].cover+"> <p>"+data[i].content_short+ "</p>  <input id='b"+i+"' class=btn-compartir type=button value=Compartir> </div>");		
				});
			}
			$(".btn-mas").show();
			$(".btn-mas").css({"margin-left":"10%","margin-top":"10%","width" : "80%" , "height" : "40px", "background-color" : "#393E46", "border":"none" , "display" :"inline-block", "text-decoration" : "none","color": "white"});
		});
	});
	
	$(".contenido").on("click", "input.btn-compartir", function() {
		var datos = $(this).parents().get(0);
		var hijos=datos.children;
		var titulo=hijos[0].textContent;
		var descripcion=hijos[4].textContent;
		$(".cont-comp").append(titulo);
		$("#myModal").fadeIn("slow");
			
		$(".close").click(function(){
			$("#myModal").fadeOut("slow");
			$(".cont-comp").empty();
			
		});

		$("#btn-enviar").click(function() {
			window.open("mailto:"+mail+"&subject="+titulo+"&body="+descripcion);
			var mail = $(".amail").val();
			console.log(mail);
			return false;
		});

	});

});



