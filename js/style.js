document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".row-container");
    let scrollAmount = 0;
    const scrollStep = 2; // Adjust speed (higher = faster)
    const scrollDelay = 30; // Time in ms

    function autoScroll() {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0; // Reset to start when reaching the end
        } else {
            slider.scrollLeft += scrollStep;
        }
    }

    let autoScrollInterval = setInterval(autoScroll, scrollDelay);

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
    slider.addEventListener("mouseleave", () => autoScrollInterval = setInterval(autoScroll, scrollDelay));
});
