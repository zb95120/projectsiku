let listjs = {
    listPages:function(){
        $.get('../src/api/list.php',function(res){
            console.log(res);
            let goodsPage = JSON.parse(res);
            console.log(goodsPage);
            let $goods = $('.goods');
            let rs1 = '';
            goodsPage.data1.forEach((item) => {
                rs1 += `<li data-id=${item.idx}><a href="javascript:;">
                <img src="img/${item.imgurl}.jpg"/></a>
                <a href="javascript:;"><h4>${item.pagetitle}</h4></a>
                <p>${item.price}</p>
                </li>`;
            });
            $goods.html(rs1);
            $('.goods').on('click','li',function(){
                console.log($(this));
                let $currentid = $(this).attr('data-id');
                window.location.href = `../src/xiangqing.html?shopid=${$currentid }`;
                
            })
        })
    },
 
      
   
}
listjs.listPages();