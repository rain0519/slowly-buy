
var proid = location.href;
//http://localhost:63342/project/mmm/pages/productdetails.html?
// 82+3
var proid = proid.split("?").splice(1,1).join();
var proId = proid.split("+").splice(0,1).join();
//console.log(proId);

getData("http://127.0.0.1:9090/api/getproduct",function(info){
    var detsCon = template("detsCon",info);
    //console.log(info);
    $(".product-dets-con").html(detsCon);
    //再次请求数据，获取下面的数据
},{
    productid:proId,
    pageid:1
})


getData("http://127.0.0.1:9090/api/getproductcom",function(info){
    console.log(info);
    var detsEval = template("detsEval",info);
    //console.log(info);
    $(".product-eval-list").html(detsEval);
},{productid:proId})