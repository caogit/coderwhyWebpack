# nginx 反向代理

# 源码、答疑、课程咨询添加 wx：xiaoyesensenwx（备注哈默）

         -----------------------------------------
         |        请求路径为/，代理到8000端口        |
         |        /                              |

请求 -> | 8080 |
| \ |
| 请求路径为/api，代理到 3000 端口 |

---

localhost:8080/index.html，代理到 localhost:8000/index.html

localhost:8080/api/login，代理到 localhost:3000/api/login

// 如何启动

1. 在 nginx-1.22.0 目录下打开 git bash 输入 start nginx

2. 打开 backend 文件夹,通过 node app.js 启动后台服务

3. 网页中访问 localhost:5500,并查看网络请求,发现跨域成功
