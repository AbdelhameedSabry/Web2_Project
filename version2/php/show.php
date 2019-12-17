<?php
require 'connection.php';
if(isset($_GET["getdata"])){
$query="SELECT * FROM my_events";
$result= mysqli_query($conn,$query);
echo "<table><tr><td>Event</td><td>type</td><td>target</td><td>Date</td></tr>";
while($row=mysqli_fetch_array($result)){
				$name=$row["my_Event"];
				$db_type=$row['event_type'];
				$dp_target=$row['event_target'];
				$db_time=$row['event_time'];
					echo "<tr><td>";
					echo $name;
			 		echo "</td><td>";
					echo $db_type;
			 		echo "</td><td>";
					echo  $dp_target;
					echo "</td><td>";
					echo  $db_time;
			 		echo "</td></tr>";
			 }
			echo "</table>";
}

?>