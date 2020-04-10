
const clientHeight = document.documentElement.clientHeight
const scrollTop = document.documentElement.scrollTop


let animate={
	
	animate:function(ele,anit){
		anit=anit || "zoomIn"
		if(Array.isArray(ele)){
			ele.forEach((item)=>{
				var eleTop2=item.getBoundingClientRect().top
					if( eleTop2-scrollTop<clientHeight-(clientHeight*0.3) ){
						
						item.classList.add("animated",anit)
						
					}
					
			})
		}else{
			var eleTop=ele.getBoundingClientRect().top;
						if( eleTop-scrollTop<clientHeight-(clientHeight*0.3) ){
							ele.classList.add("animated",anit)
			}
			
		}	
	},
	fun(a,b){
		var fn=this.throttle(this.animate.bind(this,a,b),1000)
		window.addEventListener('scroll',fn)
	},
	funHeight(call){
		let clientWidth = document.documentElement
		var fn=this.throttle(function(){
			let h=clientWidth.clientWidth
			 call && call(h)
			},500)
		window.addEventListener('resize',fn)
	},
	
	throttle(fn,delay){
		var lasttime=0;
		return function(){
			var nowtime=Date.now();
			 if(nowtime-lasttime>delay){
				 fn.call(this);
				 lasttime = nowtime;
			 }
		}
	}
	
}
	


export default animate