// TweenMax.from("#sectionA", 5, {opacity:0, scale:0, ease:Bounce.easeOut});
// TweenMax.to(".li01", 2, {y:500, ease:Bounce.easeOut});


// var tab_link = $('nav-pills li');

// $( "tab_link" ).hover(function() {



//   $( "span" ).animate({
//     width: 50,
//   }, 800, function() {
//     // Animation complete.
//   });

//     $( "li" ).animate({
//     left: 50,
//   }, 800, function() {
//     // Animation complete.
//   });

// });

$(document).ready(function(){

	var tabs_link = $('.nav-pills > li');
	// var bullet = $('span');
	var tabs_link_text = $('.project_data');

	// tabs_link.hover(function(){
	// 	$(this).addClass('red');		
	// }, function() {
	// 	$(this).removeClass('red');
	// });

	
// tabs_link.hover(function(){

// 	$(tabs_link_text).each(function(){
// 		$(this).addClass('text_right');
// 	}, function() {
// 		$(this).removeClass('text_right');
// 	})

	

// 	});

tabs_link_text.hover(function(){

	$(this).addClass('text_right');

}, function() {
	$(this).removeClass('text_right');
});


});


// const tab_link = document.querySelectorAll('.nav-pills > li');

// function animated() {
//     if (this.classList.contains('red')) {
//         this.classList.remove('red');
//     } else {
//         this.classList.add('red');
//     }

    
// }

// tab_link.forEach(li => li.addEventListener('mouseover', animated))
// tab_link.forEach(li => li.addEventListener('mouseleave', ""))


// <script>

//     function playSound(e) {
//         const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//         const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//         if (!audio) return; //stop function from running
//         audio.currentTime = 0;
//         audio.play();
//         key.classList.add('playing');
//     }

//     function removeTransition(e) {
//         if (e.propertyName !== 'transform') return; // skip it if it's not a transform
//         this.classList.remove('playing');
//     }

//     const keys = document.querySelectorAll('.key');
//     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//     window.addEventListener('keydown', playSound);


// </script>

