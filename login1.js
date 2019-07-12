// <?php
// session_start();
// if (isset($_SESSION['email'])) {header("Location:http://localhost/AfterPhp/update1.php");
// }
// else {
// include 'login.html';}
// // ?>
// var email = $('#email').val();
// localStorage.setItem('email',email);
var email = localStorage.getItem('email');
if ((email) && (email != 'admin@gmail.com')){
  window.location='http://localhost/AfterPhp/update.html';
}	
else if ((email) && (email == 'admin@gmail.com')) {
  window.location='http://localhost/AfterPhp/admin.html';
}
