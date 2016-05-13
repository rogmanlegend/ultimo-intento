// JavaScript File
$( document ).ready(function() {
	var radios = $("#divRadios").find("input:radio");
	
	$(radios).change(function(){
		$("#iPoner").val($(this).val());
	});
});
function eventoCambiar(){
	alert("Se cambio el select");
}
