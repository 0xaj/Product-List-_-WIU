<?php
require 'db_config.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
$sql = "SELECT * FROM product"; 
$result = $mysqli->query($sql);
 
while($row = $result->fetch_assoc()){
     $json[] = $row;
}
 
$data = $json;
$result =  mysqli_query($mysqli,$sql);
echo json_encode($data);
?>
