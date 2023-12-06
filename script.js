var tl = gsap.timeline()

function loading(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*12)
        if(a < 100){
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
        else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
    }, 100)
}

tl.to("#loader h1", {
    scale:1.8,
    delay:0.5,
    duration:1.8,
    onStart:loading()
})

tl.to("#loader", {
    top:"-100%",
    delay:0.5,
    duration:2
})

tl.from("#nav", {
    opacity:0,
    delay:0.5,
})

tl.from("#nav h1, #nav h3, #nav h4", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from("#page-1 #container h1", {
    scale:1,
    opacity:0,
    duration:1
})

tl.to("#page-1 #container h1", {
    transform:"translateX(-177%)",
    fontWeight:"10",
    scrollTrigger:{
        trigger:"#page-1",
        scroller:"body",
        scrub:2,
        pin:true
    }
})

gsap.from("#page-2 #box-1, #page-2 #box-2, #page-2 #box-3", {
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page-2 #box-1, #page-2 #box-2, #page-2 #box-3",
        scroller:"body"
    }
})