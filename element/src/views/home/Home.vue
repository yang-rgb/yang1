<template>
  <div class="home">
   <my-carousel/>
   <data-img/>
   <my-list ref="lest"/>
  </div>
</template>

<script>

import myCarousel from './Carousel.vue'
import dataImg from './dataimg.vue'
import myList from './list.vue'


export default {
  name: 'Home',
  components: {
    myCarousel,
	dataImg,
	myList,
  },
  mounted () {
	
  }
}
</script>
