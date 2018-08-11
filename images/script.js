$(document).ready(() => {

    // // Background Cross-Fading

    // let images = [
    //     "images/backgrounds/background1.jpg",
    //     "images/backgrounds/background2.jpg",
    //     "images/backgrounds/background3.jpg"
    // ];

    // let header = document.querySelector("header");

    // // Interval Timer in Seconds
    // let seconds = 5;
      
    // function backgroundSequence() {
    //     window.clearTimeout();
    //     let k = 0;
    //     for (i = 0; i < images.length; i++) {
    //         let newHeader = "url(" + images[i] + ")";
    //         setTimeout(function(){ 
    //             document.querySelector("header").style.backgroundImage = newHeader;
    //         if ((k + 1) === images.length) { setTimeout(function() { backgroundSequence() }, (seconds * 1000))} else { k++; }			
    //         }, (seconds * 1000) * i)	
    //     }
    // }
    // backgroundSequence();

    // Header background color on scroll
    // window.onscroll = function() {changeBackground()};

    // function changeBackground() {
    //     $('#fixed-header').animate({backgroundColor: 'eggshell'}, 'slow');
    //     $('#fixed-header').animate({color: 'black'}, 'fast');
    // }


});


