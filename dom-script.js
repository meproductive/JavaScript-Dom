// header tag
const header = document.createElement('header');
header.id = 'header';
header.className = 'flex-items-center';
document.body.appendChild(header);
// h1 tag
const headerOne = document.createElement('h1');
headerOne.id = 'title';
headerOne.innerHTML = 'TITLE';
document.getElementById('header').appendChild(headerOne);
// nav tag
const navigation = document.createElement('nav');
navigation.id = 'navigation';
document.getElementById('header').appendChild(navigation);
// ul tag
const ul = document.createElement('ul');
ul.id = 'navMenu';
ul.className = 'd-flex';
document.getElementById('navigation').appendChild(ul);

// for loop for li items and a items
const MenuItems = ["HOME", "ABOUT ME", "BLOG", "CONTACT"];
for (let i = 0; i < MenuItems.length; i++) {
        // li tag
        const li = document.createElement('li');
        li.id = 'li-item';
        ul.appendChild(li);
    
        // a tag
        const a = document.createElement('a');
        a.id = 'a-item';
        a.innerText = MenuItems[i]; // Assign the current menu item to the a tag
        a.setAttribute("href","#");
        li.appendChild(a);
}

// i tag
const iBtn = document.createElement('i');
iBtn.id = 'menu-btn';
iBtn.className = 'flex-items-center';
header.appendChild(iBtn);

//span tag
const spanBtn = document.createElement('span');
spanBtn.id = 'hamburger-btn';
iBtn.appendChild(spanBtn);

    // Hamburger menu open/close function
    const hamburgerMenu = () => {
        navigation.classList.toggle('active');
        iBtn.classList.toggle('active');
    };
    // Hamburger menu button eventlistener
    iBtn.addEventListener('click', hamburgerMenu);

// main tag
const main = document.createElement('main');
main.id = 'main';
document.body.appendChild(main);

// section tag
const section = document.createElement('section');
section.id = 'section';
section.className = 'd-flex'
document.getElementById('main').appendChild(section);

// article tag
const article = document.createElement('article');
article.id = 'article';
document.getElementById('section').appendChild(article);

// figure tag 
const figure = document.createElement('figure');
figure.id = 'figure';
document.getElementById('section').appendChild(figure);

// img tag

const img = document.createElement('img');
img.id = 'img';
img.setAttribute("src", "#");
document.getElementById('figure').appendChild(img);