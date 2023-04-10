
export function scrollreveal(){

    ScrollReveal().reveal('.banner-img__container', {
        delay: 300,
        duration: 1000,
        easing: 'steps(10)',
    });

    ScrollReveal().reveal('.banner span , .banner h1, .banner p, .banner button', {
        delay: 600,
        interval: 2000,
        duration: 1000,
        easing: 'ease-in',
        
    });

    ScrollReveal().reveal('.skills-item', { 
        delay: 500,
        interval: 400,
        easing: 'ease-in',
        
    });

    ScrollReveal().reveal('.experience-item',{
        delay: 1600,
        interval:400,
        easing: 'ease-in',
        
    });

    ScrollReveal().reveal('.projects-header', { 
        delay: 500,
        duration: 500,
        easing: 'steps(100)',
        
    });

    ScrollReveal().reveal('.projects-item', { 
        delay: 500,
        interval:400,
        duration: 500,
        easing:'ease-in',
        
    
    });
    
    ScrollReveal().reveal('.project-name', { 
        delay: 200,
        interval:600,
        opacity: 0.3,
        easing: 'ease-in',
        
    });
   
    ScrollReveal().reveal('.contact-item', {
        delay: 500,
        duration:500,
        easing: 'ease-in',
        // rotate: { x:-90 }
        
    });

}

