let loginjs = {
    loginChange:function(){
        jQuery(function($){
            let $title = $('.title');
            let $auto = $('.auto');
            let $no_auto = $('.no-auto');
            let $erweima = $('.erweima');
            let $mima = $('.mima');
            $title.on('mousedown','.auto',function(){
                $no_auto.css({color:'#666'});
                $auto.css({color:'#f8a120'});

                $erweima.css({display:'block'});
                $mima.css({display:'none'});
            })
            $title.on('mousedown','.no-auto',function(){
                $no_auto.css({color:'#f8a120'});
                $auto.css({color:'#666'});
                $erweima.css({display:'none'});
                $mima.css({display:'block'});
            })
        })
    },
    login_in:function(){
        jQuery(function($){
            $('#btn_lg').on('click',function(){
                let username = $('#username').val();
                let password = $('#password').val();
                let $warn = $('.warn');
                $.ajax({
                    type:'POST',
                    data:`username=${username}&password=${password}`,
                    url:'../src/api/login.php',
                    beforeSend:function(){
                        alert('waitting');
                    },
                    success:function(res){
                        console.log(res);
                        let data = window.eval("("+res+")");
                        console.log(data.status)
                        if(data.status == 'true'){
                            window.location.href = '../src/index.html';
                            document.cookie = 'username';
                        }
                        if(data.status == 'false'){
                            $warn.text('用户名或密码错误').css({color:'red'});
                        }
                    }
                })

            })
        })
    }
    
}

loginjs.loginChange();
loginjs.login_in();