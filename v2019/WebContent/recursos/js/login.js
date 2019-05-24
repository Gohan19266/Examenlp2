    var intentos=0;
$("#idenviar").click(function (){
    var nombre = $("#nomrol").val();
    if (intentos<3) {
    	 var usuario = $("#idnomuser").val();
    	 var pass = $("#pass1").val();
    	 $.post("home",{"user":idnomuser,"pass":pass1,"op":1});
    	 $("#myModal").modal('hide');
	} else {
		$("#myModal").modal('hide');

	}
});