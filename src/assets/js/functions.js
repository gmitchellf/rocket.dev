document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class 'bg-image'
    var bgImageContainers = document.querySelectorAll(".bg-image");

    // Loop through each container
    bgImageContainers.forEach(function (bgImageContainer) {
        // Get the image within the container
        var bgImageSource = bgImageContainer.querySelector(".bg-image-source");

        // Set the background image
        if (bgImageSource) {
            bgImageContainer.style.backgroundImage = "url('" + bgImageSource.src + "')";
            bgImageSource.style.display = "none"; // Hide the original image
        }
    });
});