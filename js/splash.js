$(document).ready(function(){
	setTimeout(function() {
	window.location.href='views/principal-view.html'
	}, 5000);
	
	var $logo_app = $('#logoApp');
	var $pulse = (60/140)*1000;
  var $pulseReverse = 858.57142857142856;
	
	
	function pulseInterval(){
		$logo_app.addClass('pulse');
    $logo_app.removeClass('antiPulse');
	}
	
	function anti_pulseInterval(){
    $logo_app.removeClass('pulse');
		$logo_app.addClass('antiPulse');
	}
	
	function move(){
    setInterval(pulseInterval,$pulse);
    setInterval(anti_pulseInterval,$pulseReverse);
  }
	
	$logo_app.ready(move);
})
