$(function(){
    $('.img-thumb-box>img').click(function(){
        const src = $(this).attr('src'); //클릭한것의 src속성을 받아봄
        $('.img-box>img').attr('src', src); //src속성을 변수 src로 바꿈
    });

    $('.colors input[type=radio]').click(function(){
        colortxt = $(this).data('colorname');  //val()은 html에서 준 name값으로 받는다!!!!
        $('.selected').text(colortxt+"색");
    });
    
    //상품가격 계산
    const prcode = $("#prcode").val();
    const prprice = Number($('#prprice').val());
    const reserves = parseInt($("#reserves").val());
    const delivery = parseInt($("#delivery").val());
    const prtitle = $("#title").val();
    let totalmoney = prprice;
    let tmoney = prprice;
    let txt, totalTextLength, opt1, opt11, colortxt, color, opt2, opt21, size, sizetxt, optionText; //외부에서도 선언해줘야지 다른 함수에서도 사용할 수 있으니까!!(함수내에 변수를 설정하면 그 함수내(스코프)안에서 밖에 못쓴다!!)
   
    $('input[name="color"]').change(function(){
        //alert(this.value);
        $('.size').find("option:first").prop("selected", true)
       opt1 = $(this).data('color'); //data-color의 값을 받아온다(추가금액)
       colortxt = $(this).data('colorname'); //input타입중 name이 color인것의 value를 받아온다.(화면에 출력할 생삭이름)
       color = $(this).val();  //폼으로 전송할 색상값
       if(opt1 > 0){
        opt11 = "(+" + opt1.toLocaleString()+ "원)";
    }else{
        opt11 = "";
    }
        colortxt += " " + opt11;   //화면에 출력할 색상이름
        $('.size').attr('disabled', false); //size클래스의 disabled 속성을 change시 false하게 한다
    });
    let opthtml = `<ul class="add-opt">
                     <li class="d-flex align-items-center">
                        <div class="total-text col"></div>
                         <ul class="add-opts col">
                              <li class="addbox d-flex align-items-center">
                             <label class="title-label">수량</label>
                              <div class="input-group">
                                  <div class="input-group-prepend">
                                       <button class="btn btn-outline-line qdown" type="button">
                                       <i class="fa-solid fa-chevron-down"></i>
                                     </button>
                                   </div>
                                  <input type="number" 
                                        class="quantity"
                                        name="quantity[]"   
                                        value="1"
                                        readonly>
                                  <div class="input-group-append">
                                     <button class="btn btn-outline-line qup" type="button">
                                         <i class="fa-solid fa-chevron-up"></i>
                                    </button>
                                  </div> 
                             </div>
                         </li>
                    </ul>
                    <input type="hidden" name="subtitle[]" class"subtitle">
                    <input type="hidden" name="toptmoney[]" class="toptmoney">
                    <div class="tomoney col text-right"></div>
                    <i class="fa-solid fa-close remove-order"></i>
                    </li>

            </ul>`;
        
        let textArray = [];
    $('.size').change(function(){
        //alert(this.value);
        const totalTextLength = $('.total-text').length;
        const oradd = $('.addquantity').html();
        let quantityArray = []; //quantity value 값을 따로 읽어서 배열에 저장
        for(let i = 0; i < $('.quantity').length; i++){
            quantityArray[i] = $('.quantity').eq(i).val();  //quantityArray 배열에 quantity클래스의 순서대로 값을 저장한다 i에따라!
        }

        opt2 = $(this).find("option:selected").data('size'); //사이즈별 추가금액(라디오 박스에서! 옵션이 선택된 애들의 데이터를) 
        size = $(this).find("option:selected").val(); 
        sizetxt = $(this).find("option:selected").text();
        if(opt2 > 0){
            
            opt21 = "(+" + opt2.toLocaleString()+ "원)";
        }
        else{
            opt21 = "";
        }
        if(size){
        tmoney = (prprice + (opt1 + opt2));
        sizetxt += " " + opt21; 
        optionText = `<p>${colortxt}-${sizetxt}</p>`;
        $(".addquantity").html(oradd + opthtml); //기존거 + 새로운거
            
        for(let i = 0; i < $('.quantity').length; i++){
            $('.quantity').eq(i).val(quantityArray[i]);
        }
        $('.subtitle').eq(totalTextLength).val(`${colortxt}-${sizetxt}`);
        $('.toptmoney').eq(totalTextLength).val(tmoney);
        $('.total-text').eq(totalTextLength).html(optionText); //eq == 순서를 나타냄(totalTextLength로) 0,1,2,3,...
        $('.quantity').eq(totalTextLength).val(1); //초기값을 1로 설정
        $('.tomoney').eq(totalTextLength).html(tmoney.toLocaleString()+"원");
        txt = "총 상품금액(수량) : <strong>"+tmoney+"원<strong>("+quantitArray+"개)";
        $('.totalmoney').html(txt); 
        console.log(txt);
       }
        // textArray = $('.total-text').html(optionText); 
        // console.log(textArray[i]);
        
    });
    

    
    //$("#qup").click(function(){
        $(document).on('click', '.qup', function(){  //html에 있는걸 뺴고 js로 만들어줬으니 document로 부터 받아와야한다! $(document).on()
        let quantity = Number($(this).parent().prev().val());
        //$('.quantity').eq(totalTextLength).val(quantity);
        //let quantity = Number($('.quantity').eq(totalTextLength).val()); //Number숫자값으로 받아줘야함
        quantity += 1;
        if(quantity > 9){
            alert("최대수량입니다.");
            quantity = 9;
        }
        //$('.quantity').eq(totalTextLength).val(quantity);
        $(this).parent().prev().val(quantity); //누른것의 부모의 형제의 이전에 있는 값을 받아온다 (올라가는값);A
        totalmoney = prprice * quantity;
        tmoney = $(this).parents('.add-opt').find('.toptmoney').val();//input에 저장된 사진+옵션 가격가져오기

        let ttmoney = tmoney * quantity; //(상품가격+옵션)*수량
        ttmoney = ttmoney.toLocaleString(); //세자리 콤마
        tmoney = ttmoney.toLocaleString();
        $(this).parents('.add-opt').find('.tomoney').html(ttmoney + "원");
        //let ind = $('.qup').index(this); //qup의 인덱스 순서값을 ind에 저장
        //$('.tomoney').eq(ind).html(tmoney + "원");
        $('.tomoney').eq(totalTextLength).html(ttmoney.toLocaleString()+"원");
        txt = "총 상품금액(수량) : <strong>"+tmoney+"원<strong>("+quantity+"개)";
        $('.totalmoney').html(txt);        
        //$('.totalmoney>strong').text(totalmoney.toLocaleString()+"원");
    });
    //$("#qdown").click(function(){
        $(document).on('click', '.qdown', function(){ //html에 있는걸 뺴고 js로 만들어줬으니 document로 부터 받아와야한다!
        //let quantity = Number($('.quantity').eq(totalTextLength).val()); //Number숫자값으로 받아줘야함
        let quantity = Number($(this).parent().next().val());
        quantity -= 1;
        if(quantity < 1){
            quantity = 1;
        }
        //$('.quantity').eq(totalTextLength).val(quantity);
        $(this).parent().next().val(quantity); //누른것의 부모의 형제의 다음에 있는 값을 받아온다 (내려가는값);
        tmoney = $(this).parents('.add-opt').find('.toptmoney').val();
        totalmoney = prprice * quantity;
        let ttmoney = tmoney * quantity;
        ttmoney = ttmoney.toLocaleString();
        tmoney = ttmoney.toLocaleString();
        $(this).parents('.add-opt').find('.tomoney').html(ttmoney + "원");
        $('.tomoney').eq(totalTextLength).html(ttmoney.toLocaleString()+"원");
        txt = "총 상품금액(수량) : <strong>"+tmoney+"원<strong>("+quantity+"개)";
        $('.totalmoney').html(txt);  
        //$('.totalmoney>strong').text(totalmoney.toLocaleString()+"원");
        
    });
    
    $(document).on('click', '.remove-order', function(){
        $(this).parents('.add-opt').remove(); //클릭한것의 부모들중 add-opt클래스를 찾아서 삭제해라.
    });

}); //jquery

function totalMoney(){
    let tm = 0;
    $("input[name='toptmoney[]']").each(function(index){
        let moneyVal = parseInt($(this).val());
        let qt = parseInt($(".quantity").val());
        tm += moneyVal*qt;
        console.log(tm);
    });
}
