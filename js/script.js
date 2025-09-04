// import images as relative image path won't work with vite/vercel.

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const categoriesLeft1 = [
    'Painting',
    'Drawing',
    'Sculpture',
    'Architecture'
];

const categoriesRight = [
    "Music",
    "Theater",
    "Cinema"
];

const categoriesLeft2 = [
    "Written Literature",
    "Spoken Literature"
];

//login popup javascript

const loginButton = document.getElementById('loginButton');
const login = document.getElementById('login');
const closeBtn = document.getElementById('closeBtn');
const closeBtnRegister = document.getElementById('closeBtnRegister');
const register = document.getElementById('register');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Open the container and show login box
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container').style.display = 'none'; // Ensure the container is hidden initially
});

// Open the login box
login.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'flex';
});

// Show Login Form
showLogin.addEventListener('click', () => {
    register.style.display = 'none';
    loginButton.style.display = 'flex';
});

// Show Register Form
showRegister.addEventListener('click', () => {
    loginButton.style.display = 'none';
    register.style.display = 'flex';
});

// Close the login box
closeBtn.addEventListener('click', () => {
     document.querySelector('.container').style.display = 'none';
});

// Close the register box
closeBtnRegister.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
});


//art types javascript

const cards = {
    all: [
        { imgSrc: "../assets/love-mail.png", alt: "love mail", title: "Arts & Crafts" },
        { imgSrc: "../assets/fairytale-book.jpg", alt: "fairytale", title: "Storytelling", active: true },
        { imgSrc: "../assets/notebook.png", alt: "notebook", title: "Writing" },
        { imgSrc: "../assets/oil-painting.png", alt: "oil painting", title: "Oil Painting" },
        { imgSrc: "../assets/watercolor-painting.png", alt: "watercolor painting", title: "Watercolor Painting" },
        { imgSrc: "../assets/arcylic-painting.png", alt: "arcylic painting", title: "Arcylic Painting" },
        { imgSrc: "../assets/chalk-painting.png", alt: "chalk painting", title: "Chalk Painting" },
        { imgSrc: "../assets/pencil-painting.png", alt: "pencil painting", title: "Pencil Painting" },
        { imgSrc: "../assets/dye-painting.png", alt: "dye painting", title: "Dye Painting" }
    ],
    painting: [
        { imgSrc: "../assets/oil-painting.png", alt: "oil painting", title: "Oil Painting" },
        { imgSrc: "../assets/watercolor-painting.png", alt: "watercolor painting", title: "Watercolor Painting" },
        { imgSrc: "../assets/arcylic-painting.png", alt: "arcylic painting", title: "Arcylic Painting" },
        { imgSrc: "../assets/chalk-painting.png", alt: "chalk painting", title: "Chalk Painting" },
        { imgSrc: "../assets/pencil-painting.png", alt: "pencil painting", title: "Pencil Painting" },
        { imgSrc: "../assets/dye-painting.png", alt: "dye painting", title: "Dye Painting" }
    ],
    drawing: [
        { imgSrc: "../assets/sketch-pencil.jpg", alt: "pencil sketch", title: "Pencil Sketch" },
        { imgSrc: "../assets/sketch-charcoal.jpg", alt: "charcoal art", title: "Charcoal Art" }
    ],
    sculpture: [
        { imgSrc: "../assets/sculpture-marble.jpg", alt: "marble sculpture", title: "Marble Sculpture" },
        { imgSrc: "../assets/sculpture-clay.jpg", alt: "clay model", title: "Clay Model" }
    ],
    architecture: [
        { imgSrc: "../assets/blueprint.jpg", alt: "blueprint", title: "Blueprint Design" }
    ],
    music: [
        { imgSrc: "../assets/aural-music.png", alt: "aural music", title: "Aural Music" }
    ],
    theater: [
        { imgSrc: "../assets/masks.png", alt: "theater masks", title: "Theater Performance" }
    ],
    cinema: [
        { imgSrc: "../assets/camera.png", alt: "camera", title: "Cinema Art" }
    ],
    literature: [
        { imgSrc: "../assets/book-tea.png", alt: "literature", title: "Literature Study" }
    ],
    others: [
        {imgSrc: "../assets/victorian pattern.png", alt: "anything you love", title: "Anything That Fits Art's Description" }
    ]
};


const filterButtons = document.querySelectorAll('.art-types__filter-btn');
const artcard = document.querySelectorAll('.art-types__card');
const catalogue = document.querySelector('.art-types__catalogue');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        document.querySelector('.art-types__filter-btn.active').classList.remove('active');
        button.classList.add('active'); // Add the active class to the clicked button

        // Get the category from the clicked button
        const category = button.getAttribute('data-category');

        // Show/hide articles based on category
        artcard.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function highlightActiveCard() {
    const catalogueRect = catalogue.getBoundingClientRect(); // Get container dimensions

    artcard.forEach(card => {
        const cardRect = card.getBoundingClientRect(); // Get card dimensions

        // Check if card is approximately in the center
        if (cardRect.left >= catalogueRect.left + (catalogueRect.width / 3) &&
            cardRect.right <= catalogueRect.right - (catalogueRect.width / 3)) {
            card.classList.add(' active-card');
        } else {
            card.classList.remove(' active-card');
        }
    });
}

// Display all cards initially
displayCards('all');

// Add event listener for scroll
catalogue.addEventListener('scroll', highlightActiveCard);

// Highlight the active card on page load
highlightActiveCard();