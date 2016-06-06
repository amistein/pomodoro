$(document).ready(function() {
	var work = 25;
	var rest = 5;
	$(".work-minute").html(work);
	$(".rest-minute").html(rest);

	$("#work-inner .arrow-up").click(function() {
		work++;
		$(".work-minute").html(work);
	});

	$("#work-inner .arrow-down").click(function() {
		if (work > 0) {
			work--;
			$(".work-minute").html(work);
		}
	});

	$("#rest-inner .arrow-up").click(function() {
		rest++;
		$(".rest-minute").html(rest);
	});

	$("#rest-inner .arrow-down").click(function() {
		if (rest > 0) {
			rest--;
			$(".rest-minute").html(rest);
		}
	});

})