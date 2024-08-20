document.addEventListener("DOMContentLoaded", function() {
    const servicesSection = document.getElementById("services");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add("opacity-100");
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(servicesSection);
});