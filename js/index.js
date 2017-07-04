/**
 * Created by rain on 2017/6/26.
 */
(function(window){
    getData("http://127.0.0.1:9090/api/getindexmenu",function(info){
        console.log(info)
        var html = template("menu",info);
        $(".menu").append(html);

        $(".menu-items li").eq(7).nextAll().addClass("hide");

        $(".menu-items li").eq(7).click(function(){
            $(this).nextAll().slideToggle("hide");
        })
    })
    getData("http://127.0.0.1:9090/api/getmoneyctrl",function(info){
        var html = template("proList",info);
        $(".pro-lis").append(html);
    })


})()