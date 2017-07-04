/**
 * Created by rain on 2017/6/27.
 */

getData("http://127.0.0.1:9090/api/getcategorytitle",function(info){
    var html = template("category",info);
    $(".category-title").append(html);

    var dataId;
    $(".cate-title").click(function(){
        dataId = $(this).attr("data-title-id");

        getData("http://127.0.0.1:9090/api/getcategory",function(info){
            //console.log(info);
            //console.log(dataId);
            var con = template("categoryCon",info);
            var $dataid = $('#'+dataId);
            $dataid.html(con);

           // $dataid.html(con).addClass("show");
            if($dataid.hasClass("show")){
                $dataid.removeClass("show").addClass("hide");
            }else{
                $dataid.addClass("show");
            }

        },{titleid:dataId});
    })

})


