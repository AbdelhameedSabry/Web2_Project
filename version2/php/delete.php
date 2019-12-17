<?php
require 'connection.php';
if(isset($_POST["deldata"])){
$query="TRUNCATE my_events;";
$result=mysqli_query($conn,$query);
echo "Data Is Deleted";
}
?>