$(document).ready(function () { //T1
	if (localStorage.getItem('series1') == null) {
		$('.ser1').css('display', 'block');
		$('#timer').runner();
		stage1 = 0;
		error1 = 0;
		$('td').click(function(event) {
			var target = $(event.target);
			switch (true) {
				case (target.is('#tbl1b')) : 
					if (stage1 == 0) {
						$('#timer').runner('start');
						stage1++;
					} else error1++;
				break;
				case (target.is('#tbl2b')) : 
					if (stage1 == 1) stage1++;
					else error1++;
				break;
				case (target.is('#tbl3b')) : 
					if (stage1 == 2) stage1++;
					else error1++;
				break;
				case (target.is('#tbl4b')) : 
					if (stage1 == 3) stage1++;
					else error1++;
				break;
				case (target.is('#tbl5b')) : 
					if (stage1 == 4) stage1++;
					else error1++;
				break;
				case (target.is('#tbl6b')) : 
					if (stage1 == 5) stage1++;
					else error1++;
				break;
				case (target.is('#tbl7b')) : 
					if (stage1 == 6) stage1++;
					else error1++;
				break;
				case (target.is('#tbl8b')) : 
					if (stage1 == 7) stage1++;
					else error1++;
				break;
				case (target.is('#tbl9b')) : 
					if (stage1 == 8) stage1++;
					else error1++;
				break;
				case (target.is('#tbl10b')) : 
					if (stage1 == 9) stage1++;
					else error1++;
				break;
				case (target.is('#tbl11b')) : 
					if (stage1 == 10) stage1++;
					else error1++;
				break;
				case (target.is('#tbl12b')) : 
					if (stage1 == 11) stage1++;
					else error1++;
				break;
				case (target.is('#tbl13b')) : 
					if (stage1 == 12) stage1++;
					else error1++;
				break;
				case (target.is('#tbl14b')) : 
					if (stage1 == 13) stage1++;
					else error1++;
				break;
				case (target.is('#tbl15b')) : 
					if (stage1 == 14) stage1++;
					else error1++;
				break;
				case (target.is('#tbl16b')) : 
					if (stage1 == 15) stage1++;
					else error1++;
				break;
				case (target.is('#tbl17b')) : 
					if (stage1 == 16) stage1++;
					else error1++;
				break;
				case (target.is('#tbl18b')) : 
					if (stage1 == 17) stage1++;
					else error1++;
				break;
				case (target.is('#tbl19b')) : 
					if (stage1 == 18) stage1++;
					else error1++;
				break;
				case (target.is('#tbl20b')) : 
					if (stage1 == 19) stage1++;
					else error1++;
				break;
				case (target.is('#tbl21b')) : 
					if (stage1 == 20) stage1++;
					else error1++;
				break;
				case (target.is('#tbl22b')) : 
					if (stage1 == 21) stage1++;
					else error1++;
				break;
				case (target.is('#tbl23b')) : 
					if (stage1 == 22) stage1++;
					else error1++;
				break;
				case (target.is('#tbl24b')) : 
					if (stage1 == 23) stage1++;
					else error1++;
				break;
				case (target.is('#tbl25b')) : 
					if (stage1 == 24) {
						$('#timer').runner('stop');
						stage1++;
						localStorage.setItem('timer1', $('#timer').val());
						localStorage.setItem('error1', error1);
						localStorage.setItem('series1', 1);
					}
				break;
			}
		});
	}
});

$(document).ready(function () { //T2
	if (localStorage.getItem('series2') == null) {
		$('.ser1').css('display', 'none');
		$('.ser2').css('display', 'block');
		$('#timer').runner();
		stage2 = 0;
		error2 = 0;
		$('td').click(function(event) {
			var target = $(event.target);
			switch (true) {
				case (target.is('#tbl24r')) : 
					if (stage2 == 0) {
						$('#timer').runner('start');
						stage2++;
					} else error2++;
				break;
				case (target.is('#tbl23r')) : 
					if (stage2 == 1) stage2++;
					else error2++;
				break;
				case (target.is('#tbl22r')) : 
					if (stage2 == 2) stage2++;
					else error2++;
				break;
				case (target.is('#tbl21r')) : 
					if (stage2 == 3) stage2++;
					else error2++;
				break;
				case (target.is('#tbl20r')) : 
					if (stage2 == 4) stage2++;
					else error2++;
				break;
				case (target.is('#tbl19r')) : 
					if (stage2 == 5) stage2++;
					else error2++;
				break;
				case (target.is('#tbl18r')) : 
					if (stage2 == 6) stage2++;
					else error2++;
				break;
				case (target.is('#tbl17r')) : 
					if (stage2 == 7) stage2++;
					else error2++;
				break;
				case (target.is('#tbl16r')) : 
					if (stage2 == 8) stage2++;
					else error2++;
				break;
				case (target.is('#tbl15r')) : 
					if (stage2 == 9) stage2++;
					else error2++;
				break;
				case (target.is('#tbl14r')) : 
					if (stage2 == 10) stage2++;
					else error2++;
				break;
				case (target.is('#tbl13r')) : 
					if (stage2 == 11) stage2++;
					else error2++;
				break;
				case (target.is('#tbl12r')) : 
					if (stage2 == 12) stage2++;
					else error2++;
				break;
				case (target.is('#tbl11r')) : 
					if (stage2 == 13) stage2++;
					else error2++;
				break;
				case (target.is('#tbl10r')) : 
					if (stage2 == 14) stage2++;
					else error2++;
				break;
				case (target.is('#tbl9r')) : 
					if (stage2 == 15) stage2++;
					else error2++;
				break;
				case (target.is('#tbl8r')) : 
					if (stage2 == 16) stage2++;
					else error2++;
				break;
				case (target.is('#tbl7r')) : 
					if (stage2 == 17) stage2++;
					else error2++;
				break;
				case (target.is('#tbl6r')) : 
					if (stage2 == 18) stage2++;
					else error2++;
				break;
				case (target.is('#tbl5r')) : 
					if (stage2 == 19) stage2++;
					else error2++;
				break;
				case (target.is('#tbl4r')) : 
					if (stage2 == 20) stage2++;
					else error2++;
				break;
				case (target.is('#tbl3r')) : 
					if (stage2 == 21) stage2++;
					else error2++;
				break;
				case (target.is('#tbl2r')) : 
					if (stage2 == 22) stage2++;
					else error2++;
				break;
				case (target.is('#tbl1r')) : 
					if (stage2 == 23) {
						$('#timer').runner('stop');
						stage2++;
						localStorage.setItem('timer2', $('#timer').val());
						localStorage.setItem('error2', error2);
						localStorage.setItem('series2', 1);
					}
				break;
			}
		});
	}
});

$(document).ready(function () { //T3
	if (localStorage.getItem('series3') == null) {
		$('.ser2').css('display', 'none');
		$('.ser3').css('display', 'block');
		$('#timer').runner();
		stage3 = 0;
		error3 = 0;
		$('td').click(function(event) {
			var target = $(event.target);
			switch (true) {
				case (target.is('#tbl1b')) : 
					if (stage3 == 0) {
						$('#timer').runner('start');
						stage3++;
						$('#stage').html($('#tbl1b').text());
					} else error3++;
				break;
				case (target.is('#tbl24r')) : 
					if (stage3 == 1) {
						stage3++;
						$('#stage').html($('#tbl24r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl2b')) : 
					if (stage3 == 2) {
						stage3++;
						$('#stage').html($('#tbl2b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl23r')) : 
					if (stage3 == 3) {
						stage3++;
						$('#stage').html($('#tbl23r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl3b')) : 
					if (stage3 == 4) {
						stage3++;
						$('#stage').html($('#tbl3b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl22r')) : 
					if (stage3 == 5) {
						stage3++;
						$('#stage').html($('#tbl22r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl4b')) : 
					if (stage3 == 6) {
						stage3++;
						$('#stage').html($('#tbl4b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl21r')) : 
					if (stage3 == 7) {
						stage3++;
						$('#stage').html($('#tbl21r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl5b')) : 
					if (stage3 == 8) {
						stage3++;
						$('#stage').html($('#tbl5b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl20r')) : 
					if (stage3 == 9) {
						stage3++;
						$('#stage').html($('#tbl20r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl6b')) : 
					if (stage3 == 10) {
						stage3++;
						$('#stage').html($('#tbl6b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl19r')) : 
					if (stage3 == 11) {
						stage3++;
						$('#stage').html($('#tbl19r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl7b')) : 
					if (stage3 == 12) {
						stage3++;
						$('#stage').html($('#tbl7b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl18r')) : 
					if (stage3 == 13) {
						stage3++;
						$('#stage').html($('#tbl18r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl8b')) : 
					if (stage3 == 14) {
						stage3++;
						$('#stage').html($('#tbl8b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl17r')) : 
					if (stage3 == 15) {
						stage3++;
						$('#stage').html($('#tbl17r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl9b')) : 
					if (stage3 == 16) {
						stage3++;
						$('#stage').html($('#tbl9b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl16r')) : 
					if (stage3 == 17) {
						stage3++;
						$('#stage').html($('#tbl16r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl10b')) : 
					if (stage3 == 18) {
						stage3++;
						$('#stage').html($('#tbl10b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl15r')) : 
					if (stage3 == 19) {
						stage3++;
						$('#stage').html($('#tbl15r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl11b')) : 
					if (stage3 == 20) {
						stage3++;
						$('#stage').html($('#tbl11b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl14r')) : 
					if (stage3 == 21) {
						stage3++;
						$('#stage').html($('#tbl14r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl12b')) : 
					if (stage3 == 22) {
						stage3++;
						$('#stage').html($('#tbl12b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl13r')) : 
					if (stage3 == 23) {
						stage3++;
						$('#stage').html($('#tbl13r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl13b')) : 
					if (stage3 == 24) {
						stage3++;
						$('#stage').html($('#tbl13b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl12r')) : 
					if (stage3 == 25) {
						stage3++;
						$('#stage').html($('#tbl12r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl14b')) : 
					if (stage3 == 26) {
						stage3++;
						$('#stage').html($('#tbl14b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl11r')) : 
					if (stage3 == 27) {
						stage3++;
						$('#stage').html($('#tbl11r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl15b')) : 
					if (stage3 == 28) {
						stage3++;
						$('#stage').html($('#tbl15b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl10r')) : 
					if (stage3 == 29) {
						stage3++;
						$('#stage').html($('#tbl10r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl16b')) : 
					if (stage3 == 30) {
						stage3++;
						$('#stage').html($('#tbl16b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl9r')) : 
					if (stage3 == 31) {
						stage3++;
						$('#stage').html($('#tbl9r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl17b')) : 
					if (stage3 == 32) {
						stage3++;
						$('#stage').html($('#tbl17b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl8r')) : 
					if (stage3 == 33) {
						stage3++;
						$('#stage').html($('#tbl8r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl18b')) : 
					if (stage3 == 34) {
						stage3++;
						$('#stage').html($('#tbl18b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl7r')) : 
					if (stage3 == 35) {
						stage3++;
						$('#stage').html($('#tbl7r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl19b')) : 
					if (stage3 == 36) {
						stage3++;
						$('#stage').html($('#tbl19b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl6r')) : 
					if (stage3 == 37) {
						stage3++;
						$('#stage').html($('#tbl6r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl20b')) : 
					if (stage3 == 38) {
						stage3++;
						$('#stage').html($('#tbl20b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl5r')) : 
					if (stage3 == 39) {
						stage3++;
						$('#stage').html($('#tbl5r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl21b')) : 
					if (stage3 == 40) {
						stage3++;
						$('#stage').html($('#tbl21b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl4r')) : 
					if (stage3 == 41) {
						stage3++;
						$('#stage').html($('#tbl4r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl22b')) : 
					if (stage3 == 42) {
						stage3++;
						$('#stage').html($('#tbl22b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl3r')) : 
					if (stage3 == 43) {
						stage3++;
						$('#stage').html($('#tbl3r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl23b')) : 
					if (stage3 == 44) {
						stage3++;
						$('#stage').html($('#tbl23b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl2r')) : 
					if (stage3 == 45) {
						stage3++;
						$('#stage').html($('#tbl2r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl24b')) : 
					if (stage3 == 46) {
						stage3++;
						$('#stage').html($('#tbl24b').text()).removeClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl1r')) : 
					if (stage3 == 47) {
						stage3++;
						$('#stage').html($('#tbl1r').text()).addClass('R');
					}
					else error3++;
				break;
				case (target.is('#tbl25b')) : 
					if (stage3 == 48) {
						$('#timer').runner('stop');
						stage3++;
						$('#stage').html($('#tbl25b').text()).removeClass('R');
						localStorage.setItem('timer3', $('#timer').val());
						localStorage.setItem('error3', error3);
						localStorage.setItem('series3', 1);
						$(location).attr('href', 'results.html');
					}
				break;
			}
		});
	}
});