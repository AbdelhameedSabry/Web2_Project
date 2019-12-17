<?php
require 'connection.php';

if(isset($_POST["store"])){
	$load_data=json_decode($_POST["store"][0],true);
	for($i=0;$i<count($load_data);$i++){
		$name=$_POST["store"][1];
		$l_type=$load_data[$i]['type'];
		$l_target=$load_data[$i]['target'];
		$l_time=$load_data[$i]['time'];
		$query="INSERT INTO my_events values(NULL,'$name','$l_type','$l_target','$l_time')";
		if(mysqli_query($conn,$query)) echo $name." is inserted";
		else echo $name."is not inserted";
	}
	
}

