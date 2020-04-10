<template>
	<div class="carousel">
	
	<el-carousel :height="+heig+'px'">
		
		  <el-carousel-item v-for="(item,index) in imgarr" :key="index">
			<img class="heightw"  :src="item.img">
			
		  </el-carousel-item>

	</el-carousel>
	

	</div>
</template>

<script>
export default {
  name: 'carousel',
  components: {
    
  },
  mounted(){
	  
	   this.heig=checkRange(document.documentElement.clientWidth)
	  
	  function checkRange(total) {
	    const result =  (total >= 1200 && 600 ) || 
						(total >=992 && 480 ) || 
						(total >=768 && 360 ) || 
						(total >=576 && 240 ) || 
						240
	    return result
	  }
		
		this.heig=sessionStorage.getItem('h') || this.heig
		this.animate.funHeight((e)=>{
			var h=checkRange(e)
		  sessionStorage.setItem('h',h)
		 this.heig=h
	  });

		console.log( this.heig)

  },
  data(){
	  return{
		 imgarr:[
			 {img:require("@/assets/img/banner2.webp")},
			 {img:require("@/assets/img/banner1.webp")}
		 ],
		 heig:600
	  }
  },
}
</script>

<style scoped="scoped">
	.heightw{
		min-width: 100%;
		height: 100%;
	}
	
	
</style>
