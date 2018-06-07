$(document).on('ready', function () { //T1
	$('#timer').runner();
	stage = 0;
	$("#btnstart").click(function() {
		$('#table1').css('display', 'table');
		$('.tst').css('display', 'block'); 
		$('#timer').runner('start');
		$('.s1').css('display','none');
	});

	setInterval(function() {
		if (stage == 0) {
			if ($('#timer').val() >= '05.00') {
				$('#table1').css('display', 'none');
				$('#table1c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table1c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table1c').css('display', 'none');
				$('.tst').css('display', 'none');
				$('.tst2').css('display', 'block'); 
				setTimeout(function() {
					stage++;
				}, 5000);
			}
		}
		if (stage == 1) {
			$('.tst2').css('display', 'none');
			$('#timer').runner('start');
			$('#table2').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table2').css('display', 'none'); 
				$('#table2c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table2c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl21inp', $('#tbl21c').val());
				localStorage.setItem('tbl22inp', $('#tbl22c').val());
				localStorage.setItem('tbl23inp', $('#tbl23c').val());
				localStorage.setItem('tbl24inp', $('#tbl24c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table2c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 2) {
			$('#timer').runner('start');
			$('#table2c').css('display', 'none');
			$('#table3').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table3').css('display', 'none'); 
				$('#table3c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table3c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl31inp', $('#tbl31c').val());
				localStorage.setItem('tbl32inp', $('#tbl32c').val());
				localStorage.setItem('tbl33inp', $('#tbl33c').val());
				localStorage.setItem('tbl34inp', $('#tbl34c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table3c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 3) {
			$('#timer').runner('start');
			$('#table3c').css('display', 'none');
			$('#table4').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table4').css('display', 'none'); 
				$('#table4c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table4c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl41inp', $('#tbl41c').val());
				localStorage.setItem('tbl42inp', $('#tbl42c').val());
				localStorage.setItem('tbl43inp', $('#tbl43c').val());
				localStorage.setItem('tbl44inp', $('#tbl44c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table4c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 4) {
			$('#timer').runner('start');
			$('#table4c').css('display', 'none');
			$('#table5').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table5').css('display', 'none'); 
				$('#table5c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table5c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl51inp', $('#tbl51c').val());
				localStorage.setItem('tbl52inp', $('#tbl52c').val());
				localStorage.setItem('tbl53inp', $('#tbl53c').val());
				localStorage.setItem('tbl54inp', $('#tbl54c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table5c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 5) {
			$('#timer').runner('start');
			$('#table5c').css('display', 'none');
			$('#table6').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table6').css('display', 'none'); 
				$('#table6c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table6c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl61inp', $('#tbl61c').val());
				localStorage.setItem('tbl62inp', $('#tbl62c').val());
				localStorage.setItem('tbl63inp', $('#tbl63c').val());
				localStorage.setItem('tbl64inp', $('#tbl64c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table6c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 6) {
			$('#timer').runner('start');
			$('#table6c').css('display', 'none');
			$('#table7').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table7').css('display', 'none'); 
				$('#table7c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table7c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl71inp', $('#tbl71c').val());
				localStorage.setItem('tbl72inp', $('#tbl72c').val());
				localStorage.setItem('tbl73inp', $('#tbl73c').val());
				localStorage.setItem('tbl74inp', $('#tbl74c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table7c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 7) {
			$('#timer').runner('start');
			$('#table7c').css('display', 'none');
			$('#table8').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table8').css('display', 'none'); 
				$('#table8c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table8c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl81inp', $('#tbl81c').val());
				localStorage.setItem('tbl82inp', $('#tbl82c').val());
				localStorage.setItem('tbl83inp', $('#tbl83c').val());
				localStorage.setItem('tbl84inp', $('#tbl84c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table8c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 8) {
			$('#timer').runner('start');
			$('#table8c').css('display', 'none');
			$('#table9').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table9').css('display', 'none'); 
				$('#table9c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table9c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl91inp', $('#tbl91c').val());
				localStorage.setItem('tbl92inp', $('#tbl92c').val());
				localStorage.setItem('tbl93inp', $('#tbl93c').val());
				localStorage.setItem('tbl94inp', $('#tbl94c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table9c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 9) {
			$('#timer').runner('start');
			$('#table9c').css('display', 'none');
			$('#table10').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table10').css('display', 'none'); 
				$('#table10c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table10c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl101inp', $('#tbl101c').val());
				localStorage.setItem('tbl102inp', $('#tbl102c').val());
				localStorage.setItem('tbl103inp', $('#tbl103c').val());
				localStorage.setItem('tbl104inp', $('#tbl104c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table10c').css('visibility', 'hidden');
				stage++;
			}
		}
		if (stage == 10) {
			$('#timer').runner('start');
			$('#table10c').css('display', 'none');
			$('#table11').css('display', 'table');
			if ($('#timer').val() >= '05.00') {
				$('#table11').css('display', 'none'); 
				$('#table11c').css('display', 'table');
			}
			if ($('#timer').val() >= '12.00') $('#table11c').addClass('blink');
			if ($('#timer').val() >= '15.00') {
				localStorage.setItem('tbl111inp', $('#tbl111c').val());
				localStorage.setItem('tbl112inp', $('#tbl112c').val());
				localStorage.setItem('tbl113inp', $('#tbl113c').val());
				localStorage.setItem('tbl114inp', $('#tbl114c').val());
				$('#timer').runner('stop');
				$('#timer').runner('reset');
				$('#table1c').css('visibility', 'hidden');
				stage++;
				$(location).attr('href', 'results.html');
			}
		}
	}, 700);
});