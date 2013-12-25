
var animationInProgress = false;
$(document).ready(function() {
	$(document).keypress(function(e) {
		console.log("Key pressed!");

		if(!animationInProgress)
		{
			animationInProgress = true;
			$("#coin").toggleClass("spin");
			$("#coin").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
				function(e) {
					animationInProgress = false;
				});
		}
		
	});
});