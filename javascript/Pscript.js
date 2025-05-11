document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('worldModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const closeModal = document.querySelector('.close-modal');

const worldData = {
  jarilo: {
    title: "Jarilo-VI",
    subtitle: "The Frozen World",
    image: "/images/logos/Jarilo-VI.png",
    description:
      "Jarilo-VI is a frozen planet with a unique history of isolation due to an Eternal Freeze phenomenon. After the Eternal Freeze was lifted, it revealed a landscape of snow-capped mountains and frozen ruins. The planet is home to Belobog, the only settlement left standing after the calamitous event, and the Great Mine that lies beneath it.",
    features: [
      {
        title: "Belobog",
        text: "The last surviving city on Jarilo-VI, divided between the Administrative District above and the Underworld below. The city is led by the Supreme Guardian Bronya and faces constant threats from the Fragmentum.",
      },
      {
        title: "The Great Mine",
        text: "An expansive underground complex beneath Belobog where valuable resources are harvested. It has several levels and leads to ancient ruins that hold secrets about the planet's past.",
      },
      {
        title: "Fragmentum",
        text: "Anomalous regions that appear on Jarilo-VI, corrupting the environment and spawning dangerous entities. The Silvermane Guards work tirelessly to contain these threats.",
      },
    ],
  },
  luofu: {
    title: "Xianzhou Luofu",
    subtitle: "The Celestial Flagship",
    image: "/images/logos/Luofu.png",
    description:
      "The Xianzhou Luofu is one of six massive ships belonging to the Xianzhou Alliance, a civilization that travels across the cosmos. Built in the style of ancient Chinese architecture fused with advanced technology, the Luofu serves as both a military vessel and a home to thousands of citizens. It's currently on a mission to combat the threat of the Abundance Demons.",
    features: [
      {
        title: "Starskiff Haven",
        text: "The central hub of the Luofu where merchants, travelers, and officials gather. It features elaborate gardens, markets, and administration buildings.",
      },
      {
        title: "Cloudford",
        text: "An upper district where the nobles and high-ranking officials of the Xianzhou reside. It features luxurious architecture and exclusive amenities.",
      },
      {
        title: "Divination Commission",
        text: "The organization responsible for predicting cosmic events and plotting the Luofu's course through the stars. They use a combination of technology and ancient arts.",
      },
    ],
  },
  herta: {
    title: "Herta Space Station",
    subtitle: "The Interstellar Research Hub",
    image: "/images/logos/Space_Station.png",
    description:
      "Herta Space Station is a sophisticated orbital facility established by the genius researcher Herta for advanced scientific study. Positioned near the Astral Express's path, the station serves as a crucial nexus for data collection and experimentation on cosmic phenomena. It's where the Trailblazer's journey across the universe begins.",
    features: [
      {
        title: "Master Control Zone",
        text: "The central operations area where Herta oversees all station functions. It houses sophisticated monitoring equipment and the station's main AI systems.",
      },
      {
        title: "Parlor Car",
        text: "A recreational area designed to resemble a luxurious train car, offering comfort and refreshments to visitors and researchers alike.",
      },
      {
        title: "Curio Gallery",
        text: "A museum-like space where Herta displays rare artifacts, specimens, and technological wonders collected from across the cosmos.",
      },
    ],
  },
  penacony: {
    title: "Penacony",
    subtitle: "The Planet of Festivities",
    image: "/images/logos/Penacony.png",
    description:
      "Penacony, known as the Planet of Festivities, is a dazzling world dedicated to leisure and entertainment. Administered by the enigmatic organization known as The Family, this planet has been transformed into a perpetual dreamscape where visitors can indulge in their deepest desires and fantasies. Behind its glamorous facade, however, lie darker secrets about the nature of its attractions.",
    features: [
      {
        title: "Golden Hour",
        text: "The central entertainment district featuring casinos, theaters, and luxury establishments that never close. The area is bathed in a perpetual golden sunset glow.",
      },
      {
        title: "Dream's Edge",
        text: "A mysterious boundary where reality and dreams blur together, creating surreal landscapes and experiences that challenge one's perception.",
      },
      {
        title: "The Family Mansion",
        text: "The headquarters of The Family, Penacony's ruling organization. Access is strictly limited, and many rumors circulate about what occurs within its walls.",
      },
    ],
  },
  amphoreus: {
    title: "Amphoreus",
    subtitle: "The Eternal Land",
    image: "/images/logos/Amphoreus.png",
    description:
      "Amphoreus, known as The Eternal Land, is an isolated world with a complex history of divine conflict and rebirth. After a period of chaos, giant beings known as Titans arose from the remnants of fallen gods, bringing a new order to the world. The last bastion of civilization is the Eternal Holy City of Okhema, which serves as a sanctuary for the remaining population and allied visitors from across the cosmos.",
    features: [
      {
        title: "Okhema",
        text: "The Eternal Holy City, built with architecture reminiscent of ancient Greek designs but infused with cosmic technology. It serves as the last refuge for the people of Amphoreus.",
      },
      {
        title: "Titan Valleys",
        text: "Vast landscapes where the massive Titans roam and rest. These areas are charged with residual divine energy and often contain valuable resources and ancient ruins.",
      },
      {
        title: "Hall of Chrysos",
        text: "The central governance structure where the Chrysos Heirs make decisions about Amphoreus's future and maintain the delicate balance of power.",
      },
    ],
  },
};


document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const worldKey = button.closest('.world-card').dataset.world;
      const world = worldData[worldKey];

      if (world) {
        modalImage.src = world.image;
        modalTitle.textContent = world.title;
        modalSubtitle.textContent = world.subtitle;
        modalDescription.textContent = world.description;
        
        // Clear any existing features
        modalFeatures.innerHTML = '';
        
        // Add features to the modal
        if (world.features && world.features.length > 0) {
          const featuresHeading = document.createElement('h3');
          featuresHeading.textContent = 'Key Locations';
          modalFeatures.appendChild(featuresHeading);
          
          const featuresList = document.createElement('div');
          featuresList.className = 'features-list';
          
          world.features.forEach(feature => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            
            const featureTitle = document.createElement('h4');
            featureTitle.textContent = feature.title;
            
            const featureText = document.createElement('p');
            featureText.textContent = feature.text;
            
            featureItem.appendChild(featureTitle);
            featureItem.appendChild(featureText);
            featuresList.appendChild(featureItem);
          });
          
          modalFeatures.appendChild(featuresList);
        }
        
        modal.style.display = 'block';
      }
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});