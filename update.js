// $('#age').val('20');
 
$("#updatepage").submit(function (e) {
	e.preventDefault();
	var age = $("#age").val();
	var dob = $("#dob").val();
	var contact = $("#contact").val();
	var email = localStorage.getItem('email'); 
	$.ajax(
		{
			method:"POST",
			url:"update.php",
			data:{
				"age":age,
				"dob":dob,
				"contact":contact,
				"email":email
			},
			success: function(result){
				alert(result);
			}
		});
});