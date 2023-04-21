	//Validtion Code For Inputs

	var email = document.forms['form']['loginUser'];
	var password = document.forms['form']['loginPassword'];
	
	// var email_error = document.getElementById('email_error');
	// var pass_error = document.getElementById('pass_error');
	
	email.addEventListener('textInput', email_Verify);
	password.addEventListener('textInput', pass_Verify);
	
	function validated(){
		if (email.value.length < 1) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (password.value.length < 5) {
			password.style.border = "1px solid red";
			pass_error.style.display = "block";
			password.focus();
			return false;
		}
	
	function myFunction() {
		window.location.href = "Riddle Page\riddles.html";
	}
	
	}
	function email_Verify(){
		if (email.value.length > 1) {
			email_error.style.display = "none";
			return true;
		}
	}
	function pass_Verify(){
		if (password.value.length >= 4) {
			pass_error.style.display = "none";
			return true;
		}
	}


	function onclickWeb(){
		console.log(2);
	}
	