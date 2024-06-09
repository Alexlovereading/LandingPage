$(document).ready(function () {
	var $stepBox = $(".stepbox"),
	$stepBoxStep = $stepBox.children(".step");
	$stepBoxStep.find(".next").click(function(e) {
		e.preventDefault();
		changeStep();
	});

	function changeStep() {
		var $currentStep = $stepBoxStep.filter(".current");
		$currentStep.removeClass("current");
		$currentStep.next().addClass("current");
		$(".progress .bar").animate({
			width: "+=25%",
		});
	}

	$(".choice-list li").click(function(f) {
		f.preventDefault();
		$(this).toggleClass('active');
	});

	function changeCity(data) {
		if ($('#titleEN').length && data.city.en) {
			$('title').text('Looking for hot hookups tonight in ' + data.city.en + '?');
		}
		else if ($('#titleDE').length && data.city.de) {
			$('title').text('Suchst Du heute Abend Sex in ' + data.city.de + '?');
		}
	}
	
	setTimeout(function() {
		if (geoRefData) {
			changeCity(geoRefData);
		} else {
			var request = new XMLHttpRequest();
			request.open('GET', 'https://data-jsext.com/ExtService.svc/getextparams', true);
	
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText);
				changeCity(data);
			} else {
				console.log('Server returned an error');
			}
		};
	
		request.onerror = function() {
			console.log('Error: ' + request.status);
		};
		request.send();
		}
	}, 700);
});