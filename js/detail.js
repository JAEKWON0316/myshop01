$(function(){
    $('.img-thumb-box>img').click(function(){
        const src = $(this).attr('src'); //클릭한것의 src속성을 받아봄
        $('.img-box>img').attr('src', src); //src속성을 변수 src로 바꿈
    });

    $('.colors input[type=radio]').click(function(){
        const color = $(this).val();  //val()은 html에서 준 name값으로 받는다!!!!
        $('.selected').text(color+"색");
    });
    
    //상품가격 계산
    const prcode = $("#prcode").val();
    const prprice = Number($('#prprice').val());
    const reserves = parseInt($("#reserves").val());
    const delivery = parseInt($("#delivery").val());
    let totalmoney = prprice;
    
    $("#qup").click(function(){
        let quantity = Number($('#quantity').val()); //Number숫자값으로 받아줘야함
        quantity += 1;
        if(quantity > 9){
            alert("최대수량입니다.");
            quantity = 9;
        }
        $('#quantity').val(quantity);
        totalmoney = prprice * quantity;
        let tmoney = totalmoney.toLocaleString();
        let txt = "총 상품금액(수량) : <strong>"+tmoney+"원<strong>("+quantity+"개)";
        $('.totalmoney').html(txt);        
        //$('.totalmoney>strong').text(totalmoney.toLocaleString()+"원");
    });
    $("#qdown").click(function(){
        let quantity = Number($('#quantity').val()); //Number숫자값으로 받아줘야함
        quantity -= 1;
        if(quantity < 1){
            quantity = 1;
        }
        $('#quantity').val(quantity);
        totalmoney = prprice * quantity;
        let tmoney = totalmoney.toLocaleString();
        let txt = "총 상품금액(수량) : <strong>"+tmoney+"원<strong>("+quantity+"개)";
        $('.totalmoney').html(txt);        
        //$('.totalmoney>strong').text(totalmoney.toLocaleString()+"원");
    });
}); //jquery