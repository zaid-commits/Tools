
// Tool data
const tools = [
    { 
        name: "Impicify", 
        description: "Socialise your github Repo Online now with Impicify.",
        icon: "fas fa-globe",
        creator:"-Zaid Rakhange",
        creatorLink:"https://zaid.impic.tech ",
        link:"https://socialify.impic.tech"
    },

    { 
        name: "Civify",
        description: "Get the valuable insights of your github profiles just in 1 click.",
        icon: "fas fa-file",
        creator:"Zaid Rakhange", 
        creatorLink:"https://zaid.impic.tech",
        link:"https://cvimpic.vercel.app"
    },

    { 
        name: "Expense Tracker",
        description: "Track Where you spent your most of money in.", 
        icon: "fas fa-money-check",
        creator:"Zaid Rakhange",
        creatorLink:"https://zaid.impic.tech",
        link:"https://moneyy.vercel.app"
        
    },
];

//  tool cards
const toolsGrid = document.getElementById('toolsGrid');
tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card p-6 flex flex-col justify-between';
    card.innerHTML = `
        <div>
            <i class="${tool.icon} tool-icon mb-4 block"></i>
            <h3 class="text-xl font-semibold mb-2 text-white">${tool.name}</h3>
            <p class="text-gray-400 mb-4">${tool.description}</p>
        </div>
        <a href=${tool.link} class="btn-primary inline-block text-center py-2 px-4 rounded-md font-medium hover:opacity-90 transition duration-300">Learn More</a>
        <a href="${tool.creatorLink}" class="text-gray-400 text-right py-2 px-4 transition duration-300" target="_blank">${tool.creator}</a>
    `;
    toolsGrid.appendChild(card);
});



// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-16');
    nav.classList.toggle('left-0');
    nav.classList.toggle('right-0');
    nav.classList.toggle('bg-gray-900');
    nav.classList.toggle('p-4');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission (placeholder)
const form = document.querySelector('.newsletter-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    form.reset();
});
