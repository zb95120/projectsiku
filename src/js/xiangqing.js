let xiangqingjs = {
    showChange:function(){
        jQuery(function($){
            let $ol = $('.small dd')[0];
            let $lis = $ol.children;
            console.log($ol);
            let $dt = $('.small dt')[0];
            let $big = $dt.children;
            let index = 0;
            changeImg(index);
            function changeImg(index){
                $($ol).on('mouseenter','img',function(){
                    let currentAtr = $(this).attr('src');
                    $('.showBig').children().eq(0).attr('src',currentAtr);
                })
            }
        })
    },
    numChange:function(){
        jQuery(function($){
            let $add = $('.up').eq(0);
            console.log($add);
            let $down = $('.down').eq(0);
            let $value = $('#value');
            changeNum();

            function changeNum(){
                $add.on('click',function(){
                    $('#value').val(parseInt($('#value').val())+1);
                })
                $down.on('click',function(){
                    if($value.val()==1){
                        return;
                    }
                    $('#value').val(parseInt($value.val())-1);
                    
                })
            }
        })
    },
    showbig:function(){
        jQuery(function($){
            let $big = $('.xzoom-t');
            $big.xZoom({
                width:300,
                height:300
            })
        })
    },
    getdetails:function(){
        if(window.location.href.indexOf('shopid')>0){
             $searchid = window.location.href.split('?')[1].split('=')[1];
            $.get("../src/api/xiangqing.php",{shopid:$searchid},function(res){
                console.log(res)
                let resData = JSON.parse(res)
                let currentimg = `../src/img/${resData[0].imgurl}.jpg`;
                console.log(resData);

                console.log($('.showBig').children('img'));
                $('.showBig').children('img').attr('src',currentimg);
                $('dd').children('img').attr('src',currentimg);
                let currenttitle = resData[0].pagetitle;
                $('.d_title').children('h2').text(currenttitle);
                let currentprice = resData[0].price;
                $('.reDprice').text(currentprice);
            })
        }
        
    }

 


}

xiangqingjs.getdetails();
xiangqingjs.showChange();
xiangqingjs.numChange();
xiangqingjs.showbig();