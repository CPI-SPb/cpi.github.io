const Circ = document.querySelector('.circle');

Circ.addEventListener('click', main);

function main(e) {
    setColor();
    setSize();
    setPos();
}

let color;
let newChar;

let size;

let x;
let y;

const colorChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

function onload() {

}

function setColor() {
    color = '#';
    newChar = '';

    for (let i = 0; i < 6; i++) {
        newChar = colorChars[Math.floor(Math.random() * colorChars.length)];
        color += newChar;
    }

    Circ.style.backgroundColor = color;
}

function setSize() {
    size;

    if (window.innerWidth < window.innerHeight) {
        size = Math.random() * (window.innerWidth / 2 - 50) + 50;
    } else {
        size = Math.random() * (window.innerHeight / 2 - 50) + 50;
    }

    // if (size < 50) {
    //     size = 50;
    // }

    Circ.style.width = size + 'px';
    Circ.style.height = size + 'px';
}

function setPos() {
    x = Math.floor(Math.random() * (window.innerWidth - size));
    y = Math.floor(Math.random() * (window.innerHeight - size));

    Circ.style.left = x + 'px';
    Circ.style.top = y + 'px';
}