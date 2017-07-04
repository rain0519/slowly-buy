/**
 * Created by rain on 2017/6/28.
 */
(function(window){

        var pageid = 1;
        var totalPage = 0;
        changePage(pageid);
        //下一页函数
        $(".pageDown").on("click",function(){
            if(pageid > totalPage){
                return false;
            }
            pageid++;
            changePage(pageid);
        });
        //上一页函数
        $(".pageUp").on("click",function(){
            if(pageid < 0){
                return false;
            }
            pageid--;
            changePage(pageid);
        })
        //select框函数
        $(".selectPage").on("change",function(){
            pageid = $(this).get(0).selectedIndex+1;
            console.log(pageid);
            changePage(pageid);
        })
        //改变页码函数
        function changePage(pageid){
            getData("http://127.0.0.1:9090/api/getmoneyctrl",function(info){
                var html = template("proList",info);
                $(".pro-lis").html(html);
                totalPage = Math.floor(info.totalCount / info.pagesize);
                var pageArr = [];
                for (var i = 0; i < totalPage; i++) {
                    var pageObj = {};
                    pageObj.pageid = i + 1;
                    pageObj.totalPage = totalPage;
                    pageArr.push(pageObj);
                }
                var pageObj = {};
                pageObj.result = pageArr;
                var pageHtml = template("pageTips", pageObj);
                $(".selectPage").html(pageHtml);
                $(".selectPage").children().eq(pageid - 1).prop("selected", "selected");
            },{pageid: pageid})
        }


})()