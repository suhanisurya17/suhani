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
    }, index * 500);
  });
}

document.addEventListener("DOMContentLoaded", function () {
appear(".center-picture", ".circle-picture", 300);
});

function shootout(centerSelector, circleSelector, radius) {
  const centerPicture = document.querySelector(centerSelector);
  const circlePictures = document.querySelectorAll(circleSelector);
  circlePictures.forEach((picture, index) => {
    picture.style.left = `${centerPicture.offsetLeft}px`;
    picture.style.top = `${centerPicture.offsetTop}px`;
    const angle = (index / circlePictures.length) * (2 * Math.PI);
    const x = centerPicture.offsetLeft + radius * Math.cos(angle);
    const y = centerPicture.offsetTop + radius * Math.sin(angle);
    setTimeout(() => {
      picture.style.left = `${x}px`;
      picture.style.top = `${y}px`;
      picture.classList.add("show");
    }, index * 500);
  });
}

document.getElementById("about-link").addEventListener("click", () => {
  shootout(".center1-picture", ".circle1-picture", 300);
});

document.getElementById("about-button").addEventListener("click", () => {
  shootout(".center1-picture", ".circle1-picture", 300);
});

function appear_menu(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.add("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  appear_menu(".option");
});


function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//this is for animating when scrolling to the about section

// Animate when scrolling to the #about section
const aboutSection = document.getElementById('about');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      shootout(".center1-picture", ".circle1-picture", 300);
      observer.unobserve(aboutSection); // Optional: if you want the animation to happen only once
    }
  });
}, {
  threshold: 0.3 // means it triggers when 30% of #about is visible
});

observer.observe(aboutSection);

function openModal1(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal1(modalId) {
  document.getElementById(modalId).style.display = "none";
}