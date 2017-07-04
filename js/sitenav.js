/**
 * Created by rain on 2017/6/29.
 */
getData("http://127.0.0.1:9090/api/getsitenav",function(info){
    console.log(info);
    var navId = template("navId",info);
    $(".link").html(navId);
})