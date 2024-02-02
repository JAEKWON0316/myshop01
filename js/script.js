
$(function(){
    $(document)
    .on("mouseover", '.pr-category>li', function(){  //sub-cate클래스는 html에서 만든것이 아닌 js에서 따로 만든것이기 때문에 document.on 해서 찾아줘야한다.
        $(this).find('.sub-cate').fadeIn(10);
    })
    .on("mouseleave", '.pr-category>li', function(){
        $('.pr-category>li>.sub-cate').fadeOut(10); //서열을 맥여서 pr-categoty하위에 있는 sub-cate만 안보이게 한다->밑에서 또 sub-cate를 쓰기 때문에 그건 사라지면 안되니까!!
    });

    $(".category").hover(function(){
        $(this).find('.category-subnav').css('display', 'flex');
    }).mouseleave(function(){
        $(this).find('.category-subnav').css('display', 'none');
    });
    // $('.pr-category>li').hover(function(){
    //     $(this).find('.sub-cate').fadeToggle();
    // });

    $('.listview').click(function(e){ //e는 event의 약자 변수
        e.preventDefault(); //listview의 기능 중지
        const view = $(this).data("view"); //html에 만들어준 data-view
        $("#pdlist>div").removeClass();
        $(".listview rect").removeClass('list-act-color').addClass('list-color');
        if(view == 3){
            $(this).find('rect').removeClass('list-color').addClass('list-act-color');
            $("#pdlist>div").addClass("col-md-4 mb-5");
        }
        else if(view == 4){
            $(this).find('rect').removeClass('list-color').addClass('list-act-color');
            $("#pdlist>div").addClass("col-md-3 mb-5");
        }
        else if(view == 5){
            $(this).find('rect').removeClass('list-color').addClass('list-act-color');
            $("#pdlist>div").addClass("col-md-55 mb-5");
        }
    });
});