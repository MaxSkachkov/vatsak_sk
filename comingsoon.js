const tl = gsap.timeline({
    default: {
        ease:'power1.out',
    }});

    tl.to('.text', {y:'0%', durations: .5});
    tl.to('.text2', {y:'0%', duration: .5});
