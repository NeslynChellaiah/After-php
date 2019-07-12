<?php 
$email = $_POST['email'];

$sname = "localhost";
$uname = "root";
$pwd = "";
$db = "signup";

$con = new mysqli($sname,$uname,$pwd,$db);
$stmt = $con->prepare("SELECT * FROM signupdet WHERE email=?");
$stmt -> bind_param("s",$email);
$stmt -> execute();
$c = $stmt->get_result();
$d = $c->fetch_assoc();
$d = json_encode($d);

echo $d;
?>