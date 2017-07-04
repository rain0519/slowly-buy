/**
 * Created by rain on 2017/6/28.
 */
getData("http://127.0.0.1:9090/api/getinlanddiscount",function(info){
    console.log(info);
    var inlandList = template("inlandList",info);
    $(".inlandList").html(inlandList);
})