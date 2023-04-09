
export function scrollreveal(){
    ScrollReveal().reveal('.hero', {
        delay: 300,
        distance: '20px',
        duration:500,
        easing: 'steps(20)',
        
    });

    ScrollReveal().reveal('.skills-item', { 
        delay: 300,
        interval: 500,
        easing: 'steps(50)',
        reset: true
    });

    ScrollReveal().reveal('.experience-item',{
        delay: 300,
        interval:500,
        easing: 'steps(50)',
        reset:true
    });

    ScrollReveal().reveal('.projects-header', { delay: 500 });
    ScrollReveal().reveal('.project-1', { delay: 800 });
    ScrollReveal().reveal('.project-2', { delay: 1100 });
    ScrollReveal().reveal('.project-3', { delay: 1400 });
    ScrollReveal().reveal('.project-4', { delay: 1700 });

}

