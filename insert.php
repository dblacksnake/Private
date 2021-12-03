<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Escape user inputs for security
$first_name = $conn->real_escape_string($_REQUEST['firstName']);
$last_name =$conn->real_escape_string($_REQUEST['lastName']);
$passwordText = $conn->real_escape_string($_REQUEST['passwordText']); 

$sql = "INSERT INTO test1 (firstname, lastname, password)
VALUES ('$first_name', '$last_name ','$passwordText ')";

if ($conn->query($sql) === TRUE) {
  die("New record created successfully");
} else {
  die("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
?>