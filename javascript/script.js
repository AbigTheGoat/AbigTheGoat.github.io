document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const characterCards = document.querySelectorAll('.character-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        characterCards.forEach(card => {
          // Show all cards if "All Characters" filter is selected
          if (filter === 'all') {
            card.style.display = 'block';
            return;
          }
          
          // Check if card has path or element filter
          if (filter.startsWith('path-')) {
            const path = filter.replace('path-', '');
            if (card.getAttribute('data-path') === path) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          } else if (filter.startsWith('element-')) {
            const element = filter.replace('element-', '');
            if (card.getAttribute('data-element') === element) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  });