$(document).on("ready",function(){

	checkForm("#form-contact");

	var namePattern = "^[a-z A-Z]{4,30}$";
	var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
	 
	function checkInput(idInput, pattern) {
		return $(idInput).val().match(pattern) ? true : false;
	}

	function checkTextarea(idText) {
		return $(idText).val().length > 12 ? true : false;
	}

	function checkForm (idForm) {
		$(idForm + " *").on("change keydown", function() {
		
			if (checkInput("#name", namePattern) && checkInput("#email", emailPattern) && checkSelect("#service") && checkTextarea("#message") ){
				alert("¡Datos Correctos!");
			}else{
				alert("¡Datos Incorrectos!");
			}
		});
	}
});