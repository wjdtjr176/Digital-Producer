

// 메인로딩숫자
const loading=gsap.timeline({

    onStart:function(){
        $('body').addClass('scroll');
    },

    onComplete:function(){       
        $('body').removeClass('scroll');
        $('.loading').addClass('hide')
        intro.play();
    }
})

$('.number-wrap').each(function(i,el){
    childCnt = $(el).find('.number-area').length;

    loading.from($(el).find('.number-area'),{
        yPercent:-100*childCnt,
        delay:0.1*i
    },'a')
})

loading.to(".loading .number-wrap",{
    yPercent:200
})






// 비쥬얼 영역
const intro = gsap.timeline({
    paused:true,
})



intro.to(".wrd",{
    y:0,
    opacity:1,
    stagger:0.2,
    ease:"power2.out"
});
intro.to(".sc-visual .top",{
    y:0,
    opacity:1,
    stagger:0.2,
    ease:"power2.out"
});
intro.to("#header",{
    y:0,
    opacity:1,
    stagger:0.2,
    ease:"power2.out"
})
intro.to(".sc-visual .content-wrap .title",{
    y:0,
    opacity:1,
    stagger:0.2,
    ease:"power2.out"
})
intro.to(".sc-visual .content-wrap .sub-title",{
    y:0,
    opacity:1,
    stagger:0.2,
    ease:"power2.out"
})
intro.to(".sc-visual .poa",{
    y:0,
    opacity:1,
    ease:"power2.out"
})









