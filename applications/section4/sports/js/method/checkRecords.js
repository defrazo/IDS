$(document).ready(function() { //Проверка ввода фамилии 
	$('#sname').focusout(function() { //Проверяет значение поля при снятии фокуса с него
		var sname = $('#sname').val();
		
		if (sname != '')	{
		
			if (isValidSname(sname)) { //Убирает класс ошибки с поля ввода
				$('#sname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vSname', 1);
			} else { //Добавляет класс ошибки к полю ввода
				$('#sname').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0)); //Удаляет строку
			} 
		}
		
		$('#sname').keyup(function() { //Убирает пробелы и прочие символы
			$(this).val($(this).val().trim());
		});
	});
});

function isValidSname(valsname) { //Проверяет соответствие значения поля типу данных
	var pattern = new RegExp(/^[А-Я]{1}[а-я]+$/); 
	return pattern.test(valsname);
}

$(document).ready(function() { //Проверка ввода имени
	$('#fname').focusout(function() {
		var fname = $('#fname').val();
		
		if (fname != '')	{
			
			if (isValidFname(fname)) {
				$('#fname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vFname', 1);
			} else {
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

$(document).ready(function() { //Проверка ввода отчества
	$('#mname').focusout(function() {
		var mname = $('#mname').val();
		
		if (mname != '')	{
			
			if (isValidMname(mname)) {
				$('#mname').css('border', '1px solid #0dd01a');
				localStorage.setItem('vMname', 1);
			} else {
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
	$('#i11').focusout(function() {
		var i11 = $('#i11').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i11 != '') {
			
			if (isValidI11(i11)) {
				$('#i11').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi11', 1);
			} else {
				$('#i11').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i11').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i11').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI11(vali11) {
	if ($('#i11').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali11);
	}

	if ($('#i11').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali11);
	}

	if ($('#i11').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali11);
	}
}

$(document).ready(function() { 
	$('#i12').focusout(function() {
		var i12 = $('#i12').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i12 != '') {
			
			if (isValidI12(i12)) {
				$('#i12').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi12', 1);
			} else {
				$('#i12').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i12').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i12').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI12(vali12) {
	if ($('#i12').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali12);
	}

	if ($('#i12').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali12);
	}

	if ($('#i12').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali12);
	}
}

$(document).ready(function() { 
	$('#i21').focusout(function() {
		var i21 = $('#i21').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i21 != '') {
			
			if (isValidI21(i21)) {
				$('#i21').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi21', 1);
			} else {
				$('#i21').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i21').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i21').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI21(vali21) {
	if ($('#i21').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali21);
	}

	if ($('#i21').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali21);
	}

	if ($('#i21').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali21);
	}
}

$(document).ready(function() { 
	$('#i22').focusout(function() {
		var i22 = $('#i22').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i22 != '') {
			
			if (isValidI22(i22)) {
				$('#i22').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi22', 1);
			} else {
				$('#i22').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i22').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i22').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI22(vali22) {
	if ($('#i22').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali22);
	}

	if ($('#i22').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali22);
	}

	if ($('#i22').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali22);
	}
}

$(document).ready(function() { 
	$('#i31').focusout(function() {
		var i31 = $('#i31').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i31 != '') {
			
			if (isValidI31(i31)) {
				$('#i31').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi31', 1);
			} else {
				$('#i31').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i31').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i31').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI31(vali31) {
	if ($('#i31').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali31);
	}

	if ($('#i31').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali31);
	}

	if ($('#i31').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali31);
	}
}

$(document).ready(function() { 
	$('#i32').focusout(function() {
		var i32 = $('#i32').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i32 != '') {
			
			if (isValidI32(i32)) {
				$('#i32').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi32', 1);
			} else {
				$('#i32').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i32').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i32').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI32(vali32) {
	if ($('#i32').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali32);
	}

	if ($('#i32').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali32);
	}

	if ($('#i32').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali32);
	}
}

$(document).ready(function() { 
	$('#i41').focusout(function() {
		var i41 = $('#i41').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i41 != '') {
			
			if (isValidI41(i41)) {
				$('#i41').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi41', 1);
			} else {
				$('#i41').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i41').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i41').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI41(vali41) {
	if ($('#i41').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali41);
	}

	if ($('#i41').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali41);
	}

	if ($('#i41').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali41);
	}
}

$(document).ready(function() { 
	$('#i42').focusout(function() {
		var i42 = $('#i42').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i42 != '') {
			
			if (isValidI42(i42)) {
				$('#i42').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi42', 1);
			} else {
				$('#i42').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i42').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i42').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI42(vali42) {
	if ($('#i42').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali42);
	}

	if ($('#i42').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali42);
	}

	if ($('#i42').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali42);
	}
}

$(document).ready(function() { 
	$('#i51').focusout(function() {
		var i51 = $('#i51').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i51 != '') {
			
			if (isValidI51(i51)) {
				$('#i51').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi51', 1);
			} else {
				$('#i51').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i51').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i51').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI51(vali51) {
	if ($('#i51').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali51);
	}

	if ($('#i51').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali51);
	}

	if ($('#i51').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali51);
	}
}

$(document).ready(function() { 
	$('#i52').focusout(function() {
		var i52 = $('#i52').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i52 != '') {
			
			if (isValidI52(i52)) {
				$('#i52').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi52', 1);
			} else {
				$('#i52').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i52').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i52').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI52(vali52) {
	if ($('#i52').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali52);
	}

	if ($('#i52').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali52);
	}

	if ($('#i52').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali52);
	}
}

$(document).ready(function() { 
	$('#i61').focusout(function() {
		var i61 = $('#i61').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i61 != '') {
			
			if (isValidI61(i61)) {
				$('#i61').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi61', 1);
			} else {
				$('#i61').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i61').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i61').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI61(vali61) {
	if ($('#i61').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali61);
	}

	if ($('#i61').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali61);
	}

	if ($('#i61').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali61);
	}
}

$(document).ready(function() { 
	$('#i62').focusout(function() {
		var i62 = $('#i62').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i62 != '') {
			
			if (isValidI62(i62)) {
				$('#i62').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi62', 1);
			} else {
				$('#i62').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i62').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i62').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI62(vali62) {
	if ($('#i62').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali62);
	}

	if ($('#i62').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali62);
	}

	if ($('#i62').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali62);
	}
}

$(document).ready(function() { 
	$('#i71').focusout(function() {
		var i71 = $('#i71').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i71 != '') {
			
			if (isValidI71(i71)) {
				$('#i71').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi71', 1);
			} else {
				$('#i71').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i71').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i71').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI71(vali71) {
	if ($('#i71').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali71);
	}

	if ($('#i71').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali71);
	}

	if ($('#i71').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali71);
	}
}

$(document).ready(function() { 
	$('#i72').focusout(function() {
		var i72 = $('#i72').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i72 != '') {
			
			if (isValidI72(i72)) {
				$('#i72').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi72', 1);
			} else {
				$('#i72').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i72').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i72').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI72(vali72) {
	if ($('#i72').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali72);
	}

	if ($('#i72').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali72);
	}

	if ($('#i72').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali72);
	}
}

$(document).ready(function() { 
	$('#i81').focusout(function() {
		var i81 = $('#i81').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i81 != '') {
			
			if (isValidI81(i81)) {
				$('#i81').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi81', 1);
			} else {
				$('#i81').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i81').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i81').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI81(vali81) {
	if ($('#i81').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali81);
	}

	if ($('#i81').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali81);
	}

	if ($('#i81').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali81);
	}
}

$(document).ready(function() { 
	$('#i82').focusout(function() {
		var i82 = $('#i82').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i82 != '') {
			
			if (isValidI82(i82)) {
				$('#i82').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi82', 1);
			} else {
				$('#i82').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i82').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i82').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI82(vali82) {
	if ($('#i82').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali82);
	}

	if ($('#i82').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali82);
	}

	if ($('#i82').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali82);
	}
}

$(document).ready(function() { 
	$('#i91').focusout(function() {
		var i91 = $('#i91').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i91 != '') {
			
			if (isValidI91(i91)) {
				$('#i91').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi91', 1);
			} else {
				$('#i91').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i91').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i91').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI91(vali91) {
	if ($('#i91').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali91);
	}

	if ($('#i91').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali91);
	}

	if ($('#i91').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali91);
	}
}

$(document).ready(function() { 
	$('#i92').focusout(function() {
		var i92 = $('#i92').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i92 != '') {
			
			if (isValidI92(i92)) {
				$('#i92').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi92', 1);
			} else {
				$('#i92').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i92').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i92').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI92(vali92) {
	if ($('#i92').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali92);
	}

	if ($('#i92').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali92);
	}

	if ($('#i92').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali92);
	}
}

$(document).ready(function() { 
	$('#i101').focusout(function() {
		var i101 = $('#i101').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i101 != '') {
			
			if (isValidI101(i101)) {
				$('#i101').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi101', 1);
			} else {
				$('#i101').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i101').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i101').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI101(vali101) {
	if ($('#i101').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali101);
	}

	if ($('#i101').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali101);
	}

	if ($('#i101').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali101);
	}
}

$(document).ready(function() { 
	$('#i102').focusout(function() {
		var i102 = $('#i102').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i102 != '') {
			
			if (isValidI102(i102)) {
				$('#i102').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi102', 1);
			} else {
				$('#i102').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i102').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i102').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI102(vali102) {
	if ($('#i102').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali102);
	}

	if ($('#i102').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali102);
	}

	if ($('#i102').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali102);
	}
}

$(document).ready(function() { 
	$('#i111').focusout(function() {
		var i111 = $('#i111').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i111 != '') {
			
			if (isValidI111(i111)) {
				$('#i111').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi111', 1);
			} else {
				$('#i111').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i111').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i111').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI111(vali111) {
	if ($('#i111').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali111);
	}

	if ($('#i111').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali111);
	}

	if ($('#i111').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali111);
	}
}

$(document).ready(function() { 
	$('#i112').focusout(function() {
		var i112 = $('#i112').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i112 != '') {
			
			if (isValidI112(i112)) {
				$('#i112').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi112', 1);
			} else {
				$('#i112').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i112').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i112').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI112(vali112) {
	if ($('#i112').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali112);
	}

	if ($('#i112').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali112);
	}

	if ($('#i112').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali112);
	}
}

$(document).ready(function() { 
	$('#i121').focusout(function() {
		var i121 = $('#i121').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i121 != '') {
			
			if (isValidI121(i121)) {
				$('#i121').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi121', 1);
			} else {
				$('#i121').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i121').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i121').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI121(vali121) {
	if ($('#i121').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali121);
	}

	if ($('#i121').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali121);
	}

	if ($('#i121').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali121);
	}
}

$(document).ready(function() { 
	$('#i122').focusout(function() {
		var i122 = $('#i122').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (i122 != '') {
			
			if (isValidI122(i122)) {
				$('#i122').css('border', '1px solid #0dd01a');
				localStorage.setItem('vi122', 1);
			} else {
				$('#i122').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#i122').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#i122').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidI122(vali122) {
	if ($('#i122').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(vali122);
	}

	if ($('#i122').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(vali122);
	}

	if ($('#i122').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(vali122);
	}
}

$(document).on('click focuson focusout mousemove', function() { //Подсветка правильности
	var sname = $('#sname').val();
	var fname = $('#fname').val();
	var mname = $('#mname').val();
	var fac = $('#fac').val();
	
	if (isValidSname(sname)) $('#sname').css('border', '1px solid #0dd01a');	

	if (isValidFname(fname)) $('#fname').css('border', '1px solid #0dd01a');	

	if (isValidMname(mname)) $('#mname').css('border', '1px solid #0dd01a');	

	if (fac) $('#fac').css('border', '1px solid #0dd01a');	
});