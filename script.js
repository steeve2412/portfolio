
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

