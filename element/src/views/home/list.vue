<template>
	<div class="listzhu ">
		<div class="container">
		<el-row class="u-flex-fw" :gutter="30">
			 <el-col :sm="24" :md="12" :lg="7" v-for="(item,index) in imgarr" :key="index">
				<div ref="list" class="listitem u-flex-faj" >
					<img style="margin-right: 10px;flex-shrink: 0;" :src="item.img">
					<div class="listcont">
						<h3 style="margin-bottom: 10px;">{{item.title}}</h3>
						<p>{{item.content}}</p>
					</div>
				</div>
			</el-col>
		</el-row>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"listitem",
		data(){
			return{
				imgarr:[
					{
						img:require("@/assets/img/services/services1.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					},
					{
						img:require("@/assets/img/services/services2.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					},
					{
						img:require("@/assets/img/services/services3.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					},
					{
						img:require("@/assets/img/services/services4.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					},
					{
						img:require("@/assets/img/services/services5.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					},
					{
						img:require("@/assets/img/services/services6.png"),
						title:"Media heading",
						content:"微信开发者工作是微信官方提供的针对微信小程序的开发工具，集中了开发，调试，预览，上传等功能"
					}
				]
			}
		},
		mounted(){
			this.animate.fun(this.$refs.list,"fadeInUp")
		}
	}
</script>

<style scoped="scoped">
.listzhu{
	background: url(../../assets/img/services/bg_services.png) repeat;
	width: 100%;
	height: auto;
	padding: 30px 0;
}
.listitem{
	background-color: #fff;
	padding: 20px 15px;
	border-radius: 10px;
	box-shadow: 2px 2px 3px #ccc;
	margin: 15px 15px;
}
</style>
