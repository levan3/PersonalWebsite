<?php
$conn = mysqli_connect("localhost", "myuser", "mypass", "mydb");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>