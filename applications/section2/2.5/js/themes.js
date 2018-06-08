$(document).ready(function() {

	if (localStorage.getItem('theme') != '') $('.switch_theme option:selected').val(localStorage.getItem('theme'));

	var val = $('.switch_theme option:selected').val();

	if (val == 'white') {
		$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #ECE9E6)');
		$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.progress-bar').removeClass().addClass('progress-bar');
		$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
		$('.home').css('color', '#333');
		localStorage.setItem('theme', val);
	}

	if (val == 'blue') {
		$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #003973)');
		$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
		$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('#timer_controls label').css('box-shadow', 'none');
		$('.home').css('color', '#e6e5e5');
		localStorage.setItem('theme', val);
	}

	if (val == 'grey') {
		$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #2c3e50)');
		$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.progress-bar').removeClass().addClass('progress-bar');
		$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('#timer_controls label').css('box-shadow', 'none');
		$('.home').css('color', '#AAA');
		localStorage.setItem('theme', val);
	}

	if (val == 'green') {
		$('body').css('background', 'radial-gradient(ellipse, #F3F9A7, #45B649)');
		$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.progress-bar').removeClass().addClass('progress-bar');
		$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
		$('.home').css('color', '#333');
		localStorage.setItem('theme', val);
	}

	if (val == 'lightblue') {
		$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #1c92d2)');
		$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
		$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
		$('#timer_controls label').css('box-shadow', 'none');
		$('.home').css('color', '#333');
		localStorage.setItem('theme', val);
	}

	if (val == 'yellow') {
		$('body').css('background', 'radial-gradient(ellipse, #DDE0E2, #CAC531)');
		$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('.progress-bar').removeClass().addClass('progress-bar');
		$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
		$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
		$('.home').css('color', '#333');
		localStorage.setItem('theme', val);
	}

	if (val == 'black') {
		$('body').css('background', 'radial-gradient(ellipse, #434343, #000000)');
		$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
		$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
		$('.name').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
		$('.progress-bar').removeClass().addClass('progress-bar');
		$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
		$('#timer_controls label').css('box-shadow', 'none');
		$('.home').css('color', '#AAA');
		localStorage.setItem('theme', val);
	}

	$('.switch_theme').change(function() {
		
	val = $(".switch_theme option:selected").val();

		if (val == 'white') {
			$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #ECE9E6)');
			$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar');
			$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
			$('.home').css('color', '#333');
			localStorage.setItem('theme', val);
		}

		if (val == 'blue') {
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #003973)');
			$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('#timer_controls label').css('box-shadow', 'none');
			$('.home').css('color', '#e6e5e5');
			localStorage.setItem('theme', val);
		}
		
		if (val == 'grey') {
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #2c3e50)');
			$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.progress-bar').removeClass().addClass('progress-bar');
			$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('#timer_controls label').css('box-shadow', 'none');
			$('.home').css('color', '#AAA');
			localStorage.setItem('theme', val);
		}

		if (val == 'green') {
			$('body').css('background', 'radial-gradient(ellipse, #F3F9A7, #45B649)');
			$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar');
			$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
			$('.home').css('color', '#333');
			localStorage.setItem('theme', val);
		}

		if (val == 'lightblue') {
			$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #1c92d2)');
			$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : '#000000FF 0 0 10px'});
			$('#timer_controls label').css('box-shadow', 'none');
			$('.home').css('color', '#333');
			localStorage.setItem('theme', val);
		}

		if (val == 'yellow') {
			$('body').css('background', 'radial-gradient(ellipse, #F3F9A7, #CAC531)');
			$('.header>h1').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar');
			$('.switch_name').css({'color' : '#000000', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');
			$('.home').css('color', '#333');
			localStorage.setItem('theme', val);
		}

		if (val == 'black') {
			$('body').css('background', 'radial-gradient(ellipse, #434343, #000000)');
			$('.header>h1').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
			$('.name').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar');
			$('.switch_name').css({'color' : '#FFFFFF', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'none');
			$('.home').css('color', '#AAA');
			localStorage.setItem('theme', val);
		}
	})
});