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

    // Removed nav highlight logic

});
