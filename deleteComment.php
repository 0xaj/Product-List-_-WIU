<?php

require 'db_config.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
 
 $comment_id = ($_GET['comment_id']);
 if($comment_id == null)
{
	return http_response_code(400);
}
 
$sql = "Delete FROM comment where id =+$comment_id"; 
$result = $mysqli->query($sql);
  if (!$result)
  {
		echo json_encode("fail");

				

  }
  else
  {
		echo json_encode("success");

  }      
 



?>
