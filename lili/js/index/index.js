var aAll=document.querySelectorAll("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-left ul li>a");
var iframe=document.querySelectorAll("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-left ul li>div");

for(var i=0;i<iframe.length;i++){
	iframe[i].className+=" iframedong iframedong2";
}
var aAllArr=[2,3,5,6,8];
for(var i=0; i<aAllArr.length;i++){
	(function(i){
		aAll[aAllArr[i]].addEventListener("mouseenter",function(){
			iframe[i].style.display="block";
			clearTimeout(this.timer);
			this.timer=setTimeout(function(){
				iframe[i].className="iframe1 iframedong iframedong3";
			},30)
		});	
		
		aAll[aAllArr[i]].onmouseleave=function(){
			iframe[i].className="iframe1 iframedong iframedong2";
			iframe[i].style.display="none";
		};
		
		iframe[i].onmouseenter=function(){
			iframe[i].style.display="block";
			iframe[i].className="iframe1 iframedong iframedong3";
		};
		
		iframe[i].onmouseleave=function(){
			iframe[i].className="iframe1 iframedong iframedong2";
			clearTimeout(iframe[i].obj)
			iframe[i].obj=setTimeout(function(){
				iframe[i].style.display="none";
			},150)
		};	
	})(i)
	
}


var logoimg1=document.querySelector("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-right ul .lilog");
var logoimg2=document.querySelector("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-right ul li .nav-menu-right-img");

var flag=false;
logoimg2.className+=" iframedong iframedong2";
logoimg1.onmouseenter=function(){
	logoimg2.style.display="block";
	clearTimeout(this.timer);
	this.timer=setTimeout(function(){
		logoimg2.className="nav-menu-right-img iframedong iframedong3";
	},30)
}
logoimg1.addEventListener("mouseleave",function(){
	logoimg2.className="nav-menu-right-img iframedong iframedong2";
})

logoimg2.onmouseenter=function(){
	flag=true;
	logoimg2.className="nav-menu-right-img iframedong3";
};
logoimg2.onmouseleave=function(){
	flag=false;
	logoimg2.className="nav-menu-right-img iframedong iframedong2";
	clearTimeout(logoimg2.obj)
	logoimg2.obj=setTimeout(function(){
		logoimg2.style.display="none";
	},150)
};
logoimg1.addEventListener("mouseleave",function(){
	clearTimeout(logoimg1.timer2);
	logoimg1.timer2=setTimeout(function(){
		if(logoimg2.className=="nav-menu-right-img iframedong iframedong2" && flag==false){
			logoimg2.style.display="none";
		}
	},150)
})



var touGao=document.querySelector("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-right ul .tougao");
var upNav=document.querySelector("header .nav-menu .nav-menu-mask .nav-menu-content .nav-menu-right ul li .up-nav");

var flag2=false;
upNav.className+=" iframedong iframedong2";
touGao.onmouseenter=function(){
	upNav.style.display="block";
	clearTimeout(this.timer);
	this.timer=setTimeout(function(){
		upNav.className="up-nav iframedong iframedong3";
	},30)
}
touGao.addEventListener("mouseleave",function(){
	upNav.className="up-nav iframedong iframedong2";
})

upNav.onmouseenter=function(){
	flag2=true;
	upNav.className="up-nav iframedong3";
};
upNav.onmouseleave=function(){
	flag2=false;
	upNav.className="up-nav iframedong iframedong2";
	clearTimeout(upNav.obj)
	upNav.obj=setTimeout(function(){
		upNav.style.display="none";
	},150)
};
touGao.addEventListener("mouseleave",function(){
	clearTimeout(touGao.timer2);
	touGao.timer2=setTimeout(function(){
		if(upNav.className=="up-nav iframedong iframedong2" && flag2==false){
			upNav.style.display="none";
		}
	},150)
})	



var subNav=document.querySelectorAll(".sub-nav");
var subNavLi=[];
for(var j=0;j<subNav.length;j++){
	subNavLi.push(subNav[j].parentNode);
}

for(var i=0;i<subNavLi.length;i++){
	(function(i){
		subNavLi[i].onmouseenter=function(){
			subNav[i].style.display="block";
		}
		subNavLi[i].onmouseleave=function(){
			subNav[i].style.display="none";
		}
	})(i)
	
}

var aImg=document.querySelector(".zhibotu");
subNavLi[subNavLi.length-1].addEventListener("mouseenter",function(){
	 aImg.style.display="block";
})
subNavLi[subNavLi.length-1].addEventListener("mouseleave",function(){
	 aImg.style.display="none";
})


var sideNavDiv=document.querySelector(".side-nav-div");
var sideNavDivLi=sideNavDiv.parentNode;
sideNavDivLi.onmouseenter=function(){
	sideNavDiv.style.display="block";
}
sideNavDivLi.onmouseleave=function(){
	sideNavDiv.style.display="none";
}


// 轮播图
var lunboBox=document.querySelector("#app_content .app_content-lunbo");
var lunboImg=document.querySelectorAll("#app_content .app_content-lunbo .lunBoTu");
var lunboSpan=document.querySelector("#app_content .app_content-lunbo .xianshi");
var lunboBoxWidth=lunboBox.offsetWidth;
var iNow=0;
var lunboSpanZi=lunboSpan.children;
// 创建小点
for(var k=0;k<lunboImg.length;k++){
	var span=document.createElement("span");
	lunboSpan.appendChild(span);
}
lunboSpanZi[0].className="curent";
// 第二张以后img向右放
for(var j=1;j<lunboImg.length;j++){
	lunboImg[j].style.left=lunboBoxWidth+"px";
}

// img向右切换
function autoPlayRight(){
	action(lunboImg[iNow],-lunboBoxWidth);
	iNow++;
	if(iNow>lunboImg.length-1){
		iNow=0;
	}
	lunboImg[iNow].style.left=lunboBoxWidth+"px";
	action(lunboImg[iNow],0);
	
	changeIndex()
}
// 自动
clearInterval(time);
var time=setInterval(autoPlayRight,2000);
	
lunboBox.onmouseover=function(){
	clearInterval(time);
}
lunboBox.onmouseout=function(){
	time=setInterval(autoPlayRight,2000);
}

// 点击小点切换对应img
for(var Q=0;Q<lunboSpanZi.length;Q++){
	(function(i){	
		lunboSpanZi[i].onclick=function(){
			if(i>iNow){
				action(lunboImg[iNow],-lunboBoxWidth);
				lunboImg[i].style.left=lunboBoxWidth+"px";
				
			}else if(i<iNow){
				action(lunboImg[iNow],lunboBoxWidth);
				lunboImg[i].style.left=-lunboBoxWidth+"px";
			}
			iNow=i;
			action(lunboImg[iNow],0);
			
			changeIndex();
		}
		
	})(Q)
}

// 下方小点切换
for(var w=0;w<lunboSpanZi.length;w++){
	lunboSpanZi[w].index=w;
	lunboSpanZi[w].onmouseenter=function(){
		if(this.index!=iNow){
			lunboSpanZi[this.index].style.backgroundPosition="-920px -790px";
		}
	}
	lunboSpanZi[w].onmouseleave=function(){
		if(this.index!=iNow){
			lunboSpanZi[this.index].style.backgroundPosition="";
		}
	}
}

// 下方小点显示
function changeIndex(){
	for(var i=0;i<lunboSpanZi.length;i++){
		lunboSpanZi[i].className=" ";
	}
	if(lunboSpanZi[iNow].style.backgroundPosition=="-920px -790px"){
		lunboSpanZi[iNow].style.backgroundPosition="";
	}
	lunboSpanZi[iNow].className="curent";
}

// 缓动动画
function action(ele,target){
	var eleLeft;
	clearInterval(ele.timer);
	ele.timer=setInterval(function(){
		eleLeft=parseInt(getComputedStyle(ele,null).left);
		var step=(target-eleLeft)/10;
		step=step>0?Math.ceil(step):Math.floor(step);
		ele.style.left=eleLeft+step+"px";
		if(Math.abs(target-eleLeft)<=Math.abs(step)){
			ele.style.left=target+"px";
			clearInterval(ele.timer);
		}	
	},20)
}


// 动图nav
var nav=document.querySelector("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu a .tuiguang-img .dongtu")
var navleft=document.querySelectorAll("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu");
var navSpan=document.querySelectorAll("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu a .tuiguang-img .dongtu .dongtu-bar span");
var navLeftWidth=navleft.offsetLeft;
var navWidth=nav.offsetWidth;

var cover=document.querySelectorAll("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu a .tuiguang-img .dongtu .coverZong");

// nav到左边的宽度
var navLeftWidthArr=[];
for(var i=0;i<navleft.length;i++){
	navLeftWidthArr.push(navleft[i].offsetLeft+180);
}

// data
var navI=[10,5.2,1,10]

for(var k=0;k<cover.length;k++){
	(function(i){
		cover[i].onmousemove=function(e){
			e=e||event;
			var navCha=Math.ceil((e.clientX-navLeftWidthArr[i])/navWidth*100);
			navSpan[i].style.width=navCha+"%";
			var coverCha=(navCha/100)*(navI[i]*1600);
			var coverY=-Math.floor(coverCha/1600)*90;
			var coverX=-Math.floor(coverCha%1600);
			if(coverY<-(navI[i]-1)*90) coverY=-(navI[i]-1)*90;
			cover[i].style.backgroundPosition=coverX+"px"+" "+coverY+"px";
		}
	})(k)
	
}


// 稍后显示
var shaohou=document.querySelectorAll("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu a .tuiguang-img .shaohou");
var shaohouI=document.querySelectorAll("#app_content .app_content-tuiguang .app_content-tuiguang-left .tuiguang-left-bottom .tuiguang-left-bottom-tu a .tuiguang-img i");

for(var R=0;R<shaohouI.length;R++){
	shaohouI[R].index=R;
	shaohouI[R].onmouseenter=function(){
		shaohou[this.index].style.display="block";
	}
	shaohouI[R].onmouseleave=function(){
		shaohou[this.index].style.display="none";
	}
}
var rightTriggerSpan=document.querySelectorAll("#app_content .app_content-lunbo-right .app_content-right-div span");
var rightTrigger=document.querySelectorAll("#app_content .app_content-lunbo-right .app_content-right-div .app_content-right-trigger");

for(var T=0;T<rightTrigger.length;T++){
	rightTrigger[T].index=T;
	rightTrigger[T].onmouseenter=function(){
		rightTriggerSpan[this.index].style.display="block";
	}
	rightTrigger[T].onmouseleave=function(){
		rightTriggerSpan[this.index].style.display="none";
	}
}

// 三个图移动
var pic=document.querySelector("#app_content .fanwei .fanwei-right .box-tab .box-tab-content .tab-item3 .tab-item3-top .pic")
var title=document.querySelectorAll("#app_content .fanwei .fanwei-right .box-tab .box-tab-content .tab-item3 .tab-item3-top .title>li")
var trig=document.querySelectorAll(" #app_content .fanwei .fanwei-right .box-tab .box-tab-content .tab-item3 .tab-item3-top .trig>li")
var picIndex=0;
clearInterval(pic.timer);
pic.timer=setInterval(picset,2000);
function picset(){
	var translatex=-picIndex*260;
	pic.style.transition="all 1s";
	pic.style.transform='translateX('+translatex+'px)';
	if(picIndex==3){
		pic.style.transition="";
		pic.style.transform="";
		pic.style.marginLeft="0px";
		picIndex=0
	}
	for(var i=0;i<title.length;i++){
		title[i].className="";
		trig[i].className="";
	}
	title[picIndex].className="titleOn";
	trig[picIndex].className="trigOn";
	
	for(var p=0;p<trig.length;p++){
		trig[p].index=p;
		trig[p].onmouseenter=function(){
			clearInterval(pic.timer)
			picIndex=this.index;
			picset();
		}
		trig[p].onmouseleave=function(){
			pic.timer=setInterval(picset,2000);
		}
	}
	picIndex++;	
}


var tabItem=document.querySelectorAll("#app_content .fanwei .fanwei-right .fanwei-right-tab .fanwei-right-tab-item");
var boxTabContent=document.querySelector("#app_content .fanwei .fanwei-right .box-tab .box-tab-content");

for(var A=0;A<tabItem.length;A++){
	tabItem[A].index=A;
	tabItem[A].onmousedown=function(e){
		e=e||event;
		e.preventDefault();
		for(var i=0;i<tabItem.length;i++){
			tabItem[i].className="fanwei-right-tab-item";
		}
		this.className="fanwei-right-tab-item on";

		boxTabContent.style.marginLeft=(this.index*-260)+"px";
	}
}

// 动画
var donghua=document.querySelectorAll("#app_content .fanwei .fanwei-left .fanwei-left-top .bili-tab .bili-tab1");
var fanweiLeftBottom=document.querySelector("#app_content .fanwei .fanwei-left .fanwei-left-bottom1");
var fanweiLeftBottom2=document.querySelector("#app_content .fanwei .fanwei-left .fanwei-left-bottom2");

for(var i=0;i<donghua.length;i++){
	donghua[i].index=i;
	donghua[i].onmousedown=function(){
		if(this.index==1){
			donghua[0].className="bili-tab1";
			donghua[1].className+=" on";
			fanweiLeftBottom.style.display="none";
			fanweiLeftBottom2.style.display="block";
		}else if(this.index==0){
			donghua[1].className="bili-tab1";
			donghua[0].className+=" on";
			fanweiLeftBottom.style.display="block";
			fanweiLeftBottom2.style.display="none";
		}
	}
}

//全部 原创
var quan=document.querySelectorAll("#app_content .fanwei .fanwei-right .fanwei-right-tab-donghua-fu .fanwei-right-tab-donghua .tab-donghua");
var quandong=document.querySelector("#app_content .fanwei .fanwei-right .fanwei-right-tab-donghua-box .tab-donghua-box");

for(var i=0;i<donghua.length;i++){
	quan[i].index=i;
	quan[i].onmousedown=function(e){
		e=e||event;
		e.preventDefault();
		quandong.style.transition="all 0.3s";
		if(this.index==0){
			quan[1].className="tab-donghua";
			quan[0].className+=" ons";
			quandong.style.marginLeft=-(this.index*260)+"px";
		}else if(this.index==1){
			quan[0].className="tab-donghua";
			quan[1].className+=" ons";
			quandong.style.marginLeft=-(this.index*260)+"px";
		}
	}
}

 // 番剧
 
 var fanweiLeftBottom3Data=[
 	{img:"images/fanju/fanju1.webp.jpg",title:"超级小白",num:2,flag:1},
 	{img:"images/fanju/fanju2.webp.jpg",title:"非槍人生（僅限台灣地區）",num:3,flag:1},
 	{img:"images/fanju/fanju3.webp.jpg",title:"非枪人生",num:2,flag:0},
 	{img:"images/fanju/fanju4.webp.jpg",title:"刺客守則（僅限港澳台地區）",num:2,flag:0},
 	{img:"images/fanju/fanju5.webp.jpg",title:"碧藍航線（僅限港澳台地區）",num:4,flag:1},
 	{img:"images/fanju/fanju6.webp.jpg",title:"刺客守则",num:3,flag:0},
 	{img:"images/fanju/fanju7.webp.jpg",title:"碧蓝航线",num:1,flag:0},
 	{img:"images/fanju/fanju8.webp.jpg",title:"超人高中生们即便在异世界也能从容生存！",num:1,flag:1},
 	{img:"images/fanju/fanju9.webp.jpg",title:"鋼彈創鬥者潛網大戰 Re:RISE（僅限台灣地區）",num:2,flag:0},
 	{img:"images/fanju/fanju10.webp.jpg",title:"高達創戰潛行者 Re:RISE（僅限港澳地區）",num:3,flag:0},
 	{img:"images/fanju/fanju11.webp.jpg",title:"高达创形者 再起",num:4,flag:1},
 	{img:"images/fanju/fanju12.webp.jpg",title:"动物狂想曲 / BEASTARS",num:4,flag:0},
 	{img:"images/fanju/fanju13.webp.jpg",title:"放學後桌遊俱樂部（僅限港澳台地區）",num:2,flag:0},
 	{img:"images/fanju/fanju14.webp.jpg",title:"放学后桌游俱乐部",num:3,flag:0},
 	{img:"images/fanju/fanju15.webp.jpg",title:"小書痴的下剋上:為了成為圖書管理員不擇手段!（僅限台灣地區）",num:2,flag:0}
 	
 ];
 
 var fanjuItem=document.querySelectorAll("#app_content .fanwei .fanwei-left .fanwei-left-top .fanju .fanju-item");
 var fanjuItemArr=["最新","一","二","三","四","五","六","日"];
 
chuangjian(fanweiLeftBottom3Data);

xin();
 
fanjuItem[0].style.borderBottomColor="#0077AA";
 for(var i=0;i<fanjuItem.length;i++){
	var rt= fanjuItem[i].onmousedown=function(e){
		 e=e||event;
		 e.preventDefault();
		 for(var j=0;j<fanjuItem.length;j++){
			 fanjuItem[j].classList.remove("ons2");
			 fanjuItem[j].style.borderBottomColor="#eee";
			 fanjuItem[j].innerText=fanjuItemArr[j];
		 }
		 if(!(this.innerText=="最新")){
			 this.innerText="周"+this.innerText;
		 }
		this.style.borderBottomColor="#0077AA"
		this.classList.toggle("ons2");
		
		var shujishuArr=shujishu();
		
		chuangjian(shujishuArr);
		
		xin();
		
	 }
 }
 
 // 随机数
 function shujishu(){
	var suiji=Math.round(Math.random()*(10-4)+4);
	var suijiArr=fanweiLeftBottom3Data.slice(0,suiji).sort(function(){return 0.5-Math.random()});
	return suijiArr;
 }

// 创建元素
function chuangjian(shujishuArr){
	var fanweiLeftBottomzi='';
	for(var i=0;i<shujishuArr.length;i++){
		fanweiLeftBottomzi+=`
			<div class="fanwei-left-bottom3-box clearfix">
				<a class="left-bottom3-tu-box" href="javascript:;">
					<div class="left-bottom3-tu">
						<img src="${shujishuArr[i].img}" alt="">
					</div>
				</a>
				<div class="left-bottom3-zi">
					<a href="javascript:;" target="_blank" title="${shujishuArr[i].title}" class="t">
							${shujishuArr[i].title}
					</a>
					<p class="update" flag="${shujishuArr[i].flag}">
						<a href="javascript:;" target="_blank" class="ta">
							第${shujishuArr[i].num}话
						</a>
					</p>
				</div>
			</div>`;
			
	}
	var fanweiLeftBottom3=document.querySelector("#app_content .fanwei .fanwei-left .fanwei-left-bottom3");
	fanweiLeftBottom3.innerHTML=fanweiLeftBottomzi;
}

// 新的设置成红的
function xin(){
	var fanweiLeftBottom3Color=document.getElementsByClassName("update");
	for(var j=0;j<fanweiLeftBottom3Color.length;j++){
		if(fanweiLeftBottom3Color[j].getAttribute("flag")==0){
			fanweiLeftBottom3Color[j].style.backgroundColor="#ff8eb3";
		}
	}
}


// 侧边导航栏
var ceNav=document.querySelector(".ce-nav-ba");
var ceNavW=document.documentElement.offsetWidth;
var ceNavH=document.documentElement.offsetHeight;

ceNav.style.width=ceNavW+"px";
ceNav.style.height=ceNavH+"px";
ceNav.style.backgroundColor="rgba(0,0,0,0.6)";

var navContent=document.querySelector(".ce-nav");
var navContentHeight=navContent.offsetTop;
// 回到顶部
var huiTop=document.querySelector(".ce-nav .ce-nav-content .nav-item-img2");

window.addEventListener("scroll",function(event){
var scrollTopHeight=document.body.scrollTop || document.documentElement.scrollTop;

	if(scrollTopHeight>=Math.abs(navContentHeight)){
		navContent.classList.add("ce-navfixed");
		navContent.classList.remove("ce-navabsolute");
	}else{
		navContent.classList.add("ce-navabsolute");
		navContent.classList.remove("ce-navfixed");
		
	}
	 
	huiTop.onclick=function(){
		huiTopfun();
	}
})
function huiTopfun(){
	var end=0,spen;
	clearInterval(Toptimer);
	var Toptimer=setInterval(function(){
		scrollTopHeight=document.body.scrollTop || document.documentElement.scrollTop;
		spen=(scrollTopHeight-end)/10;
		spen+=Math.ceil(spen);
		window.scrollTo(0,spen);
		if(spen<=5){
			window.scrollTo(0,0);
			clearInterval(Toptimer);
		}
	},30)
}

// 点击移动
var ceNavLeft=document.querySelector(".ce-nav .ce-nav-left");
var ceImg=document.querySelector(".ce-nav .ce-nav-content .nav-item-img"); 
var ceNavBa=document.querySelector(".ce-nav-ba"); 
var ceContent=document.querySelector(".ce-nav .ce-nav-content");
var ceImgNone=false;
var yidong=true;

ceImg.addEventListener("click",function(){
	if(!ceImgNone){
		ceNavLeft.style.display="block";
		ceNavBa.style.display="block";
		ceImgNone=true;
		yidong=false;
	}else{
		ceNavBa.style.display="none";
		ceNavLeft.style.display="none";
		ceImgNone=false;
		yidong=true;
	}
	
	for(var i=0;i<navItem.length-2;i++){
		navItem[i].classList.remove("navon");
		(function(i){ 
			navItem[i].onmousedown=function(e){

				navItem[i].style.position="absolute";
				navItem[i].style.transition="all 0s";
				navItem[i].style.backgroundColor="#0086B3";
				
				 document.onmousemove=function(e){
					e=e||event;
					e.preventDefault();
					console.log(ceNavLeft.offsetTop)
					navItem[i].style.top=(e.clientY)+"px";
					 if(navItem[i].offsetTop%24==0){
						navItemIndex=(Math.ceil(navItem[i].offsetTop/24));
						var navDiv=document.querySelectorAll(".nav-div");
						
						navItem[navItemIndex].insertAdjacentHTML('beforeBegin','<div class="nav-div"></div>')
						for(var p=0;p<navDiv.length;p++){
							ceContent.removeChild(navDiv[p]);
						}
					 }
				}
				
				document.onmouseup=function(){
					document.onmousemove=null;
					
					for(var n=0;n<navItem.length;n++){
						navItem[n].removeAttribute("style");
					}
					var navDiv=document.querySelector(".nav-div");
					console.log(navDiv)
					ceContent.replaceChild(navItem[i],navDiv);
					
					// var navItem2=document.querySelectorAll(".ce-nav .ce-nav-content .nav-item");
					//  for(var m=0;m<navItem2.length;m++){
					// 	 var sortin=navItem2[m].getAttribute("sortindex");
					//  }
					

				}
			}
		})(i)
		
	}
})

var navBottomImg1=document.querySelector(".ce-nav .ce-nav-bottom .nav-bottom-img1")
 var navBottomImg2=document.querySelector(".ce-nav .ce-nav-bottom .nav-bottom-img2")
navBottomImg1.onmouseenter=function(){
	clearInterval(navBottomImg1.trem);
	navBottomImg2.style.opacity="1";
	var navBottomImg1Index=0;
	var navBottomImg1content=80;
	navBottomImg1.trem=setInterval(function(){
		navBottomImg1content+=(navBottomImg1Index*80);
		navBottomImg1Index++;
		navBottomImg1.style.backgroundPositionX=-navBottomImg1content+"px";
		if(navBottomImg1content>=1200){
			navBottomImg1.style.backgroundPositionX="-1200px";
			clearInterval(navBottomImg1.trem);
		}
	},80)
}
navBottomImg1.onmouseleave=function(){
	navBottomImg2.style.opacity="0";
	navBottomImg1.style.backgroundPositionX=0;
}

//导航栏移动
var navItem=document.querySelectorAll(".ce-nav .ce-nav-content .nav-item");
var fanWei=document.querySelectorAll("#app_content .fanwei");
var appContent=document.getElementById("app_content").offsetTop;
var Toptimer2;//清除定时器

for(var i=0;i<navItem.length-2;i++){
	(function(i){
		navItem[i].onclick=function(){
			if(i>=4&&i<=19){
				window.confirm("没有内容(●—●)只有前四个(到音乐)")
				return false;
			}
			for(var j=0;j<navItem.length;j++){
				navItem[j].classList.remove("navon");
			}
			this.classList.add("navon");
				
			var sortin=navItem[i].getAttribute("sortindex");
			clearInterval(Toptimer2);
			if(yidong){
				huiTopfun2(fanWei[sortin].offsetTop+appContent);
			}
			window.addEventListener("mousewheel",gunlun);
			function gunlun(){
				clearInterval(Toptimer2);
			}
		}		
	})(i)
}
function huiTopfun2(end){
	var spen;
	clearInterval(Toptimer2);
	Toptimer2=setInterval(function(){
		scrollTopHeight=document.body.scrollTop || document.documentElement.scrollTop;
		spen=(end-scrollTopHeight)/10;
		spen=spen>0?Math.ceil(spen):Math.floor(spen);
		window.scrollTo(0,scrollTopHeight+spen);
		if(Math.abs(end-scrollTopHeight)<=Math.abs(spen)){
			window.scrollTo(0,end);
			clearInterval(Toptimer2);
		}
	},20)
}

// 滚动显示
window.addEventListener("scroll",function(){
	var scrollTopHeight=document.body.scrollTop || document.documentElement.scrollTop;
	 for(var i=0;i<fanWei.length;i++){
		if(scrollTopHeight>=fanWei[i].offsetTop+200){
			for(var k=0;k<navItem.length;k++){
				navItem[k].classList.remove("navon");
			}
			navItem[i].classList.add("navon");
		}
	 }
})
