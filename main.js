const reklamaDisplay = document.querySelector('.reklamaDisplay')
const continer = document.querySelector('.container')
const btn1 = document.querySelector('.btn1')

setTimeout( activeDisplay, 3000)

function activeDisplay() {
    reklamaDisplay.classList.add('activeDisplay')
}

btn1.addEventListener('click',function(){
    reklamaDisplay.classList.add('noneActive')
})


setTimeout( x, 10000)

function x() {
    btn1.classList.add('activex')
}


const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const img5 = document.querySelector('.img5')
const img6 = document.querySelector('.img6')
const btn2 = document.getElementById('btn2')

btn2.addEventListener('click',function(){
    setTimeout(function(){
        img6.classList.add('img16')
        setTimeout(function(){
            img5.classList.add('img15')
            setTimeout(function(){
                img4.classList.add('img14')
                setTimeout(function(){
                    img3.classList.add('img13')
                    setTimeout(function(){
                        img2.classList.add('img12')
                        setTimeout(function(){
                            img1.classList.add('img11')
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})



const make1 = document.querySelector('.make1')
const make2 = document.querySelector('.make2')
const make3 = document.querySelector('.make3')
const make4 = document.querySelector('.make4')
const make5 = document.querySelector('.make5')
const make6 = document.querySelector('.make6')

make1.addEventListener('click',function(){
    img1.classList.add('img11')
},1000)
make2.addEventListener('click',function(){
    img2.classList.add('img12')
},1000)
make3.addEventListener('click',function(){
    img3.classList.add('img13')
},1000)
make4.addEventListener('click',function(){
    img4.classList.add('img14')
},1000)
make5.addEventListener('click',function(){
    img5.classList.add('img15')
},1000)
make6.addEventListener('click',function(){
    img6.classList.add('img16')
},1000)




