<template>
  <div class="navItem" 
		:class="[hor=='horizontal' ? '' : 'bor']">
	  <div :class="[hor=='horizontal' ? 'container' : '']">
		  <el-row>
		    <el-col :xs="21" :sm="8" :md="12" :span="12" class="u-flex-fa">
				<img :class="[hor=='horizontal' ? '' : 'navimg2']" class="navimg " src="../assets/logo.png" alt="">
			</el-col>
			<el-col :xs="3" :sm="16" :md="12" :span="12" class="heig u-flex-jeac">
				<el-button @click="navckick()" style="margin-right: 10px;" :class="[hor=='horizontal' ? 'hidden' : '']" icon="el-icon-s-home"></el-button> 
					
			<transition name="el-zoom-in-top">
				<el-menu v-show="show3" 
				:default-active="activeIndex" 
				class="el-menu-demo " 
				:class="[hor=='horizontal' ? '' : 'pos']" 
				:mode="hor" 
				@select="handleSelect"
				:style="{zIndex:zindex}"
				>
				  <el-menu-item index="1">首页</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">软件产品</template>
				    <el-menu-item index="2-1">404</el-menu-item>
				    <el-menu-item index="2-2">简历</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="3">新闻动态</el-menu-item>
				  <el-menu-item index="4">公司介绍</el-menu-item>
				  <el-menu-item index="5">联系我们</el-menu-item>
				</el-menu>
				</transition>
			</el-col>
		  </el-row>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'navItem',
  data() {
	return {
	  activeIndex: '1',
	  screenWidth: document.documentElement.clientWidth,
	  hor:'horizontal',
	  show3: true,
	  zindex:9,
	  router:{
		  "1":'/home',
		  "2-1":'/bug',
		  "2-2":'/jili',
		  "3":'/News',
		  "4":'/Introduce',
		  "5":'/company' 
	  }
	}
  },
  mounted () {
		this.get_bodyHeight();
		this.horfun();
		this.activeIndex=window.sessionStorage.getItem("activeIndex")
  	},
	watch: {
		screenWidth(val){
			
		}
	},
  methods:{
	  navckick(){
		  this.show3 = !this.show3
		  this.zindex=9;
	  },
		handleSelect(key, keyPath) {
			this.get_bodyHeight()
			if(this.$route.path==this.router[key]) return;
			window.sessionStorage.setItem('activeIndex',key)
			 this.$router.push(this.router[key])
		},
		get_bodyHeight () {
			
			window.onresize =this.throttle(()=>{
				this.screenWidth = document.documentElement.clientWidth;
				
				 this.zindex=this.screenWidth>768?9:-1;
				 this.show3=this.screenWidth>768?true:false;
				
				this.hor=this.screenWidth>768?'horizontal':'vertical';
			
			},20)
			
		},
		horfun(){
			this.hor=this.screenWidth>768?'horizontal':'vertical';
			this.show3=this.screenWidth>768?true:false;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bor{
		margin-bottom: 8px;
		border-bottom: 1px solid #CCCCCC;
	}
.navimg{
	width: 60px;
	height: 60px;
}
.heig{
	height:70px;
}
.pos{
	position: absolute;
	width: 100%;
	top: 70px;
	z-index: 9;
}
.hidden{
	display: none;
}
.navimg2{
	margin-left: 50%;
	transform: translateX(-50%);
}

</style>
