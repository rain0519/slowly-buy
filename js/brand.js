/**
 * Created by rain on 2017/6/30.
 */
var href = location.href;

var categoryid = GetQueryString(href,"categoryid");
var brandtitleid = GetQueryString(href,"brandtitleid");

getData("http://127.0.0.1:9090/api/getbrand",function(info){
   // console.log(info);
    var cateId = template("cateld",info);
    $(".category-list").html(cateId);
    var lis = $(".category-list li");
    for(var i = 0;i < lis.length;i++){
        $(lis).eq(i).find("em").text(i+1);
        $(lis).eq(0).find("em").css("background","#f00");
        $(lis).eq(1).find("em").css("background","#ff9314");
        $(lis).eq(2).find("em").css("background","#8adf5b");
    }
},{brandtitleid:brandtitleid});

getData("http://127.0.0.1:9090/api/getbrandproductlist",function(info){

    var proId = template("proId",info);
    $(".pro-lis").html(proId);
    //获取productid，productName，productImg，渲染到评论区
    var productid = info.result[0].productId;
    console.log(productid);
    var productName = info.result[0].productName;
    var productImg = info.result[0].productImg;

    getData("http://127.0.0.1:9090/api/getproductcom",function(info){
        var plId = template("plcon",info);
        $(".plbx").append(plId);
       console.log(plId);
        $(".pllist .plbx .pic").html(productImg);
        $(".pllist .plbx .tit").html(productName);

    },{productid:productid})
},{brandtitleid:brandtitleid})

