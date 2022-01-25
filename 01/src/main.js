import {sum} from './js/sum'
const {formatMoney} = require('./js/format')
import {createApp} from 'vue'
import './js/element'

import App from './vue/App.vue'

const message = 'es6'
const names = ['aa','bb','cc']
names.forEach(item=>console.log(item))

const app = createApp(App)
app.mount('#app')

console.log(sum('0'));
console.log(formatMoney('0'));