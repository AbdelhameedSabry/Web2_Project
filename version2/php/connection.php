<?php
$host="localhost";
$user="root";
$password="";
$DB_name="dblocalstorage";
$conn=mysqli_connect($host,$user,$password,$DB_name);
if($conn);
else 		   die(mysqli_connect_error());

?>