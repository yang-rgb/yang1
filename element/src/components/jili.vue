<template>
	<div class="jili" style="padding-top: 20px;">
		<div class="u-flex-faj u-flex-fd">
			<h1 style="font-size: 20px;">电脑网页</h1>
			<p style="font-size: 16px;color: #999;">跟纸质简历不一样</p>
			<p style="margin: 10px 0;">你可以在电脑输入网址查看或扫码，由于是在github上生成的静态网站或许比较慢。请用电脑查看</p> 
			<el-link href="https://yang-rgb.github.io/lili/index.html" type="primary">https://yang-rgb.github.io/lili/index.html</el-link>
			<el-button style="margin: 10px 0;" @click="qrcode('qrcode','https://yang-rgb.github.io/lili/index.html')" type="primary">点击生成二维码</el-button>
			 <div id="qrcode"></div>
		</div>
		  <el-divider></el-divider>
		<div class="u-flex-faj u-flex-fd">
			<h1 style="font-size: 20px;">webApp</h1>
			<p style="font-size: 16px;color: #999;">跟纸质简历不一样</p>
			<p style="margin: 10px 0;">以 Vue为主，淘宝的flexible和rem布局，用swiper,hammer, BetterScroll,html5+辅助</p>        
			webApp下载链接(扫码或输入网址) 这是安卓版，没有ios版
			<el-link style="margin: 10px 0 5px 0;" href="https://www.lanzous.com/i7kpf0h" type="primary">https://www.lanzous.com/i7kpf0h</el-link>
			
			<el-button style="margin: 10px 0;" @click="qrcode('qrcode2','https://www.lanzous.com/i7kpf0h')" type="primary" plain>点击生成二维码</el-button>
			<div style="margin-bottom: 30px;" id="qrcode2"></div>
		</div>
		
	
	</div>
</template>
	
<script>
	
	import QRCode from 'qrcodejs2'
	
export default{
	name:"jili",
	data(){
		return {
	
		}
	},
	mounted(){
		// this.qrcode();
	},
	methods:{
		 qrcode(text,url) {
		      let qrcode = new QRCode(text, {
		        width: 132,  
		        height: 132,
		        text: url, // 二维码地址
		        colorDark : "#000",
		        colorLight : "#fff",
		      })
		}
	}
}
</script>
	
<style scoped>
	
</style>