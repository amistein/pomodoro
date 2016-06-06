$(document).ready(function() {
	var work = 25;
	var rest = 5;
	var running = false;
	var rest = false;
	var obj1 = document.createElement("audio");
  obj1.src="sound1.mp3";      
 	obj1.volume = 0.5;
	
	$(".work-minute").html(work);
	$(".rest-minute").html(rest);
	$("#timer").html(work + ":" + "00");

	$("#work-inner .arrow-up").click(function() {
		work++;
		$(".work-minute").html(work);
		$("#timer").html(work + ":" + "00");
	});

	$("#work-inner .arrow-down").click(function() {
		if (work > 1) {
			work--;
			$(".work-minute").html(work);
			$("#timer").html(work + ":" + "00");
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

	$("#go").click(function() {
		$("body").css("background-color", "green");
		var wMinutes = parseInt($(".work-minute").html());
		var rMinutes = parseInt($(".rest-minute").html());
		timer(rMinutes * 60);
		while (true) {
			if (rest) break;
		}
		$("body").css("background-color", "red");
		timer(wMinutes * 60);

	});

	function timer(seconds) {
		running = true;
		var sec, min;
		var clock = setInterval(function() {
			if (running) {
				seconds--;
				sec = seconds % 60;
				sec = sec < 10 ? "0" + sec : sec;
				min = Math.floor(seconds / 60);
				$("#timer").html(min + ":" + sec);

				if (seconds == 0) {
					obj1.play();
					clearInterval(clock);
					running = false;
					rest = true;
				}
			}
		}, 1000);
	}
})