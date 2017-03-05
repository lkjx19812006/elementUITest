import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

import App from './App.vue'

// 按需引入部件
// import {Button, Select} from 'element-ui'
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)


Vue.use(ElementUI)

new Vue({
    el:'#app',
    render: h => h(App)
})