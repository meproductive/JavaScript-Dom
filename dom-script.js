// header tag
const header = document.createElement('header');
header.id = 'header';
header.className = 'd-flex';
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
for (let i = 0; i < 4; i++){
        // li tag
        const li = document.createElement('li');
        li.id = 'li-item';
        ul.appendChild(li);
        // a tag
        const a = document.createElement('a');
        a.id = 'a-item';
        li.innerText = 'HOME';
        li.appendChild(a);

}


console.log('hello fucking world!');
