import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './../node_modules/creative/css/creative.min.css';
import './../node_modules/jquery.easing/jquery.easing.min.js';
import './../node_modules/creative/vendor/scrollreveal/scrollreveal.min.js';
import './../node_modules/creative/vendor/magnific-popup/jquery.magnific-popup.min.js';

Template.body.onRendered(function onRendered() {
    import './../node_modules/creative/js/creative.min.js';
});
