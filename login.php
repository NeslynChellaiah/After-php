<?php 
// session_start();

$sname = "localhost";
$uname = "root";
$pwd = "";
$db = "signup";

$a = $_POST["email"];
$b = $_POST["password"];
// $_SESSION['email'] = $a;

$con = new mysqli($sname,$uname,$pwd,$db);
$stmt = $con->prepare("SELECT * FROM signupdet WHERE email=?");
$stmt -> bind_param("s",$a);
$stmt -> execute();
// $c = mysqli_query($con,$qur);  
$c = $stmt->get_result();
$d = $c->fetch_assoc();
if ($d){
	$d = $d['pass'];
	if (password_verify($b, $d)){
		echo "success";
	}
	else{
		echo "Incorrect password";
	}}
else{
	echo "Try with registered email-id";
}
$c -> close();
$con -> close();
?>