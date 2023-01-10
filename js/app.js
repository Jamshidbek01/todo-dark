let circle = document.querySelector('.circle')
let list = document.querySelector('.todo-list')
let addlist = document.getElementsByTagName("li");
let timetag = document.getElementsByTagName('p')
let time = document.querySelector('.time')
let todos = JSON.parse(localStorage.getItem('todo-list'))
? JSON.parse(localStorage.getItem('todo-list'))
: []
create(todos)
function setTodos() {
    localStorage.setItem('todo-list', JSON.stringify(todos))
}
circle.addEventListener('click', function (e) {
    e.preventDefault()
    let input = document.querySelector('.input').value
    if (input === '') {
        document.querySelector('p').innerHTML = 'Text kiriting!!!'
        document.querySelector('p').style = `
        animation: shake 150ms 2 linear;
        animation-iteration-count: infinite;
        `
    } else {
        document.querySelector('p').innerHTML = ''
        add(input)
        circle.classList.add('checked')
        linum++
        console.log(linum);
        setTimeout(() => {
            circle.classList.remove('checked')
        }, 1000);
    }
    document.querySelector('input').value = ''

})


function create(todos) {
    todos.forEach((item) => {
        let li = document.createElement('li')
        li.innerHTML = `
        <span class="complete"><img src="./image/tick.svg"></span>
        <p>${item.text}</p>
        <img src="image/close.svg" class="close">
        `
        document.querySelector('.todo-list').appendChild(li);
    })
}

function add(input) {
    todos.push({ text: input })
    let li = document.createElement('li')
    li.innerHTML = `
        <span class="complete"><img src="./image/tick.svg"></span>
        <p>${input}</p>
        <img src="image/close.svg" class="close">
        `
    document.querySelector('.todo-list').appendChild(li);
    setTodos()
}
setInterval(() => {
    let liEl = document.querySelectorAll('li').length
    let itemNum = document.querySelector('.item-num')
    itemNum.innerHTML = `${liEl} items left`
}, 100);

let complete = document.querySelectorAll('.complete')
for (let i = 0; i < complete.length; i++) {
    complete[i].onclick = function () {
        this.parentElement.classList.toggle('checked')
    }
}
let mode = document.querySelector('.mode')
mode.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark')
    if (document.querySelector('body').classList.contains('dark')) {
        mode.src = 'image/sun.svg'
        document.querySelector('form').style = `background-image: url(../image/bg-dark.png);`
        document.querySelector('.lg').style = `background: linear-gradient(135deg, rgba(56, 16, 189, 0.63) 0%, rgba(164, 35, 149, 0.63) 100%);`
    } else {
        mode.src = 'image/moon.svg'
        document.querySelector('form').style = `background-image: url(../image/bg.png);`
        document.querySelector('.lg').style = `background: linear-gradient(225deg, rgba(85, 150, 255, 0.603) 0%, rgba(172, 45, 235, 0.603) 100%);`
    }

})
let close = document.querySelectorAll('.close')
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        alert('Hozircha o`chirishning imkoni yo`q!!!')
    }
}