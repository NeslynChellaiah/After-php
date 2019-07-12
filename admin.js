

$('#adminsearch').click(function (e) {
	var email = $('#email').val();
	e.preventDefault();
	$.ajax(
		{
		method:'POST',
		url:'admin.php',
		data:{
			'email':email,
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