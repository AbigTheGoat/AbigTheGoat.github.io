document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

const characters = [
    { name: "Acheron", rarity: "5 Star", path: "nihility", element: "lightning", description: "A drifter claiming to be a Galaxy Ranger, though she is later revealed to be a Self-Annihilator. She walks the cosmos alone, carrying with her a long sword." },
    { name: "Aglaea", rarity: "5 Star", path: "remembrance", element: "lightning", description: "The Chrysos Heir bearing the Coreflame of Romance, able to summon heroes to embark on new journeys." },
    { name: "Anaxa", rarity: "5 Star", path: "erudition", element: "wind", description: "Known as Anaxagoras the blasphemer within the Grove of Epiphany." },
    { name: "Argenti", rarity: "5 Star", path: "erudition", element: "physical", description: "A knight from the Knights of Beauty who follows the Path of Beauty with unwavering dedication." },
    { name: "Arlan", rarity: "4 Star", path: "destruction", element: "lightning", description: "The head of security at Herta Space Station, often seen with his dog Peppy." },
    { name: "Asta", rarity: "4 Star", path: "harmony", element: "fire", description: "The lead astronomer of Herta Space Station who manages staff affairs and communications with the Intelligentsia Guild." },
    { name: "Aventurine", rarity: "5 Star", path: "preservation", element: "imaginary", description: "A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts." },
    { name: "Bailu", rarity: "5 Star", path: "abundance", element: "lightning", description: "A young Vidyadhara healer known as the Healer Lady on the Xianzhou Luofu." },
    { name: "Black Swan", rarity: "5 Star", path: "nihility", element: "wind", description: "A mysterious Memokeeper from the Garden of Recollection with prophetic abilities." },
    { name: "Blade", rarity: "5 Star", path: "destruction", element: "wind", description: "A swordsman who sacrificed his physical form to become a living blade and serves with the Stellaron Hunters." },
    { name: "Boothill", rarity: "5 Star", path: "hunt", element: "physical", description: "A cybernetic cowboy and Galaxy Ranger who pursues justice against wrongdoers." },
    { name: "Bronya", rarity: "5 Star", path: "harmony", element: "wind", description: "The Supreme Guardian of Belobog and commander of the Silvermane Guards." },
    { name: "Castorice", rarity: "5 Star", path: "remembrance", element: "quantum", description: "The daughter of the River of Souls from snow-covered Aidonia where death is revered." },
    { name: "Clara", rarity: "5 Star", path: "destruction", element: "physical", description: "An orphaned girl accompanied by an ancient mech named Svarog, seeking to find a family." },
    { name: "Dan Heng", rarity: "4 Star", path: "hunt", element: "wind", description: "A reserved train guard and archivist of the Astral Express who wields the Cloud-Piercer spear." },
    { name: "Dan Heng • Imbibitor Lunae", rarity: "5 Star", path: "destruction", element: "imaginary", description: "Dan Heng's true Vidyadhara form after accepting powers from the previous Imbibitor Lunae." },
    { name: "Dr. Ratio", rarity: "5 Star", path: "hunt", element: "imaginary", description: "A candid Intelligentsia Guild member who hides his appearance behind a plaster sculpture mask." },
    { name: "Feixiao", rarity: "5 Star", path: "hunt", element: "wind", description: "A former war slave now serving as the Merlin's Claw of Xianzhou Yaoqing and one of the Seven Arbiter-Generals." },
    { name: "Firefly", rarity: "5 Star", path: "destruction", element: "fire", description: "A Stellaron Hunter who operates within mechanical armor called SAM." },
    { name: "Fu Xuan", rarity: "5 Star", path: "preservation", element: "quantum", description: "The Master Diviner of the Xianzhou Luofu's Divination Commission and one of the Six Charioteers." },
    { name: "Fugue", rarity: "5 Star", path: "nihility", element: "fire", description: "The former representative of the Whistling Flames merchant guild who survived a mysterious catastrophe." },
    { name: "Gallagher", rarity: "4 Star", path: "abundance", element: "fire", description: "A security officer of the Bloodhound Family in Penacony who also works as a mixologist." },
    { name: "Gepard", rarity: "5 Star", path: "preservation", element: "ice", description: "The honorable captain of the Silvermane Guards from the noble Landau family." },
    { name: "Guinaifen", rarity: "4 Star", path: "nihility", element: "fire", description: "An outworlder who accidentally ended up on the Xianzhou and became a street performer." },
    { name: "Hanya", rarity: "4 Star", path: "harmony", element: "physical", description: "A martial artist who believes in the harmony between mind and body." },
    { name: "Herta", rarity: "4 Star", path: "erudition", element: "ice", description: "The genius founder and director of the Herta Space Station." },
    { name: "Himeko", rarity: "5 Star", path: "erudition", element: "fire", description: "A brilliant scientist who first encountered the Astral Express as a child." },
    { name: "Hook", rarity: "4 Star", path: "destruction", element: "fire", description: "A Belobog Underground resident who loves explosives and causing destruction." },
    { name: "Huohuo", rarity: "5 Star", path: "abundance", element: "wind", description: "A young Foxian diviner from the Xianzhou who specializes in healing arts." },
    { name: "Jade", rarity: "5 Star", path: "erudition", element: "quantum", description: "A renowned Vidyadhara scholar with extensive knowledge of quantum theories." },
    { name: "Jiaoqiu", rarity: "5 Star", path: "nihility", element: "fire", description: "A deceptive figure who manipulates fire and illusions for their own purposes." },
    { name: "Jing Yuan", rarity: "5 Star", path: "erudition", element: "lightning", description: "The General of the Cloud Knights and one of the Six Charioteers of the Xianzhou Luofu." },
    { name: "Jingliu", rarity: "5 Star", path: "destruction", element: "ice", description: "A legendary sword master who returned from death, known as the Icy Blade that Stains Sakura." },
    { name: "Kafka", rarity: "5 Star", path: "nihility", element: "lightning", description: "A mysterious intelligence agent and member of the Stellaron Hunters." },
    { name: "Lingsha", rarity: "5 Star", path: "abundance", element: "fire", description: "A healer specializing in fire-based remedies and restorative techniques." },
    { name: "Luka", rarity: "4 Star", path: "nihility", element: "physical", description: "A member of Wildfire from Belobog who uses deception and speed in combat." },
    { name: "Luocha", rarity: "5 Star", path: "abundance", element: "imaginary", description: "A mysterious doctor wandering the universe with a coffin, hiding secrets behind his gentle smile." },
    { name: "Lynx", rarity: "4 Star", path: "abundance", element: "quantum", description: "A medic from Belobog specializing in quantum healing techniques." },
    { name: "March 7th (Preservation)", rarity: "4 Star", path: "preservation", element: "ice", description: "A cheerful girl with ice powers who was found frozen in space by the Astral Express crew." },
    { name: "March 7th (Hunt)", rarity: "4 Star", path: "hunt", element: "imaginary", description: "An alternate version of March 7th who follows the path of Hunt with imaginary powers." },
    { name: "Misha", rarity: "4 Star", path: "destruction", element: "ice", description: "A talented pianist from Belobog with powerful ice abilities." },
    { name: "Moze", rarity: "4 Star", path: "hunt", element: "lightning", description: "A hunter who uses lightning techniques to track and eliminate targets." },
    { name: "Mydei", rarity: "5 Star", path: "destruction", element: "imaginary", description: "A mysterious entity wielding destructive imaginary powers." },
    { name: "Natasha", rarity: "4 Star", path: "abundance", element: "physical", description: "A dedicated doctor from Belobog's Underworld caring for its residents." },
    { name: "Pela", rarity: "4 Star", path: "nihility", element: "ice", description: "An Intelligentsia Guild investigator who uses ice powers and deception." },
    { name: "Qingque", rarity: "4 Star", path: "erudition", element: "quantum", description: "A divination commissioner on the Xianzhou Luofu who loves fortune-telling and napping." },
    { name: "Rappa", rarity: "5 Star", path: "erudition", element: "imaginary", description: "A scholar specializing in imaginary energy and theoretical applications." },
    { name: "Robin", rarity: "5 Star", path: "harmony", element: "physical", description: "A harmonizer who uses physical techniques to support allies in battle." },
    { name: "Ruan Mei", rarity: "5 Star", path: "harmony", element: "ice", description: "One of the founders of the Genius Society and a researcher of Paths." },
    { name: "Sampo", rarity: "4 Star", path: "nihility", element: "wind", description: "A cunning merchant from the Xianzhou Luofu known for his shady deals." },
    { name: "Seele", rarity: "5 Star", path: "hunt", element: "quantum", description: "A swift combatant from Belobog's Wildfire organization who moves like shadow." },
    { name: "Serval", rarity: "4 Star", path: "erudition", element: "lightning", description: "A rock star from Belobog who can control lightning with her electric guitar." },
    { name: "Silver Wolf", rarity: "5 Star", path: "nihility", element: "quantum", description: "A master hacker of the Stellaron Hunters capable of manipulating digital dimensions." },
    { name: "Sparkle", rarity: "5 Star", path: "harmony", element: "quantum", description: "The Dream's Apex of the Dreamscape Corporation in Penacony and an expert on quantum harmonization." },
    { name: "Sunday", rarity: "5 Star", path: "harmony", element: "imaginary", description: "A harmonizer who manipulates imaginary energy to support allies." },
    { name: "Sushang", rarity: "4 Star", path: "hunt", element: "physical", description: "A skilled martial artist from the Xianzhou Luofu dedicated to sword training and combat." },
    { name: "The Herta", rarity: "5 Star", path: "erudition", element: "ice", description: "The true form of Herta with enhanced ice manipulation and intellect." },
    { name: "Tingyun", rarity: "4 Star", path: "harmony", element: "lightning", description: "A famous Foxian businesswoman and the head of the Luofu's Mercantile Commission." },
    { name: "Topaz & Numby", rarity: "5 Star", path: "hunt", element: "fire", description: "An IPC special operative who works alongside her companion creature Numby." },
    { name: "Trailblazer (Physical)", rarity: "5 Star", path: "destruction", element: "physical", description: "The protagonist who follows the path of Destruction with physical abilities." },
    { name: "Trailblazer (Fire)", rarity: "5 Star", path: "preservation", element: "fire", description: "The protagonist who follows the path of Preservation with fire abilities." },
    { name: "Trailblazer (Imaginary)", rarity: "5 Star", path: "harmony", element: "imaginary", description: "The protagonist who follows the path of Harmony with imaginary abilities." },
    { name: "Trailblazer (Ice)", rarity: "5 Star", path: "remembrance", element: "ice", description: "The protagonist who follows the path of Remembrance with ice abilities." },
    { name: "Tribbie", rarity: "5 Star", path: "harmony", element: "quantum", description: "A quantum specialist providing harmonious support to allies." },
    { name: "Welt", rarity: "5 Star", path: "nihility", element: "imaginary", description: "The former Anti-Entropy Sovereign with the power to manipulate imaginary space." },
    { name: "Xueyi", rarity: "4 Star", path: "destruction", element: "quantum", description: "A quantum destroyer from the Xianzhou with powerful combat abilities." },
    { name: "Yanqing", rarity: "5 Star", path: "hunt", element: "ice", description: "A young but talented swordsman from the Cloud Knights of the Xianzhou Luofu." },
    { name: "Yukong", rarity: "4 Star", path: "harmony", element: "imaginary", description: "A senior Sky-Faring Commission officer on the Xianzhou Luofu with imaginary powers." },
    { name: "Yunli", rarity: "5 Star", path: "destruction", element: "physical", description: "A physical damage dealer who specializes in destructive combat techniques." }
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