document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
    
    // Toggle overlay
    if (menuOverlay) {
      menuOverlay.classList.toggle('active');
    }
    
    // Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
  });
  
  // Close menu when clicking on overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }
  
  // Close menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
      if (menuOverlay) {
        menuOverlay.classList.remove('active');
      }
      document.body.classList.remove('no-scroll');
    });
  });
  
  // Adjust header on scroll for better aesthetics
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow and more opacity when scrolling down
    if (scrollTop > 20) {
      header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
      header.style.background = 'rgba(10, 10, 25, 0.9)';
    } else {
      header.style.boxShadow = 'none';
      header.style.background = 'rgba(10, 10, 25, 0.8)';
    }
    
    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  menuToggle.addEventListener('click', () => {
    navbar.style.left = navbar.style.left === '0px' ? '-100%' : '0px';
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', () => {
    navbar.style.left = '-100%';
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});