<template>
	<div class="container clearfix" style="	margin-bottom: 100px;">
		
		<tile ref="til" tle="新闻动态" tle2="Company News"/>
		
		<div ref="new" class="u-flex-faja ku" 
			
			:class="[item.type=='left'?'':'fang']"
			v-for="(item,index) in dataarr" :key="index">
			<div :style="{textAlign: item.type=='left'?'right':'left'}">
				<p style="margin-bottom: 10px;">{{item.tilte}}</p>
				<p>{{item.content}}</p>
			</div>
			<div :style="{textAlign: item.type=='left'?'right':'left'}">
				<p style="font-size: 30px;margin-bottom: 5px;">
					{{item.timerm}}
				</p>
				<p >{{item.year}}</p>
				
			</div>
			<div class="u-flex-faj hidden-sm-and-down">
				<span class="dian"></span>
				<span class="line" :class="[item.line?'linez':'']"></span>
			</div>
		</div>
		<i class="el-icon-s-grid icontu hidden-sm-and-down"></i>
		
	</div>
</template>

<script>
	
	import tile from "../../components/tilte.vue"
	import sw from '../../assets/util.js'
	export default{
		name:"newstu",
		components:{
			tile
		},
		data(){
			return{
				dataarr:[
					{
						type:'left',
						flag:'0',
						line:false,
						tilte:'世界上第一个程序员',
						content:'为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
						timerm:'05-24',
						year:'2019'
					},
					{
						type:'right',
						flag:'1',
						line:true,
						tilte:'世界上第一个程序员',
						content:'为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
						timerm:'05-24',
						year:'2019'
					},
					{
						type:'left',
						flag:'0',
						line:true,
						tilte:'世界上第一个程序员',
						content:'为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
						timerm:'05-24',
						year:'2019'
					},
					{
						type:'right',
						flag:'1',
						line:true,
						tilte:'世界上第一个程序员',
						content:'为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机',
						timerm:'05-24',
						year:'2019'
					}
				],
				sw:false,
				sww:document.documentElement.clientWidth
			}
		},
		mounted() {
			
			this.animate.fun(this.$refs.til.$el,'bounceInDown')
			this.animate.fun(this.$refs.new,'zoomIn')
			
			this.swget();
			window.onresize=sw.throttle(()=>{
				this.swget();
			},50)
		},
		methods:{
			swget(){
				this.sww=document.documentElement.clientWidth
				if( this.sww <768){
					this.dataarr.forEach((item)=>{
						
						item.type=item.type=='right'?'right':'right'
						
					})
				}else{
					this.dataarr.forEach((item)=>{
						item.type=item.flag=='1'?'right':'left'
					})
				}
			}
		}
		
	}
</script>

<style scoped="scoped">
	
	.icontu{
		font-size: 50px;
		margin-top: 130px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.ku{	
		width: 55.6%;
		height: 120px;
	}
	.ku:hover{
		outline: 1px solid #3A8EE6;
		color: #3A8EE6;
	}
	.ku>div:nth-child(1){
		flex: 6;
	}
	.ku>div:nth-child(2){
		flex: 2;
		flex-shrink: 0;
	}
	.ku>div:nth-child(3){
		flex: 2;
		flex-shrink: 0;
		height: 100%;
		position: relative;
	
	}
	
	
	.dian{
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #ccc;
		position: relative;
	}
	.dian::after{
		content: '';
		display: inline-block;
		width: 30px;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 50%;
		transform: translate(-6px,-6px);
	}
	.line{
		width: 1px;
		height: 50%;
		background-color: #ccc;
		position: absolute;
		top: 50%;
		z-index: -1;
	}
	.fang{
		float: right;
		flex-direction: row-reverse;
	}
	.linez{
		height: 100%;
		top: 0;
	}
	

	
	@media screen and (max-width:768px) {
		.ku{
			width: 100%;
		}
	}
</style>
