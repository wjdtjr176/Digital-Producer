

const lenis = new Lenis({});

lenis.on('.scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);







const visualSlide = new Swiper('.sc-visual .swiper',{
    pagination:{
        el:'.swiper-pagination',
        type:'fraction',
        clickable:false,
    },
    loop:true,
    autoplay:true,
    effect:'fade',
    fadeEffect: {
        crossFade: true
    }
})





// 이미지 호버
$('.sc-announce').mousemove(function(e){
     x = e.clientX;
     y = e.clientY;

    rotationX = (e.clientX -window.innerWidth/2)/50;

     gsap.to('.mouse',{
        x:x,
        y:y,
        rotation:rotationX
     })
})


$('.sc-announce').hover(function(){
    $('.mouse').addClass('show')
},function(){
    $('.mouse').removeClass('show')
})


$('.sc-announce .item').hover(function(){
    idx = $(this).index();
    $('.mouse .thumb').eq(idx).addClass('on').siblings().removeClass('on')
})



// 스크롤index

gsap.set('.sc-index .desc span',{display:'none'})
gsap.set('.sc-index .sub-desc',{display:'none'})


index = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-index",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    }
})
index.to('.sc-index .bg',1,{
    transform:"scaleX(1)"
},'a')
index.to('.sc-index .desc span',1,{
    display:'inline-block',
    stagger:0.1,
},'a')
index.to('.sc-index .sub-desc',{
    display:'inline-block',
})






// 스크롤 grid

gsap.set('.sc-worker .list',{
    "grid-template-columns":`repeat(3,${(window.innerWidth - window.innerWidth/2)}px)`,
    "grid-template-rows":`repeat(3,${(window.innerHeight - window.innerHeight/2)}px)`
})
gsap.set('.sc-worker .video',{
    width:(window.innerWidth - window.innerWidth/2),
    height:(window.innerHeight - window.innerHeight/2)
})
$(window).resize(function(){
    gsap.set('.sc-worker .list',{
        "grid-template-columns":`repeat(3,${(window.innerWidth - window.innerWidth/2)}px)`,
        "grid-template-rows":`repeat(3,${(window.innerHeight - window.innerHeight/2)}px)`
    })
    gsap.set('.sc-worker .video',{
        width:(window.innerWidth - window.innerWidth/2),
        height:(window.innerHeight - window.innerHeight/2)
    })
})




worker = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-worker",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true,
        onUpdate:function(self){
            console.log(self.progress);

            $('.video .item').removeClass('active')

            if (0.9 < self.progress) {
                $('.video .item').eq(4).addClass('active')
            }else if (0.8 < self.progress){
                $('.video .item').eq(3).addClass('active')
            }else if (0.6 < self.progress){
                $('.video .item').eq(2).addClass('active')
            }else if (0.4 < self.progress){
                $('.video .item').eq(1).addClass('active')
            }else if (0.2 < self.progress){
                $('.video .item').eq(0).addClass('active')    
            }
        }
    }            
})
worker.set('.sc-worker .list',{
    "grid-template-columns":function(){
       return `repeat(3,${(window.innerWidth - window.innerWidth/2)}px)`
    },
    "grid-template-rows":function(){
       return `repeat(3,${(window.innerHeight - window.innerHeight/2)}px)`
    }
})
worker.set('.sc-worker .video',{
    width:function(){
       return (window.innerWidth - window.innerWidth/2)
    },
    height:function(){
       return (window.innerHeight - window.innerHeight/2)
    }
})
worker.to('.sc-worker .list',{
    "grid-template-columns":function(){
        return `repeat(3,${(window.innerWidth-20)}px)`
    },
    "grid-template-rows":function(){
        return `repeat(3,${(window.innerHeight-20)}px)`
    }
},'a')
worker.to('.sc-worker .video',{
    width:function(){
       return window.innerWidth-20
    },
    height:function(){
       return window.innerHeight-20
    },
},'a')

worker.to('.sc-worker .video .show',{
    height:'100%'
})
worker.to('.sc-worker .video img:nth-child(2)',{
    height:'100%'
})
worker.to('.sc-worker .video img:nth-child(3)',{
    height:'100%'
})
worker.to('.sc-worker .video img:nth-child(4)',{
    height:'100%'
})
worker.to('.sc-worker .video img:nth-child(5)',{
    height:'100%'
})










// 스크롤 project

project = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-project",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    }
})
project.to('.sc-project .item',1,{
    opacity:1,
    stagger:{
        from:"random",
        each:1
    },
})



// 스크롤 원 회전


gsap.to('.sc-together .circle .item',{
    scrollTrigger:{
        trigger:".sc-together",
        start:"0% 80%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    },
    rotation:0
})














