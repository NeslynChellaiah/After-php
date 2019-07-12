$(document).ready(function () {
	$.ajax({
		method:'POST',
		url:'admindisplay.php', 
		success: function(result){
			
				result = JSON.parse(result);
				// for (var i=0; i <=result.length - 1 ; i++)
				for (var i = result.length - 1; i >= 0; i--) {				 
				// var a = "<div id='div'>"+result[i]['email']+"<button id='check' value='"+i+"'>Edit</button></div>";
				var a = "<tr><td scope='col'>"+i+"</td><td scope='col'>"+result[i]['email']+"</td><td id='tdbtn' scope='col'><button id='check' value='"+i+"'>Edit</button></td></tr>";
				$('#tr').after(a);
				}
				$('#tdbtn button').click(function (){
					var value = $(this).attr("value");
					var uemail = result[value]['email'];
					window.location = 'adminedit.html';
					localStorage.setItem('uemail',uemail);
				});

		}
	});
	
});
			// 			$('#age').val(result[value]['age']);
					// 			$('#dob').val(result[value]['dob']);
					// 			$('#contact').val(result[value]['contact']);
					// $.ajax({
					// 	method:'POST',
					// 	url:'adminedit.php',
					
						
					// 		success: function(result){