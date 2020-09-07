<template>
  <div class="home">
   <my-carousel/>
   <data-img/>
   <my-list ref="lest"/>
   <introduce></introduce>
   <news></news>
   <company></company>
  </div>
</template>

<script>

import myCarousel from './Carousel.vue'
import dataImg from './dataimg.vue'
import myList from './list.vue'
import news from '@/views/news/news.vue'
import introduce from '@/views/introduce/introduce.vue'
import company from '@/views/company/company.vue'

export default {
  name: 'Home',
  components: {
    myCarousel,
	dataImg,
	myList,
	news,
	introduce,
	company
  },
  mounted () {
	
  }
}
</script>
