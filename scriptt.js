function appear(centerSelector, circleSelector, radius) {
    const centerPicture = document.querySelector(centerSelector);
    const circlePictures = document.querySelectorAll(circleSelector);

    circlePictures.forEach((picture, index) => {
        const angle = (index / circlePictures.length) * (2 * Math.PI);
        const x = centerPicture.offsetLeft + radius * Math.cos(angle) - 50;
        const y = centerPicture.offsetTop + radius * Math.sin(angle);

        picture.style.left = `${x}px`;
        picture.style.top = `${y}px`;

        setTimeout(() => {
            picture.classList.add("show"); 
        }, index * 500); // Adjust the delay as needed
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll(".hover-image");

//     images.forEach(image => {
//         image.addEventListener("mouseenter", (event) => {
//             const tooltipText = event.target.getAttribute("data-tooltip");
//             let tooltip = document.createElement("div");
//             tooltip.className = "tooltip";
//             tooltip.innerText = tooltipText;
//             document.body.appendChild(tooltip);

//             const rect = event.target.getBoundingClientRect();
//             tooltip.style.left = `${rect.left + window.scrollX}px`;
//             tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
//         });

//         image.addEventListener("mouseleave", () => {
//             const tooltip = document.querySelector(".tooltip");
//             if (tooltip) {
//                 tooltip.remove();
//             }
//         });
//     });
// });

function shootout(centerSelector, circleSelector, radius) {
    const centerPicture = document.querySelector(centerSelector);
    const circlePictures = document.querySelectorAll(circleSelector);

    circlePictures.forEach((picture, index) => {
        // Initially position the pictures at the center
        picture.style.left = `${centerPicture.offsetLeft}px`;
        picture.style.top = `${centerPicture.offsetTop}px`;

        // Calculate the final positions
        const angle = (index / circlePictures.length) * (2 * Math.PI);
        const x = centerPicture.offsetLeft + radius * Math.cos(angle);
        const y = centerPicture.offsetTop + radius * Math.sin(angle);

        // Move the pictures to their final positions after a delay
        setTimeout(() => {
            picture.style.left = `${x}px`;
            picture.style.top = `${y}px`;
            picture.classList.add("show");
        }, index * 500); // Adjust the delay as needed
    });
}

document.addEventListener("DOMContentLoaded", () => {
    appear(".center-picture", ".circle-picture", 300);
    // Add more calls as needed
});

document.addEventListener("DOMContentLoaded", () => {
    appear_menu(".option");
    // Add more calls as needed
});


    // Event listener for the navbar link
    document.getElementById("about-link").addEventListener("click", () => {
        shootout(".center1-picture", ".circle1-picture", 300);
    });

    // Event listener for the button on the main homepage
    document.getElementById("about-button").addEventListener("click", () => {
        shootout(".center1-picture", ".circle1-picture", 300);
    });