<?php
include 'database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
$comments = [];

$product_id = ($_GET['product_id']);


if($product_id == null)
{
	return http_response_code(400);
}
$sql = "SELECT * FROM comment WHERE pid = $product_id";

if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$comments[$i]['id'] = $row['id'];
		$comments[$i]['message'] = $row['message'];
		$comments[$i]['pid'] = $row['pid'];
		$i++;
	}
	echo json_encode($comments);
}
else
{
	http_response_code(404);
}
?>






