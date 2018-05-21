
                    http浏览器端请求、响应的缓存
                    
1. if-modified-since    stateCode 304 发送请求 比对if-modified-since时间，服务端版本无更新 返回304 否者返回文件。
    缺点： 文件时间戳改变内容不一定改变 。  时间戳的精度是秒 ，更新频繁的文件无法生效
2. Etag    entity tag 服务端生成,可以自定义规则，如以文件内容生成hash.  请求和响应的是 if-none-match/etag

3. Expires /Cache-Control  设置在响应头里
    expires 浏览器收到这个值，如果本地有缓存文件，在到期时间前不发起请求
    cache-control 保证了客服端服务端不一致的问题，通过类似倒计时的方式计算过期时间 max-age 
