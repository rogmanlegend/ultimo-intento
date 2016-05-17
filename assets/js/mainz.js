$(document).ready(function(){
    $("#persona").submit(function(event){
        $("#s_ci").empty();
         $("#s_ci").append($("#ci").val());
        
        $("#s_nombre").empty();
         $("#s_nombre").append($("#nombre").val());
        
          $("#s_apellido").empty();
         $("#s_apellido").append($("#apellidoP").val());
         
            $("#s_apellidom").empty();
         $("#s_apellidom").append($("#apellidoM").val());
         
            $("#s_email").empty();
         $("#s_email").append($("#email").val());
         
            $("#s_tel").empty();
         $("#s_tel").append($("#tel").val());
         
         event.preventDefault();
         
    });
    
});


