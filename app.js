// app.js

// img 1 handle
const image1 = document.querySelector('#image1')
const imageInfo1 = document.querySelector('#imageinfo1')

// img 2 handle
const image2 = document.querySelector('#image2')
const imageInfo2 = document.querySelector('#imageinfo2')

// list for both
const pics = ['100-400x400.jpg', '101-400x400.jpg', '401-400x400.jpg', '501-400x400.jpg', '830-400x400.jpg']

// img 1 let
let current1 = '101-400x400.jpg'
let timer1

// img 2 let
let current2 = '401-400x400.jpg'
let timer2

// start switcher 1
function startSwitcher1() {
    let position1 = Math.floor(Math.random() * pics.length)
    while (current1 == position1) {
        position1 = Math.floor(Math.random() * pics.length)
    }
    current1 = position1
    image1.setAttribute('src', 'images/' + pics[position1])
    imageInfo1.innerText = pics[position1]
}

// start switcher 2
function startSwitcher2() {
    let position2 = Math.floor(Math.random() * pics.length)
    while (current2 == position2) {
        position2 = Math.floor(Math.random() * pics.length)
    }
    current2 = position2
    image2.setAttribute('src', 'images/' + pics[position2])
    imageInfo2.innerText = pics[position2]
}

// stop switcher 1
function stopSwitcher1() {
    clearInterval(timer1)
    console.log('The first animation has been stopped')
}

// stop switcher 2
function stopSwitcher2() {
    clearInterval(timer2)
    console.log('The second animation has been stopped')
}

// start 1
function start1() {
    timer1 = setInterval(startSwitcher1, 3000)
    console.log('The first animation has been started')
}

// start 2
function start2() {
    timer2 = setInterval(startSwitcher2, 3000)
    console.log('The second animation has been started')
}

image1.addEventListener('mouseover', stopSwitcher1)
image1.addEventListener('mouseout', start1)

image2.addEventListener('click', stopSwitcher2)
image2.addEventListener('dblclick', start2)


start1()
start2()
