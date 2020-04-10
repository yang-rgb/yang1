<template>
	<div class="company" style="margin-bottom: 30px;">
	
	<el-row>
	  <el-col :xs="24" :sm="12" :md="12" :lg="12">	
	<div style="padding: 20px  20px;">
		<el-form :rules="rules" :model="form" label-width="80px">
		 
		  <el-form-item label="姓名">
		    <el-input type="text" v-model="form.name" placeholder="请输入姓名"> </el-input>
		  </el-form-item>
		  <el-form-item  label="邮箱" prop="emil">
		    <el-input type="text" v-model="form.emil" placeholder="请输入邮箱"> </el-input>
		  </el-form-item>
		  <el-form-item label="电话" prop="tel">
		    <el-input type="text" v-model="form.tel" placeholder="请输入电话"> </el-input>
		  </el-form-item>
		  <el-form-item label="内容">
		    <el-input type="textarea" v-model="form.text" rows="6" placeholder="请输入内容"> </el-input>
		  </el-form-item>
		  
	
		  <el-form-item>
		    <el-button style="width: 100%;">提交</el-button>
		  </el-form-item>
		</el-form>
	</div>	
	</el-col>
	
	<el-col :xs="24" :sm="12" :md="12" :lg="12">
		<mymap style="padding: 20px  20px;"></mymap>
	</el-col>
	
	</el-row>
	

	
	</div>
</template>
	
<script>
	import mymap from "@/components/map.vue"
	
export default{
	name:"company",
	components:{
		mymap
	},
	mounted(){
		
	},
	data(){
		var checkEmil=(rule, value, callback)=>{
			var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			if(!reg.test(value)){
				callback(new Error('邮箱格式不正确'));
			}
		}
		var checkTel=(rule, value, callback)=>{
			var reg=/^1[3456789]\d{9}$/;
			if(!reg.test(value)){
				callback(new Error('手机号格式不正确'));
			}
			
		}
		
		return {
			form:{
				name:'',
				emil:"",
				tel:'',
				text:''
			},
			rules:{
				emil:[
					 { validator: checkEmil, trigger: 'blur' }
				],
				tel:[
					 { validator: checkTel, trigger: 'blur' }
				]
			}
		}
		
	}
}
</script>
	
<style scoped>
	
</style>