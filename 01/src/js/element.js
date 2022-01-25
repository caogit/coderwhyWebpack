import '../css/style.css'
import '../css/style.less'
import '../css/bgImage.css'
import '../css/testpostcss.css'
import '../font/iconfont.css'

import zznhImage from '@/img/zznh.png'

const div = document.createElement('div')
div.className = 'title'
div.innerHTML ='哈哈哈'

// 设置背景图片
const imgdiv = document.createElement('div')
imgdiv.className = 'image-bg'

const  imgEl = document.createElement('img')
imgEl.src = zznhImage

// 添加iconfont
const icon = document.createElement('i')
icon.className = 'iconfont icon-ashbin'
 
// console.log(foo.data)

document.body.appendChild(div)
document.body.appendChild(imgdiv)
document.body.appendChild(imgEl)
document.body.appendChild(icon)



 