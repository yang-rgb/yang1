<template>
	<div class="container">
		<div class="tile">
			<h1 style="font-size: 24px;margin-top: 15px;">{{tle}}</h1>
			<h2 style="font-size: 12px;color: #aaa;margin: 10px 0;">{{tle2}}</h2>
			<span v-if="show" class="but">公司新闻</span>
			<span v-if="show" class="but">行业动态</span>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		name:"tle",
		props:{
			tle:{
				type:String
			},
			tle2:{
				type:String
			},
			show:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style scoped="scoped">
	.tile{
		text-align: center;
		margin-bottom: 20px;
	}
	.but{
		display: inline-block;
		width: 120px;
		height:40px;
		border: 1px solid #000000;
		text-align: center;
		line-height: 40px;
		margin-right: 5px;
	}
	.but:hover{
		border-color: #3A8EE6;
		color: #3A8EE6;
	}
</style>
