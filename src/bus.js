import Vue from 'vue';
// 建立在 Vue 的原型下
Vue.prototype.$bus = new Vue();

// 助教：
// Message
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式
