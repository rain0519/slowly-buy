/**
 * Created by rain on 2017/6/28.
 */
var proid = location.href;
proId=  proid.split("=").splice(1, 1).join();
getData("http://127.0.0.1:9090/api/getmoneyctrlproduct",function(info){
    console.log(info.result[0].productFrom);
    //商品名称
    var productName = template("productName",info);
    $(".proName").html(productName);
    //商品信息
    var productInfo = template("productInfo",info);
    $(".proInfo").html(productInfo);
    //商品信息2
    var productInfo1 = template("productInfo1",info);
    $(".proInfo1").html(productInfo1);

    //商品来源
    var proForm = template("productFrom",info);
    console.log(proForm);
    $(".small").html(proForm);
    //时间
    var proTime = template("productTime",info);
    $(".addtime").html(proTime);
    //用户
    var proTips = template("productTips",info);
    $(".author").html(proTips);
    //右图
    var proImgSm = template("productImgSm",info);
    $(".pic-right").html(proImgSm);
    //大图
    var proImg2 = template("productImg2",info);
    $(".pic-lg").html(proImg2);

    //城市
    var proCity = template("productCity",info);
    $(".area").html(proCity);
    //评论proId
    var proComment = template("productComment",info);
    $(".cup-pl").html(proComment);
},{productid:proId})
