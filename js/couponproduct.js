/**
 * Created by rain on 2017/6/29.
 */
var couproid = location.href;
var couponid = couproid.split("?").splice(1,1).join();
//console.log(couponid);
getData("http://127.0.0.1:9090/api/getcouponproduct",function(info){
    console.log(info);
    var coupro = template("couPro",info);
    $(".couProducts").html(coupro);
},{couponid:couponid})