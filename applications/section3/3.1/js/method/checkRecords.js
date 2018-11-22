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
	$('#heightsit').focusout(function() {
		var heightsit = $('#heightsit').val();
		
		if (($(this).val() < 50) || ($(this).val() > 180)) $(this).val($(this).val().substr(0, 0));

		if (heightsit != '') {
			
			if (isValidHeightsit(heightsit)) $('#heightsit').css('border', '1px solid #0dd01a');
			else {
				$('#heightsit').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightsit').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightsit').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightsit(valheightsit) {
	if ($('#heightsit').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightsit);
	}
}

$(document).ready(function() {
	$('#heightmother').focusout(function() {
		var heightmother = $('#heightmother').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (heightmother != '') {
			
			if (isValidHeightmother(heightmother)) $('#heightmother').css('border', '1px solid #0dd01a');
			else {
				$('#heightmother').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightmother').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightmother').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightmother(valheightmother) {
	if ($('#heightmother').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightmother);
	}
}

$(document).ready(function() {
	$('#heightfather').focusout(function() {
		var heightfather = $('#heightfather').val();
		
		if (($(this).val() < 100) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (heightfather != '') {
			
			if (isValidHeightfather(heightfather)) $('#heightfather').css('border', '1px solid #0dd01a');
			else {
				$('#heightfather').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#heightfather').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#heightfather').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidHeightfather(valheightfather) {
	if ($('#heightfather').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valheightfather);
	}
}

$(document).ready(function() { 
	$('#lung').focusout(function() {
		var lung = $('#lung').val();
		
		if (($(this).val() < 1000) || ($(this).val() > 9000)) $(this).val($(this).val().substr(0, 0));

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
	$('#dynam').focusout(function() {
		var dynam = $('#dynam').val();
		
		if (($(this).val() < 8) || ($(this).val() > 100)) $(this).val($(this).val().substr(0, 0));
		
		if (dynam != '') {
			
			if (isValidDynam(dynam)) $('#dynam').css('border', '1px solid #0dd01a');
			else {
				$('#dynam').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#dynam').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});  
	
	$('#dynam').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));       
	});
});

function isValidDynam(valdynam) {
	if ($('#dynam').val().length == 1) {
		var pattern = new RegExp(/[0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valdynam);
	}

	if ($('#dynam').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valdynam);
	}
}

$(document).ready(function() {
	$('#chest').focusout(function() {
		var chest = $('#chest').val();
		
		if (($(this).val() < 20) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (chest != '') {
			
			if (isValidChest(chest)) $('#chest').css('border', '1px solid #0dd01a');
			else {
				$('#chest').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#chest').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#chest').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidChest(valchest) {
	if ($('#chest').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valchest);
	}

	if ($('#chest').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valchest);
	}
}

$(document).ready(function() {
	$('#shoulders').focusout(function() {
		var shoulders = $('#shoulders').val();
		
		if (($(this).val() < 18) || ($(this).val() > 230)) $(this).val($(this).val().substr(0, 0));

		if (shoulders != '') {
			
			if (isValidShoulders(shoulders)) $('#shoulders').css('border', '1px solid #0dd01a');
			else {
				$('#shoulders').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#shoulders').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#shoulders').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidShoulders(valshoulders) {
	if ($('#shoulders').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valshoulders);
	}

	if ($('#shoulders').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valshoulders);
	}
}

$(document).ready(function() {
	$('#waist').focusout(function() {
		var waist = $('#waist').val();
		
		if (($(this).val() < 40) || ($(this).val() > 150)) $(this).val($(this).val().substr(0, 0));

		if (waist != '') {
			
			if (isValidWaist(waist)) $('#waist').css('border', '1px solid #0dd01a');
			else {
				$('#waist').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#waist').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#waist').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidWaist(valwaist) {
	if ($('#waist').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(valwaist);
	}

	if ($('#waist').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(valwaist);
	}
}

$(document).ready(function() {
	$('#legs').focusout(function() {
		var legs = $('#legs').val();
		
		if (($(this).val() < 50) || ($(this).val() > 160)) $(this).val($(this).val().substr(0, 0));

		if (legs != '') {
			
			if (isValidLegs(legs)) $('#legs').css('border', '1px solid #0dd01a');
			else {
				$('#legs').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#legs').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#legs').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidLegs(vallegs) {
	if ($('#legs').val().length == 2) {
		var pattern = new RegExp(/[0-9][0-9]/);
		return pattern.test(vallegs);
	}

	if ($('#legs').val().length == 3) {
		var pattern = new RegExp(/[0-9][0-9][0-9]/);
		return pattern.test(vallegs);
	}
}

$(document).on('click focuson focusout mousemove', function() {
	var mname = $('#mname').val(),
		fname = $('#fname').val(),
		sname = $('#sname').val(),
		age = $('#age').val(),
		weight = $('#weight').val(),
		height = $('#height').val(),
		heightsit = $('#heightsit').val(),
		heightmother = $('#heightmother').val(),
		heightfather = $('#heightfather').val(),
		lung = $('#lung').val(),
		dynam = $('#dynam').val(),
		chest = $('#chest').val(),
		waist = $('#waist').val(),
		legs = $('#legs').val(),
		shoulders = $('#shoulders').val();
		
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');
	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');
	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');
	if (isValidAge(age)) $('#age').css('border', '1px solid #0dd01a');
	if (isValidWeight(weight)) $('#weight').css('border', '1px solid #0dd01a');
	if (isValidHeight(height)) $('#height').css('border', '1px solid #0dd01a');
	if (isValidHeightsit(heightsit)) $('#heightsit').css('border', '1px solid #0dd01a');
	if (isValidHeightmother(heightmother)) $('#heightmother').css('border', '1px solid #0dd01a');
	if (isValidHeightfather(heightfather)) $('#heightfather').css('border', '1px solid #0dd01a');
	if (isValidLung(lung)) $('#lung').css('border', '1px solid #0dd01a');
	if (isValidDynam(dynam)) $('#dynam').css('border', '1px solid #0dd01a');
	if (isValidChest(chest)) $('#chest').css('border', '1px solid #0dd01a');
	if (isValidWaist(waist)) $('#waist').css('border', '1px solid #0dd01a');
	if (isValidShoulders(shoulders)) $('#shoulders').css('border', '1px solid #0dd01a');
	if (isValidLegs(legs)) $('#legs').css('border', '1px solid #0dd01a');	
});