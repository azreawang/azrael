$(function () {
    $(".all").on({
        mouseenter: () => $('.nav').stop().show(),
        mouseleave: () => $('.nav').stop().hide()
    })

    $('.nav')
        .on({
            mouseover: () => $('.nav-box').stop().show(),
            mouseenter: function () { $(this).stop().show() },
            mouseout: () => $('.nav-box').stop().hide()
        })
    $('.nav-box')
        .on({
            mouseover: function () { $(this).finish().show() },
            mouseout: function () { $(this).finish().hide() },
            mouseleave: () => $('.nav').stop().hide()
        })
    

    let data = JSON.parse(localStorage.getItem("goods_info"))
    let str = 
    `
    <img src="${data.img_url}">
    <div>
        <p>${data.list_name}</p>
        <p>
            <span>价格：<i>${data.price}</i> <s>${data.cost_price}</s></span>
        </p>
        <p>
            <span>数量：</span>
            <button class="btn-primary"> - </button>
            <input type="text" value="1">
            <button class="btn-success"> + </button>
        </p>
        <p>
            <input type="button" value="立即购买">
            <input type="button" value="加入购物车">
        </p>
    </div>
    `
    $("#good-details").html(str);
});