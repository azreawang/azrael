
$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        //定时器
        autoplay: {
            delay: 2000,
        },
        //分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var banner = document.getElementById('banner');
    //鼠标移入，停止轮播
    banner.onmouseenter = function () {
        mySwiper.autoplay.stop();
    };
    // 鼠标离开 继续轮播
    banner.onmouseleave = function () {
        mySwiper.autoplay.start();
    }

    $.ajax({
        url: '../lib/data.json',
        dataType: 'json',
        success: function (res) {
            let str = '';
            res.forEach(item => {
                
                str += `<li style="background-image: url(${item.url});">${item.name}</li>`
            })
            // 4-3. 填充到 nav_top 里面的 ul 里面
            $('.nav')
                .html(str)
                .on({
                    mouseenter: () => $('.nav-box').stop().show()
                    ,
                    mouseleave: () => $('.nav-box').stop().hide()
                })
                .children('li') // 找到所有的一级菜单下的 li
                .on('mouseover', function () {
                    // 5-1. 知道自己移入的时哪一个 li
                    const index = $(this).index();
                    // // 5-2. 找到要渲染的数组
                    const cate = res[index].cate
                    // // 5-3. 用我们找到的数组把 nav_box 位置渲染了就可以了
                    let str = ""
                    str = ` <div class="nav-title">
                              <a href="${cate.cate_url}">  ${cate.name}&nbsp;&nbsp;| </a>
                            </div>
                            <div class="nav-details wrapper"></div> `
                    $(".nav-box").html(str)
                    // // 5-4. 进行组装
                    cate.list.forEach(item => {
                        let li = `
                                <li><a href="${item.list_url}"><img src="${item.img_url}" alt="">${item.list_name}</a></li>
                            `
                        $(".nav-details").append(li);
                    })

                    // 5-5. 填充到页面里面

                })

            // 4-4. 给 nav-box 添加一个移入移出事件
            $('.nav-box')
                .on({
                    mouseover: function () { $(this).finish().show() },
                    mouseout: function () { $(this).finish().hide() }
                })
        }
    })


})