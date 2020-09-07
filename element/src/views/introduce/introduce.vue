<template>
	<div class="container" style="margin-bottom: 50px;">
		<tle tle="为什么选择我们的服务" tle2="THE REASON TO CHOOSING US" :show="false" />
		
		<div class="u-flex-fj u-flex-wrap">
			<div ref="list" class="u-flex-faj u-flex-fd chan" v-for="(item,index) in dataarr" :key="index">
				<i style="font-size: 50px;" :class="item.icon"></i>
				<h1 style="font-size: 30px;margin: 30px 0;">{{item.tile}}</h1>
				
				<p style="margin-bottom: 20px;">{{item.content}}</p>
				<p>{{item.content2}}</p>
			</div>
		</div>
		
		<el-divider></el-divider>
		
			<el-row :gutter="30" class="u-flex-fa u-flex-wrap">
				<el-col :xs="24" :sm="12" :md="12">
			<div class="padding" ref="Tright">
				<navt wid="40%" til="BBBB" bgcolor="red" />
				<navt wid="4%" til="YYYY" bgcolor="#ff5500" />
				<navt wid="80%" til="AAAA" bgcolor="#3A8EE6" />
				<navt wid="20%" til="TTTT" bgcolor="#e60ae6" />
			</div>
			</el-col>
			<el-col  :xs="24" :sm="12" :md="12">
				<Collapse class="padding" ref="Tleft"/>
			</el-col>
			</el-row>
		
	</div>
</template>

<script>
	import tle from "@/components/tilte.vue"
	import navt from "./navtiao.vue"
	import Collapse from "./Collapse.vue"
	
	export default{
		name:"introduce",
		components:{
			tle,
			navt,
			Collapse
		},
		mounted(){
			this.animate.fun(this.$refs.list,"bounceInUp")
			this.animate.fun(this.$refs.Tright,"fadeInLeftBig")
			this.animate.fun(this.$refs.Tleft.$el,"fadeInRight")
		},
		data(){
			return{
				dataarr:[
					{
						icon:'el-icon-phone',
						tile:'核心优势1',
						content:'由专业客服提供人工服务',
						content2:'负责疑难问题和故障受理'
					},
					{
						icon:'el-icon-phone',
						tile:'核心优势1',
						content:'由专业客服提供人工服务',
						content2:'负责疑难问题和故障受理'
					},
					{
						icon:'el-icon-phone',
						tile:'核心优势1',
						content:'由专业客服提供人工服务',
						content2:'负责疑难问题和故障受理'
					},
					{
						icon:'el-icon-phone',
						tile:'核心优势1',
						content:'由专业客服提供人工服务',
						content2:'负责疑难问题和故障受理'
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.padding{
		padding: 0 10px;
		box-sizing: border-box;
	}
	.chan{
		padding: 60px 30px;
		color: #9f9f9f;
		border: 1px solid #CCCCCC;
		border-bottom: 3px solid #ccc;
		margin: 0 auto;
		margin-top: 10px;
	}
	.chan:hover{
		color: #3A8EE6;
		border: 1px solid #3A8EE6;
		border-bottom: 3px solid #3A8EE6;
	}
</style>
