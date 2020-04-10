<template>
	<div class="container data">
		<el-row :gutter="20" class="row">
			<el-col :sm="24" :md="12" :lg="12">
				<img ref="list" class="wow width100 " src="../../assets/img/img1.webp" >
			</el-col>
			<el-col :sm="24" :md="12" :lg="12">
				<div class="content width100">
				<h1 class="lg">大数据管理系统 <span class="sm">/ Big Data Management System</span></h1>
				<el-divider></el-divider>
				<p style="text-indent: 2em;" class="width100">当今最领先的响应式自助建站平台。无论您是普通互联网用户，还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞页可以满足您的所有需求。</p>
				<p class="width100" style="margin-top: 20px;text-indent: 2em;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，还是专业网站制作人员。</p>
				<h1 class="lg" style="margin: 24px 0;">PC/PAD/Phone   全设备支持</h1>
				<el-button type="primary" style="width:100%">主要按钮</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>


	
export default{
	name:'dataimg',
	mounted(){
		this.animate.fun(this.$refs.list)
	},
	methods:{
		
	}
}
</script>

<style scoped="scoped">
	@media screen and (max-width:374px){
		.row{
			height: auto;
		}
	}
	
	.data{
		margin-top: 40px;
	}
	.content{
		height: 351px;
	}
	.lg{
		font-size: 1.4rem;
	}
	.sm{
		font-size: 0.8rem;
		color: #888;
	}
</style>
