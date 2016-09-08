// JavaScript Document

var $slideImage = $('.slide img');
var $thumbs = $('.th_container a');

$thumbs.on('mouseenter click focus', function(e){
	
	newImageSrc = $(this).attr('href');
	$slideImage.attr('src', newImageSrc);
	// prevent default click behaviour
	e.preventDefault();
	
});

