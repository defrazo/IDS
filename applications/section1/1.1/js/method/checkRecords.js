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
	$('#inha').focusout(function() {
		var inha = $('#inha').val();
		
		if ($(this).val() > 300) $(this).val($(this).val().substr(0, 0));

		if (inha != '') {
			
			if (isValidInha(inha)) $('#inha').css('border', '1px solid #0dd01a');
			else {
				$('#inha').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#inha').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#inha').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidInha(valinha) {
	if ($('#inha').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valinha);
	} 

	if ($('#inha').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valinha);
	}

	if ($('#inha').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valinha);
	}
}

$(document).ready(function() {
	$('#static').focusout(function() {
		var static = $('#static').val();
		
		if ($(this).val() > 420) $(this).val($(this).val().substr(0, 0));

		if (static != '') {
			
			if (isValidStatic(static)) $('#static').css('border', '1px solid #0dd01a');
			else {
				$('#static').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#static').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#static').keyup( function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));        
	});
});

function isValidStatic(valstatic) {
	if ($('#static').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valstatic);
	} 

	if ($('#static').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valstatic);
	}

	if ($('#static').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valstatic);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var sname = $('#sname').val(),
		fname = $('#fname').val(),
		mname = $('#mname').val(),
		age = $('#age').val(),
		weight = $('#weight').val(),
		sist = $('#sist').val(),
		dia = $('#dia').val(),
		inha = $('#inha').val(),
		static = $('#static').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');
	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');
	if (isValidSist(sist)) $('#sist').css('border', '1px solid #0dd01a');
	if (isValidDia(dia)) $('#dia').css('border', '1px solid #0dd01a');
	if (isValidInha(inha)) $('#inha').css('border', '1px solid #0dd01a');
	if (isValidStatic(static)) $('#static').css('border', '1px solid #0dd01a');
});