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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".file");
  const modal = document.getElementById("projectModal");
  const closeBtn = document.querySelector(".close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  //Project data
  const projectData = {
    "1": {
      title: "Project 1",
      description: "Description for project 1.",
      image: "images/project1.jpg", // Corrected path!
    },
    "2": {
      title: "Project 2",
      description: "Description for project 2.",
      image: "images/project2.jpg", // Corrected path!
    },
    "3": {
      title: "Project 3",
      description: "Description for project 3.",
      image: "images/project3.jpg", // Corrected path!
    },
    "4": {
      title: "Project 4",
      description: "Description for project 4.",
      image: "images/project4.jpg", // Corrected path!
    },
    "5": {
      title: "Project 5",
      description: "Description for project 5.",
      image: "images/project5.jpg", // Corrected path!
    },
    "6": {
      title: "Project 6",
      description: "Description for project 6.",
      image: "images/project6.jpg", // Corrected path!
    },
  };
  // Click event to open modal and display project details
  images.forEach((image) => {
    image.addEventListener("click", function () {
      const projectId = image.getAttribute("data-project");
      console.log("image clicked!");
      const project = projectData[projectId];
      if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.image;
        modal.style.display = "block";
      }
    });
  }); //Closing Bracket!!
  // Close modal when close button is clicked
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // Close modal if the user clicks outside the modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
