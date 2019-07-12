
$(document).ready(function () {
	var uemail = localStorage.getItem('uemail');
	// e.preventDefault();
	$.ajax(
		{
		method:'POST',
		url:'admin.php',
		data:{
			'email':uemail,
		},
		success : function (result){
			var arr = JSON.parse(result);
			$('#age').val(arr['age']);
			$('#dob').val(arr['dob']);
			$('#contact').val(arr['contact']);
			// alert(arr['age']);
		}
		});
});


$('#adminedit').submit(function (e) {
	e.preventDefault();
	var uemail = localStorage.getItem('uemail');
	var age = $("#age").val();
	var dob = $("#dob").val();
	var contact = $("#contact").val();


	$.ajax(
		{
			method:"POST",
			url:"adminedit.php",
			data:{
				"email":uemail,
				"age":age,
				"dob":dob,
				"contact":contact,
			},
			success: function(result){
				alert(result);
			}
		});
});