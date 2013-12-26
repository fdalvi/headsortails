var tossInProgress = false;
var result = null;
$(document).ready(function() {

	// Start initial animation
	$("#coin").addClass('slowspin');

	$(document).keypress(function(e) {
		tossCoin();
	});

	$(document).mouseup(function(e) {
		tossCoin();
	});

	document.addEventListener('touchend', function(e) {
		e.preventDefault();
		tossCoin();
	}, false);
});

function tossCoin()
{
	if(!tossInProgress)
	{
		// Remove old classes
		$("#coin").removeClass("slowspin");
		$("#coin").removeClass("headresult");
		$("#coin").removeClass("tailresult");

		// Do the virtual toss
		var randomNumber = Math.floor((Math.random()*100)+1);
		if(randomNumber % 2 == 0)
			result = "heads";
		else
			result = "tails";
		console.log("Tossing => (" + randomNumber + ") " + result);
		
		// Show the toss
		if(result == "heads")
			$("#coin").addClass("headspin");
		else
			$("#coin").addClass("tailspin");

		$("#coin").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			if(result == "heads")
				$("#coin").addClass("headresult");
			else
				$("#coin").addClass("tailresult");

			$("#coin").removeClass("headspin");
			$("#coin").removeClass("tailspin");

			result = null;
			$("#coin").unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
			tossInProgress = false;
		});
	}
}