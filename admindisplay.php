<?php 

$sname = "localhost";
$uname = "root";
$pwd = "";
$db = "signup";

$con = new mysqli($sname,$uname,$pwd,$db);
$stmt = $con->prepare("SELECT `email`, `uname`, `dob`, `age`, `contact` FROM `signupdet`;");
$stmt -> execute();
$result = $stmt ->  get_result();
$i = 0;
while($row = $result->fetch_assoc()) {  
	$main[$i]['email']=$row['email'];
	$main[$i]['uname']=$row['uname'];
	$main[$i]['dob']=$row['dob'];
	$main[$i]['age']=$row['age'];
	$main[$i]['contact']=$row['contact'];
	$i += 1;
}
$stmt -> close();
$data = json_encode($main);
echo $data
?>