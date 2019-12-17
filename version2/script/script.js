
var nleeter=document.getElementById("n1");
var s=document.getElementById('n2');
var letdiv=document.getElementById('d2');
var img=document.getElementById("image1");
var img=document.getElementById("image1");
var freg=new Array();
var arr=new Array();
var str;
for(var i=0;i<26;i++)
	freg.push(0);
	arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	///local storage function templte
function lstorage(type,target,time){
	this.type=type;
	this.target=toString(target);
	this.time=new Date();
	this.str={"type":this.type,"target":this.target,"time":this.time};
}

//local storage when load
window.addEventListener("load",function(e){
	var obj1=new lstorage(e.type,e.target,new Date());
	if(localStorage.getItem('load')){
		var jsonload=JSON.parse(localStorage.getItem("load"));
		 jsonload.push(obj1.str);
		 localStorage.setItem("load",JSON.stringify(jsonload));
		}
		else{
			var arrload=[];
			arrload.push(obj1.str);
			localStorage.setItem("load",JSON.stringify(arrload));
		}
});

//local storage when unload
window.addEventListener("unload",function(e){
	var obj2=new lstorage(e.type,e.target,new Date());
	if(localStorage.getItem('unload')){
		var jsonunload=JSON.parse(localStorage.getItem("unload"));
		 jsonunload.push(obj2.str);
		 localStorage.setItem("unload",JSON.stringify(jsonunload));
		}
		else{
			var arrunload=[];
			arrunload.push(obj2.str);
			localStorage.setItem("unload",JSON.stringify(arrunload));
		}
	 
});

//function add new letter as button 
function addbutton(e){
	for(var i=0;i<26;i++)freg[i]=0;
	letdiv.innerHTML="";
	if(nleeter.value<=26){
	for(var i=0;i<nleeter.value;i++){
			var item=document.createElement("button");
			item.value=rand();
			var itemtext=document.createTextNode(item.value);
			item.setAttribute("class","newitem");
			letdiv.appendChild(item);
			item.appendChild(itemtext);
			item.addEventListener("click",addimage)
		}
	}
}

//function add image to button when we click
function rand(){
           var x=Math.floor(Math.random()*26);
      		 var  g=arr[x];
           while(freg[x]){
			 x=Math.floor(Math.random()*26);
             g=arr[x];     
			}
			freg[x]=1;				
			return g;		
	}
	///function after add letter
function addimage(e){
		img.src='images/'+e.target.value+'.jpeg';
			//json of button
		var obj4=new lstorage(e.type,e.target,new Date());
		if(localStorage.getItem(e.target.value)){
			var jsonchar=JSON.parse(localStorage.getItem(e.target.textContent));
		 	jsonchar.push(obj4.str);
		 	localStorage.setItem(e.target.textContent,JSON.stringify(jsonchar));
		}
		else{
			var arrchar=[];
			arrchar.push(obj4.str);
			localStorage.setItem(e.target.value,JSON.stringify(arrchar));
		}
}

//funtion generate latter
s.addEventListener("click",function(e){
	addbutton(e);
	if(nleeter.value<=26 &&nleeter.value>0){
	var obj3=new lstorage(e.type,e.target,new Date());
	///JSON of generate
	if(localStorage.getItem("generate")){
		var jsongenerate=JSON.parse(localStorage.getItem("generate"));
		 jsongenerate.push(obj3.str);
		 localStorage.setItem("generate",JSON.stringify(jsongenerate));
		}
		else{
			var arrgenerate=[];
			arrgenerate.push(obj3.str)
			localStorage.setItem("generate",JSON.stringify(arrgenerate));
		}
	}
});

setInterval(function(){
for(var i=0;i<localStorage.length;i++){
	console.log(localStorage.key(i));
	$.ajax({
				"type":"post",
				"url":"php/event.php",
				"data":{"store":[localStorage[localStorage.key(i)],localStorage.key(i)]},
				"success":function(r1){
					console.log(r1);
					}
		});
}
localStorage.clear();},5000);	  		