// <?php
// session_start();
// if (isset($_SESSION['email']) && ($_SESSION['email']=='admin@gmail.com')) {
// 	include 'admin.html';
// }
// else if (isset($_SESSION['email']) && ($_SESSION['email']!='admin@gmail.com')) {
// echo "email id: ".$_SESSION['email'];
// include 'update.html';
// }
// else{
// 	header("Location:http://localhost/AfterPhp/login1.php");
// }
// ?>
var email = localStorage.getItem('email');
if ((email) && (email == "admin@gmail.com")) {
  window.location = 'http://localhost/AfterPhp/admin.html';
}
else if (!email) {
	window.location = 'http://localhost/AfterPhp/login.html';
}
