// JavaScript File
$( document ).ready(function() {
	var radios = $("#divRadios").find("input:radio");
	
	$(radios).change(function(){
		$("#iPoner").val($(this).val());
	});
	
	$("#f_crear_per").submit(function(event){	
		//alert("sssss");
		$("#s_nombres").empty();
		$("#s_nombres").append($("#nombre").val());
		$("#s_apellidom").append($("#apellidoP").val());
		$("#s_apellidop").append($("#apellidoM").val());
		$("#s_email").append($("#email").val());
		$("#s_telcel").append($("#teltel").val());
		
		event.preventDefault();
	});
$("#f_crear_per").submit(function(event){	
		//alert("sssss");
		$("#s_nombres").empty();
		$("#s_nombres").append($("#nombre").val());
		$("#s_apellidom").append($("#apellidoP").val());
		$("#s_apellidop").append($("#apellidoM").val());
		$("#s_email").append($("#email").val());
		$("#s_telcel").append($("#teltel").val());
		
		event.preventDefault();
	});

});
function eventoCambiar(){
	alert("Se cambio el select");
}
