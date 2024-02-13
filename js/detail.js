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
    let opt1, colortxt, color, opt2, size, sizetxt, optionText; //외부에서도 선언해줘야지 다른 함수에서도 사용할 수 있으니까!!(함수내에 변수를 설정하면 그 함수내(스코프)안에서 밖에 못쓴다!!)
   
    $('input[name="color"]').change(function(){
        //alert(this.value);
       opt1 = $(this).data('color'); //data-color의 값을 받아온다(추가금액)
       colortxt = $(this).data('colorname'); //input타입중 name이 color인것의 value를 받아온다.
       color = $(this).val();
       if(opt1 > 0){
        opt1 = "(+" + opt1.toLocaleString()+ "원)";
    }else{
        opt1 = "";
    }
        colortxt += " " + opt1; 
    });
    let opthtml = ` <ul class="add-opt">
                <li class="total-text">
                    
                </li>
                <li class="addbox d-flex align-items-center">
                    <label class="title-label">수량</label>
                    <div class="input-group mb-3 ml-4">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-line" id="qdown" type="button">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                    <input type="number" class="quantity" id="quantity" name="quantity" value="1" readonly> <!--readonly => 글씨로 수정불가능-->
                    <div class="input-group-append">
                        <button class="btn btn-outline-line" id="qup" type="button">
                            <i class="fa-solid fa-chevron-up"></i>
                        </button>
                    </div>
                </div>
                </li>
                <li class="tomoney">
                    
                </li>
            </ul>`
        let i = 0;
        let textArray = [];
    $('.size').change(function(){
        //alert(this.value);
        opt2 = $(this).find("option:selected").data('size'); //사이즈별 추가금액(라디오 박스에서! 옵션이 선택된 애들의 데이터를) 
        size = $(this).find("option:selected").val(); 
        sizetxt = $(this).find("option:selected").text();
        if(opt2 > 0){
            opt2 = "(+" + opt2.toLocaleString()+ "원)";
        }
        else{
            opt2 = "";
        }
        sizetxt += " " + opt2; 
        optionText = `<p>${prtitle}, ${colortxt}-${sizetxt}</p>`;
        const oradd = $('.addquantity').html();
        $(".addquantity").html(oradd + opthtml);
        $('.total-text').html(optionText);
        // textArray = $('.total-text').html(optionText); 
        // console.log(textArray[i]);
        
    });
    

   
    //$("#qup").click(function(){
        $(document).on('click', '#qup', function(){  //html에 있는걸 뺴고 js로 만들어줬으니 document로 부터 받아와야한다! $(document).on()

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
    //$("#qdown").click(function(){
        $(document).on('click', '#qdown', function(){ //html에 있는걸 뺴고 js로 만들어줬으니 document로 부터 받아와야한다!
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