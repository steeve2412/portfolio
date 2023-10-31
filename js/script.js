let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Get all the navigation links
let navLinks = document.querySelectorAll('header nav a');

// Add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    // Remove active class from all navigation links
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add active class to the clicked navigation link
    link.classList.add('active');

    let targetSection = document.querySelector(link.getAttribute('href')); // Get the target section using the link's href attribute
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
  });
});

window.onscroll = () =>{
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Select all progress bars
const progressBars = document.querySelectorAll('.skills-content .progress .bar span');

// Set the width of each progress bar based on the data-percent attribute
progressBars.forEach((bar) => {
  const percent = bar.getAttribute('data-percent');
  bar.style.width = percent + '%';
});

// Your existing JavaScript code for the "Projects" section
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const titleTxt = document.querySelector(".projects_p1");
const linkTxt = document.querySelector(".projects_p2");
const linkBtn = document.querySelector(".projects_p3");

let slideIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Fade out the current image
    slides.forEach((slide) => {
        slide.style.opacity = 0;
    });

    // Fade in the next image
    slides[slideIndex].style.opacity = 1;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    getProjectData(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    getProjectData(slideIndex);
}

function getProjectData(index) {
    var projectName = '';
    var projectLink = '';
    switch (index) {
        case 0:
            projectName = 'Project 1';
            projectLink = '#'; // Add your project link
            break;
        case 1:
            projectName = 'Project 2';
            projectLink = '#'; // Add your project link
            break;
        // Add more cases as needed
        default:
            projectName = '';
            projectLink = '';
            break;
    }
    titleTxt.textContent = projectName;
    linkTxt.textContent = 'Learn More';
    linkTxt.href = projectLink;
}

showSlide(slideIndex);

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-change every 3 seconds
setInterval(nextSlide, 3000);
