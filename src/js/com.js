$(document).ready(
    $.ajax({
        url: '../lib/data.json',
        dataType: 'json',
        success: function (res) {
            let str = '';
            res.forEach(item => {
                str += `<li style="background-image: url(${item.url});">${item.name}</li>`
            })
            $('.nav')
                .html(str)
                .on({
                    mouseenter: () => $('.nav-box').stop().show()
                    ,
                    mouseleave: () => $('.nav-box').stop().hide()
                })
                .children('li')
                .on('mouseover', function () {
                    const index = $(this).index();
                    const cate = res[index].cate

                    let str = ` <div class="nav-title">
                              <a href="${cate.cate_url}">  ${cate.name}&nbsp;&nbsp;| </a>
                            </div>
                            <div class="nav-details wrapper"></div> `
                    $(".nav-box").html(str)
                    cate.list.forEach(item => {
                        let li = `
                                <li><a href="${item.list_url}"><img src="${item.img_url}" alt="">${item.list_name}</a></li>
                            `
                        $(".nav-details").append(li);
                    })
                })
            $('.nav-box')
                .on({
                    mouseover: function () { $(this).finish().show() },
                    mouseout: function () { $(this).finish().hide() }
                })
        }
    })
)