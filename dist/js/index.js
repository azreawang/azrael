"use strict";$(function(){var n=new Swiper(".swiper-container",{loop:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.getElementById("banner");t.onmouseenter=function(){n.autoplay.stop()},t.onmouseleave=function(){n.autoplay.start()},$.ajax({url:"../lib/data.json",dataType:"json",success:function(e){var t="";e.forEach(function(n){t+='<li style="background-image: url('.concat(n.url,');">').concat(n.name,"</li>")}),$(".nav").html(t).on({mouseenter:function(){return $(".nav-box").stop().show()},mouseleave:function(){return $(".nav-box").stop().hide()}}).children("li").on("mouseover",function(){var n,t=$(this).index(),a=e[t].cate;n=' <div class="nav-title">\n                              <a href="'.concat(a.cate_url,'">  ').concat(a.name,'&nbsp;&nbsp;| </a>\n                            </div>\n                            <div class="nav-details wrapper"></div> '),$(".nav-box").html(n),a.list.forEach(function(n){var t='\n                                <li><a href="'.concat(n.list_url,'"><img src="').concat(n.img_url,'" alt="">').concat(n.list_name,"</a></li>\n                            ");$(".nav-details").append(t)})}),$(".nav-box").on({mouseover:function(){$(this).finish().show()},mouseout:function(){$(this).finish().hide()}})}})});