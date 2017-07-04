/**
 * Created by rain on 2017/6/26.
 */
/*封装ajax请求数据*/
var getData = (function(){
    return function(url,callback,data){
        callback = callback || function(info){console.log(111)};
        $.ajax({
            type:'get',
            url:url,
            data:data || null,
            dataType:'json',
            success:function(info){
                callback && callback(info);
            }
        })
    }
})()

//获取地址栏中的数据的封装
var GetQueryString=(function(){
    return function (href,name) {
        var index = href.indexOf('?')
        var str = href.substring(index + 1);
        var arr = str.split('&');
        var result = {};
        arr.forEach(function(item){
            var a = item.split('=');
            result[a[0]] = a[1];
        })
        return result[name];
    }
})();












