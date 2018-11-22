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
	$('#cold').focusout(function() {
		var cold = $('#cold').val();
		
		if ($(this).val() > 7) $(this).val($(this).val().substr(0, 0));

		if (cold != '') {
		
			if (isValidCold(cold)) $('#cold').css('border', '1px solid #0dd01a');
			else {
				$('#cold').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#cold').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#cold').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));
	});
});

function isValidCold(valcold) {
	if ($('#cold').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valcold);
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
	$('#pulse').focusout(function() {
		var pulse = $('#pulse').val();
		
		if (($(this).val() < 45) || ($(this).val() > 130)) $(this).val($(this).val().substr(0, 0));

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
	
	$('#pulse').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidPulse(valpulse) {
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
	$('#sist').focusout(function() {
		var sist = $('#sist').val();
		
		if (($(this).val() < 70) || ($(this).val() > 220)) $(this).val($(this).val().substr(0, 0));
		
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
	$('#rec1').focusout(function() {
		var rec1 = $('#rec1').val();
		
		if ($(this).val() > 20) $(this).val($(this).val().substr(0, 0));

		if (rec1 != '') {
			if (isValidRec1(rec1)) $('#rec1').css('border', '1px solid #0dd01a');
			else {
				$('#rec1').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#rec1').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#rec1').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRec1(valrec1) {
	if ($('#rec1').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrec1);
	}

	if ($('#rec1').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrec1);
	}
}

$(document).ready(function() { 
	$('#rec2').focusout(function() {
		var rec2 = $('#rec2').val();
		
		if ($(this).val() > 60) $(this).val($(this).val().substr(0, 0));

		if (rec2 != '') {
			if (isValidRec2(rec2)) $('#rec2').css('border', '1px solid #0dd01a');
			else {
				$('#rec2').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#rec2').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#rec2').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidRec2(valrec2) {
	if ($('#rec2').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valrec2);
	}

	if ($('#rec2').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valrec2);
	}
}

$(document).ready(function() { 
	$('#lung').focusout(function() {
		var lung = $('#lung').val();
		
		if (($(this).val() < 1500) || ($(this).val() > 9000)) $(this).val($(this).val().substr(0, 0));

		if (lung != '') {
			if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');
			else {
				$('#lung').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#lung').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#lung').keyup(function() {
		if ($(this).val().length > 4) $(this).val($(this).val().substr(0, 4));         
	});
});

function isValidLung(vallung) {
	if ($('#lung').val().length == 4) {
		var pattern = new RegExp(/[0-9][0-9][0-9][0-9]/);
		return pattern.test(vallung);
	}
}

$(document).ready(function() { 
	$('#training').focusout(function() {
		var training = $('#training').val();
		
		if ($(this).val() > 15) $(this).val($(this).val().substr(0, 0));

		if (training != '') {
			if (isValidTraining(training)) $('#training').css('border', '1px solid #0dd01a');
			else {
				$('#training').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#training').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#training').keyup(function() {
		if ($(this).val().length > 2) $(this).val($(this).val().substr(0, 2));         
	});
});

function isValidTraining(valtraining) {
	if ($('#training').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valtraining);
	}

	if ($('#training').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valtraining);
	}
}

$(document).ready(function() { 
	$('#exercval').focusout(function() {
		var exercval = $('#exercval').val();
		
		if ($(this).val() > 300) $(this).val($(this).val().substr(0, 0));

		if (exercval != '') {
			if (isValidExercval(exercval)) $('#exercval').css('border', '1px solid #0dd01a');
			else {
				$('#exercval').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#exercval').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#exercval').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidExercval(valexercval) {
	if ($('#exercval').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valexercval);
	}

	if ($('#exercval').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valexercval);
	}

	if ($('#exercval').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valexercval);
	}
}

$(document).ready(function() { 
	$('#lift').focusout(function() {
		var lift = $('#lift').val();
		
		if ($(this).val() > 300) $(this).val($(this).val().substr(0, 0));

		if (lift != '') {
			if (isValidLift(lift)) $('#lift').css('border', '1px solid #0dd01a');
			else {
				$('#lift').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#lift').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#lift').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidLift(vallift) {
	if ($('#lift').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(vallift);
	}

	if ($('#lift').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(vallift);
	}

	if ($('#lift').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(vallift);
	}
}

$(document).ready(function() { 
	$('#jump').focusout(function() {
		var jump = $('#jump').val();
		
		if (($(this).val() < 50) || ($(this).val() > 350)) $(this).val($(this).val().substr(0, 0));

		if (jump != '') {
			if (isValidJump(jump)) $('#jump').css('border', '1px solid #0dd01a');
			else {
				$('#jump').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#jump').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#jump').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));         
	});
});

function isValidJump(valjump) {
	if ($('#jump').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valjump);
	}

	if ($('#jump').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valjump);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var mname = $('#mname').val(),
		fname = $('#fname').val(),
		sname = $('#sname').val(),
		cold = $('#cold').val(),
		weight = $('#weight').val(),
		height = $('#height').val(),
		pulse = $('#pulse').val(),
		sist = $('#sist').val(),
		dia = $('#dia').val(),
		gender = $('#gender').val(),
		date = $('#date').val(),
		rec1 = $('#rec1').val(),
		rec2 = $('#rec2').val(),
		exercval = $('#exercval').val(),
		lift = $('#lift').val(),
		jump = $('#jump').val(),
		lung = $('#lung').val(),
		training = $('#training').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
	if (isValidCold(cold)) $('#cold').css('border', '1px solid #0dd01a');
	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');
	if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');
	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
	if (isValidPulse(pulse)) $('#pulse').css('border', '1px solid #0dd01a');
	if (isValidRec1(rec1)) $('#rec1').css('border', '1px solid #0dd01a');
	if (isValidRec2(rec2)) $('#rec2').css('border', '1px solid #0dd01a');
	if (isValidExercval(exercval)) $('#exercval').css('border', '1px solid #0dd01a');
	if (isValidLift(lift)) $('#lift').css('border', '1px solid #0dd01a');
	if (isValidJump(jump)) $('#jump').css('border', '1px solid #0dd01a');
	if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');
	if (isValidTraining(training)) $('#training').css('border', '1px solid #0dd01a');
});