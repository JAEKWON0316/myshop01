$(function(){
    $.ajax({
        url: "./data/db.json", //데이터 받아올 경로 지정 (html에서 부터 시작).
        success: function(rs){ //rs라는 매개변수로 데이터를 받아옴
            const cat = rs.category;
            let link='';
            let sublink = '';
            for(let i=0; i<cat.length; i++){
               if(cat[i].sub.length > 0){
                 for(let j =0; j< cat[i].sub.length; j++){
                     sublink += `<li>
                                  <a href="${cat[i].sub[j].link}">${cat[i].sub[j].title}</a>
                                 </li>`;
                 }
                  link += `<li><a href="${cat[i].link}">${cat[i].title}</a>
                               <ul class="sub-cate">${sublink}</ul>
                           </li>`; 
                  sublink = '';         
               }else{
                  link += `<li><a href="${cat[i].link}">${cat[i].title}</a></li>`; 
               }
            }
            $('.pr-category').html(link);
            $('.category-subnav-view').html(link);
         }
       });

       $.get("data/slide.json", function(rs){
         const img = rs.carousel;
         let imgs = ''; //배열에 맞는 값을 넣어줄 공백변수 imgs생성
         for(let i = 0; i < img.length; i++){
            imgs += `<div class="text-center"><img src="images/${img[i]}" alt="${img[i]}"></div>`;
         }
         $('.mySlick').prepend(imgs).slick({//밑에와 똑같다!(단, 안에 내용이 없을 떄만!)
            // $('.mySlick').html(imgs);
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000 
         });
       });

       $.get("data/new.json", function(rs){
            let newbox = '';
            const list = rs.newlist;
            for(let i = 0; i < list.length; i++){
               newbox += `
                  <div class="col-md-3">
                     <div class="card">
                           <a href="#" class="card-img"><img src="${list[i].img}" class="card-img-top" alt="nothing">
                           </a>
                           <a href="#" class="card-body">
                              <h5 class="mt-4">${list[i].title}</h5>
                              <p>${list[i].txt}</p>
                           </a>
                     </div>
                  </div>
               `
            };
            $('.container .card-array').html(newbox);
       });

 }); //jquery