$('#logoutbtn').click(function (e) {
	e.preventDefault();
	// $.ajax({
	
		// url:"logout.js",
		// success: function (result){
		// if (result=="success"){
		localStorage.removeItem('email');
		window.location='http://localhost/AfterPhp/login.html';//}
		// else{alert(result);}
		// alert(result);}
	// }
	// );
});