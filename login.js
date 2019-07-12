
		$("#i").submit(function (e) {
		e.preventDefault();
		var a = $("#email").val();
		var b = $("#pwd").val();
		
		// var c = localStorage.getItem('email');
		
		$.ajax(
			{
				method:"POST",
				url:"login.php",
				data:{
					"email":a,
					"password":b,
				},
				success: function (result){
					if (result=="success"){
					localStorage.setItem('email',a);
					window.location="update.html";
				}
					else{alert(result);}
				}
				});
		});