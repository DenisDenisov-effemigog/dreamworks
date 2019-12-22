const sliderList = document.querySelector(".slider__list")
const prevBtn = document.querySelector(".slider_prev__btn")
const nextBtn = document.querySelector(".slider_next__btn")
const sliderWidth = sliderList.offsetWidth;
const sliderItem = sliderList.children;
let step = 0;

console.log(sliderItem);


console.log('width slider' + sliderWidth)


prevBtn.addEventListener("click", function(e) {
    console.log('p');
    step -= sliderWidth
    console.log(step)

    sliderList.style.transform = 'translate(-' + step + 'px)'

})

nextBtn.addEventListener("click", function(e) {
    console.log('n')
    step += sliderWidth
    console.log(step)

    sliderList.style.transform = 'translate(-' + step + 'px)'

})