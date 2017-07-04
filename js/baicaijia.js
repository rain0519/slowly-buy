/**
 * Created by rain on 2017/6/29.
 */
getData("http://127.0.0.1:9090/api/getbaicaijiatitle",function(info){
   // console.log(info);
    var bcjNav = template("bcjNav",info);
    $(".bcj-nav").html(bcjNav);
    //默认最先渲染一次
    getData("http://127.0.0.1:9090/api/getbaicaijiaproduct",function(info){
        var lists = template("lists",info);
        $(".lists").html(lists);
    },{titleid:0})
    //默认先渲染li
    $(".bcj-nav").find("li").eq(1).addClass("current");
    //touch事件
    swipeLeft()
    //点击切换，修改样式和页面内容
    $(".bcj-nav").on("click","li",function(){
        var index = $(this).find("a").attr("data-id");
        //修改当前样式
        $(this).addClass("current").siblings().removeClass("current");
        //根据index渲染下面数据
        getData("http://127.0.0.1:9090/api/getbaicaijiaproduct",function(info){
            console.log(info);
            var lists = template("lists",info);
            $(".lists").html(lists);
        },{titleid:index})
    })
})


//touch事件
function swipeLeft(){
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var currentX = distanceX;
    var ulWrapBox =  document.querySelector(".ul-wrap");
    var bcjNav =  ulWrapBox.querySelector("ul");
    //var navLis = bcjNav.querySelectorAll("li");
    var maxLeft=0;
    var minright=$(window).width()-bcjNav.offsetWidth;
    //设置拖动临界值
    var swipeMax=maxLeft+50;
    var swipeMin=minright-100;
    console.log(swipeMin);

    //添加过渡
    var addTransition=function(){
        bcjNav.style.transition='transform 0.3s';
        bcjNav.style.webkitTransition='transform 0.3s';
    };
    //删除过渡
    var removeTransition=function(){
        bcjNav.style.transition='none';
        bcjNav.style.webkitTransition='none';
    };
    //移动事件
    var setTranslateX = function (translateX){
        bcjNav.style.transform='translateX('+translateX+'px)';
        bcjNav.style.webkitTransform='translateX('+translateX+'px)';
    }

    //touchstart事件
    ulWrapBox.addEventListener("touchstart",function(e){
        startX =e.targetTouches[0].clientX;
    })
    //touchmove事件
    ulWrapBox.addEventListener("touchmove",function(e){
        moveX =e.targetTouches[0].clientX;
        distanceX = moveX-startX;
        //console.log(distanceX);
        var x = currentX + distanceX;
        removeTransition();
        //数据检测,判断范围
        if(x>swipeMax){
            x=swipeMax;
        }
        if(x<swipeMin){
            x=swipeMin;
        }
        //移动距离
        setTranslateX(x);
    })
    //touchend事件
    ulWrapBox.addEventListener("touchend",function(e){
        currentX = currentX + distanceX;
        //数据检测,判断范围
        if(currentX>maxLeft){
            currentX=maxLeft;
        }
        if(currentX<minright){
            currentX=minright;
        }
        addTransition();
        //移动距离
        setTranslateX(currentX);
        //数据重置
        startX=0;
        moveX=0;
        distanceX=0;
    })

}

