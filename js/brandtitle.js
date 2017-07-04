/**
 * Created by rain on 2017/6/29.
 */
getData("http://127.0.0.1:9090/api/getbrandtitle",function(info){
    console.log(info);
    var cateId = template("cateId",info);
    $(".cate-title").html(cateId);
})