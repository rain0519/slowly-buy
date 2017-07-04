/**
 * Created by rain on 2017/6/29.
 */
//店铺数据渲染
getData("http://127.0.0.1:9090/api/getgsshop",function(info){
    //渲染京东，一号店，天猫超市
    var shopId = template("shopId",info);
    $(".shopbox").html(shopId);

    $(".gslist-nav").find(".jd").click(function(){
        // console.log($(this));
        $(".popsort").toggleClass('on').siblings().removeClass("on");
        console.log($(".popsort"));
    })
})



//地区数据渲染
getData("http://127.0.0.1:9090/api/getgsshoparea",function (info) {
    var areaId = template("areaId",info);
    $(".areabox").html(areaId);

    $(".gslist-nav").find(".area").click(function(){
        $(".popcat").toggleClass('on').siblings().removeClass("on");
    })
})



//价格数据
$(".gslist-nav").find(".price").click(function(){
    $(".popprice").toggleClass('on').siblings().removeClass("on");
})

// 开始设置默认值
getData("http://127.0.0.1:9090/api/getgsproduct",function(info){
    var shopList = template("shopList",info);
    $(".sh-lists").html(shopList);
},{shopid:0,areaid:0});


//店铺数据更换
$('.shopbox').on('click','li',function(){
    var shopId=$(this).find("a").attr("data-id");
    $('.jd').children("a").html($('.shopbox li').eq(shopId).text());
    $(".popsort").toggleClass('on');
    getData("http://127.0.0.1:9090/api/getgsproduct",function(info){
        //console.log(info);
        var shopList = template("shopList",info);
        $(".sh-lists").html(shopList);
    },{shopid:shopId,areaid:1})
});
//地区数据更换
$('.areabox').on('click','li',function(){
    //获取存储的id值
    var areaId = $(this).find("a").attr("data-id");
    var areatext = $('.areabox li').eq(areaId).text().trim().slice(0,2);
    $('.area').find("a").html(areatext);


    $(".popcat").toggleClass('on');

    getData("http://127.0.0.1:9090/api/getgsproduct",function(info){
        var shopList = template("shopList",info);
        $(".sh-lists").html(shopList);

    },{shopid:1,areaid:areaId})//
});






