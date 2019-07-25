var img1=document.getElementById("img1");

var imgarr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];

var index=0;

var timer;

var kaishi=document.getElementById("kaishi");
	
kaishi.onclick=function(){
	
	clearInterval(timer);
	
	timer=setInterval(function(){
		index++;
		
		// if(index>=imgarr.length){
		// 	index=0;
		// }
		index %= imgarr.length;
		
		img1.src=imgarr[index];
	},1000)
	
}

var tingzhi=document.getElementById("tingzhi");
	
tingzhi.onclick=function(){
	clearInterval(timer);
}



