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
	$('#h11').focusout(function() {
		var h11 = $('#h11').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h11 != '') {
			
			if (isValidH11(h11)) {
				$('#h11').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh11', 1);
			} else {
				$('#h11').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h11').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h11').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH11(valh11) {
	if ($('#h11').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh11);
	}

	if ($('#h11').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh11);
	}

	if ($('#h11').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh11);
	}
}

$(document).ready(function() { 
	$('#h12').focusout(function() {
		var h12 = $('#h12').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h12 != '') {
			
			if (isValidH12(h12)) {
				$('#h12').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh12', 1);
			} else {
				$('#h12').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h12').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h12').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH12(valh12) {
	if ($('#h12').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh12);
	}

	if ($('#h12').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh12);
	}

	if ($('#h12').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh12);
	}
}

$(document).ready(function() { 
	$('#h21').focusout(function() {
		var h21 = $('#h21').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h21 != '') {
			
			if (isValidH21(h21)) {
				$('#h21').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh21', 1);
			} else {
				$('#h21').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h21').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h21').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH21(valh21) {
	if ($('#h21').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh21);
	}

	if ($('#h21').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh21);
	}

	if ($('#h21').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh21);
	}
}

$(document).ready(function() { 
	$('#h22').focusout(function() {
		var h22 = $('#h22').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h22 != '') {
			
			if (isValidH22(h22)) {
				$('#h22').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh22', 1);
			} else {
				$('#h22').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h22').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h22').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH22(valh22) {
	if ($('#h22').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh22);
	}

	if ($('#h22').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh22);
	}

	if ($('#h22').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh22);
	}
}

$(document).ready(function() { 
	$('#h31').focusout(function() {
		var h31 = $('#h31').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h31 != '') {
			
			if (isValidH31(h31)) {
				$('#h31').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh31', 1);
			} else {
				$('#h31').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h31').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h31').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH31(valh31) {
	if ($('#h31').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh31);
	}

	if ($('#h31').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh31);
	}

	if ($('#h31').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh31);
	}
}

$(document).ready(function() { 
	$('#h32').focusout(function() {
		var h32 = $('#h32').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h32 != '') {
			
			if (isValidH32(h32)) {
				$('#h32').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh32', 1);
			} else {
				$('#h32').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h32').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h32').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH32(valh32) {
	if ($('#h32').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh32);
	}

	if ($('#h32').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh32);
	}

	if ($('#h32').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh32);
	}
}

$(document).ready(function() { 
	$('#h41').focusout(function() {
		var h41 = $('#h41').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h41 != '') {
			
			if (isValidH41(h41)) {
				$('#h41').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh41', 1);
			} else {
				$('#h41').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h41').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h41').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH41(valh41) {
	if ($('#h41').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh41);
	}

	if ($('#h41').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh41);
	}

	if ($('#h41').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh41);
	}
}

$(document).ready(function() { 
	$('#h42').focusout(function() {
		var h42 = $('#h42').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h42 != '') {
			
			if (isValidH42(h42)) {
				$('#h42').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh42', 1);
			} else {
				$('#h42').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h42').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h42').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH42(valh42) {
	if ($('#h42').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh42);
	}

	if ($('#h42').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh42);
	}

	if ($('#h42').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh42);
	}
}

$(document).ready(function() { 
	$('#h51').focusout(function() {
		var h51 = $('#h51').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h51 != '') {
			
			if (isValidH51(h51)) {
				$('#h51').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh51', 1);
			} else {
				$('#h51').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h51').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h51').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH51(valh51) {
	if ($('#h51').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh51);
	}

	if ($('#h51').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh51);
	}

	if ($('#h51').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh51);
	}
}

$(document).ready(function() { 
	$('#h52').focusout(function() {
		var h52 = $('#h52').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h52 != '') {
			
			if (isValidH52(h52)) {
				$('#h52').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh52', 1);
			} else {
				$('#h52').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h52').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h52').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH52(valh52) {
	if ($('#h52').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh52);
	}

	if ($('#h52').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh52);
	}

	if ($('#h52').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh52);
	}
}

$(document).ready(function() { 
	$('#h61').focusout(function() {
		var h61 = $('#h61').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h61 != '') {
			
			if (isValidH61(h61)) {
				$('#h61').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh61', 1);
			} else {
				$('#h61').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h61').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h61').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH61(valh61) {
	if ($('#h61').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh61);
	}

	if ($('#h61').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh61);
	}

	if ($('#h61').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh61);
	}
}

$(document).ready(function() { 
	$('#h62').focusout(function() {
		var h62 = $('#h62').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h62 != '') {
			
			if (isValidH62(h62)) {
				$('#h62').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh62', 1);
			} else {
				$('#h62').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h62').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h62').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH62(valh62) {
	if ($('#h62').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh62);
	}

	if ($('#h62').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh62);
	}

	if ($('#h62').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh62);
	}
}

$(document).ready(function() { 
	$('#h71').focusout(function() {
		var h71 = $('#h71').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h71 != '') {
			
			if (isValidH71(h71)) {
				$('#h71').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh71', 1);
			} else {
				$('#h71').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h71').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h71').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH71(valh71) {
	if ($('#h71').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh71);
	}

	if ($('#h71').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh71);
	}

	if ($('#h71').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh71);
	}
}

$(document).ready(function() { 
	$('#h72').focusout(function() {
		var h72 = $('#h72').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h72 != '') {
			
			if (isValidH72(h72)) {
				$('#h72').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh72', 1);
			} else {
				$('#h72').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h72').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h72').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH72(valh72) {
	if ($('#h72').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh72);
	}

	if ($('#h72').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh72);
	}

	if ($('#h72').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh72);
	}
}

$(document).ready(function() { 
	$('#h81').focusout(function() {
		var h81 = $('#h81').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h81 != '') {
			
			if (isValidH81(h81)) {
				$('#h81').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh81', 1);
			} else {
				$('#h81').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h81').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h81').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH81(valh81) {
	if ($('#h81').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh81);
	}

	if ($('#h81').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh81);
	}

	if ($('#h81').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh81);
	}
}

$(document).ready(function() { 
	$('#h82').focusout(function() {
		var h82 = $('#h82').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h82 != '') {
			
			if (isValidH82(h82)) {
				$('#h82').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh82', 1);
			} else {
				$('#h82').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h82').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h82').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH82(valh82) {
	if ($('#h82').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh82);
	}

	if ($('#h82').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh82);
	}

	if ($('#h82').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh82);
	}
}

$(document).ready(function() { 
	$('#h91').focusout(function() {
		var h91 = $('#h91').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h91 != '') {
			
			if (isValidH91(h91)) {
				$('#h91').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh91', 1);
			} else {
				$('#h91').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h91').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h91').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH91(valh91) {
	if ($('#h91').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh91);
	}

	if ($('#h91').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh91);
	}

	if ($('#h91').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh91);
	}
}

$(document).ready(function() { 
	$('#h92').focusout(function() {
		var h92 = $('#h92').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h92 != '') {
			
			if (isValidH92(h92)) {
				$('#h92').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh92', 1);
			} else {
				$('#h92').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h92').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h92').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH92(valh92) {
	if ($('#h92').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh92);
	}

	if ($('#h92').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh92);
	}

	if ($('#h92').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh92);
	}
}

$(document).ready(function() { 
	$('#h101').focusout(function() {
		var h101 = $('#h101').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h101 != '') {
			
			if (isValidH101(h101)) {
				$('#h101').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh101', 1);
			} else {
				$('#h101').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h101').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h101').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH101(valh101) {
	if ($('#h101').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh101);
	}

	if ($('#h101').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh101);
	}

	if ($('#h101').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh101);
	}
}

$(document).ready(function() { 
	$('#h102').focusout(function() {
		var h102 = $('#h102').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h102 != '') {
			
			if (isValidH102(h102)) {
				$('#h102').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh102', 1);
			} else {
				$('#h102').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h102').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h102').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH102(valh102) {
	if ($('#h102').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh102);
	}

	if ($('#h102').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh102);
	}

	if ($('#h102').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh102);
	}
}

$(document).ready(function() { 
	$('#h111').focusout(function() {
		var h111 = $('#h111').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h111 != '') {
			
			if (isValidH111(h111)) {
				$('#h111').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh111', 1);
			} else {
				$('#h111').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h111').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h111').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH111(valh111) {
	if ($('#h111').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh111);
	}

	if ($('#h111').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh111);
	}

	if ($('#h111').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh111);
	}
}

$(document).ready(function() { 
	$('#h112').focusout(function() {
		var h112 = $('#h112').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h112 != '') {
			
			if (isValidH112(h112)) {
				$('#h112').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh112', 1);
			} else {
				$('#h112').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h112').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h112').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH112(valh112) {
	if ($('#h112').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh112);
	}

	if ($('#h112').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh112);
	}

	if ($('#h112').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh112);
	}
}

$(document).ready(function() { 
	$('#h121').focusout(function() {
		var h121 = $('#h121').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h121 != '') {
			
			if (isValidH121(h121)) {
				$('#h121').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh121', 1);
			} else {
				$('#h121').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h121').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h121').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH121(valh121) {
	if ($('#h121').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh121);
	}

	if ($('#h121').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh121);
	}

	if ($('#h121').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh121);
	}
}

$(document).ready(function() { 
	$('#h122').focusout(function() {
		var h122 = $('#h122').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h122 != '') {
			
			if (isValidH122(h122)) {
				$('#h122').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh122', 1);
			} else {
				$('#h122').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h122').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h122').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH122(valh122) {
	if ($('#h122').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh122);
	}

	if ($('#h122').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh122);
	}

	if ($('#h122').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh122);
	}
}

$(document).ready(function() { 
	$('#h131').focusout(function() {
		var h131 = $('#h131').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h131 != '') {
			
			if (isValidH131(h131)) {
				$('#h131').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh131', 1);
			} else {
				$('#h131').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h131').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h131').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH131(valh131) {
	if ($('#h131').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh131);
	}

	if ($('#h131').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh131);
	}

	if ($('#h131').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh131);
	}
}

$(document).ready(function() { 
	$('#h132').focusout(function() {
		var h132 = $('#h132').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h132 != '') {
			
			if (isValidH132(h132)) {
				$('#h132').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh132', 1);
			} else {
				$('#h132').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h132').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h132').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH132(valh132) {
	if ($('#h132').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh132);
	}

	if ($('#h132').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh132);
	}

	if ($('#h132').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh132);
	}
}

$(document).ready(function() { 
	$('#h141').focusout(function() {
		var h141 = $('#h141').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h141 != '') {
			
			if (isValidH141(h141)) {
				$('#h141').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh141', 1);
			} else {
				$('#h141').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h141').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h141').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH141(valh141) {
	if ($('#h141').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh141);
	}

	if ($('#h141').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh141);
	}

	if ($('#h141').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh141);
	}
}

$(document).ready(function() { 
	$('#h142').focusout(function() {
		var h142 = $('#h142').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h142 != '') {
			
			if (isValidH142(h142)) {
				$('#h142').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh142', 1);
			} else {
				$('#h142').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h142').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h142').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH142(valh142) {
	if ($('#h142').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh142);
	}

	if ($('#h142').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh142);
	}

	if ($('#h142').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh142);
	}
}

$(document).ready(function() { 
	$('#h151').focusout(function() {
		var h151 = $('#h151').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h151 != '') {
			
			if (isValidH151(h151)) {
				$('#h151').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh151', 1);
			} else {
				$('#h151').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h151').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h151').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH151(valh151) {
	if ($('#h151').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh151);
	}

	if ($('#h151').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh151);
	}

	if ($('#h151').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh151);
	}
}

$(document).ready(function() { 
	$('#h152').focusout(function() {
		var h152 = $('#h152').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h152 != '') {
			
			if (isValidH152(h152)) {
				$('#h152').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh152', 1);
			} else {
				$('#h152').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h152').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h152').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH152(valh152) {
	if ($('#h152').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh152);
	}

	if ($('#h152').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh152);
	}

	if ($('#h152').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh152);
	}
}

$(document).ready(function() { 
	$('#h161').focusout(function() {
		var h161 = $('#h161').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h161 != '') {
			
			if (isValidH161(h161)) {
				$('#h161').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh161', 1);
			} else {
				$('#h161').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h161').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h161').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH161(valh161) {
	if ($('#h161').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh161);
	}

	if ($('#h161').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh161);
	}

	if ($('#h161').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh161);
	}
}

$(document).ready(function() { 
	$('#h162').focusout(function() {
		var h162 = $('#h162').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h162 != '') {
			
			if (isValidH162(h162)) {
				$('#h162').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh162', 1);
			} else {
				$('#h162').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h162').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h162').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH162(valh162) {
	if ($('#h162').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh162);
	}

	if ($('#h162').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh162);
	}

	if ($('#h162').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh162);
	}
}

$(document).ready(function() { 
	$('#h171').focusout(function() {
		var h171 = $('#h171').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h171 != '') {
			
			if (isValidH171(h171)) {
				$('#h171').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh171', 1);
			} else {
				$('#h171').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h171').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h171').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH171(valh171) {
	if ($('#h171').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh171);
	}

	if ($('#h171').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh171);
	}

	if ($('#h171').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh171);
	}
}

$(document).ready(function() { 
	$('#h172').focusout(function() {
		var h172 = $('#h172').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h172 != '') {
			
			if (isValidH172(h172)) {
				$('#h172').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh172', 1);
			} else {
				$('#h172').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h172').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h172').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH172(valh172) {
	if ($('#h172').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh172);
	}

	if ($('#h172').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh172);
	}

	if ($('#h172').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh172);
	}
}

$(document).ready(function() { 
	$('#h181').focusout(function() {
		var h181 = $('#h181').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h181 != '') {
			
			if (isValidH181(h181)) {
				$('#h181').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh181', 1);
			} else {
				$('#h181').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h181').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h181').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH181(valh181) {
	if ($('#h181').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh181);
	}

	if ($('#h181').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh181);
	}

	if ($('#h181').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh181);
	}
}

$(document).ready(function() { 
	$('#h182').focusout(function() {
		var h182 = $('#h182').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h182 != '') {
			
			if (isValidH182(h182)) {
				$('#h182').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh182', 1);
			} else {
				$('#h182').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h182').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h182').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH182(valh182) {
	if ($('#h182').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh182);
	}

	if ($('#h182').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh182);
	}

	if ($('#h182').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh182);
	}
}

$(document).ready(function() { 
	$('#h191').focusout(function() {
		var h191 = $('#h191').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h191 != '') {
			
			if (isValidH191(h191)) {
				$('#h191').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh191', 1);
			} else {
				$('#h191').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h191').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h191').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH191(valh191) {
	if ($('#h191').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh191);
	}

	if ($('#h191').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh191);
	}

	if ($('#h191').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh191);
	}
}

$(document).ready(function() { 
	$('#h192').focusout(function() {
		var h192 = $('#h192').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h192 != '') {
			
			if (isValidH192(h192)) {
				$('#h192').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh192', 1);
			} else {
				$('#h192').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h192').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h192').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH192(valh192) {
	if ($('#h192').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh192);
	}

	if ($('#h192').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh192);
	}

	if ($('#h192').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh192);
	}
}

$(document).ready(function() { 
	$('#h201').focusout(function() {
		var h201 = $('#h201').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h201 != '') {
			
			if (isValidH201(h201)) {
				$('#h201').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh201', 1);
			} else {
				$('#h201').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h201').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h201').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH201(valh201) {
	if ($('#h201').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh201);
	}

	if ($('#h201').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh201);
	}

	if ($('#h201').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh201);
	}
}

$(document).ready(function() { 
	$('#h202').focusout(function() {
		var h202 = $('#h202').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h202 != '') {
			
			if (isValidH202(h202)) {
				$('#h202').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh202', 1);
			} else {
				$('#h202').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h202').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h202').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH202(valh202) {
	if ($('#h202').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh202);
	}

	if ($('#h202').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh202);
	}

	if ($('#h202').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh202);
	}
}

$(document).ready(function() { 
	$('#h211').focusout(function() {
		var h211 = $('#h211').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h211 != '') {
			
			if (isValidH211(h211)) {
				$('#h211').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh211', 1);
			} else {
				$('#h211').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h211').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h211').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH211(valh211) {
	if ($('#h211').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh211);
	}

	if ($('#h211').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh211);
	}

	if ($('#h211').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh211);
	}
}

$(document).ready(function() { 
	$('#h212').focusout(function() {
		var h212 = $('#h212').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h212 != '') {
			
			if (isValidH212(h212)) {
				$('#h212').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh212', 1);
			} else {
				$('#h212').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h212').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h212').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH212(valh212) {
	if ($('#h212').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh212);
	}

	if ($('#h212').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh212);
	}

	if ($('#h212').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh212);
	}
}

$(document).ready(function() { 
	$('#h221').focusout(function() {
		var h221 = $('#h221').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h221 != '') {
			
			if (isValidH221(h221)) {
				$('#h221').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh221', 1);
			} else {
				$('#h221').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h221').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h221').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH221(valh221) {
	if ($('#h221').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh221);
	}

	if ($('#h221').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh221);
	}

	if ($('#h221').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh221);
	}
}

$(document).ready(function() { 
	$('#h222').focusout(function() {
		var h222 = $('#h222').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h222 != '') {
			
			if (isValidH222(h222)) {
				$('#h222').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh222', 1);
			} else {
				$('#h222').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h222').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h222').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH222(valh222) {
	if ($('#h222').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh222);
	}

	if ($('#h222').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh222);
	}

	if ($('#h222').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh222);
	}
}

$(document).ready(function() { 
	$('#h231').focusout(function() {
		var h231 = $('#h231').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h231 != '') {
			
			if (isValidH231(h231)) {
				$('#h231').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh231', 1);
			} else {
				$('#h231').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h231').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h231').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH231(valh231) {
	if ($('#h231').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh231);
	}

	if ($('#h231').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh231);
	}

	if ($('#h231').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh231);
	}
}

$(document).ready(function() { 
	$('#h232').focusout(function() {
		var h232 = $('#h232').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h232 != '') {
			
			if (isValidH232(h232)) {
				$('#h232').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh232', 1);
			} else {
				$('#h232').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h232').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h232').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH232(valh232) {
	if ($('#h232').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh232);
	}

	if ($('#h232').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh232);
	}

	if ($('#h232').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh232);
	}
}

$(document).ready(function() { 
	$('#h241').focusout(function() {
		var h241 = $('#h241').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h241 != '') {
			
			if (isValidH241(h241)) {
				$('#h241').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh241', 1);
			} else {
				$('#h241').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h241').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h241').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH241(valh241) {
	if ($('#h241').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh241);
	}

	if ($('#h241').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh241);
	}

	if ($('#h241').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh241);
	}
}

$(document).ready(function() { 
	$('#h242').focusout(function() {
		var h242 = $('#h242').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h242 != '') {
			
			if (isValidH242(h242)) {
				$('#h242').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh242', 1);
			} else {
				$('#h242').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h242').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h242').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH242(valh242) {
	if ($('#h242').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh242);
	}

	if ($('#h242').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh242);
	}

	if ($('#h242').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh242);
	}
}

$(document).ready(function() { 
	$('#h251').focusout(function() {
		var h251 = $('#h251').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h251 != '') {
			
			if (isValidH251(h251)) {
				$('#h251').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh251', 1);
			} else {
				$('#h251').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h251').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h251').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH251(valh251) {
	if ($('#h251').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh251);
	}

	if ($('#h251').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh251);
	}

	if ($('#h251').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh251);
	}
}

$(document).ready(function() { 
	$('#h252').focusout(function() {
		var h252 = $('#h252').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h252 != '') {
			
			if (isValidH252(h252)) {
				$('#h252').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh252', 1);
			} else {
				$('#h252').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h252').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h252').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH252(valh252) {
	if ($('#h252').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh252);
	}

	if ($('#h252').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh252);
	}

	if ($('#h252').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh252);
	}
}

$(document).ready(function() { 
	$('#h261').focusout(function() {
		var h261 = $('#h261').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h261 != '') {
			
			if (isValidH261(h261)) {
				$('#h261').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh261', 1);
			} else {
				$('#h261').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h261').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h261').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH261(valh261) {
	if ($('#h261').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh261);
	}

	if ($('#h261').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh261);
	}

	if ($('#h261').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh261);
	}
}

$(document).ready(function() { 
	$('#h262').focusout(function() {
		var h262 = $('#h262').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h262 != '') {
			
			if (isValidH262(h262)) {
				$('#h262').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh262', 1);
			} else {
				$('#h262').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h262').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h262').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH262(valh262) {
	if ($('#h262').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh262);
	}

	if ($('#h262').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh262);
	}

	if ($('#h262').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh262);
	}
}

$(document).ready(function() { 
	$('#h271').focusout(function() {
		var h271 = $('#h271').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h271 != '') {
			
			if (isValidH271(h271)) {
				$('#h271').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh271', 1);
			} else {
				$('#h271').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h271').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h271').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH271(valh271) {
	if ($('#h271').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh271);
	}

	if ($('#h271').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh271);
	}

	if ($('#h271').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh271);
	}
}

$(document).ready(function() { 
	$('#h272').focusout(function() {
		var h272 = $('#h272').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h272 != '') {
			
			if (isValidH272(h272)) {
				$('#h272').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh272', 1);
			} else {
				$('#h272').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h272').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h272').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH272(valh272) {
	if ($('#h272').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh272);
	}

	if ($('#h272').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh272);
	}

	if ($('#h272').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh272);
	}
}

$(document).ready(function() { 
	$('#h281').focusout(function() {
		var h281 = $('#h281').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h281 != '') {
			
			if (isValidH281(h281)) {
				$('#h281').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh281', 1);
			} else {
				$('#h281').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h281').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h281').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH281(valh281) {
	if ($('#h281').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh281);
	}

	if ($('#h281').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh281);
	}

	if ($('#h281').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh281);
	}
}

$(document).ready(function() { 
	$('#h282').focusout(function() {
		var h282 = $('#h282').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h282 != '') {
			
			if (isValidH282(h282)) {
				$('#h282').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh282', 1);
			} else {
				$('#h282').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h282').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h282').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH282(valh282) {
	if ($('#h282').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh282);
	}

	if ($('#h282').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh282);
	}

	if ($('#h282').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh282);
	}
}

$(document).ready(function() { 
	$('#h291').focusout(function() {
		var h291 = $('#h291').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h291 != '') {
			
			if (isValidH291(h291)) {
				$('#h291').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh291', 1);
			} else {
				$('#h291').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h291').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h291').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH291(valh291) {
	if ($('#h291').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh291);
	}

	if ($('#h291').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh291);
	}

	if ($('#h291').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh291);
	}
}

$(document).ready(function() { 
	$('#h292').focusout(function() {
		var h292 = $('#h292').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h292 != '') {
			
			if (isValidH292(h292)) {
				$('#h292').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh292', 1);
			} else {
				$('#h292').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h292').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h292').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH292(valh292) {
	if ($('#h292').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh292);
	}

	if ($('#h292').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh292);
	}

	if ($('#h292').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh292);
	}
}

$(document).ready(function() { 
	$('#h301').focusout(function() {
		var h301 = $('#h301').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h301 != '') {
			
			if (isValidH301(h301)) {
				$('#h301').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh301', 1);
			} else {
				$('#h301').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h301').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h301').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH301(valh301) {
	if ($('#h301').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh301);
	}

	if ($('#h301').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh301);
	}

	if ($('#h301').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh301);
	}
}

$(document).ready(function() { 
	$('#h302').focusout(function() {
		var h302 = $('#h302').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h302 != '') {
			
			if (isValidH302(h302)) {
				$('#h302').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh302', 1);
			} else {
				$('#h302').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h302').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h302').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH302(valh302) {
	if ($('#h302').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh302);
	}

	if ($('#h302').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh302);
	}

	if ($('#h302').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh302);
	}
}

$(document).ready(function() { 
	$('#h311').focusout(function() {
		var h311 = $('#h311').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h311 != '') {
			
			if (isValidH311(h311)) {
				$('#h311').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh311', 1);
			} else {
				$('#h311').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h311').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h311').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH311(valh311) {
	if ($('#h311').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh311);
	}

	if ($('#h311').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh311);
	}

	if ($('#h311').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh311);
	}
}

$(document).ready(function() { 
	$('#h312').focusout(function() {
		var h312 = $('#h312').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h312 != '') {
			
			if (isValidH312(h312)) {
				$('#h312').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh312', 1);
			} else {
				$('#h312').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h312').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h312').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH312(valh312) {
	if ($('#h312').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh312);
	}

	if ($('#h312').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh312);
	}

	if ($('#h312').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh312);
	}
}

$(document).ready(function() { 
	$('#h321').focusout(function() {
		var h321 = $('#h321').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h321 != '') {
			
			if (isValidH321(h321)) {
				$('#h321').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh321', 1);
			} else {
				$('#h321').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h321').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h321').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH321(valh321) {
	if ($('#h321').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh321);
	}

	if ($('#h321').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh321);
	}

	if ($('#h321').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh321);
	}
}

$(document).ready(function() { 
	$('#h322').focusout(function() {
		var h322 = $('#h322').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h322 != '') {
			
			if (isValidH322(h322)) {
				$('#h322').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh322', 1);
			} else {
				$('#h322').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h322').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h322').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH322(valh322) {
	if ($('#h322').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh322);
	}

	if ($('#h322').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh322);
	}

	if ($('#h322').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh322);
	}
}

$(document).ready(function() { 
	$('#h331').focusout(function() {
		var h331 = $('#h331').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h331 != '') {
			
			if (isValidH331(h331)) {
				$('#h331').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh331', 1);
			} else {
				$('#h331').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h331').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h331').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH331(valh331) {
	if ($('#h331').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh331);
	}

	if ($('#h331').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh331);
	}

	if ($('#h331').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh331);
	}
}

$(document).ready(function() { 
	$('#h332').focusout(function() {
		var h332 = $('#h332').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h332 != '') {
			
			if (isValidH332(h332)) {
				$('#h332').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh332', 1);
			} else {
				$('#h332').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h332').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h332').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH332(valh332) {
	if ($('#h332').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh332);
	}

	if ($('#h332').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh332);
	}

	if ($('#h332').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh332);
	}
}

$(document).ready(function() { 
	$('#h341').focusout(function() {
		var h341 = $('#h341').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h341 != '') {
			
			if (isValidH341(h341)) {
				$('#h341').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh341', 1);
			} else {
				$('#h341').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h341').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h341').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH341(valh341) {
	if ($('#h341').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh341);
	}

	if ($('#h341').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh341);
	}

	if ($('#h341').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh341);
	}
}

$(document).ready(function() { 
	$('#h342').focusout(function() {
		var h342 = $('#h342').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h342 != '') {
			
			if (isValidH342(h342)) {
				$('#h342').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh342', 1);
			} else {
				$('#h342').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h342').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h342').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH342(valh342) {
	if ($('#h342').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh342);
	}

	if ($('#h342').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh342);
	}

	if ($('#h342').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh342);
	}
}

$(document).ready(function() { 
	$('#h351').focusout(function() {
		var h351 = $('#h351').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h351 != '') {
			
			if (isValidH351(h351)) {
				$('#h351').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh351', 1);
			} else {
				$('#h351').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h351').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h351').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH351(valh351) {
	if ($('#h351').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh351);
	}

	if ($('#h351').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh351);
	}

	if ($('#h351').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh351);
	}
}

$(document).ready(function() { 
	$('#h352').focusout(function() {
		var h352 = $('#h352').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h352 != '') {
			
			if (isValidH352(h352)) {
				$('#h352').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh352', 1);
			} else {
				$('#h352').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h352').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h352').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH352(valh352) {
	if ($('#h352').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh352);
	}

	if ($('#h352').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh352);
	}

	if ($('#h352').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh352);
	}
}

$(document).ready(function() { 
	$('#h361').focusout(function() {
		var h361 = $('#h361').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h361 != '') {
			
			if (isValidH361(h361)) {
				$('#h361').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh361', 1);
			} else {
				$('#h361').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h361').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h361').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH361(valh361) {
	if ($('#h361').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh361);
	}

	if ($('#h361').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh361);
	}

	if ($('#h361').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh361);
	}
}

$(document).ready(function() { 
	$('#h362').focusout(function() {
		var h362 = $('#h362').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h362 != '') {
			
			if (isValidH362(h362)) {
				$('#h362').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh362', 1);
			} else {
				$('#h362').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h362').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h362').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH362(valh362) {
	if ($('#h362').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh362);
	}

	if ($('#h362').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh362);
	}

	if ($('#h362').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh362);
	}
}

$(document).ready(function() { 
	$('#h371').focusout(function() {
		var h371 = $('#h371').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h371 != '') {
			
			if (isValidH371(h371)) {
				$('#h371').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh371', 1);
			} else {
				$('#h371').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h371').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h371').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH371(valh371) {
	if ($('#h371').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh371);
	}

	if ($('#h371').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh371);
	}

	if ($('#h371').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh371);
	}
}

$(document).ready(function() { 
	$('#h372').focusout(function() {
		var h372 = $('#h372').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h372 != '') {
			
			if (isValidH372(h372)) {
				$('#h372').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh372', 1);
			} else {
				$('#h372').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h372').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h372').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH372(valh372) {
	if ($('#h372').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh372);
	}

	if ($('#h372').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh372);
	}

	if ($('#h372').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh372);
	}
}

$(document).ready(function() { 
	$('#h381').focusout(function() {
		var h381 = $('#h381').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h381 != '') {
			
			if (isValidH381(h381)) {
				$('#h381').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh381', 1);
			} else {
				$('#h381').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h381').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h381').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH381(valh381) {
	if ($('#h381').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh381);
	}

	if ($('#h381').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh381);
	}

	if ($('#h381').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh381);
	}
}

$(document).ready(function() { 
	$('#h382').focusout(function() {
		var h382 = $('#h382').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h382 != '') {
			
			if (isValidH382(h382)) {
				$('#h382').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh382', 1);
			} else {
				$('#h382').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h382').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h382').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH382(valh382) {
	if ($('#h382').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh382);
	}

	if ($('#h382').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh382);
	}

	if ($('#h382').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh382);
	}
}

$(document).ready(function() { 
	$('#h391').focusout(function() {
		var h391 = $('#h391').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h391 != '') {
			
			if (isValidH391(h391)) {
				$('#h391').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh391', 1);
			} else {
				$('#h391').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h391').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h391').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH391(valh391) {
	if ($('#h391').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh391);
	}

	if ($('#h391').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh391);
	}

	if ($('#h391').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh391);
	}
}

$(document).ready(function() { 
	$('#h392').focusout(function() {
		var h392 = $('#h392').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h392 != '') {
			
			if (isValidH392(h392)) {
				$('#h392').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh392', 1);
			} else {
				$('#h392').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h392').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h392').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH392(valh392) {
	if ($('#h392').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh392);
	}

	if ($('#h392').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh392);
	}

	if ($('#h392').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh392);
	}

}

$(document).ready(function() { 
	$('#h401').focusout(function() {
		var h401 = $('#h401').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h401 != '') {
			
			if (isValidH401(h401)) {
				$('#h401').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh401', 1);
			} else {
				$('#h401').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h401').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h401').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH401(valh401) {
	if ($('#h401').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh401);
	}

	if ($('#h401').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh401);
	}

	if ($('#h401').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh401);
	}
}

$(document).ready(function() { 
	$('#h402').focusout(function() {
		var h402 = $('#h402').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h402 != '') {
			
			if (isValidH402(h402)) {
				$('#h402').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh402', 1);
			} else {
				$('#h402').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h402').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h402').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH402(valh402) {
	if ($('#h402').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh402);
	}

	if ($('#h402').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh402);
	}

	if ($('#h402').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh402);
	}
}

$(document).ready(function() { 
	$('#h411').focusout(function() {
		var h411 = $('#h411').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h411 != '') {
			
			if (isValidH411(h411)) {
				$('#h411').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh411', 1);
			} else {
				$('#h411').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h411').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h411').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH411(valh411) {
	if ($('#h411').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh411);
	}

	if ($('#h411').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh411);
	}

	if ($('#h411').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh411);
	}
}

$(document).ready(function() { 
	$('#h412').focusout(function() {
		var h412 = $('#h412').val();
		
		if (($(this).val() < 1) || ($(this).val() > 101)) $(this).val($(this).val().substr(0, 0));

		if (h412 != '') {
			
			if (isValidH412(h412)) {
				$('#h412').css('border', '1px solid #0dd01a');
				localStorage.setItem('vh412', 1);
			} else {
				$('#h412').css('border', '1px solid #f00');
				$(this).val($(this).val().substr(0, 0));
			}
		}
		
		$('#h412').keyup(function() {
			$(this).val($(this).val().trim());
		});
	});
	
	$('#h412').keyup(function() {
		if ($(this).val().length > 3) $(this).val($(this).val().substr(0, 3));          
	});
});

function isValidH412(valh412) {
	if ($('#h412').val().length == 1) {
		var pattern = new RegExp(/[1-9]/);
		return pattern.test(valh412);
	}

	if ($('#h412').val().length == 2) {
		var pattern = new RegExp(/[1-9][0-9]/);
		return pattern.test(valh412);
	}

	if ($('#h412').val().length == 3) {
		var pattern = new RegExp(/[1-9][0-9][0-9]/);
		return pattern.test(valh412);
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