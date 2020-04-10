<template>
  <div class="HelloTop">
	  <div class="container hidden-xs-only">
		<el-row  type="flex" justify="space-between">
		  <el-col :xs="19" :sm="16" :md="12">
			  <div  class="grid-content u-flex-fa top-content bg-purple-dark">
				<span><i class="el-icon-phone"></i>2423423-423423423</span>
				<span><i class="el-icon-message"></i>dddkun_11@qq.com </span>
				<span><i class="el-icon-watch"></i>7x24小时为您服务</span>
			  </div>
		</el-col>
		  <el-col :xs="5" :sm="8" :md="12">
			  <div class="grid-content u-flex-jeac top-content bg-purple-dark1">
				  <span><i class="el-icon-s-custom"></i>赶快联系我们吧</span>
			  </div>
			</el-col>
		</el-row>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloTop',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.HelloTop{
		border-bottom: 1px solid #ccc;
	}
	.top-content>span{
		font-size: 12px;
		margin-left:8px;
	}
	.top-content>span i{
		margin-right:4px;
	}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
