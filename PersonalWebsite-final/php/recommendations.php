<?php
$data = file_get_contents("php://input");
$jsonData = json_decode($data,TRUE);
session_start();
include "db-config.php";

$name = $jsonData["name"];
$jobtitle = $jsonData["title"];
$organization = $jsonData["organization"];
$recommendation = $jsonData["message"];

// $name = $_POST["FName"];
// $jobtitle = $_POST["Jobtitle"];
// $organization = $_POST["Organization"];
// $recommendation = $_POST["Recommendation"];
if($name !== '') {
  $stmt = $conn->prepare("INSERT INTO recommendations VALUE (?,?,?,?)");
  $stmt->bind_param("ssss",$name,$jobtitle,$organization,$recommendation);
  $stmt->execute();
  // $sql = "INSERT INTO recommendations VALUE ('$name', '$jobtitle','$organization','$recommendation')";
  // $conn->query($sql);
} 
  $sqlSelect = "SELECT * FROM recommendations";
  $result = $conn->query("SELECT * FROM recommendations;");
  $allData = array();
  foreach ($result as $row) {
      $allData[] = $row;
  }
  echo json_encode($allData);

$conn->close();
?>