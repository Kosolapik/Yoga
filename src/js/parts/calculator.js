function calculator() {
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
}

module.exports = calculator;