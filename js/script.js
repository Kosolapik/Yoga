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

});

