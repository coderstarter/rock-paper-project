const titleDiv = document.getElementById('title');
console.log(titleDiv)

console.log('before : ', titleDiv.innerHTML)
titleDiv.innerHTML = 'Changing the content';

let message = 'Good bye my lover!'
titleDiv.innerText = message;

console.log('after : ', titleDiv.innerHTML);
titleDiv.innerHTML = `<p>${message}</p>`
titleDiv.style.color = 'wheat'
console.log(titleDiv.innerHTML)

const redDiv = document.getElementById('red');
const yellowDiv = document.getElementById('yellow');
const greenDiv = document.getElementById('green');

console.log(redDiv)
console.log(yellowDiv)
console.log(greenDiv)
// modern way
redDiv.onclick = () => {
    console.log('You have clicked on red section')
}

yellowDiv.onclick = () => {
    console.log('You have clicked on yellow section')
}

greenDiv.onclick = () => {
    console.log('You have clicked on green section')
}
// old school way
// redDiv.onclick = function () {
//     console.log('You are using old function')
// }
// class="colorSquare"
const squares = document.querySelectorAll('.colorSquare')
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)


squares.forEach(square => console.log(square.value))
// to overcome lines from 23 to 33 use below code

const counts = { 'red': 0, 'yellow': 0, 'green': 0 };
squares.forEach(square => {
    // to print the values on clicking
    // square.onclick = () => console.log(square.value)
    square.onclick = () => {
        counts[square.value] += 1;
        square.innerText = counts[square.value];
    }
})
