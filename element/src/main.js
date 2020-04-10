import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

import animate from '@/assets/util.js'
Vue.prototype.animate=animate;

import { 
	Button,
	Row, 
	Col,
	Menu,
	Submenu,
	MenuItem,
	Carousel,
	CarouselItem,
	Divider,
	Collapse,
	CollapseItem,
	Image,
	Input,
	Form,
	FormItem,
	Link,

} from 'element-ui'

Vue.use(Link)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Image)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.component(Button.name, Button);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
