// paralax for intro section

$(window).scroll(function () {

        // $('.hello').css({
        //     'top': 50-($(this).scrollTop() / 35) + "%"
        // });

        $('.origami').css({
        'top': 55-($(this).scrollTop() / 15) + "%"
        });
    });





// Wireframe Gallery 
var openPS1 = function(id) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'images/home.png',
            w: 1000,
            h: 667
        },
        {
            src: 'images/jobSeeker.png',
            w: 957,
            h: 1008
        },
    {
            src: 'images/about.png',
            w: 1000,
            h: 1046
        }
    ];

    // define options (if needed)https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg"
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,
    index: id-1,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

// StileTiles Gallery 
var openPS2 = function(id) {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'images/style_tile1.png',
            w: 1020,
            h: 750
        },
        {
            src: 'images/style_tile2.png',
            w: 1020,
            h: 750
        },
    ];

    // define options (if needed)https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg"
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,
        index: id-1,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};



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