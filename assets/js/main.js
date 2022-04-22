// the user clicks (or taps) the hamburger button, the mobile menu appears.
//  The index page
const menuBtn = document.getElementById('menu-btn');

const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-btn');
const body = document.getElementById('body');
const menuLi = document.querySelectorAll('.menu-link');
const introCard = document.getElementById('intro-card');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  body.style.overflow = 'hidden';
  introCard.style.visibility = 'hidden';
  menuBtn.style.visibility = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  body.style.overflow = 'visible';
  introCard.style.visibility = 'visible';
  menuBtn.style.visibility = 'visible';
});

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    body.style.overflow = 'visible';
    introCard.style.visibility = 'visible';
    menuBtn.style.visibility = 'visible';
  });
}

// creat the array of speackers's objects:
const speackersArray = [
  {
    image: './img/speackers/edward-snowden-2022.jpg',
    name: 'Edward Snowden',
    occupation: 'Whistleblower & Cybersecurity Expert,',
    description: 'The author of the new memoir, Permanent Record, former CIA officer, and National Security Agency(NSA) consultant, Herisked everything to expose the U.S.government\'s system',
  },
  {
    image: './img/speackers/Sandra-Ro.jpg',
    name: 'Sandra Ro',
    occupation: 'CEO, Global Blockchain Business Council,',
    description: 'Sandra is a proponent for "human-centric tech". From investment banking to blockchain technology, she is an early investor of crypto and digital assets.',
  },
  {
    image: './img/speackers/Mars-Geuze.jpg',
    name: 'Mars Geuze',
    occupation: 'Co-Founder, Hardt Hyperloop,',
    description: 'Mars Geuze is Chief Commercial Officer at Hardt Hyperloop, the European hyperloop technology provider. Within Hardt, Mars is responsible for all market development activities,',
  },
  {
    image: './img/speackers/Devlukia.jpg',
    name: 'Nilixa Devlukia',
    occupation: 'Founder, CEO, Payments Solved',
    description: 'TNilixa is the CEO and founder of Payments Solved a regulatory consultancy advising on the regulatory framework for open banking, digital assets and payments.',
  },
  {
    image: './img/speackers/Kit.jpg',
    name: 'Kit Colbert',
    occupation: 'Chief Technology Officer, VMWare',
    description: 'As CTO for VMware, Kit Colbert shapes the technical vision for the company, and the transformation to a cloud and subscription-centric R and D organization.',
  },
  {
    image: './img/speackers/Radhika.png',
    name: 'Radhika Krishnan',
    occupation: 'Chief Product Officer, Hitachi Vantara',
    description: 'As Chief Product Officer, Radhika Krishnan leads product development, product management, and product marketing functions for Hitachi Vantara',
  },
];

// // Render the speackers cards dynamically
const speackersList = document.getElementById('speackers-list');

function displaySpeacker(speackerId) {
  speackersList.innerHTML += `
  <li>
  <div class="card d-flex flex-row">
    <img
      class="speacker-img align-self-start"
      src="${speackersArray[speackerId].image}"
      alt="${speackersArray[speackerId].name} image"
    />
    <div class="card-body">
      <h4 class="card-title">${speackersArray[speackerId].name}</h4>
      <p class="card-text primary-color">
      ${speackersArray[speackerId].occupation}
      </p>
      <div class="short-grey-line"></div>
      <p class="card-text secondary-color">
      ${speackersArray[speackerId].description}
      </p>
    </div>
  </div>
</li>
  `;
}

for (let i = 0; i < speackersArray.length; i++) {
  displaySpeacker(i);
}