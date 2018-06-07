$(document).ready(function() {
	$('#sname').focusout(function() {
		var sname = $('#sname').val();
		
		if (sname != '') {
		
			if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
			else {
				$('#sname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			} 
		}
		
		$('#sname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() {
	$('#fname').focusout(function() {
		var fname = $('#fname').val();
		
		if (fname != '')	{
			
			if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
			else {
				$('#fname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#fname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidFname(valfname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valfname);
}

$(document).ready(function() {
	$('#mname').focusout(function() {
		var mname = $('#mname').val();
		
		if (mname != '')	{
			
			if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
			else {
				$('#mname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));	
			}
		}
		
		$('#mname').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
});

function isValidMname(valmname) {
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valmname);
}


$(document).ready(function() {
	$('#t1').focusout(function() {
		var t1 = $('#t1').val();
		
		if (t1 != '') {
		
			if (isValidt1(t1)) $('#t1').css('border', '1px solid #0dd01a');
			else {
				$('#t1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt1(valt1) {
	if ($('#t1').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt1);
	}
}

$(document).ready(function() {
	$('#t2').focusout(function() {
		var t2 = $('#t2').val();
		
		if (t2 != '') {
		
			if (isValidt2(t2)) $('#t2').css('border', '1px solid #0dd01a');
			else {
				$('#t2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt2(valt2) {
	if ($('#t2').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt2);
	}
}

$(document).ready(function() {
	$('#t3').focusout(function() {
		var t3 = $('#t3').val();
		
		if (t3 != '') {
		
			if (isValidt3(t3)) $('#t3').css('border', '1px solid #0dd01a');
			else {
				$('#t3').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t3').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t3').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt3(valt3) {

	if ($('#t3').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt3);
	}
}

$(document).ready(function() {
	$('#t4').focusout(function() {
		var t4 = $('#t4').val();
		
		if (t4 != '') {
		
			if (isValidt4(t4)) $('#t4').css('border', '1px solid #0dd01a');
			else {
				$('#t4').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t4').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t4').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt4(valt4) {

	if ($('#t4').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt4);
	}
}

$(document).ready(function() {
	$('#t5').focusout(function() {
		var t5 = $('#t5').val();
		
		if (t5 != '') {
		
			if (isValidt5(t5)) $('#t5').css('border', '1px solid #0dd01a');
			else {
				$('#t5').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t5').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t5').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt5(valt5) {

	if ($('#t5').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt5);
	}
}

$(document).ready(function() {
	$('#t6').focusout(function() {
		var t6 = $('#t6').val();
		
		if (t6 != '') {
		
			if (isValidt6(t6)) $('#t6').css('border', '1px solid #0dd01a');
			else {
				$('#t6').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t6').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t6').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt6(valt6) {

	if ($('#t6').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt6);
	}
}

$(document).ready(function() {
	$('#t7').focusout(function() {
		var t7 = $('#t7').val();
		
		if (t7 != '') {
		
			if (isValidt7(t7)) $('#t7').css('border', '1px solid #0dd01a');
			else {
				$('#t7').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t7').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t7').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt7(valt7) {

	if ($('#t7').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt7);
	}
}

$(document).ready(function() {
	$('#t8').focusout(function() {
		var t8 = $('#t8').val();
		
		if (t8 != '') {
		
			if (isValidt8(t8)) $('#t8').css('border', '1px solid #0dd01a');
			else {
				$('#t8').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t8').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t8').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt8(valt8) {

	if ($('#t8').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt8);
	}
}

$(document).ready(function() {
	$('#t9').focusout(function() {
		var t9 = $('#t9').val();
		
		if (t9 != '') {
		
			if (isValidt9(t9)) $('#t9').css('border', '1px solid #0dd01a');
			else {
				$('#t9').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t9').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t9').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt9(valt9) {

	if ($('#t9').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt9);
	}
}

$(document).ready(function() {
	$('#t10').focusout(function() {
		var t10 = $('#t10').val();
		
		if (t10 != '') {
		
			if (isValidt10(t10)) $('#t10').css('border', '1px solid #0dd01a');
			else {
				$('#t10').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t10').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t10').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt10(valt10) {

	if ($('#t10').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt10);
	}
}

$(document).ready(function() {
	$('#t11').focusout(function() {
		var t11 = $('#t11').val();
		
		if (t11 != '') {
		
			if (isValidt11(t11)) $('#t11').css('border', '1px solid #0dd01a');
			else {
				$('#t11').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t11').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t11').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt11(valt11) {

	if ($('#t11').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt11);
	}
}

$(document).ready(function() {
	$('#t12').focusout(function() {
		var t12 = $('#t12').val();
		
		if (t12 != '') {
		
			if (isValidt12(t12)) $('#t12').css('border', '1px solid #0dd01a');
			else {
				$('#t12').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#t12').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#t12').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidt12(valt12) {

	if ($('#t12').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valt12);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var sname = $('#sname').val(),
		fname = $('#fname').val(),
		mname = $('#mname').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
});