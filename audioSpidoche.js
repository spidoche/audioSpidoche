/*
 * audioSpidoche
 *
 * Version : 0.1
 * Author  : Spidoche
 *
 * Simple load and play webaudio plugin
 * Based on Nicola Hibbert script (http://kodogames.com/web-audio-api-tutorial/)
 * This work on the web and phonegap
 * If you need more options, first check if Ion.sound plugin fit your needs : http://ionden.com/a/plugins/ion.sound/en.html (not work on phonegap)
 *
 */

/* jshint -W117 */

// CREATE SPIDOCHEAUDIO OBJECT
function SpidocheAudio(settings){

    "use strict";

    // Stop the script if Audio api not support
    if (typeof Audio !== "function" && typeof Audio !== "object") {
        // console.log("HTML5 Audio is not supported in this browser");
        return;
    }

    // Set AudioContext
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();

    // settings
    this.settings = settings || {};
    this.sounds = this.settings.sounds || {};
    this.callback = this.settings.callback || function() {};

    // call the init
    this.init();

}

// EXTEND USING PROTOTYPE (prototype is good for performance if object is create multi time)
SpidocheAudio.prototype = {

    init : function(){
        this.loadSounds(this.sounds);
    },

    loadSoundObj : function(sounds) {

        var _this = this;
        var request = new XMLHttpRequest();

        request.open('GET', sounds.src, true);
        request.responseType = 'arraybuffer';

        request.onload = function() {
          _this.context.decodeAudioData(request.response, function(buffer) {
              sounds.buffer = buffer;
          }, function() {
              // console.log( 'Error loading :' + sounds.src);
          });
        };

        request.send();

    },

    loadSounds : function(obj) {

        var i;
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                // load the sound
                this.loadSoundObj(obj[i]);
            }
        }

    },

    playSound : function(sound,callback) {

        var source = this.context.createBufferSource();
        source.buffer = this.sounds[sound].buffer;
        source.connect(this.context.destination);
        source.start(0);

        if(typeof callback === 'function'){
            callback();
        }

    }

};
