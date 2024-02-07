
$(function(){
    $(window).scroll(function(e){
        let tops = $(window).scrollTop();
        if(tops > 0){
           $('header').css({
              'position': 'fixed',
              'backgroundColor': 'rgba(255,255,255,0.8)',
              'top': 0,
              'width': '100%',
              'zIndex' : 1000
           }).addClass("fixed");
        }
        else{
           $('header').css({
              'position': 'static',  //position 고정
              'backgroundColor': 'rgba(255,255,255)',
              'top': 0,
              'width': '100%'
           }).removeClass("fixed");
        }
     });
    $(document)
    .on("mouseenter", '.pr-category>li', function(){  //sub-cate클래스는 html에서 만든것이 아닌 js에서 따로 만든것이기 때문에 document.on 해서 찾아줘야한다.
        $(this).find('.sub-cate').fadeIn(10);
    })
    .on("mouseleave", '.pr-category>li', function(){
        $('.pr-category>li>.sub-cate').fadeOut(10); //서열을 맥여서 pr-categoty하위에 있는 sub-cate만 안보이게 한다->밑에서 또 sub-cate를 쓰기 때문에 그건 사라지면 안되니까!!
    });

    $(".category").click(function(){
        if($(this).find('.category-subnav').css('display') == 'none'){
            $(this).find('.category-subnav').css('display', 'flex');
        }
        else{
            $(this).find('.category-subnav').css('display', 'none');
        }
});
    // $('.pr-category>li').hover(function(){
    //     $(this).find('.sub-cate').fadeToggle();
    // });

    $('.listview').click(function(e){ //e는 event의 약자 변수
        e.preventDefault(); //listview의 기능 중지
        const view = $(this).data("view"); //html에 만들어준 data-view
        $("#pdlist>div").removeClass(); //class를 추가해주기위해선 처음에 default값을 만들기위해 전체 class를 지워주는것이 좋다!!
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

    $('.tops').click(function(e){
        e.preventDefault();  //이벤트 발생전 초기화 시켜준다.
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('.news').click(function(e){
        e.preventDefault();  //이벤트 발생전 초기화 시켜준다.
        let thenew;
        if($('header').css('position', 'fixed')){
            thenew = $('#new').offset().top - 100;
        }
        else{
            thenew = $('#new').offset().top - 200;
        }
        $('html, body').animate({
            scrollTop: thenew + 'px'
        });
    });

    $('.hots').click(function(e){
        e.preventDefault();  //이벤트 발생전 초기화 시켜준다.
        let thenew;
        if($('header').css('position', 'fixed')){
            thenew = $('#list').offset().top - 100;
        }
        else{
            thenew = $('#list').offset().top - 200;
        }
        $('html, body').animate({
            scrollTop: thenew + 'px'
        });
    });

    $('.bottoms').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(document).height() //document(전체 html)의 height를 찾아서 그쪽으로 가게 만듦.
        }, 500);
    });
    
   
});  //jqrery