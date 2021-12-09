<?php
require 'db_config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

 
  $postdata = json_decode(file_get_contents('php://input'), true);

if( isset( $postdata['message'] ) && isset( $postdata['pid'] )  ){

$message = mysqli_real_escape_string($mysqli, $postdata['message']);
$pid = (int)mysqli_real_escape_string($mysqli, $postdata['pid']);


  $SQL = "INSERT INTO comment(message,pid) VALUES  ('$message', $pid)";  


  $sql = "select * from comment";

  $result = $mysqli->query($SQL);


  
  if (!$result)
  {
		echo json_encode($result);
				echo json_encode($SQL);
								echo json_encode($mysqli->error);

  }
  else
  {
		echo json_encode($pid);
  }      
}
else{

		echo json_encode("nooo");
} 


?>


