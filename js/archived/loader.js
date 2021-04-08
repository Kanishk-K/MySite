$(document).ready(function() {
	var app = document.getElementById('app');
	var typewriter = new Typewriter(app, {
	});
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		typewriter.pauseFor(1300).typeString('Project Archive').start()
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 30 sec for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 3000);
})