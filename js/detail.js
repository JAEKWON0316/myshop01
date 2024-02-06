$(function(){
    $('.img-thumb-box>img').click(function(){
        const src = $(this).attr('src'); //클릭한것의 src속성을 받아봄
        $('.img-box>img').attr('src', src); //src속성을 변수 src로 바꿈
    });

    $('.colors input[type=radio]').click(function(){
        const color = $(this).val();  //val()은 html에서 준 name값으로 받는다!!!!
        $('.selected').text(color+"색");
    });
    
}); //jquery