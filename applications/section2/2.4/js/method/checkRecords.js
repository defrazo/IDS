$(document).ready(function() {
	$('#sname').focusout(function() {
		var sname = $('#sname').val();
		
		if (sname != '')	{
		
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
	$('#age').focusout(function() {
		var age = $('#age').val();
		
		if (($(this).val() < 15) || ($(this).val() > 90)) $(this).val($(this).val().substr(0, 0));

		if (age != '') {
		
			if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');
			else {
				$('#age').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#age').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#age').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidAge(valage) {
	if ($('#age').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valage);
	} 

	if ($('#age').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valage);
	}
}

$(document).ready(function() {
	$('#weight').focusout(function() {
		var weight = $('#weight').val();
		
		if (($(this).val() < 30) || ($(this).val() > 250)) $(this).val($(this).val().substr(0, 0));

		if (weight != '') {
			
			if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');
			else {
				$('#weight').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#weight').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#weight').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWeight(valweight) {
	if ($('#weight').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valweight);
	}

	if ($('#weight').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valweight);
	}
}

$(document).ready(function() {
	$('#height').focusout(function() {
		var height = $('#height').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (height != '') {
			
			if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');
			else {
				$('#height').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#height').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#height').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeight(valheight) {
	if ($('#height').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheight);
	}
}

$(document).ready(function() {  
	$('#sist').focusout(function() {
		var sist = $('#sist').val();
		
		if (($(this).val() < 60) || ($(this).val() > 220)) $(this).val($(this).val().substr(0, 0));
		
		if (sist != '') {
			
			if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
			else {
				$('#sist').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#sist').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#sist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidSist(valsist) {
	if ($('#sist').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valsist);
	}

	if ($('#sist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valsist);
	}
}

$(document).ready(function() {
	$('#dia').focusout(function() {
		var dia = $('#dia').val();
		
		if (($(this).val() < 30) || ($(this).val() > 140)) $(this).val($(this).val().substr(0, 0));

		if (dia != '') {
			if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
			else {
				$('#dia').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dia').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#dia').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidDia(valdia) {
	if ($('#dia').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdia);
	}

	if ($('#dia').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdia);
	}
}

$(document).ready(function() {
	$('#exerc').focusout(function() {
		var exerc = $('#exerc').val();
		
		if ($(this).val() > 7) $(this).val($(this).val().substr(0, 0));

		if (exerc != '') {
			
			if (isValidExerc(exerc)) $('#exerc').css('border', '1px solid #0dd01a');
			else {
				$('#exerc').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#exerc').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#exerc').keyup( function() {
		if ($(this).val().length > 1) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidExerc(valexerc) {
	if ($('#exerc').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valexerc);
	}
}

$(document).ready(function() {
	$('#pulse').focusout(function() {
		var pulse = $('#pulse').val();
		
		if ($(this).val() > 200) $(this).val($(this).val().substr(0, 0));

		if (pulse != '') {
			
			if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');	
			else {
				$('#pulse').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulse').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#pulse').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidPulse(valpulse) {
	if ($('#pulse').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valpulse);
	} 

	if ($('#pulse').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulse);
	}

	if ($('#pulse').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulse);
	}
}

$(document).ready(function() {
	$('#pulsel').focusout(function() {
		var pulsel = $('#pulsel').val();
		
		if ($(this).val() > 200) $(this).val($(this).val().substr(0, 0));

		if (pulsel != '') {
			
			if (isValidPulsel(pulsel)) $('#pulsel').css('border', '1px solid #0dd01a');	
			else {
				$('#pulsel').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#pulsel').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#pulsel').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidPulsel(valpulsel) {
	if ($('#pulsel').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valpulsel);
	} 

	if ($('#pulsel').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valpulsel);
	}

	if ($('#pulsel').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valpulsel);
	}
}

$(document).ready(function() {
	$('#cigaret').focusout(function() {
		var cigaret = $('#cigaret').val();
		
		if ($(this).val() > 50) $(this).val($(this).val().substr(0, 0));

		if (cigaret != '') {
			
			if (isValidCigaret(cigaret)) $('#cigaret').css('border', '1px solid #0dd01a');	
			else {
				$('#cigaret').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#cigaret').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#cigaret').keyup( function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidCigaret(valcigaret) {
	if ($('#cigaret').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valcigaret);
	} 

	if ($('#cigaret').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valcigaret);
	}
}

$(document).ready(function() {
	$('#alco').focusout(function() {
		var alco = $('#alco').val();
		
		if ($(this).val() > 3000) $(this).val($(this).val().substr(0, 0));

		if (alco != '') {
			
			if (isValidAlco(alco)) $('#alco').css('border', '1px solid #0dd01a');	
			else {
				$('#alco').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#alco').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#alco').keyup( function() {
		if ($(this).val().length > 4) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidAlco(valalco) {

	if ($('#alco').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valalco);
	}

	if ($('#alco').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valalco);
	}

	if ($('#alco').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9][0-9][0-9]/);
		return pattern.test(valalco);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var sname = $('#sname').val(),
		fname = $('#fname').val(),
		mname = $('#mname').val(),
		age = $('#age').val(),
		weight = $('#weight').val(),
		height = $('#height').val(),
		sist = $('#sist').val(),
		dia = $('#dia').val(),
		exerc = $('#exerc').val(),
		pulse = $('#pulse').val(),
		pulsel = $('#pulsel').val(),
		cigaret = $('#cigaret').val(),
		alco = $('#alco').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');
	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');
	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
	if (isValidExerc(exerc)) $('#exerc').css('border', '1px solid #0dd01a');
	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');
	if (isValidPulsel(pulsel)) $('#pulsel').css('border', '1px solid #0dd01a');
	if (isValidAlco(alco)) $('#alco').css('border', '1px solid #0dd01a');
	if (isValidCigaret(cigaret)) $('#cigaret').css('border', '1px solid #0dd01a');
	if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');
});