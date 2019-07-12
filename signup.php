<?php 
$sname = "localhost";
$name = "root";
$pwd = "";
$db = "signup";
$email = $_POST["email"];
$uname = $_POST["uname"];
$pass = $_POST["pass"];
$hashedpass = password_hash($pass,PASSWORD_DEFAULT);

// $extra = array('email' => $email,'uname' => $uname,'pass' => $pass);
// $d = json_encode($extra);
// $new = file_get_contents('signup.json');
// $c = json_decode($new);
// array_push($c, $extra);
// $c = json_encode($c);
// file_put_contents('signup.json', $c);

$con = new mysqli($sname,$name,$pwd,$db);
$stmt = $con->prepare("SELECT * FROM signupdet WHERE email=?");
$stmt -> bind_param("s",$email);
$stmt -> execute();
if ($stmt -> fetch())
{
	echo "Email id already registered";
}
else {
	$stmt = $con->prepare("INSERT INTO signupdet(email,uname,pass) VALUES (?,?,?)");
	$stmt -> bind_param("sss",$email,$uname,$hashedpass);
	$stmt -> execute();
	echo "success";
}
// $stmt = $con->prepare("INSERT INTO signupdet(email,uname,pass) VALUES (?,?,?)");
// $stmt -> bind_param("sss",$email,$uname,$pass);
// $stmt -> execute();
$stmt -> close();
$con -> close();

?>
