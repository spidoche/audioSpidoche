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
var MySound = new SpidocheAudio({
    sounds : {
        chien  : {src : 'sounds/chien.mp3'},
        cochon : {src : 'sounds/cochon.mp3'}
    }
});


// PLAY THE SOUNDS ON CLICK
window.addEventListener('load', function(){
    document.getElementById('chien').onclick=function(){
        MySound.playSound('chien');
    };
    document.getElementById('cochon').onclick=function(){
        MySound.playSound('cochon');
    };
}, false);
