
// Declaración de variables
var ficheroDeDatos;
var grupo;
var segundogrupocargado = false;
var tercergrupocargado = false;

// Body onload
// -----------
	$(function(){

		// SCROLL		
		$(window).scroll(function(){
			if(!segundogrupocargado | !tercergrupocargado){
				if($(window).scrollTop()+$(window).height() > $(document).height()-2){
					// window.alert("Estamos cerca del fondo");
					if(!segundogrupocargado){
						cargarSegundoGrupo();
					}else{
						if(!tercergrupocargado){
							cargarTercerGrupo();
						}
					}
				}
			}
		});
		

		// Cargar el primer grupo al cargar la página
		// cargarPrimerGrupo();
		$("#PrimerGrupo").hide();
	    $("#SegundoGrupo").show();
	    $("#TercerGrupo").hide();
	    $("#0 button").click(function() {
	        window.location.href = "./html/pais.html";       			    
	    });
	    $("#1 button").click(function() {
	        window.location.href = "./html/pais2.html";       			    
	    });
	    $("#2 button").click(function() {
	        window.location.href = "./html/pais.html";       			    
	    });

		// O bien cargar país
		// cargarPais(); 

		// Cargar el segundo grupo al pulsar el botón VER MÁS
	    $("#SegundoGrupo").click(function() {
	    	if(!segundogrupocargado){		    	
		        cargarSegundoGrupo();		        
	    	}
	    });

		// Cargar el tercer grupo al pulsar el botón VER MÁS
	    $("#TercerGrupo").click(function() {  		    
     		if(!tercergrupocargado){
	        	cargarTercerGrupo();
	    	}
	    });

		// Volver al índice desde la página de cada país
	    $("#volver").click(function(){
	    	volverAlIndice();
	    });
	});
// Body onload
// ----------- 


// Métodos para cargar grupos de países de Asia
// --------------------------------------------
	// Primer grupo de países de Asia
	function cargarPrimerGrupo(){

	    $("#PrimerGrupo").hide();
	    $("#SegundoGrupo").show();
	    $("#TercerGrupo").hide(); 

	    grupo = 1-1;
		ficheroDeDatos = "./data/Asia1.json";
		crearEstructura();
		tratarDatos();		
	}


	// Segundo grupo de países de Asia
	function cargarSegundoGrupo(){
		$("#viajes").append(
			"<div class='row' id='3'></div>" + 
            "<div class='row' id='4'></div>" + 
            "<div class='row' id='5'></div>"
    	);

		$("#PrimerGrupo").hide();
	    $("#SegundoGrupo").hide();
	    $("#TercerGrupo").show();

	    grupo = 2-1;
	    ficheroDeDatos = "./data/Asia2.json";
		crearEstructura();
		tratarDatos();

		segundogrupocargado = true;
	}


	// Tercer grupo de países de Asia
	function cargarTercerGrupo(){
		$("#viajes").append(
			"<div class='row' id='6'></div>" + 
            "<div class='row' id='7'></div>" + 
            "<div class='row' id='8'></div>"
	    );

		$("#PrimerGrupo").show();
	    $("#SegundoGrupo").hide();
	    $("#TercerGrupo").hide();

	    grupo = 3-1;
	    ficheroDeDatos = "./data/Asia3.json";
		crearEstructura();
		tratarDatos();

		tercergrupocargado = true;
	}
// Métodos para cargar grupos de países de Asia
// --------------------------------------------


// Métodos para crear las estructuras de las páginas 
// -------------------------------------------------
	// De index.html
	function crearEstructura(){
		for (var i=0+3*grupo; i<3+3*grupo; i++){
			$("#" + i).empty().append( 
				"<br/>"+          
				"<h3><span class='glyphicon glyphicon-send pais'></span></h3>" +
				"<br/><br/>" +
				"<img class='img-responsive center-block' />" +
				"<p class='piedefigura'></p>" +
				"<div class='entrada'></div>" +    
				"<p><span class='fecha'></span></p>" +
				"<br/><br/>" +
				"<button type='button' class='btn-lg btn-primary' data-toggle='modal' data-target='#info'>información</button>" +
				"<br/><br/><br/><br/>"
			);
		}
    }

	// De pais.html
	function crearEstructura_pais(){		
		$("#cadaPais").empty().append( 
			"<br/>"+          
			"<h3><span class='glyphicon glyphicon-send pais'></span></h3>" +
			"<br/><br/>" +
			"<img class='img-responsive center-block' />" +
			"<p class='piedefigura'></p>" +
			"<section class='descripcion'></section>" +
			"<p class='mapa'></p>" +  
			"<p><span class='fecha'></span></p>" +
			"<button type='button' class='btn-lg btn-primary' data-toggle='modal' data-target='#info' id='volver'>VOLVER</button>" +
			"<br/><br/><br/><br/>"
		);		
    }

    // De pais2.html
	function crearEstructura_pais2(){		
		$("#cadaPais2").empty().append( 
			"<br/>"+          
			"<h3><span class='glyphicon glyphicon-send pais'></span></h3>" +
			"<br/><br/>" +
			"<img class='img-responsive center-block' />" +
			"<p class='piedefigura'></p>" +
			"<section class='descripcion'></section>" +
			"<p class='mapa'></p>" +
			"<p><span class='fecha'></span></p>" +
			"<button type='button' class='btn-lg btn-primary' data-toggle='modal' data-target='#info' id='volver'>VOLVER</button>" +
			"<br/><br/><br/><br/>"
		);		
    }
// Método para crear la estructura del index.html
// ----------------------------------------------
	


// Método para leer/escribir los datos por países
// ----------------------------------------------
	// De un grupo de 3 países
	function tratarDatos(){
		$.getJSON( ficheroDeDatos , function( objeto ) {
		  	$.each( objeto, function( i, tupla ) {
		       	$("#" + (i+3*grupo) + " .pais").empty().append( tupla.pais );
		       	$("#" + (i+3*grupo) + " .fecha").empty().append( tupla.fecha );
		       	$("#" + (i+3*grupo) + " img").attr("src",tupla.fotografia);
		       	$("#" + (i+3*grupo) + " .piedefigura").empty().append( tupla.piedefigura );
		       	$("#" + (i+3*grupo) + " .entrada").empty().append( tupla.entrada );
		       	$("#" + (i+3*grupo) + " button").click(function() {
	        		window.location.href = tupla.enlace;       			    
	        	});                 
		    });          
		});
	};

	// De China
	function tratarDatosPais(){
		$.getJSON( "../data/Asia1.json" , function( objeto ) {						    		
		  	$("#cadaPais .pais").empty().append( objeto[0].pais );
		  	$("#cadaPais .fecha").empty().append( objeto[0].fecha );			  	
	        $("#cadaPais img").attr("src","../" + objeto[0].fotografia);
	       	$("#cadaPais .piedefigura").empty().append( objeto[0].piedefigura );
	       	$("#cadaPais .descripcion").empty().append( objeto[0].descripcion );
	       	$("#cadaPais .mapa").empty().append( objeto[0].mapa );
    	});
    }  

    // De Malasia
	function tratarDatosPais2(){
		$.getJSON( "../data/Asia1.json" , function( objeto ) {						    		
		  	$("#cadaPais2 .pais").empty().append( objeto[1].pais );
		  	$("#cadaPais2 .fecha").empty().append( objeto[1].fecha );			  	
	        $("#cadaPais2 img").attr("src","../" + objeto[1].fotografia);
	       	$("#cadaPais2 .piedefigura").empty().append( objeto[1].piedefigura );
	       	$("#cadaPais2 .descripcion").empty().append( objeto[1].descripcion );
	       	$("#cadaPais2 .mapa").empty().append( objeto[1].mapa );
    	});
    }  
// Método para leer/escribir los datos por países
// ----------------------------------------------


// Al pulsar el botón de información de cada país. AHORA SÓLO CARGA EL PRIMER Y SEGUNDO PAÍSES, CHINA Y MALASIA.	
function cargarPais(){	
	// China
	crearEstructura_pais(); 
	tratarDatosPais();
	// Malasia
	crearEstructura_pais2(); 
	tratarDatosPais2();
}

// Método para volver al índice desde cada país
// --------------------------------------------
	function volverAlIndice(){
		window.location.href = "../index.html"; 
	}
// Método para volver al índice desde cada país
// --------------------------------------------