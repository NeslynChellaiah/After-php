<?php
// session_start();



$sname = "localhost";
$uname = "root";
$pwd = "";
$db = "signup";

$email = $_POST["email"];
$age = $_POST["age"];
$dob = $_POST["dob"];
$contact = $_POST["contact"];

$con = new mysqli($sname,$uname,$pwd,$db);
$stmt = $con->prepare("UPDATE signupdet SET dob=?,age=?,contact=? WHERE email=?");
$stmt -> bind_param("ssss",$dob,$age,$contact,$email);
$stmt -> execute();
echo "success";
?> 