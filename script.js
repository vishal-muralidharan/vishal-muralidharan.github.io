document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-section");
    const deferred = document.querySelectorAll('.deferred');
    const sectionElements = document.querySelectorAll("main section[id]");

    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Header and nav removed; keep content reveal and fade-ins only

    // Fade-in animations for sections
    const sectionObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -80px 0px",
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // Reveal all deferred content on first scroll interaction
    let revealed = false;
    const revealDeferred = () => {
        if (revealed) return;
        if (window.scrollY > 30) {
            deferred.forEach(el => el.classList.remove('deferred'));
            revealed = true;
        }
    };
    window.addEventListener('scroll', revealDeferred, { passive: true });

    // Smooth Accordion for Clubs
    const accordions = document.querySelectorAll('.club-role-accordion');

    accordions.forEach(accordion => {
        const summary = accordion.querySelector('summary');
        const content = accordion.querySelector('.club-role-content');

        if (!summary || !content) return;

        let isAnimating = false;

        summary.addEventListener('click', (e) => {
            e.preventDefault();
            if (isAnimating) return;
            
            isAnimating = true;
            
            if (!accordion.open) {
                accordion.open = true;
                // Wait a tick for the browser to render the display: block
                requestAnimationFrame(() => {
                    content.style.overflow = 'hidden';
                    const height = content.offsetHeight;
                    
                    const animation = content.animate([
                        { height: '0px', opacity: 0, paddingBottom: '0px' },
                        { height: `${height}px`, opacity: 1, paddingBottom: '1.2rem' }
                    ], {
                        duration: 350,
                        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    });
                    
                    animation.onfinish = () => {
                        content.style.overflow = '';
                        isAnimating = false;
                    };
                });
            } else {
                content.style.overflow = 'hidden';
                const height = content.offsetHeight;
                
                const animation = content.animate([
                    { height: `${height}px`, opacity: 1, paddingBottom: '1.2rem' },
                    { height: '0px', opacity: 0, paddingBottom: '0px' }
                ], {
                    duration: 350,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });
                
                animation.onfinish = () => {
                    accordion.open = false;
                    content.style.overflow = '';
                    isAnimating = false;
                };
            }
        });
    });

});    // Removed nav highlight logic