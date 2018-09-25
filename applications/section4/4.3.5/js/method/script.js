$(document).on('ready mousemove change', function() {
	
	$('select[name=img1]').ImageSelect({dropdownWidth:700});
	$('select[name=img2]').ImageSelect({dropdownWidth:700});
	$('select[name=img3]').ImageSelect({dropdownWidth:700});
	$('select[name=img4]').ImageSelect({dropdownWidth:700});
	$('select[name=img5]').ImageSelect({dropdownWidth:700});
	$('select[name=img6]').ImageSelect({dropdownWidth:700});
	$('select[name=img7]').ImageSelect({dropdownWidth:700});
	$('select[name=img8]').ImageSelect({dropdownWidth:700});
	$('select[name=img9]').ImageSelect({dropdownWidth:700});
	$('select[name=img10]').ImageSelect({dropdownWidth:700});
	$('select[name=img11]').ImageSelect({dropdownWidth:700});
	$('select[name=img12]').ImageSelect({dropdownWidth:700});
	$('select[name=img13]').ImageSelect({dropdownWidth:700});
	$('select[name=img14]').ImageSelect({dropdownWidth:700});
	$('select[name=img15]').ImageSelect({dropdownWidth:700});
	$('select[name=img16]').ImageSelect({dropdownWidth:700});

	$('#timer').runner();
	$("#btnstart").click(function() {
		$('#table1').css('display', 'table');
		$('#timer').runner('start');
		$('.s1').css('display','none');

		setInterval(function() {
			if ($('#timer').val() >= '17.00') $('#table1').addClass('blink');
			if ($('#timer').val() >= '20.00') {
				$('#table1').css('display', 'none'); 
				$('#timer').runner('stop');
				$('#table1c').css('display', 'table');
			}
		}, 500);
	});
});