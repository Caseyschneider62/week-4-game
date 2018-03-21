

var random_result;
var lost;
var win;
 var crystalImages = ["assets/images/testImage.jpeg"]
for(var i = 0; i < 4; i++) {

	var random = Math.floor(Math.random() * 12);
	console.log(random);

	var crystal = $("<div>");
	    crystal.attr({
	    	 
	    	"data-random": random
	    });
     crystal.html("<img src="+crystalImages[i]+">")
	$(".crystals").append(crystal);
}




// <!-- Create a game using 4 crystals and random result.
// 	Every crystal needs to have a random number between 1-12
// 	A new random number should generate every single time we win or loose to those 4 crystals.
// 	When clicking any crystal,it should add with the previous result Until it hits the total score.
// 	If it is not equal,we lost and decrement a lost,then we start over.
// 	If it is equal,then we increment a win counter.
	
// 	 -->