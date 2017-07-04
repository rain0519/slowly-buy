/**
 * Created by rain on 2017/6/29.
 */
getData("http://127.0.0.1:9090/api/getcoupon",function(info){
    console.log(info);
    var img = template("imgId",info);
    $(".imgs").html(img);
})