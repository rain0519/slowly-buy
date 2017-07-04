/**
 * Created by rain on 2017/6/27.
 */

var href = location.href;
$(function() {

    var categoryid = GetQueryString(href,"categoryid");
    var category = decodeURI(GetQueryString(href,"category"));
    //console.log(category);
    $(".list-title3").html(category)

    var pageid = 1;
    var totalPage = 0;
    changePage(pageid);
    //下一页函数
    $(".pageDown").on("click", function () {
        if (pageid >= totalPage) {
            return false;
        }
        pageid++;
        changePage(pageid);
    })
    //上一页函数
    $(".pageUp").on("click", function () {
        if (pageid <= 1) {
            return false;
        }
        pageid--;
        changePage(pageid);
    })
    //select函数
    $(".selectPage").on("change", function (e) {
        //console.log(e);
        pageid = $(this).get(0).selectedIndex + 1;
        changePage(pageid);
    })
    //改变页函数
    function changePage(pageid) {
        getData("http://127.0.0.1:9090/api/getcategorybyid", function (info) {
            //请求数据，获取下面的数据
            getData("http://127.0.0.1:9090/api/getproductlist", function (info) {
               // console.log(info);
                var proListCon = template("listCon", info);
                $(".product-lis-con").html(proListCon);
                totalPage = Math.ceil(info.totalCount / info.pagesize);
                var pageArr = [];
                for (var i = 0; i < totalPage; i++) {
                    var pageObj = {};
                    pageObj.pageid = i + 1;
                    pageObj.totalPage = totalPage;
                    pageArr.push(pageObj);
                }
               // console.log(pageArr);
                var pageObj = {};
                pageObj.result = pageArr;
                console.log(pageObj.result);
                //console.log(pageObj);
                var pageHtml = template("pageTips", pageObj);
                $(".selectPage").html(pageHtml);
                $(".selectPage").children().eq(pageid - 1).prop("selected", "selected");
                //console.log(pageid);
            }, {
                categoryid: categoryid,
                pageid: pageid
            })
        })
    };
})






















//