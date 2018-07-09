let indexjs = {
    navChange:function(){
        jQuery(function($){
            let $navList = $('.nav-list');
            $navList.on('mouseenter','.nav-item',function(){
                $(this).children('.nav-unfold').css({display:'block'});
            });
            $navList.on('mouseleave','.nav-item',function(){
                $(this).children('.nav-unfold').css({display:'none'});
            });
        })
    },
    banner:function(){
        jQuery(function($){
            let $ul = $('.lunbo ul')[0];
            let $li = $ul.children;
            let $ol = $('.idx ol')[0];
            let $lis = $ol.children;
            let $slide = $('.lunbo .slide').eq(0);
            let $slide_l = $slide.children('.slide-left');
            let $slide_r = $slide.children('.slide-right');
            var index = 0;
            var timer;
            autoPlay(index);
            highLight(0);
            autoMove(index);
            sit(index);
            btn_slide(index);
            function btn_slide(index){
                index = $(this).index();

                $slide_l.on('mousedown',function(){
                    stop();
                    
                    highLight(index);
                    translate(index);
                    index--;
                    if(index < 0){
                        index = 5;
                    }
                    
                });
                $slide_r.on('mousedown',function(){
                    stop();
                    
                    highLight(index);
                    translate(index);
                    index++;
                    if(index > 5){
                        index = 0;
                    }
                })
                
            }
           console.log(index);
           
            function autoPlay(index){
                timer = setInterval(()=>{
                    translate(index);
                    // $($li[index]).animate({opacity:1});   
                    highLight(index);
                    index++;
                    // $($li[index]).animate({opacity:0});
                    if(index>5){
                        // $($li[index]).animate({opacity:1})
                        index = 0;
                        // $($li[index]).animate({opacity:0})
                    }
                },3000);
            }
            function sit(index){
                $($('.lunbo')).on('mouseenter',function(){
                    index = $(this).index();
                    stop();
                    $($slide_l).css({display:'block'});
                    $($slide_r).css({display:'block'});
                });
                $($('.lunbo')).on('mouseleave',function(){
                    index = $(this).index();
                    autoPlay(index);
                    $($slide_l).css({display:'none'});
                    $($slide_r).css({display:'none'});
                })

            }
             function translate(index){
                $ul.style.left = -1200*index +'px';
            }
            function stop(){
                clearInterval(timer);
            }
            function highLight(index){
                $($lis).removeClass('on');
                $($lis[index]).addClass('on');
            }
            function autoMove(index){
                $($ol).on('mouseenter','li',function(){
                    index = $(this).index();
                    highLight(index);
                    translate(index);
                    stop();
                })
                $($ol).on('mouseleave','li',function(){
                    index = $(this).index();
                    autoPlay(index);
                    highLight(index);
                })
            }
        })
    },

    likeGoods:function(){
      jQuery(function($){
            let $ul_b = $('.lunbo_b ul')[0];
            let $li_b = $ul_b.children;
            let $ol = $('.idx_b ol')[0];
            let $lis = $ol.children;
            let $slide_b = $('.likeside .slide_b').eq(0);
            let $slide_lb = $slide_b.children('.slide_leftb');
            let $slide_rb = $slide_b.children('.slide_rightb');
            console.log($slide_lb);
            var index = 0;
            var timer;
            autoPlay(index);
            highLight(0);
            autoMove(index);
            sit(index);
            btn_slide(index);
            function btn_slide(index){
                index = $(this).index();
                $slide_lb.on('mousedown',function(){
                    stop();
                    
                    highLight(index);
                    
                    translate(index);
                    index--;
                    if(index >= 4){
                        index = 0;
                    }
                    
                });
                $slide_rb.on('mousedown',function(){
                    stop();
                    highLight(index);
                    
                    translate(index);
                    index++;
                    if(index < 0){
                        index = 4;
                    }
                })
                
            }
           
            function autoPlay(index){
                timer = setInterval(()=>{
                   
                    translate(index);

                    // $($li[index]).animate({opacity:1});   
                    highLight(index);
                    index++;
                    console.log(index);
                    // $($li[index]).animate({opacity:0});
                    // console.log(index);
                    if(index>=5){
                        index = 0;
                    }
                },3000);
               
            }
            function sit(index){
                $($ul_b).on('mouseenter','li',function(){
                    index = $(this).index();
                    stop();
                });
                $($ul_b).on('mouseleave','li',function(){
                    index = $(this).index();
                    autoPlay(index);
                })

            }
             function translate(index){
                $ul_b.style.left = -1200 *index +'px';
            }
            function stop(){
                clearInterval(timer);
            }
            function highLight(index){
                $($lis).removeClass('on');
                $($lis[index]).addClass('on');
            }
            function autoMove(index){
                $($ol).on('mouseenter','li',function(){
                    index = $(this).index();
                    highLight(index);
                    translate(index);
                    stop();
                })
                $($ol).on('mouseleave','li',function(){
                    index = $(this).index();
                    autoPlay(index);
                    highLight(index);
                })
            }
        })
    },
    mainGoods:function(){
       $.get('../src/api/index.php',function(res){
          console.log(res);
          let goodslist = JSON.parse(res);
          console.log(goodslist)
          let $main_goods = $('.main_goods');
          let rs1 = '';
          goodslist.data1.forEach((item) => {
            rs1 += `<li><a href="#">
            <img src="img/${item.imgurl}.jpg"/><h4>${item.goodstitle}</h4></a>
            </li>`;
          });
      $main_goods.html(rs1);
       })
    }
}
indexjs.navChange();
indexjs.banner();
indexjs.likeGoods();
indexjs.mainGoods();