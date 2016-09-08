var pContainerHeight = $('.jumbotron').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    // $('.logo').css({
    //   'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    // });

    // $('.back-bird').css({
    //   'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    // });

    $('.bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }