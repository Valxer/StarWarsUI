import './style.scss'

//useful variables
let currentSlide = 1
const nextBtn = document.querySelector(".right-arrow")
const prevBtn = document.querySelector(".left-arrow")

//Timeline Functions
function timelinePlus(currentSlide) {
    document.querySelector(`.li-${currentSlide}`).classList.add('active')
}

function timelineMinus(currentSlide) {
    document.querySelector(`.li-${currentSlide + 1}`).classList.remove('active')
}

// Poster Functions
function posterPlus(currentSlide) {
    document.querySelector('.poster-wrapper').classList.replace(`active${currentSlide - 1}`, `active${currentSlide}`)
}

function posterMinus(currentSlide) {
    document.querySelector('.poster-wrapper').classList.replace(`active${currentSlide + 1}`, `active${currentSlide}`)
}

//description Functions
function descriptionPlus(currentSlide) {
    document.querySelector(`.info-${currentSlide - 1}`).classList.replace('active','left')
    document.querySelector(`.info-${currentSlide}`).classList.replace('right','active')
}

function descriptionMinus(currentSlide) {
    document.querySelector(`.info-${currentSlide + 1}`).classList.replace('active','right')
    document.querySelector(`.info-${currentSlide}`).classList.replace('left','active')
}

//date Functions
function datePlus(currentSlide) {
    const currentDate = document.querySelectorAll(`.nb${currentSlide}`)
    const prevDate = document.querySelectorAll(`.nb${currentSlide - 1}`)

    for (let i = 0; i < prevDate.length; i++){
        prevDate[i].classList.remove('active')
    }
    for (let i = 0; i < currentDate.length; i++){
        currentDate[i].classList.add('active')
    }
    
}

function dateMinus(currentSlide) {
    const currentDate = document.querySelectorAll(`.nb${currentSlide}`)
    const prevDate = document.querySelectorAll(`.nb${currentSlide + 1}`)

    for (let i = 0; i < prevDate.length; i++){
        prevDate[i].classList.remove('active')
    }
    for (let i = 0; i < currentDate.length; i++){
        currentDate[i].classList.add('active')
    }
}


// Event listener

nextBtn.addEventListener("click", () => {
    currentSlide ++
    prevBtn.classList.add('active')
    if (currentSlide == 3) {
        nextBtn.classList.remove('active')
    }
    timelinePlus(currentSlide)
    posterPlus(currentSlide)
    descriptionPlus(currentSlide)
    datePlus(currentSlide)
})

prevBtn.addEventListener("click", () => {
    currentSlide--
    nextBtn.classList.add('active')
    if(currentSlide == 1) {
        prevBtn.classList.remove('active')
    }
    timelineMinus(currentSlide)
    posterMinus(currentSlide)
    descriptionMinus(currentSlide)
    dateMinus(currentSlide)
})