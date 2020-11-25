$(document).ready(function(){
    $('.html_toggle-btn').click(()=>{
        $('.html_toggle').slideToggle(500);
    })
    $('#html_substance_btn').click(()=>{
        $('#html_substance').slideToggle(500);
    })
    $('#html_display_btn').click(()=>{
        $('#html_display').slideToggle(500);
    })

    $('.css_toggle-btn').click(()=>{
        $('.css_toggle').slideToggle(500);
    })
    $('#css_substance_btn').click(()=>{
        $('#css_substance').slideToggle(500);
    })
    $('#css_display_btn').click(()=>{
        $('#css_display').slideToggle(500);
    })
    
    $('.jquery_toggle-btn').click(()=>{
        $('.jquery_toggle').slideToggle(500);
    })
    $('#jquery_substance_btn').click(()=>{
        $('#jquery_substance').slideToggle(500);
    })
    $('#jquery_display_btn').click(()=>{
        $('#jquery_display').slideToggle(500);
    })

    $('#carousel-1').click(()=>{
         index = 1;

        $('.carousel_container_html').css("display" , "block");
        $('.carousel_html').css("transform" , "translateX(-1100px)");
    })
    $('#carousel-2').click(()=>{
         index = 2;

        $('.carousel_container_html').css("display" , "block");
        $('.carousel_html').css("transform" , "translateX(-2200px)");
    })
    $('#carousel-3').click(()=>{
         index = 3;
        $('.carousel_container_html').css("display" , "block");
        $('.carousel_html').css("transform" , "translateX(-3300px)");
    })

    $('#carousel-4').click(()=>{
        index1 = 1;
       $('.carousel_container_css').css("display" , "block");
       $('.carousel_css').css("transform" , "translateX(-1100px)");
   })
   $('#carousel-5').click(()=>{
        index1 = 2;
       $('.carousel_container_css').css("display" , "block");
       $('.carousel_css').css("transform" , "translateX(-2200px)");
   })
   $('#carousel-6').click(()=>{
        index1 = 3;
       $('.carousel_container_css').css("display" , "block");
       $('.carousel_css').css("transform" , "translateX(-3300px)");
   })


   $('#carousel-7').click(()=>{
    index2 = 1;
   $('.carousel_container_jquery').css("display" , "block");
   $('.carousel_jquery').css("transform" , "translateX(-1100px)");
})
$('#carousel-8').click(()=>{
    index2 = 2;
   $('.carousel_container_jquery').css("display" , "block");
   $('.carousel_jquery').css("transform" , "translateX(-2200px)");
})
$('#carousel-9').click(()=>{
    index2 = 3;
   $('.carousel_container_jquery').css("display" , "block");
   $('.carousel_jquery').css("transform" , "translateX(-3300px)");
})



    $('.carousel_container_html').mouseleave(()=>{
        $('.carousel_container_html').css("display" , "none");
    })
    $('.carousel_container_css').mouseleave(()=>{
        $('.carousel_container_css').css("display" , "none");
    })
    $('.carousel_container_jquery').mouseleave(()=>{
        $('.carousel_container_jquery').css("display" , "none");
    })
    $('#arrow-right1').click(()=>{
        index++;
        $('.carousel_html').css({"transform":`translateX(${index * -1100}px)`, "transition" : "transform 1s ease"});
    })
    $('#arrow-left1').click(()=>{
        index--;
        $('.carousel_html').css({"transform":`translateX(${index * -1100}px)`, "transition" : "transform 1s ease"});
    })
    $('#arrow-right2').click(()=>{
        index1++;
        $('.carousel_css').css({"transform":`translateX(${index1 * -1100}px)`, "transition" : "transform 1s ease"});
    })
    $('#arrow-left2').click(()=>{
        index1--;
        $('.carousel_css').css({"transform":`translateX(${index1 * -1100}px)`, "transition" : "transform 1s ease"});
    })
    $('#arrow-right3').click(()=>{
        index2++;
        $('.carousel_jquery').css({"transform":`translateX(${index2 * -1100}px)`, "transition" : "transform 1s ease"});
    })
    $('#arrow-left3').click(()=>{
        index2--;
        $('.carousel_jquery').css({"transform":`translateX(${index2 * -1100}px)`, "transition" : "transform 1s ease"});
    })
  
})
let index = 1;
let index1 = 1;
let index2 = 1;
 let carousel_html = document.getElementsByClassName('carousel_html')[0];
 let carousel_css = document.getElementsByClassName('carousel_css')[0];
 let carousel_jquery = document.getElementsByClassName('carousel_jquery')[0];
 let img_html = document.getElementsByClassName('aa');
 let img_css = document.getElementsByClassName('bb');
 let img_jquery = document.getElementsByClassName('cc');
 carousel_html.addEventListener('transitionend', ()=>{
    if(img_html[index].id === 'lastClone_html'){

        carousel_html.style.transition = 'none';
        index = img_html.length - 2;
        carousel_html.style.transform = `translateX(${index * -1100}px)`;
}
if(img_html[index].id === 'firstClone_html'){

    carousel_html.style.transition = 'none';
    index = img_html.length - index;
    carousel_html.style.transform = `translateX(${index * -1100}px)`;
}
}) 

carousel_css.addEventListener('transitionend', ()=>{
    if(img_css[index1].id === 'lastClone_css'){

        carousel_css.style.transition = 'none';
        index1 = img_css.length - 2;
        carousel_css.style.transform = `translateX(${index1 * -1100}px)`;
}
if(img_css[index1].id === 'firstClone_css'){

    carousel_css.style.transition = 'none';
    index1 = img_css.length - index1;
    carousel_css.style.transform = `translateX(${index1 * -1100}px)`;
}
}) 

carousel_jquery.addEventListener('transitionend', ()=>{
    if(img_jquery[index2].id === 'lastClone_jquery'){

        carousel_jquery.style.transition = 'none';
        index2 = img_jquery.length - 2;
        carousel_jquery.style.transform = `translateX(${index2 * -1100}px)`;
}
if(img_jquery[index2].id === 'firstClone_jquery'){

    carousel_jquery.style.transition = 'none';
    index2 = img_css.length - index2;
    carousel_jquery.style.transform = `translateX(${index2 * -1100}px)`;
}
}) 
