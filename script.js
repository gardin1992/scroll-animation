const elements = document.querySelectorAll('[data-anim]')
const rotateElements = document.querySelectorAll('[data-anim-rotate]')

const animationClass = 'animation'

function animationScroll() {
    const topPage = window.pageYOffset + (window.innerHeight*3/4)
    
    elements.forEach(element => {
        if (topPage > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })


    rotateElements.forEach(element => {
        if (topPage > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

if (elements.length) {
    window.addEventListener('scroll', function () {
        animationScroll()
    })
}

