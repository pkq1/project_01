$(function(){
    var tooltop = $('.recom').offset().top;
    var flag = true;

    function toggletool(){
        if($(document).scrollTop() >= tooltop){
            $('.fixedtool').fadeIn();
        }else{
            $('.fixedtool').fadeOut();
        }
        // 页面滚动到某个内容区域 ，左侧电梯导航小li 相应添加和删除current类名
        if(flag){  // 节流阀  互斥锁   如果flag = true  则执行
            $('.floor .w').each(function(i,ele){
                if($(document).scrollTop() >= $(ele).offset().top){
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
    }

    toggletool();

    $(window).scroll(function(){
        toggletool();
    });

    // 点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function(){
        flag = false;  // 节流阀  互斥锁  点击了li则不执行上面页面滚动的代码
        console.log($(this).index()); // 获取点击到的li的索引号

        $(this).addClass('current').siblings().removeClass('current');

        // 选出对应索引号的内容去的盒子  计算它的offset().top
        var divtop = $('.floor .w').eq($(this).index()).offset().top; 

        // 页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: divtop
        },function(){  // 回调函数 执行完动画后再打开节流阀
            flag = true;
        });
    })
})



// 密码输入
$(function(){
    $('.main_top button').on('click',function(){
        $('.form-bg').toggleClass('block');
    });
    $('.btn-default').on('click',function(){
        var uname = $('.form-control').eq(0).val();
        var pwd = $('.form-control').eq(1).val();
        if(uname == 'wnn@1314' && pwd == '2580'){
            alert('认证成功!!!');
            $('.main_top_a').slideDown();
        }else{
            alert('密码错误!!!');
        }
        $('.main_top_a a').on('click',function(){
            $(this).parent().slideUp();
        });
    });
});