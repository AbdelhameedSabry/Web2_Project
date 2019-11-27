
var nleeter=document.getElementById("n1");
var s=document.getElementById('n2');
var letdiv=document.getElementById('d2');
var img=document.getElementById("image1");
var img=document.getElementById("image1");
var freg=new Array();
var arr=new Array();
for(var i=0;i<26;i++)
	freg.push(0);
	arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	///local storage function templte
function lstorage(type,target,time){
	this.type=type;
	this.target=target;
	this.time=new Date();
}

//local storage when load
window.addEventListener("load",function(e){
	var obj1=new lstorage(e.type,e.target,new Date());
	if(localStorage.key("load")){
		var arrload=Array(localStorage.getItem("load"));
		 arrload.push(obj1.type+"  "+obj1.target+"  "+obj1.time);
		 localStorage.setItem("load",arrload);
		}
		else
			localStorage.setItem("load",(obj1.type+"  "+obj1.target+"  "+obj1.time));			
});

//local storage when unload
window.addEventListener("unload",function(e){
	var obj2=new lstorage(e.type,e.target,new Date());
	if(localStorage.key("unload")){
		var arrunload=Array(localStorage.getItem("unload"));
		 arrunload.push(obj2.type+"  "+obj2.target+"  "+obj2.time);
		 localStorage.setItem("unload",arrunload);
		}
		else
			localStorage.setItem("unload",(obj2.type+"  "+obj2.target+"  "+obj2.time));		
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
			item.addEventListener("click",addimage);
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
		var obj4=new lstorage(e.type,e.target,new Date());
		if(localStorage.key(e.target.value)){
		var arrbutton=Array(localStorage.getItem(e.target.value));
		 arrbutton.push(obj4.type+"  "+obj4.target+"  "+obj4.time);
		 localStorage.setItem(e.target.value,arrbutton);
		}
		else
			localStorage.setItem(e.target.value,(obj4.type+"  "+obj4.target+"  "+obj4.time));

}

//funtion generate latter
s.addEventListener("click",function(e){
	addbutton(e);
	if(nleeter.value<=26 &&nleeter.value>0){
	var obj3=new lstorage(e.type,e.target,new Date());
	if(localStorage.key("generate")){
		var arrgenerate=Array(localStorage.getItem("generate"));
		 arrgenerate.push(obj3.type+"  "+obj3.target+"  "+obj3.time);
		 localStorage.setItem("generate",arrgenerate);
		}
		else
			localStorage.setItem("generate",(obj3.type+"  "+obj3.target+"  "+obj3.time));
		
		}
});
//function remove storage after 5 seconds
setInterval(function(){localStorage.clear()},5000);