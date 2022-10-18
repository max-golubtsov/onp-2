document.addEventListener('DOMContentLoaded', function () {
    const sliderImage = document.querySelectorAll('.slider__image');
    const sliderScroll = document.querySelector('.slider__scroll');
    const arrowNext = document.querySelector('#right-arrow');
    const arrowPrev = document.querySelector('#left-arrow');

    let count = 0;
    let width;

    function init() {
        width = document.querySelector('.slider').offsetWidth;
        sliderScroll.style.width = width * sliderImage.length + 'px';
        sliderImage.forEach(function (item) {
            item.style.width = width + 'px';
        });

    }

    window.addEventListener('resize', init)
    init();

    function sliderRoll() {
        sliderScroll.style.transform = 'translate(-' + count * width + 'px)';
    }

    arrowNext.addEventListener('click', function () {
        count++;
        if (count >= sliderImage.length) {
            count = [sliderImage.length - 1]
        }
        sliderRoll();
    })

    arrowPrev.addEventListener('click', function () {
        count--;
        if (count < 0) {
            count = 0
        }
        sliderRoll();
    })
});
