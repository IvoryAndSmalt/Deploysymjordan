
import '../css/app.scss';

// any CSS you import will output into a single css file (app.css in this case)
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('fontawesome');
require('bootstrap');
require('animate.css');
require('select2');
require('hamburger');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log("salut");

var mymap = L.map('map00').setView([51.505, -0.09], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');



(function ($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})($);

fetch('/map', {
    method: 'GET', // or 'PUT'
    cors: 'no-cors',
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    }
    })
    .then((responseFesti) => {
    return responseFesti.json();
    })
    .then((myJsonFesti) => {
    let myNewJsonFesti = JSON.parse(myJsonFesti);
        console.log(myNewJsonFesti)});


///////////////////     LIEN QUI MARCHE RECUP JSON CARIBOU
//////////////////      https://www.movebank.org/movebank/service/public/json?study_id=216040785&individual_id=BP_car022&////////////////////     individual_id=BP_car023&individual_id=BP_car043&max_events_per_individual=5&sensor_type=gps