$(function () {

    $(".exit").click(function () {
        $(this).parent().parent().parent().css("display","none")
    })

    $(".lg").click(function () {
        $("#login").css("display","block")
        $(".btn-login").click(function () {
            let username = $("input[name='lg-username']").val();
            let pwd = $("input[name='lg-password']").val();
            $.ajax({
                url: 'http://127.0.0.1:80/login.php',
                type: 'post',
                data: {
                    username: username,
                    pwd: pwd
                },
                success: function (res) {
                    console.log(res);
                    if (res === "200") {
                        alert("登录成功");
                        $("#login").css("display","none")
                    } else {
                        alert("用户名或密码错误!")
                    }
                },
            })
        })

    })

    $(".rg").click(function () {
        $("#register").css("display","block")
        $(".btn-register").click(function () {
            let username = $("input[name='rg-username']").val();
            let pwd = $("input[name='rg-password']").val();
            $.ajax({
                url: 'http://127.0.0.1:80/register.php',
                type: 'post',
                data: {
                    username: username,
                    pwd: pwd
                },
                success: function (res) {
                    console.log(res);
                    if (res === "200") {
                        alert("注册成功,快去登录吧");
                        $("#register").css("display","none")
                    } else {
                        alert("注册失败!")
                    }
                },
            })
        })
    })

    
});