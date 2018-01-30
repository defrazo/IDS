$(document).ready(function() {
    $("#switch_theme").change(function() {
        val = $("#switch_theme option:selected").val();

		if (val == 'red') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #FFFFFF, #e74c3c)');
			$('.header>h1').css({'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'text-shadow' : 'white 0 0 9px'});
		}
		if (val == 'orange') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #F9D423, #F09819)');
		}
        if (val == 'yellow') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #F3F9A7, #fffc00)');
		}
		if (val == 'green') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #FAFFD1, #52c234)');
		}
		if (val == 'lightblue') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #f2fcfe, #1c92d2)');
		}
		if (val == 'blue') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #E5E5BE, #003973)');
		}
		if (val == 'violet') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #FBD3E9, #BB377D)');
		}
		if (val == 'white') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #ECE9E6)');
		}
		if (val == 'grey') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #2c3e50)');
		}
		if (val == 'black') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #434343, #000000)');
		}
    });
});