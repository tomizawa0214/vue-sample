import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", (el, binding) => {
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
});

new Vue({
  render: h => h(App),
}).$mount('#app')
