<template>
	<div class="mymap">
		<div id="mymap" :style="{width: '100%',height:gao}"></div>
	</div>
</template>
	
<script>
	
	 import AMap from "AMap"
	
export default{
	name:"mymap",
	props:{
		gao:{
			type:String,
			default:"400px"
		}
	},
	data(){
		return {
			map:null
		}
	},
	mounted(){
		this.initMap()
		this.ipmap()
	},
	methods:{
		initMap(){
			this.map=new AMap.Map('mymap',{})
			var marker = new AMap.Marker({});
			marker.setMap(this.map); 
			marker.setAnimation('AMAP_ANIMATION_DROP');
			  
			this.map.plugin(["AMap.ToolBar","AMap.OverView","AMap.Scale"],()=>{   //在地图中添加ToolBar插件      
			        var toolBar = new AMap.ToolBar();  
			        this.map.addControl(toolBar);   
					
					var view = new AMap.OverView({
						isOpen:true
					});
					this.map.addControl(view);
					
					var scale = new AMap.Scale();
					    this.map.addControl(scale); 
					
			    });
		}
		
		,ipmap(){
			
		}
		
		
	}
}
</script>
	
<style scoped>
	#mymap{
		box-shadow: 0px 0px 15px #ccc;
	}
</style>