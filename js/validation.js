$(document).ready(function(){

	var emailExpr = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
	
	$("#btn").click(function(){
		var name = $("#name").val().trim();
		var service = $("#service").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		if (name === '' || service === '' || email === '' || !emailExpr.test(email) || message === '') {
			alert("Error. Los campos con (*) son requeridos.");
		}else{
			alert("¡Mensaje enviado!");
		}

	});

	$('a[href^="#"]').click(function() {
	    var destino = $(this.hash);
	    if (destino.length == 0) {
	      destino = $('a[name="' + this.hash.substr(1) + '"]');
	    }
	    if (destino.length == 0) {
	      destino = $('html');
	    }
	    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
	    return true;
	});

});