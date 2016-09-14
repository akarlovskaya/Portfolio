// $( function()
//     {
//         $( 'a[lb-id="a"]' ).imageLightbox(
//             {
//                 selector:       'a[lb-id]', // string;
//                 // id:             'imagelightbox',         // string;
//                 allowedTypes:   'png|jpg|jpeg||gif',     // string; * NOT WORKING ATM *
//                 animationSpeed: 250,                     // integer;
//                 activity:       false,                   // bool;            show activity indicator
//                 arrows:         true,                   // bool;            show left/right arrows
//                 button:         true,                   // bool;            show close button
//                 caption:        false,                   // bool;            show captions
//                 enableKeyboard: true,                    // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
//                 navigation:     true,                   // bool;            show navigation
//                 overlay:        true,                   // bool;            display the lightbox as an overlay
//                 preloadNext:    true,                    // bool;            silently preload the next image
//                 quitOnEnd:      false,                   // bool;            quit after viewing the last image
//                 quitOnImgClick: false,                   // bool;            quit when the viewed image is clicked
//                 quitOnDocClick: true,                    // bool;            quit when anything but the viewed image is clicked
//                 quitOnEscKey:   true,                    // bool;            quit when Esc key is pressed
//                 onStart:        false,                   // function/bool;   calls function when the lightbox starts
//                 onEnd:          false,                   // function/bool;   calls function when the lightbox quits
//                 onLoadStart:    false,                   // function/bool;   calls function when the image load begins
//                 onLoadEnd:      false                    // function/bool;   calls function when the image finishes loading
//             }

//         );
//     });


// Back to Top arrow

$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});