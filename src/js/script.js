window.addEventListener('DOMContentLoaded', function() {

    'use script';

    let tabContent = document.querySelectorAll('.info-tabcontent'),
        infoTab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header');
       

    function hidenTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hidenTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    infoHeader.addEventListener('click', function(event) {
        console.log(event);
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < infoTab.length; i++) {
                if ( event.target == infoTab[i]) {
                    hidenTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2022-05-13';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };
         
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }    
        }    
    }

    setClock('timer', deadLine);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabMore = document.querySelectorAll('.description-btn');

        console.log(tabMore);

    for (i = 0; i < tabMore.length; i++) {
        tabMore[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }); 
    };    

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // //  Сlass

    // class Options {
    //     constructor(height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }

    //     createDiv() {
    //         let elem = document.createElement('div');
    //         document.body.appendChild(elem);
    //         let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    //         elem.style.cssText = param;
    //     }
    // }

    // const item = new Options(300, 350, 'green', 14, 'center');

    // item.createDiv();

   // Form

   let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        formBattom = document.querySelector('#form');
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function(resolve, reject) {

                    let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status <300) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    }

                    request.send(data);
                });
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    };

    sendForm(form);
    sendForm(formBattom);

    // function sendForm(elem) {
    //     elem.addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         elem.appendChild(statusMessage);

    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //         let formData = new FormData(elem);

    //         request.send(formData);

    //         request.addEventListener('readystatechange', function() {
    //             if (request.readyState <4) {
    //                 statusMessage.innerHTML = message.loading;
    //             } else if (request.readyState === 4) {
    //                 if (request.status == 200 && request.status < 300) {
    //                     statusMessage.innerHTML = message.success;
    //                 }
    //             } else {
    //                 statusMessage.innerHTML = message.failure;
    //             }
    //         });

    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = '';
    //         }
    //     });
    // };

    



    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form);

    //     let obj = {};
    //     formData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });

    //     let json = JSON.stringify(obj);

    //         request.send(json);

    //         request.addEventListener('readystatechange', function() {
    //             if (request.readyState < 4) {
    //                 statusMessage.innerHTML = message.loading;
    //             } else if (request.readyState === 4 && request.status == 200) {
    //                 statusMessage.innerHTML = message.success;
    //             } else {
    //                 statusMessage.innerHTML = message.failure;
    //             }
    //         });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // });

    // let form2 = document.querySelector('#form'),
    //     input2 = form2.getElementsByTagName('input');

    // form2.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form2.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form2);

    //     let obj = {};
    //     formData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });

    //     let json = JSON.stringify(obj);

    //         request.send(json);

    //         request.addEventListener('readystatechange', function() {
    //             if (request.readyState < 4) {
    //                 statusMessage.innerHTML = message.loading;
    //             } else if (request.readyState === 4 && request.status == 200) {
    //                 statusMessage.innerHTML = message.success;
    //             } else {
    //                 statusMessage.innerHTML = message.failure;
    //             }
    //         });

    //     for (let i = 0; i < input2.length; i++) {
    //         input2[i].value = '';
    //     }    
    // });


    // Slider

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


    // Calculator

    let inputMan = document.querySelectorAll('.counter-block-input')[0],
        inputDay = document.querySelectorAll('.counter-block-input')[1],
        selectPlace = document.querySelector('#select'),
        total = document.querySelector('#total'),
        
        totalSum = 0,
        totalMan = 0,
        totalDay = 0;

    total.innerHTML = 0;

    inputMan.addEventListener('input', function() {
        totalMan = +this.value;
        totalSum = totalDay * totalMan * 5000;

        if (inputDay.value == '') {
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalSum;
        }
    });

    inputDay.addEventListener('input', function() {
        totalDay = +this.value;
        totalSum = totalDay * totalMan * 5000;
        
        if (inputMan.value == '') {
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalSum;
        }
    });

    selectPlace.addEventListener('change', function() {
        if (inputMan.value == '' || inputDay == '') {
            total.innerHTML = 0;
        } else {
            let a = totalSum;
            total.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});

