<template>
	<div>
		
		<el-collapse v-model="activeName" accordion>
		  <el-collapse-item  title="AAAAAA" name="1">
			  <div class="u-flex-fa">
		    <el-image
		          style="width: 50px; height: 50px"
		          :src="url"
		          fit="fill"></el-image>
			<span>AAAAAAAAAAAAAAA</span>
			</div>
		   
		  </el-collapse-item>
		  <el-collapse-item title="BBBBB" name="2">
		    <div>AAAAAAAAAAAAAAA</div>
		    <div>AAAAAAAAAAAAAAA</div>
		  </el-collapse-item>
		  <el-collapse-item title="BBBBB" name="3">
		    <div>AAAAAAAAAAAAAAA</div>
		    <div>AAAAAAAAAAAAAAA</div>
		  </el-collapse-item>
		  <el-collapse-item title="BBBBB" name="4">
		    <div>AAAAAAAAAAAAAAA</div>
		    <div>AAAAAAAAAAAAAAA</div>
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	export default{
		name:"Collapse",
		data(){
			return{
				activeName:"1",
				url:require("../../assets/logo.png")
			}
		}
	}
</script>

<style>
</style>
