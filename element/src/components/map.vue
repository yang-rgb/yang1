<template>
	<div class="mymapclass">
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
		// this.ipmap()
	},
	methods:{
		initMap(){
			this.map=new AMap.Map('mymap',{})
			var marker = new AMap.Marker({});
			marker.setMap(this.map); 
			marker.setAnimation('AMAP_ANIMATION_DROP');
			var str='<p style="margin-top:15px">地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里</p><p>电话：010-64733333</p>'
			var inforWindow = new AMap.InfoWindow({    
			    content:str ,//使用默认信息窗体框样式，显示信息内容 
				offset: new AMap.Pixel(5, -28)
			}); 
			inforWindow.open(this.map,marker.getPosition());
			 marker.on('click', ()=>{
				inforWindow.open(this.map,marker.getPosition());
			 });
			  
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
		
		
		
		
	}
}
</script>
	
<style scoped>
	#mymap{
		box-shadow: 0px 0px 15px #ccc;
	}
	 >>> .amap-info-close{
		right: 5px !important;
	}
</style>