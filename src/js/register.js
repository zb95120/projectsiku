jQuery(function($){
    $('#btn_zc').on('click',function(){
        let username = $('#username').val();
        let password = $('#password').val();
        let confirm_pwd = $('#confirm_pwd').val();
        let $user_warn = $('.user_warn');
        let $pwd_warn = $('.pwd_warn');
        let $confirm_warn = $('.confirm_warn');
        let c_username = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        let c_username1 = /^1\d{10}$/;
        let c_username2 = /[a-zA-Z][a-zA-Z0-9]{3,15}/;
        let c_pwd = /^[a-zA-Z]\w{5,17}$/;
        if((c_username.test(username) || c_username1.test(username) || c_username2.test(username)) && password === confirm_pwd && c_pwd.test(password)){
            $.ajax({
                type:'POST',
                data:`username=${username}&password=${password}`,
                url:'../src/api/register.php',
                beforeSend:function(){
                    alert('please wait');
                },
                success:function(res){
                    console.log(res);
                    let confirm = window.eval("("+res+")");
                    if(confirm.status == 'true'){
                        $user_warn.text('该用户名已被注册').css({color:'red'});
                    }
                    if(confirm.status == 'false'){
                        window.location.href = '../src/index.html';
                    }
                }
            })
        }
        else if(!c_username.test(username) || !c_username1.test(username)){
            $user_warn.text('请输入正确的用户名').css({color:'red'})
        }
        else if(password != confirm_pwd){
            $confirm_warn.text('两次密码输入不一致').css({color:'red'})
        }
        else{
            $pwd_warn.text('请输入正确格式密码').css({color:'red'})
        }
    })
})