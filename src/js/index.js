
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';

window.addEventListener('DOMContentLoaded', function() {

    'use script';

    let calculator = require('./parts/calculator.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js');

    calculator();
    form();
    modal();
    slider();
    tabs();
    timer();
});