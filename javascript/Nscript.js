// Simple filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically filter the news cards based on category
            // For now, we'll just show a simple animation effect
            const newsCards = document.querySelectorAll('.news-card');
            newsCards.forEach(card => {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 300);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('newsModal');
  const video = document.getElementById('modalVideo');
  const source = video.querySelector('source');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.read-more, .featured-read-more').forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Local video files (place them in a folder like /videos/)
      const videoPaths = [
        "/videos/3.3Trailer.mp4",
        "/videos/AnaxaTrailer.mp4",
        "/videos/2yrTrailer.mp4",
        "/videos/CastoriceTrailer.mp4",
        "/videos/FilmTrailer.mp4",
        "/videos/KeepingUp.mp4",
        "/videos/CastoricePV.mp4"
      ];

      // Set source and reload video
      source.src = videoPaths[index] || videoPaths[0];
      video.load();
      modal.style.display = 'block';
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