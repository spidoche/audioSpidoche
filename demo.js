/*
 * demo.js
 *
 * Version : 0.1
 * Author  : Spidoche
 *
 * audioSpidoche demo file
 * load and play sound demo
 *
 */

/* jshint -W117 */

// LOAD THE SOUNDS
var MySounds = new SpidocheAudio({
    sounds : {
        hello   : {src : 'sounds/hello.mp3'},
        bonjour : {src : 'sounds/bonjour.mp3'},
        anyeong : {src : 'sounds/annyeong.mp3'}
    }
});

// PLAY THE SOUNDS ON CLICK
window.addEventListener('load', function(){
    document.getElementById('hello_btn').onclick=function(){
        MySounds.playSound('hello');
    };
    document.getElementById('bonjour_btn').onclick=function(){
        MySounds.playSound('bonjour');
    };
    document.getElementById('annyeong').onclick=function(){
        MySounds.playSound('annyeong_btn');
    };
}, false);
