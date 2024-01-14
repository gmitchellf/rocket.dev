document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'bg-image'
    var bgImageContainers = document.querySelectorAll(".bg-image");
    // Loop through each container
    bgImageContainers.forEach(function(bgImageContainer) {
        // Get the image within the container
        var bgImageSource = bgImageContainer.querySelector(".bg-image-source");
        // Set the background image
        if (bgImageSource) {
            bgImageContainer.style.backgroundImage = "url('" + bgImageSource.src + "')";
            bgImageSource.style.display = "none"; // Hide the original image
        }
    });
});
$(document).ready(function() {
    // Initialize the tooltip
    $('[data-bs-toggle="tooltip"]').tooltip();
    // Handle button click to open the modal
    $("#openModalButton").click(function() {
        // Open the modal
        $("#myModal").modal("show");
    });
});
// Enable Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("backToTopBtn");
    window.onscroll = function() {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) btn.classList.add("display");
        else btn.classList.remove("display");
    }
    btn.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

//# sourceMappingURL=index.c9a64a37.js.map
