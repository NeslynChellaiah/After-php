<?php
session_start();
if (isset($_SESSION['email']) && ($_SESSION['email']=="admin@gmail.com")) {
include 'admin.html';
}
else{
	header("Location:http://localhost/AfterPhp/login1.php");
}
?>