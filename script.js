const yesBtn = document.getElementById('yes-button');
const noBtn = document.getElementById('no-button');

const question = document.querySelector('h1');
const gif = document.querySelector('img');

const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "COME ON!",
    "Think again!",
    "Please!",
    "You're breaking my heart 💔",
    "Did you misclick?",
    "I'll get you custard buns!",
    "Last chance!",
];

const noGifs = [
    "https://media1.tenor.com/m/fvGzV4DYYSsAAAAd/oh-no-oh-my-god.gif",    
    "https://media1.tenor.com/m/GBdIH5sL4XQAAAAd/the-rock-rock.gif",     
    "https://media.tenor.com/s2dv1UcKAPMAAAAj/milk-and-mocha-what.gif",     
    "https://media.tenor.com/gWSVeemopQQAAAAj/mocha-angry.gif",     
    "https://media1.tenor.com/m/1CYBX2Zd9ZQAAAAd/shaq-dont.gif",      
    "https://media.tenor.com/UQlhIUjLBaIAAAAj/%D8%A7%D8%AA%D9%88%D8%B3%D9%84-%D8%A7%D9%84%D9%8A%D9%83-%D8%A7%D8%B1%D8%AC%D9%88%D9%83.gif",      
    "https://media.tenor.com/XkHMf98ePsgAAAAj/scream-cry.gif",    
    "https://media.tenor.com/2iRUZ9MuNqoAAAAj/raised-eyebrows-emoji.gif",     
    "https://media1.tenor.com/m/F7WwrKXkFksAAAAd/food-hungry.gif",
    "https://media1.tenor.com/m/PoqSGokqu2QAAAAC/spongebob-squarepants-begging.gif"
    ];

let noClickCount = 0;

noBtn.addEventListener('click', function() {
    noClickCount++;
   
    noClickCount = noClickCount % 10;

    noBtn.textContent = noMessages[noClickCount];

    gif.src = noGifs[noClickCount];

    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 14) + 'px';
    
    let currentPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
    yesBtn.style.padding = (currentPadding + 7) + 'px';
});

yesBtn.addEventListener('click', function() {
    question.textContent = "Yay! I knew you'd say yes!";
    
    gif.src = "https://media.tenor.com/SLglGuVqz4oAAAAi/cat-jumping-catjump.gif";
    
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    document.getElementById('restaurant-section').style.display = 'block';

});