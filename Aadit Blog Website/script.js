document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-in animations on scroll
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Sticky header active state logic based on scroll position
    const header = document.querySelector(".sticky-header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        } else {
            header.style.boxShadow = "none";
        }
    });

});
