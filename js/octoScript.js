$( document ).ready(function() {

	var movementXLeft;
	var movementXRight;
	var movementY;

	var width = $(window).width();
	var height = $(window).height();

	console.log(width + ", " + height);

	$(document).mousemove(function(event){
		//console.log(event.pageX + ", " + event.pageY); 

	  movementXLeft = event.pageX / width * 400 - 20;
	  movementXRight = event.pageX / width * 400 + 20;
	  movementY = event.pageY / height * 300;

	  if (movementXLeft < 20) {
	  	movementXLeft = 20;
	  	movementXRight = 80;
	  }
	  if (movementXRight > 380) {
	  	movementXRight = 380;
	  	movementXLeft = 340;
	  }
	  if (movementY < 20) {
	  	movementY = 20;
	  }




	  $(".leftArm").attr("d", "M80,300 Q0,200 " + movementXLeft + "," + movementY);
	  $(".rightArm").attr("d", "M320,300 Q400,200 " + movementXRight + "," + movementY);
	 // console.log(movementY);
	}); 
	
	//Turn octoArms svg element into a Snap object
	var octoArms = Snap("#octoArms");

	//Create the arm paths
	var leftArm = octoArms.path("M80,300 Q0,200 50,40");
	var rightArm = octoArms.path("M320,300 Q400,200 350,40");

	leftArm.attr({
	    fill: "none",
	    stroke: "#4398CC",
	    strokeWidth: 20,
	    class: "leftArm"
	});

	rightArm.attr({
	    fill: "none",
	    stroke: "#4398CC",
	    strokeWidth: 20,
	   	class: "rightArm"
	}); 
        
});
