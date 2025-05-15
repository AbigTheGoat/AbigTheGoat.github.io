// Improved filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the filter category from button text
            const filterCategory = this.textContent.trim();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get all news cards
            const newsCards = document.querySelectorAll('.news-card');
            const featuredNews = document.querySelector('.featured-news-card');
            
            // Handle featured news visibility
            if (filterCategory === 'All News') {
                featuredNews.style.display = 'flex'; // Show featured news for "All News"
            } else {
                // Hide featured news for specific categories or check its category
                const featuredCategory = featuredNews.querySelector('.featured-category').textContent.trim();
                featuredNews.style.display = (filterCategory === featuredCategory) ? 'flex' : 'none';
            }
            
            // Apply fade-out animation to all cards first
            newsCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            });
            
            // After a short delay, filter and show relevant cards
            setTimeout(() => {
                newsCards.forEach(card => {
                    const cardCategory = card.querySelector('.news-category').textContent.trim();
                    
                    if (filterCategory === 'All News' || cardCategory === filterCategory) {
                        // Show cards that match the filter
                        card.style.display = 'flex';
                        // Apply fade-in animation with a slight delay for each card
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        // Hide cards that don't match the filter
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    });
});

// Enhanced link handling for both videos and external links
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('newsModal');
  const video = document.getElementById('modalVideo');
  const source = video.querySelector('source');
  const closeBtn = document.querySelector('.close-btn');

  // Define video paths mapping
  const videoPathsMap = {
    'featured': "/videos/3.3Trailer.mp4",
    'anaxa-trailer': "/videos/AnaxaTrailer.mp4",
    '2yr-anniversary': "/videos/2yrTrailer.mp4",
    'castorice-trailer': "/videos/CastoriceTrailer.mp4",
    'concert-film': "/videos/FilmTrailer.mp4",
    'mydei-keeping-up': "/videos/KeepingUp.mp4",
    'castorice-pv': "/videos/CastoricePV.mp4",
    'anaxa-keeping-up': "/videos/Anaxakeepup.mp4",
    'castorice-epitaph': "/videos/CastoriceEpitaph.mp4"
  };

  // Handle featured news video
  const featuredReadMore = document.querySelector('.featured-read-more');
  if (featuredReadMore) {
    featuredReadMore.addEventListener('click', (e) => {
      e.preventDefault();
      
      source.src = videoPathsMap['featured'];
      video.load();
      modal.style.display = 'block';
    });
  }

  // Get all news cards and handle their videos
  document.querySelectorAll('.news-card').forEach(card => {
    const readMoreBtn = card.querySelector('.read-more');
    if (!readMoreBtn) return;
    
    readMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const buttonText = readMoreBtn.textContent.trim().toLowerCase();
      
      if (buttonText.startsWith('link')) {
        // Handle as external link
        const linkUrl = readMoreBtn.getAttribute('data-url');
        if (linkUrl) {
          window.open(linkUrl, '_blank');
        }
      } else {
        // Handle as video
        // Determine which video to play based on card content
        const cardTitle = card.querySelector('.news-card-title').textContent.trim().toLowerCase();
        let videoToPlay = null;
        
        // Match title keywords to videos
        if (cardTitle.includes('anaxa') && cardTitle.includes('keeping up')) {
          videoToPlay = videoPathsMap['anaxa-keeping-up'];
        } else if (cardTitle.includes('anaxa') && cardTitle.includes('trailer')) {
          videoToPlay = videoPathsMap['anaxa-trailer'];
        } else if (cardTitle.includes('two-year anniversary')) {
          videoToPlay = videoPathsMap['2yr-anniversary'];
        } else if (cardTitle.includes('version 3.2') || cardTitle.includes('through the petals')) {
          videoToPlay = videoPathsMap['castorice-trailer'];
        } else if (cardTitle.includes('epitaph')) {
          videoToPlay = videoPathsMap['castorice-epitaph'];
        } else if (cardTitle.includes('concert animated')) {
          videoToPlay = videoPathsMap['concert-film'];
        } else if (cardTitle.includes('mydei')) {
          videoToPlay = videoPathsMap['mydei-keeping-up'];
        } else if (cardTitle.includes('golden epic') || cardTitle.includes('life awakens')) {
          videoToPlay = videoPathsMap['castorice-pv'];
        } else {
          console.log("No video match found for:", cardTitle);
          // Fallback to the first video if no match
          videoToPlay = Object.values(videoPathsMap)[0];
        }
        
        // Set the video source and play
        source.src = videoToPlay;
        video.load();
        modal.style.display = 'block';
      }
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    }
  }
});

// Menu functionality for header navigation
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

document.addEventListener('DOMContentLoaded', function () {
    const cardsPerPage = 4;
    const cards = Array.from(document.querySelectorAll('.news-card'));
    const pageButtons = document.querySelectorAll('.page-btn[data-page]');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    let currentPage = 1;

    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            card.style.display = index >= start && index < end ? 'block' : 'none';
        });

        pageButtons.forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
        });
    }

    pageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            showPage(page);
        });
    });

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
        const maxPage = Math.ceil(cards.length / cardsPerPage);
        if (currentPage < maxPage) showPage(currentPage + 1);
    });

    showPage(1); // Initial display
});