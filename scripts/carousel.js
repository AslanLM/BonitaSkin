document.addEventListener("DOMContentLoaded", function() {
   
    let currentSlide = 1;
    const totalSlides = 3;

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Función para mostrar la diapositiva actual
    function showSlide(slideNumber, direction) {
        const slides = document.querySelectorAll(".wrapper-holder > div");

        // Animación de deslizado con GSAP
        gsap.to(slides[currentSlide - 1], { opacity: 0, x: direction === "next" ? 100 : -100, duration: 0.2, ease: "power2.inOut", onComplete: hideSlides });

        function hideSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[currentSlide - 1].style.display = "flex";
            gsap.to(slides[currentSlide - 1], { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" });
        }
    }

    showSlide(currentSlide, "next");

    nextButton.addEventListener("click", function() {
        currentSlide = (currentSlide % totalSlides) + 1;
        showSlide(currentSlide, "next");
    });

    prevButton.addEventListener("click", function() {
        currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
        showSlide(currentSlide, "prev");
    });
});
