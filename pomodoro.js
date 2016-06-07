$(document).ready(function() {
	var work = 25;
	var rest = 5;
	var running = false;
	var restTimer = 0;
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
		timer(wMinutes * 60);
	});

	function timer(seconds) {
		running = true;
		var sec, min;
		var rMinutes = parseInt($(".rest-minute").html());
		var clock = setInterval(function() {
			if (running) {
				seconds--;
				sec = seconds % 60;
				sec = sec < 10 ? "0" + sec : sec;
				min = Math.floor(seconds / 60);
				console.log(min);
				$("#timer").html(min + ":" + sec);
				$(".arrow-work").click(function() {
					running = false;
					clearInterval(clock);
					$("#timer").html(work + ":" + "00");
				});

				if (seconds == 0) {
					obj1.play();
					clearInterval(clock);
					running = false;
					if (restTimer > 0) {
						$("body").css("background-color", "yellow");
						$("#timer").html(work + ":" + "00");
					}
					else {
						$("body").css("background-color", "red");
						timer(rMinutes * 60);
						restTimer++;
					}
				}
			}
		}, 1000);
	}
})