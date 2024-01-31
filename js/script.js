
$(function(){
    $(document)
    .on("mouseover", '.pr-category>li', function(){  //sub-cate클래스는 html에서 만든것이 아닌 js에서 따로 만든것이기 때문에 document.on 해서 찾아줘야한다.
        $(this).find('.sub-cate').fadeIn(50);
    })
    .on("mouseleave", '.pr-category>li', function(){
        $('.sub-cate').fadeOut(50);
    });
    // $('.pr-category>li').hover(function(){
    //     $(this).find('.sub-cate').fadeToggle();
    // });
});