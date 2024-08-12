
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation();







function menuAnimation() {



    var tl = gsap.timeline();
    tl.from(".menubar", {
        right: "-70%",
        duration: 0.3,
        opacity: 0
    })
    tl.from(".menubar h4", {
        y: 20,
        duration: 0.4,
        scale: 0.5,
        opacity: 0,
        stagger: 0.29,
    }, "-=0.5")

    tl.from(".menubar button", {
        x: 20,
        duration: 0.2,
        scale: 0,
        opacity: 0,

    }, "-=0.2")
    tl.from(".menubar i", {
        opacity: 0,

    }, "-=0.2")

    tl.pause();

    var open = document.querySelector(".part2-mob i");
    var mobmenu = document.querySelector(".menubar");
    var close = document.querySelector(".close");

    open.addEventListener("click", function () {
        tl.play();
    })
    close.addEventListener("click", function () {
        tl.reverse();
    })
}



function page1Animation() {
    var page1tl = gsap.timeline();
    page1tl.from("nav h1 , nav h4 ,nav i", {
        opacity: 0,
        scale: 0.7,
        x: -50,
        duration: 0.3,

        stagger: 0.15,
    }, "ani1");

    page1tl.from(".part2 button", {
        opacity: 0,
        scale: 0.6,
        duration: 0.3,
    }, "ani2")

    // pag1

    page1tl.from(".page1-p1 h1 ,.page1-p1 p", {
        yPercent: 30,
        opacity: 0,
        scale: 0.95,
        delay: 1.1,
        duration: 0.4,
        ease: "none",

        stagger: 0.15
    }, "ani1")

    page1tl.from(".page1-p1 button", {
        opacity: 0,
        scale: 0.6,
        duration: 0.3,
    }, "ani2")

    page1tl.from(".page1-p2 img", {
        opacity: 0,
        scale: 0.6,
        duration: 0.3,
    }, "-=0.5")
    page1tl.from(".page1-bottom img", {
        opacity: 0,
        y: 50,
        x: -70,
        scale: 0.9,
        duration: 0.3,
        stagger: 0.15
    })


}

function page2Animation() {


    gsap.from(".page2-container", {
        opacity: 0,
        scale: 0.5,
        xPercent: -50,
        duration: 0.3,

        stagger: 0.15,

        scrollTrigger: {
            scroller: "#main",
            trigger: ".page2",
            // markers: true,
            start: "top 50%",
            end: "top -20%",
            scrub: 2
        }


    })
    gsap.to(".container-p1 img",{
        scale:1.1,
        duration:1,
        repeat:-1,
        yoyo:true
    })


}

function page3Animation() {
    var page3tl = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page3",
            // markers: true,
            start: "top 55%",
            end: "top 30%",
            scrub: 2
        }
    })

    page3tl.from(".page3-main", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
    })

    page3tl.from(".page3-p2 img", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
    }, "-=0.2")
    // page3tl.from(".page3-p1 button", {
    //     scale: 0.9,
    //     opacity: 0,
    //     duration: 0.5,
    // }, "-=0.2")


    gsap.to(".page3-p1 button",{
        scale:0.95,
        duration:1,
        repeat:-1,
        yoyo:true
    })
}

function page4Animation() {
    var page2tl = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page4",
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    })



    page2tl.from(".page4-container h5 ,.page4-container p", {
        opacity: 0,
        xPercent: -50,
        stagger: 0.2,


    })
}

function page5Animation() {


    var page2tl = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page5",
            // markers: true,
            start: "top 40%",
            end: "top 10%",
            scrub: 2
        }
    })


    page2tl.from(".page5-container", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        yPercent: -100,
        stagger: 2,


    })

    page2tl.from(".page5-container h3 ,.page5-container i", {
        opacity: 0,
        scale: 0.1,
        duration: 0.4,
        yPercent: -100,
        stagger: 2,


    }, "-=0.3")


}

function page6Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page6",
            // markers:true,

            start: "top 40%",
            end: "top 15%",

            scrub: 3
        }
    })

    tl.from(".p6c3", {
        x: "30%",
        opacity: 0,

    })
    tl.from(".p6c2", {
        x: "60%",
        opacity: 0,

    })
    tl.from(".p6c1", {
        x: "100%",
        opacity: 0,

    })

    gsap.to(".p6container-p2 img",{
        scale:1.05,
        duration:1,
        repeat:-1,
        yoyo:true
    })

    gsap.from(".seemore", {

        x: -10,
        // opacity:0,
        repeat: -1,
        duration: 1.5,
        stagger: 0.3,
        yoyo: true


    })
}


function page7Animation() {
    var tl = gsap.timeline({
        scrollTrigger: ({
            scroller: "#main",
            trigger: ".page7",
            // markers:true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2,

        })
    })

    tl.from(".page7-p2", {
        scale: 0,
        opacity: 0,

    })
    tl.from(".page7-p2 div h3", {
        y: 10,
        opacity: 0,

    })
}




function page8Animation() {

    gsap.to(".page8 div", {

        transform: "translateX(-22%)",
        duration: 4,

        scrollTrigger: ({
            scroller: "#main",
            trigger: ".page8",
            // markers: true,
            start: "top 0%",
            end: "top -50%",
            scrub: 2,
            pin: true,


        })
    })
}





function cursorMove() {
    var text = document.querySelector(".page8 div");

    var area = document.querySelector(".page8");

    area.addEventListener("mousemove", function (dets) {
        console.log(dets.x)
        gsap.to(".cursor", {
            duration: 0.5,
            scale: 5,
            x: dets.x,
            y: dets.y,

        });
    });



    area.addEventListener("mouseleave", function (dets) {
        console.log(dets.x)
        gsap.to(".cursor", {
            duration: 0.5,
            scale: 1,
            x: dets.x,
            y: dets.y,

        });
    });


}



function page9Animation(){


    window.addEventListener("wheel", function (dets) {
        console.log(dets);

        if (dets.deltaY > 0) {
            gsap.to(".page9-p1", {
                transform: "translateX(0%)",
                duration: 4,
                repeat:-1,
                ease: "none"
            })
        }
        else if(dets.deltaY < 0){
            gsap.to(".page9-p1", {
                transform: "translateX(-70%)",
                duration: 4,
                repeat:-1,
                ease: "none",

            })

        }

    })

    gsap.to(".contact-image img", {
        scale: 1.5,
        x: 10,
        duration: 1,
        scrollTrigger: ({
            scroller: "#main",
            trigger: ".page9",
            // markers: true,
            start: "top 30%",
            end: "top 10%",
            scrub: 3,
        })
    })


    gsap.from("form input ,textarea, form h3", {
        opacity:0,
        xPercent: -20,
        duration: 1,
        stagger:0.4,
        scrollTrigger: ({
            scroller: "#main",
            trigger: ".page9",
            // markers: true,
            start: "top 30%",
            end: "top 10%",
            scrub: 0.8,
        })
    })


}




page1Animation();
page2Animation();
page3Animation();
page4Animation();
page5Animation();
page6Animation();
page7Animation();
page8Animation();
page9Animation();

menuAnimation();

cursorMove();