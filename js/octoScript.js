$( document ).ready(function() {
	
	//Turn octoArms svg element into a Snap object
	var octoArms = Snap("#octoArms");

	//Create the arm paths
	var leftArm = octoArms.path("M80,300 Q0,200 50,40");
	var rightArm = octoArms.path("M320,300 Q400,200 350,40");

	leftArm.attr({
	    fill: "none",
	    stroke: "#4398CC",
	    strokeWidth: 20,
	});

	rightArm.attr({
	    fill: "none",
	    stroke: "#4398CC",
	    strokeWidth: 20,
	});
        
});
