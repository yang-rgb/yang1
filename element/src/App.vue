<template>
  <div id="app" >
    <Hello-top></Hello-top>
	<nav-item></nav-item>
	<router-view></router-view>
	<!-- <news></news> -->
	<!-- <my-home></my-home> -->
	<myFooter/>
	<!-- <h2 class="ghg">ddddddd</h2> -->
  </div>
</template>

<script>

import HelloTop from '@/components/HelloTop.vue'
import navItem from '@/components/nav.vue'
import myHome from '@/views/home/Home.vue'
import myFooter from './components/footer.vue'
import news from '@/views/news/news.vue'

import axios from 'axios';


export default {
  name: 'app',
  components: {
	  HelloTop,
		navItem,
		myFooter,
		
  },
  mounted(){
	
  },
  methods:{
	
  }
}
</script>

<style>	
@import url("./assets/css/animate.css");
@import url("./assets/css/base.css");
	#app{
		overflow: hidden;
	}
	.width100{
		max-width: 100%;
	}
	html{
		/*   */
	}
	.u-flex,
	.u-flex-fa,
	.u-flex-fj,
	.u-flex-fja,
	.u-flex-faj,
	.u-flex-faja,
	.u-flex-fd,
	.u-flex-jeac,
	.u-flex-fw
	{
		display: flex;
	}
	.u-flex-fa{
		align-items: center;
	}
	
	.u-flex-fj{
		justify-content: space-between;
	}
	.u-flex-fd{
		flex-direction: column;
	}
	.u-flex-wrap{
		flex-wrap: wrap;
	}	
	.u-flex-faj{
		align-items: center;
		justify-content: center;
	}
	.u-flex-fja{
		justify-content: space-between;
		align-items: center;
	}
	.u-flex-faja{
		justify-content: space-around;
		align-items: center;
	}
	.u-flex-jeac{
		justify-content: flex-end;
		align-items: center;
	}
	.u-flex-fw{
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	
	

</style>
