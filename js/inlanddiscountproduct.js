/**
 * Created by rain on 2017/6/28.
 */
var conid = location.href;
var conId = conid.split("?").splice(1,1).join();
getData("http://127.0.0.1:9090/api/getdiscountproduct",function(info){
    console.log(info);
    var coninfo = template("conInfo",info);
    $(".cup-content").html(coninfo);

    //城市
    /*var proCity = template("productCity",info);
    $(".area").html(proCity);*/
    //评论proId
    var proComment = template("productComment",info);
    $(".cup-pl").html(proComment);
},{productid:conId})