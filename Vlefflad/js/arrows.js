var currentId = 1;
var targets = ["#home", "#test", "#service", "#skills", "#portfolio", "#testimonials", "#contact"];

function closest (num, arr, incr) {
    var $curr = $(arr[0]);
    var curr_offset = $curr.offset().top;
    //alert("num is " + num + "curr is " +  curr_offset);
    var id = 0;
    var sign;
    var diff = Math.abs (num - curr_offset);
    for (var val = 0; val < arr.length; val++) {
    	$curr = $(arr[val]);
    	var temp = $curr.offset().top;
        var newdiff = Math.abs (num - temp);
        if (newdiff < diff) {
        	sign = (num - temp)/newdiff;
            diff = newdiff;
            curr_offset = temp;
            id = val;
        } 
    }
    if(incr * sign < 0 && diff > 5){
    	id-= incr;
    }
    return id;
}

$("#ba").click(function() {
	var $container = $('html');
	currentId = closest($container.scrollTop(), targets, 1)
    if(currentId < targets.length) currentId++;

    var $scrollTo = $(targets[currentId]);
    
	$container.scrollTop(
	    $scrollTo.offset().top
	);

}); 

$("#ta").click(function() {
	var $container = $('html');
	currentId = closest($container.scrollTop(), targets, -1)
    
    if(currentId > 0) currentId--;

    var $scrollTo = $(targets[currentId]);
    
	$container.scrollTop(
	    $scrollTo.offset().top
	);
}); 
