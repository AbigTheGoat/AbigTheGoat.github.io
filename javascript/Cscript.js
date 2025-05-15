document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

const characters = [
    { name: "Acheron", rarity: "5 Star", path: "nihility", element: "lightning", description: "A mysterious figure who wields the power of lightning with deadly precision." },
    { name: "Aglaea", rarity: "5 Star", path: "remembrance", element: "lightning", description: "A character who draws strength from memories, channeling lightning to overwhelm enemies." },
    { name: "Anaxa", rarity: "5 Star", path: "erudition", element: "wind", description: "A scholar who harnesses the wind through scientific knowledge and keen intellect." },
    { name: "Argenti", rarity: "5 Star", path: "erudition", element: "physical", description: "A scholarly warrior who combines intellectual prowess with physical strength." },
    { name: "Arlan", rarity: "4 Star", path: "destruction", element: "lightning", description: "A powerful fighter who channels lightning to destroy his opponents." },
    { name: "Asta", rarity: "4 Star", path: "harmony", element: "fire", description: "A supportive character who uses fire to create harmony among teammates." },
    { name: "Aventurine", rarity: "5 Star", path: "preservation", element: "imaginary", description: "A protector who uses imaginary powers to shield allies from harm." },
    { name: "Bailu", rarity: "5 Star", path: "abundance", element: "lightning", description: "A healer who uses lightning energy to restore health and vitality." },
    { name: "Black Swan", rarity: "5 Star", path: "nihility", element: "wind", description: "An elegant character who manipulates wind with nihilistic powers." },
    { name: "Blade", rarity: "5 Star", path: "destruction", element: "wind", description: "A powerful swordsman who channels wind energy through his blade." },
    { name: "Boothill", rarity: "5 Star", path: "hunt", element: "physical", description: "A skilled hunter who uses physical prowess to track and defeat enemies." },
    { name: "Bronya", rarity: "5 Star", path: "harmony", element: "wind", description: "The elegant and composed Supreme Guardian of Belobog who uses wind powers to support allies." },
    { name: "Castorice", rarity: "5 Star", path: "remembrance", element: "quantum", description: "A quantum manipulator who draws strength from past memories." },
    { name: "Clara", rarity: "5 Star", path: "destruction", element: "physical", description: "A young girl with a gentle heart accompanied by her robotic guardian, Svarog." },
    { name: "Dan Heng", rarity: "4 Star", path: "hunt", element: "wind", description: "A quiet and calm archivist of the Astral Express who wields a powerful spear." },
    { name: "Dan Heng • Imbibitor Lunae", rarity: "5 Star", path: "destruction", element: "imaginary", description: "Dan Heng's alternate form after embracing the power of the Imbibitor Lunae." },
    { name: "Dr. Ratio", rarity: "5 Star", path: "hunt", element: "imaginary", description: "A doctor who uses imaginary powers to track and diagnose problems." },
    { name: "Feixiao", rarity: "5 Star", path: "hunt", element: "wind", description: "A skilled hunter who uses wind to track and pursue targets." },
    { name: "Firefly", rarity: "5 Star", path: "destruction", element: "fire", description: "A fiery character who brings destruction through blazing flames." },
    { name: "Fu Xuan", rarity: "5 Star", path: "preservation", element: "quantum", description: "A quantum manipulator who specializes in defensive capabilities." },
    { name: "Fugue", rarity: "5 Star", path: "nihility", element: "fire", description: "A character who uses fire to create illusions and deceive enemies." },
    { name: "Gallagher", rarity: "4 Star", path: "abundance", element: "fire", description: "A supportive character who uses fire to heal and energize allies." },
    { name: "Gepard", rarity: "5 Star", path: "preservation", element: "ice", description: "The noble captain of the Silvermane Guards in Belobog who uses ice shields for protection." },
    { name: "Guinaifen", rarity: "4 Star", path: "nihility", element: "fire", description: "A character who uses fire to create illusions and deceit." },
    { name: "Hanya", rarity: "4 Star", path: "harmony", element: "physical", description: "A physical fighter who believes in the harmony of mind and body." },
    { name: "Herta", rarity: "4 Star", path: "erudition", element: "ice", description: "A brilliant scientist who uses ice in her experiments and battles." },
    { name: "Himeko", rarity: "5 Star", path: "erudition", element: "fire", description: "An adventurous scientist who encountered the Astral Express as a child." },
    { name: "Hook", rarity: "4 Star", path: "destruction", element: "fire", description: "A fiery character who loves to cause destruction with flames." },
    { name: "Huohuo", rarity: "5 Star", path: "abundance", element: "wind", description: "A healer who uses wind energy to cure ailments and revitalize allies." },
    { name: "Jade", rarity: "5 Star", path: "erudition", element: "quantum", description: "A scholarly character who studies and manipulates quantum energy." },
    { name: "Jiaoqiu", rarity: "5 Star", path: "nihility", element: "fire", description: "A deceptive character who uses fire to create illusions." },
    { name: "Jing Yuan", rarity: "5 Star", path: "erudition", element: "lightning", description: "A lightning user who applies knowledge to harness electrical energy." },
    { name: "Jingliu", rarity: "5 Star", path: "destruction", element: "ice", description: "A powerful ice wielder who brings destruction through freezing attacks." },
    { name: "Kafka", rarity: "5 Star", path: "nihility", element: "lightning", description: "A mysterious agent who uses lightning to confuse and deceive enemies." },
    { name: "Lingsha", rarity: "5 Star", path: "abundance", element: "fire", description: "A healer who uses fire to restore life and energy to allies." },
    { name: "Luka", rarity: "4 Star", path: "nihility", element: "physical", description: "A physical fighter who uses deception and trickery in combat." },
    { name: "Luocha", rarity: "5 Star", path: "abundance", element: "imaginary", description: "A healer who uses imaginary powers to restore health and energy." },
    { name: "Lynx", rarity: "4 Star", path: "abundance", element: "quantum", description: "A quantum healer who provides support to teammates." },
    { name: "March 7th (Preservation)", rarity: "4 Star", path: "preservation", element: "ice", description: "A cheerful, quirky girl with a camera who travels the stars with the Astral Express." },
    { name: "March 7th (Hunt)", rarity: "4 Star", path: "hunt", element: "imaginary", description: "An alternate version of March 7th who follows the path of the Hunt." },
    { name: "Misha", rarity: "4 Star", path: "destruction", element: "ice", description: "An ice wielder who brings destruction through freezing attacks." },
    { name: "Moze", rarity: "4 Star", path: "hunt", element: "lightning", description: "A hunter who uses lightning to track and defeat enemies." },
    { name: "Mydei", rarity: "5 Star", path: "destruction", element: "imaginary", description: "A character who uses imaginary powers to bring destruction." },
    { name: "Natasha", rarity: "4 Star", path: "abundance", element: "physical", description: "A physical healer who uses medical knowledge to support allies." },
    { name: "Pela", rarity: "4 Star", path: "nihility", element: "ice", description: "An ice manipulator who uses deception and trickery." },
    { name: "Qingque", rarity: "4 Star", path: "erudition", element: "quantum", description: "A quantum user who applies scholarly knowledge in battle." },
    { name: "Rappa", rarity: "5 Star", path: "erudition", element: "imaginary", description: "A scholarly character who studies and manipulates imaginary energy." },
    { name: "Robin", rarity: "5 Star", path: "harmony", element: "physical", description: "A physical fighter who brings harmony to the battlefield." },
    { name: "Ruan Mei", rarity: "5 Star", path: "harmony", element: "ice", description: "An ice user who provides harmony and support to teammates." },
    { name: "Sampo", rarity: "4 Star", path: "nihility", element: "wind", description: "A wind manipulator who uses deception and illusion." },
    { name: "Seele", rarity: "5 Star", path: "hunt", element: "quantum", description: "A swift and deadly member of Wildfire who moves like the wind." },
    { name: "Serval", rarity: "4 Star", path: "erudition", element: "lightning", description: "A lightning user who applies knowledge to harness electrical energy." },
    { name: "Silver Wolf", rarity: "5 Star", path: "nihility", element: "quantum", description: "A quantum manipulator who uses deception and hacking abilities." },
    { name: "Sparkle", rarity: "5 Star", path: "harmony", element: "quantum", description: "A quantum user who brings harmony and support to the team." },
    { name: "Sunday", rarity: "5 Star", path: "harmony", element: "imaginary", description: "An imaginary manipulator who provides harmony and support." },
    { name: "Sushang", rarity: "4 Star", path: "hunt", element: "physical", description: "A physical hunter who tracks and defeats enemies with precision." },
    { name: "The Herta", rarity: "5 Star", path: "erudition", element: "ice", description: "A more powerful version of Herta who excels in ice manipulation." },
    { name: "Tingyun", rarity: "4 Star", path: "harmony", element: "lightning", description: "A lightning user who brings harmony and support to the team." },
    { name: "Topaz & Numby", rarity: "5 Star", path: "hunt", element: "fire", description: "A fire hunter who works alongside her companion Numby." },
    { name: "Trailblazer (Physical)", rarity: "5 Star", path: "destruction", element: "physical", description: "The protagonist following the path of Destruction with physical powers." },
    { name: "Trailblazer (Fire)", rarity: "5 Star", path: "preservation", element: "fire", description: "The protagonist following the path of Preservation with fire powers." },
    { name: "Trailblazer (Imaginary)", rarity: "5 Star", path: "harmony", element: "imaginary", description: "The protagonist following the path of Harmony with imaginary powers." },
    { name: "Trailblazer (Ice)", rarity: "5 Star", path: "remembrance", element: "ice", description: "The protagonist following the path of Remembrance with ice powers." },
    { name: "Tribbie", rarity: "5 Star", path: "harmony", element: "quantum", description: "A quantum user who provides harmony and support to allies." },
    { name: "Welt", rarity: "5 Star", path: "nihility", element: "imaginary", description: "The wise and sophisticated former Anti-Entropy Sovereign." },
    { name: "Xueyi", rarity: "4 Star", path: "destruction", element: "quantum", description: "A quantum user who brings destruction to the battlefield." },
    { name: "Yanqing", rarity: "5 Star", path: "hunt", element: "ice", description: "An ice hunter who tracks and defeats enemies with precision." },
    { name: "Yukong", rarity: "4 Star", path: "harmony", element: "imaginary", description: "An imaginary manipulator who provides harmony and support." },
    { name: "Yunli", rarity: "5 Star", path: "destruction", element: "physical", description: "A physical fighter who brings destruction to enemies." }
  ];
  
  // Function to generate character cards
  function generateCharacterCards() {
    const characterGrid = document.getElementById('characterGrid');
    characterGrid.innerHTML = ''; // Clear existing content
    
    characters.forEach(character => {
      // Create a friendly URL version of the character name
      const urlName = character.name.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
      
      // Parse the rarity to get the number of stars
      const rarityNumber = character.rarity.split(' ')[0];
      
      // Create the character card HTML
      const cardHTML = `
        <div class="character-card" data-path="${character.path.toLowerCase()}" data-element="${character.element.toLowerCase()}">
          <div class="card-image-container">
            <img src="/images/Characters/${urlName}.png" alt="${character.name}" onerror="this.src='/images/Characters/placeholder.png'">
            <div class="path-badge">
              <img src="/images/paths/${character.path.toLowerCase()}.png" alt="Path of ${character.path}" onerror="this.src='/images/paths/placeholder.png'">
            </div>
            <div class="element-badge" style="position: absolute; top: 15px; left: 15px;">
              <img src="/images/Characters/elements/${character.element.toLowerCase()}.png" alt="${character.element} Element" style="width: 30px; height: 30px;" onerror="this.src='/images/Characters/elements/placeholder.png'">
            </div>
          </div>
          <div class="card-content">
            <h2>${character.name}</h2>
            <p>${character.description}</p>
            <span class="world-type">${character.rarity} ${character.element.charAt(0).toUpperCase() + character.element.slice(1)} ${character.path.charAt(0).toUpperCase() + character.path.slice(1)}</span>
          </div>
        </div>
      `;
      
      // Add the card to the grid
      characterGrid.innerHTML += cardHTML;
    });
  }
  
  // Function to handle filtering
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const characterCards = document.querySelectorAll('.character-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.character-card').forEach(card => {
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
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    generateCharacterCards();
    setupFilters();
  });

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