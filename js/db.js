$(function(){
    $.ajax({
        url: "./data/db.json", //데이터 받아올 경로 지정
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
         }
       });
 }); //jquery