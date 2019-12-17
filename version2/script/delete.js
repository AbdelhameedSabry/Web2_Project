var mydel=document.getElementById("mydel");
var bb=document.getElementById("mydatashow");
$("#del").on("submit",function(e){
	e.preventDefault()
		$.ajax({
			"type":"post",
			"url":"php/delete.php",
			"data":{"deldata":""},
			"success":function(r6){
				console.log(r6);
				bb.innerHTML="";
			mydel.innerHTML=r6;
			}
	});
});