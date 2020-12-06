<?php

$conn = mysqli_connect("localhost", "myuser", "mypass", "mydb");


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";



$name = $_POST["FName"];
$email = $_POST["Email"];
$number = $_POST["Number"];
$msg = $_POST["Message"];

$sql = "INSERT INTO forminfo VALUE ('$name', '$email',$number,'$msg')";

if ($conn->query($sql)===TRUE){
echo "New record created successfully";
} else {
echo "Error: " . $sql. "<br>" .$conn->error;
}

$conn->close();
?>