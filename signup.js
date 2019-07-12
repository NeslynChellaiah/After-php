
		$("#h").submit(function (e) {
		e.preventDefault();
		var email = $("#email").val();
		var uname = $("#uname").val();
		var pass = $('#pass').val();
		var cpwd = $("#cpwd").val();

		if (pass==cpwd){
		$.ajax(
			{
				method:"POST",
				url:"signup.php",
				data:{
					"email":email,
					"uname":uname,
					"pass":pass,
				},
				success: function (result){
					alert(result);
					window.location="login.html"; 
				}
				})}
		else{
			$("#cpass").text("Passwords doesn't match")
		}
	}
		);