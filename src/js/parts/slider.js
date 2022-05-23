function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active'); 
        };

        function arrowSlides(n) {
            showSlides(slideIndex += n);
        }

        prev.addEventListener('click', function() {
            arrowSlides(-1);
        });

        next.addEventListener('click', function() {
            arrowSlides(1);
        });

        function currentSlide(n) {
            showSlides(slideIndex = n);
        };

        dotsWrap.addEventListener('click', function (event) {
            for (i = 0; i <= dots.length; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                    currentSlide(i);
                }
            }
        });
}

module.exports = slider;