// <?php
// session_start();
// if (isset($_SESSION['email'])) {header("Location:http://localhost/AfterPhp/update1.php");
// }
// else {
// include 'signup.html';
// }
// ?>
var a = localStorage.getItem('email');
if (a) {
  window.location='http://localhost/AfterPhp/login.html';
}
 