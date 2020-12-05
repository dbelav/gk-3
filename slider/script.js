let left = document.querySelector('.left')
let right = document.querySelector('.right')
let slide = Array.from(document.querySelectorAll('.slide'))
let index = 0
let sliderLength = slide.length

left.addEventListener('click', () => {
    if (index === 0) {
        index = sliderLength - 1
        slide.forEach(e => e.style.transform = `translate(-${index*700}px)`)
    } else {
        index--
        slide.forEach(e => e.style.transform = `translate(-${index*700}px)`)
    }

})

right.addEventListener('click', () => {
    if (index === sliderLength - 1) {
        index = 0
        slide.forEach(e => e.style.transform = 'translate(0)')
    } else {
        index++
        slide.forEach(e => e.style.transform = `translate(-${index*700}px)`)
    }
})