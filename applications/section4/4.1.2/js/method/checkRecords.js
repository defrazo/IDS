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
	$('#f11').focusout(function() {
		var q11 = $('#f11').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q11 != '') {
			
			if (isValidQ11(q11)) $('#f11').css('border', '1px solid #0dd01a');
			else {
				$('#f11').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f11').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f11').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ11(valq11) {
	if ($('#f11').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq11);
	}

	if ($('#f11').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq11);
	}

	if ($('#f11').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq11);
	}
}

$(document).ready(function() { 
	$('#f12').focusout(function() {
		var q12 = $('#f12').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q12 != '') {
			
			if (isValidQ12(q12)) $('#f12').css('border', '1px solid #0dd01a');
			else {
				$('#f12').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f12').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f12').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ12(valq12) {
	if ($('#f12').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq12);
	}

	if ($('#f12').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq12);
	}

	if ($('#f12').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq12);
	}
}

$(document).ready(function() { 
	$('#f21').focusout(function() {
		var q21 = $('#f21').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q21 != '') {
			
			if (isValidQ21(q21)) $('#f21').css('border', '1px solid #0dd01a');
			else {
				$('#f21').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f21').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f21').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ21(valq21) {
	if ($('#f21').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq21);
	}

	if ($('#f21').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq21);
	}

	if ($('#f21').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq21);
	}
}

$(document).ready(function() { 
	$('#f22').focusout(function() {
		var q22 = $('#f22').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q22 != '') {
			
			if (isValidQ22(q22)) $('#f22').css('border', '1px solid #0dd01a');
			else {
				$('#f22').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f22').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f22').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ22(valq22) {
	if ($('#f22').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq22);
	}

	if ($('#f22').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq22);
	}

	if ($('#f22').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq22);
	}
}

$(document).ready(function() { 
	$('#f31').focusout(function() {
		var q31 = $('#f31').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q31 != '') {
			
			if (isValidQ31(q31)) $('#f31').css('border', '1px solid #0dd01a');
			else {
				$('#f31').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f31').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f31').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ31(valq31) {
	if ($('#f31').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq31);
	}

	if ($('#f31').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq31);
	}

	if ($('#f31').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq31);
	}
}

$(document).ready(function() { 
	$('#f32').focusout(function() {
		var q32 = $('#f32').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q32 != '') {
			
			if (isValidQ32(q32)) $('#f32').css('border', '1px solid #0dd01a');
			else {
				$('#f32').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f32').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f32').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ32(valq32) {
	if ($('#f32').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq32);
	}

	if ($('#f32').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq32);
	}

	if ($('#f32').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq32);
	}
}

$(document).ready(function() { 
	$('#f41').focusout(function() {
		var q41 = $('#f41').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q41 != '') {
			
			if (isValidQ41(q41)) $('#f41').css('border', '1px solid #0dd01a');
			else {
				$('#f41').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f41').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f41').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ41(valq41) {
	if ($('#f41').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq41);
	}

	if ($('#f41').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq41);
	}

	if ($('#f41').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq41);
	}
}

$(document).ready(function() { 
	$('#f42').focusout(function() {
		var q42 = $('#f42').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q42 != '') {
			
			if (isValidQ42(q42)) $('#f42').css('border', '1px solid #0dd01a');
			else {
				$('#f42').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f42').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f42').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ42(valq42) {
	if ($('#f42').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq42);
	}

	if ($('#f42').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq42);
	}

	if ($('#f42').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq42);
	}
}

$(document).ready(function() { 
	$('#f51').focusout(function() {
		var q51 = $('#f51').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q51 != '') {
			
			if (isValidQ51(q51)) $('#f51').css('border', '1px solid #0dd01a');
			else {
				$('#f51').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f51').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f51').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ51(valq51) {
	if ($('#f51').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq51);
	}

	if ($('#f51').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq51);
	}

	if ($('#f51').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq51);
	}
}

$(document).ready(function() { 
	$('#f52').focusout(function() {
		var q52 = $('#f52').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q52 != '') {
			
			if (isValidQ52(q52)) $('#f52').css('border', '1px solid #0dd01a');
			else {
				$('#f52').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f52').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f52').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ52(valq52) {
	if ($('#f52').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq52);
	}

	if ($('#f52').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq52);
	}

	if ($('#f52').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq52);
	}
}

$(document).ready(function() { 
	$('#f61').focusout(function() {
		var q61 = $('#f61').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q61 != '') {
			
			if (isValidQ61(q61)) $('#f61').css('border', '1px solid #0dd01a');
			else {
				$('#f61').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f61').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f61').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ61(valq61) {
	if ($('#f61').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq61);
	}

	if ($('#f61').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq61);
	}

	if ($('#f61').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq61);
	}
}

$(document).ready(function() { 
	$('#f62').focusout(function() {
		var q62 = $('#f62').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q62 != '') {
			
			if (isValidQ62(q62)) $('#f62').css('border', '1px solid #0dd01a');
			else {
				$('#f62').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f62').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f62').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ62(valq62) {
	if ($('#f62').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq62);
	}

	if ($('#f62').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq62);
	}

	if ($('#f62').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq62);
	}
}

$(document).ready(function() { 
	$('#f71').focusout(function() {
		var q71 = $('#f71').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q71 != '') {
			
			if (isValidQ71(q71)) $('#f71').css('border', '1px solid #0dd01a');
			else {
				$('#f71').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f71').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f71').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ71(valq71) {
	if ($('#f71').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq71);
	}

	if ($('#f71').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq71);
	}

	if ($('#f71').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq71);
	}
}

$(document).ready(function() { 
	$('#f72').focusout(function() {
		var q72 = $('#f72').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q72 != '') {
			
			if (isValidQ72(q72)) $('#f72').css('border', '1px solid #0dd01a');
			else {
				$('#f72').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f72').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f72').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ72(valq72) {
	if ($('#f72').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq72);
	}

	if ($('#f72').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq72);
	}

	if ($('#f72').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq72);
	}
}

$(document).ready(function() { 
	$('#f81').focusout(function() {
		var q81 = $('#f81').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q81 != '') {
			
			if (isValidQ81(q81)) $('#f81').css('border', '1px solid #0dd01a');
			else {
				$('#f81').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f81').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f81').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ81(valq81) {
	if ($('#f81').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq81);
	}

	if ($('#f81').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq81);
	}

	if ($('#f81').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq81);
	}
}

$(document).ready(function() { 
	$('#f82').focusout(function() {
		var q82 = $('#f82').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q82 != '') {
			
			if (isValidQ82(q82)) $('#f82').css('border', '1px solid #0dd01a');
			else {
				$('#f82').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f82').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f82').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ82(valq82) {
	if ($('#f82').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq82);
	}

	if ($('#f82').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq82);
	}

	if ($('#f82').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq82);
	}
}

$(document).ready(function() { 
	$('#f91').focusout(function() {
		var q91 = $('#f91').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q91 != '') {
			
			if (isValidQ91(q91)) $('#f91').css('border', '1px solid #0dd01a');
			else {
				$('#f91').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f91').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f91').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ91(valq91) {
	if ($('#f91').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq91);
	}

	if ($('#f91').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq91);
	}

	if ($('#f91').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq91);
	}
}

$(document).ready(function() { 
	$('#f92').focusout(function() {
		var q92 = $('#f92').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q92 != '') {
			
			if (isValidQ92(q92)) $('#f92').css('border', '1px solid #0dd01a');
			else {
				$('#f92').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f92').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f92').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ92(valq92) {
	if ($('#f92').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq92);
	}

	if ($('#f92').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq92);
	}

	if ($('#f92').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq92);
	}
}

$(document).ready(function() { 
	$('#f101').focusout(function() {
		var q101 = $('#f101').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q101 != '') {
			
			if (isValidQ101(q101)) $('#f101').css('border', '1px solid #0dd01a');
			else {
				$('#f101').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f101').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f101').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ101(valq101) {
	if ($('#f101').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq101);
	}

	if ($('#f101').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq101);
	}

	if ($('#f101').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq101);
	}
}

$(document).ready(function() { 
	$('#f102').focusout(function() {
		var q102 = $('#f102').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q102 != '') {
			
			if (isValidQ102(q102)) $('#f102').css('border', '1px solid #0dd01a');
			else {
				$('#f102').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f102').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f102').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ102(valq102) {
	if ($('#f102').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq102);
	}

	if ($('#f102').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq102);
	}

	if ($('#f102').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq102);
	}
}

$(document).ready(function() { 
	$('#f111').focusout(function() {
		var q111 = $('#f111').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q111 != '') {
			
			if (isValidQ111(q111)) $('#f111').css('border', '1px solid #0dd01a');
			else {
				$('#f111').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f111').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f111').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ111(valq111) {
	if ($('#f111').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq111);
	}

	if ($('#f111').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq111);
	}

	if ($('#f111').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq111);
	}
}

$(document).ready(function() { 
	$('#f112').focusout(function() {
		var q112 = $('#f112').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q112 != '') {
			
			if (isValidQ112(q112)) $('#f112').css('border', '1px solid #0dd01a');
			else {
				$('#f112').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f112').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f112').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ112(valq112) {
	if ($('#f112').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq112);
	}

	if ($('#f112').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq112);
	}

	if ($('#f112').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq112);
	}
}

$(document).ready(function() { 
	$('#f121').focusout(function() {
		var q121 = $('#f121').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q121 != '') {
			
			if (isValidQ121(q121)) $('#f121').css('border', '1px solid #0dd01a');
			else {
				$('#f121').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f121').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f121').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ121(valq121) {
	if ($('#f121').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq121);
	}

	if ($('#f121').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq121);
	}

	if ($('#f121').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq121);
	}
}

$(document).ready(function() { 
	$('#f122').focusout(function() {
		var q122 = $('#f122').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q122 != '') {
			
			if (isValidQ122(q122)) $('#f122').css('border', '1px solid #0dd01a');
			else {
				$('#f122').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f122').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f122').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ122(valq122) {
	if ($('#f122').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq122);
	}

	if ($('#f122').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq122);
	}

	if ($('#f122').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq122);
	}
}

$(document).ready(function() { 
	$('#f131').focusout(function() {
		var q131 = $('#f131').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q131 != '') {
			
			if (isValidQ131(q131)) $('#f131').css('border', '1px solid #0dd01a');
			else {
				$('#f131').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f131').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f131').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ131(valq131) {
	if ($('#f131').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq131);
	}

	if ($('#f131').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq131);
	}

	if ($('#f131').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq131);
	}
}

$(document).ready(function() { 
	$('#f132').focusout(function() {
		var q132 = $('#f132').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q132 != '') {
			
			if (isValidQ132(q132)) $('#f132').css('border', '1px solid #0dd01a');
			else {
				$('#f132').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f132').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f132').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ132(valq132) {
	if ($('#f132').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq132);
	}

	if ($('#f132').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq132);
	}

	if ($('#f132').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq132);
	}
}

$(document).ready(function() { 
	$('#f141').focusout(function() {
		var q141 = $('#f141').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q141 != '') {
			
			if (isValidQ141(q141)) $('#f141').css('border', '1px solid #0dd01a');
			else {
				$('#f141').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f141').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f141').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ141(valq141) {
	if ($('#f141').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq141);
	}

	if ($('#f141').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq141);
	}

	if ($('#f141').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq141);
	}
}

$(document).ready(function() { 
	$('#f142').focusout(function() {
		var q142 = $('#f142').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q142 != '') {
			
			if (isValidQ142(q142)) $('#f142').css('border', '1px solid #0dd01a');
			else {
				$('#f142').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f142').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f142').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ142(valq142) {
	if ($('#f142').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq142);
	}

	if ($('#f142').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq142);
	}

	if ($('#f142').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq142);
	}
}

$(document).ready(function() { 
	$('#f151').focusout(function() {
		var q151 = $('#f151').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q151 != '') {
			
			if (isValidQ151(q151)) $('#f151').css('border', '1px solid #0dd01a');
			else {
				$('#f151').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f151').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f151').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ151(valq151) {
	if ($('#f151').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq151);
	}

	if ($('#f151').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq151);
	}

	if ($('#f151').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq151);
	}
}

$(document).ready(function() { 
	$('#f152').focusout(function() {
		var q152 = $('#f152').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q152 != '') {
			
			if (isValidQ152(q152)) $('#f152').css('border', '1px solid #0dd01a');
			else {
				$('#f152').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f152').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f152').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ152(valq152) {
	if ($('#f152').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq152);
	}

	if ($('#f152').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq152);
	}

	if ($('#f152').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq152);
	}
}

$(document).ready(function() { 
	$('#f161').focusout(function() {
		var q161 = $('#f161').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q161 != '') {
			
			if (isValidQ161(q161)) $('#f161').css('border', '1px solid #0dd01a');
			else {
				$('#f161').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f161').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f161').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ161(valq161) {
	if ($('#f161').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq161);
	}

	if ($('#f161').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq161);
	}

	if ($('#f161').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq161);
	}
}

$(document).ready(function() { 
	$('#f162').focusout(function() {
		var q162 = $('#f162').val();
		
		if (($(this).val() < 1) || ($(this).val() > 300)) $(this).val($(this).val().substr(0, 0));

		if (q162 != '') {
			
			if (isValidQ162(q162)) $('#f162').css('border', '1px solid #0dd01a');
			else {
				$('#f162').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#f162').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#f162').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidQ162(valq162) {
	if ($('#f162').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valq162);
	}

	if ($('#f162').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valq162);
	}

	if ($('#f162').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][1-9]/);
		return pattern.test(valq162);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var sname = $('#sname').val()
		fname = $('#fname').val()
		mname = $('#mname').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
});