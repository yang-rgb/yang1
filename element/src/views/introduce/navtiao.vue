<template>
	<div>
		<div class="znav">
			<p style="margin: 10px 0;">{{til}}</p>
			<div class="nav">
				<span :style="{width:wid,backgroundColor:bgcolor}"
					
				></span>
				<p class="pd"
					:style="{display:wid2?'block':'none'}"
				>{{wid}}</p>
				<div class="tishi" 
					:style="{backgroundColor:bgcolor,left:wid,display:wid2?'none':'block'}"
					>{{wid}}
				<span class="san" 
					:style="{borderTopColor:bgcolor}"
				></span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"navt",
		props:["wid","bgcolor","til"],
		computed:{
			wid2(){
				return parseInt(this.wid)<10
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped">
	.pd{
		position: absolute;
		top:0;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 30px;
		color: #000;
		font-weight: bolder;
	}
	.nav{
		height: 30px;
		background-color: #ccc;
		position: relative;
	}
	.nav>span{
		display: inline-block;
		width: 0%;
		height: 30px;
		background-color: red;
	}
	.tishi{
		width: 50px;
		height: 25px;
		border-radius: 5px;
		text-align: center;
		line-height: 25px;
		font-weight: bold;
		background-color: #3A8EE6;
		color: #fff;
		position: absolute;
		top: -40px;
		transform: translateX(-50%);
		left: 30%;
	}
	
	
	.san{
		position: absolute;
		top: 25px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border: 10px solid #3A8EE6;
		border-bottom-color: transparent;
		border-right-color: transparent;
		border-left-color: transparent;
	}
	.znav{
		margin: 25px 0;
	}
</style>
