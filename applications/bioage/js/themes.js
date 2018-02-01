$(document).ready(function() {
    $(".switch_theme").change(function() {
        val = $(".switch_theme option:selected").val();

		if (val == 'red') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #dd1818)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-warning');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'orange') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #D3CCE3, #F09819)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
        if (val == 'yellow') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #D3CCE3, #fffc00)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');	
		}
		if (val == 'green') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #52c234)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'lightblue') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #1c92d2)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'blue') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #003973)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'white 0 0 9px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'violet') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #FBD3E9, #BB377D)');
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'white') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #E2E2E2, #ECE9E6)');
			$('.header>h1').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#202020', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-success');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');	
		} 
		if (val == 'grey') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #bdc3c7, #2c3e50)');
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-info');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'whitesmoke 0px 0px 10px'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'black') {
			$('body').css('background', 'none');
			$('body').css('background', 'radial-gradient(ellipse, #434343, #000000)');
			$('.header>h1').css({'color' : '#c1c1c1', 'text-shadow' : 'none'});
			$('.header>h2').css({'color' : '#c1c1c1', 'text-shadow' : 'none'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-danger');
			$('.switch_name').css({'color' : '#c5c5c5', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'none');	
		}
		if (val == 'default') {
			$('body').css('background', 'none');
			$('body').css('background', 'url(../img/bg/bg.png)');
			$('.header>h1').css({'text-shadow' : 'white 0 0 9px'});
			$('.header>h2').css({'text-shadow' : 'white 0 0 9px'});
			$('.progress-bar').removeClass().addClass('progress-bar progress-bar-danger');
			$('.switch_name').css({'color' : '#0a0a0a', 'text-shadow' : 'none'});
			$('#timer_controls label').css('box-shadow', 'black 0px 0px 5px');		
		}
    });
});