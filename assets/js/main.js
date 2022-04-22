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
    image: '../../img/speackers/edward-snowden-2022.jpg',
    name: 'Edward Snowden',
    occupation: 'Whistleblower & Cybersecurity Expert,',
    description: 'The author of the new memoir, Permanent Record, former CIA officer, and National Security Agency(NSA) consultant, Herisked everything to expose the U.S.government\'s system',
  },
  {
    image: '../../img/speackers/Sandra-Ro.jpg',
    name: 'Sandra Ro',
    occupation: 'CEO, Global Blockchain Business Council,',
    description: 'Sandra is a proponent for "human-centric tech". From investment banking to blockchain technology, she is an early investor of crypto and digital assets.',
  },
  {
    image: '../../img/speackers/Mars-Gueze.jpg',
    name: 'Mars Geuze',
    occupation: 'Co-Founder, Hardt Hyperloop,',
    description: 'Mars Geuze is Chief Commercial Officer at Hardt Hyperloop, the European hyperloop technology provider. Within Hardt, Mars is responsible for all market development activities,',
  },
  {
    image: 'img/speackers/Devlukia.jpg',
    name: 'Nilixa Devlukia',
    occupation: 'Founder, CEO, Payments Solved',
    description: 'TNilixa is the CEO and founder of Payments Solved a regulatory consultancy advising on the regulatory framework for open banking, digital assets and payments.',
  },
  {
    image: 'img/speackers/Kit.jpg',
    name: 'Kit Colbert',
    occupation: 'Chief Technology Officer, VMWare',
    description: 'As CTO for VMware, Kit Colbert shapes the technical vision for the company, and the transformation to a cloud and subscription-centric R and D organization.',
  },
  {
    image: 'img/speackers/Radhika.jpg',
    name: 'Radhika Krishnan',
    occupation: 'Chief Product Officer, Hitachi Vantara',
    description: 'As Chief Product Officer, Radhika Krishnan leads product development, product management, and product marketing functions for Hitachi Vantara',
  },
];

// // Render the projects cards dynamically
// const projectsCards = document.getElementById('projects-card');

// function displayProject(projectId) {
//   projectsCards.innerHTML += `
//     <div class="project-placeholder">
//     <img src="${projectsData[projectId].image}" alt="my ${projectId} project image" />
//     <div class="properties">
//       <h3 class="project-title .dark-blue">
//         ${projectsData[projectId].title}
//       </h3>
//       <ul class="flex-div tags">
//         <li><a href="#">${projectsData[projectId].technologies[0]}</a></li>
//         <li><a href="#">${projectsData[projectId].technologies[1]}</a></li>
//         <li><a href="#">${projectsData[projectId].technologies[2]}</a></li>
//         <li><a href="#">${projectsData[projectId].technologies[3]}</a></li>
//       </ul>
//       <button type="button" class="see-demo-btn">See Project</button>
//     </div>
//     </div>
//   `;
// }

// for (let i = 0; i < projectsData.length; i++) {
//   displayProject(i);
// }