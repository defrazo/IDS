$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('#age').val(),
		v5 = $('#weight').val(),
		v6= $('#height').val(),
		v7 = $('#sist').val(),
		v8 = $('#dia').val(),
		v9 = $('#exerc').val(),
		v10 = $('#pulse').val(),
		v11 = $('#pulsel').val(),
		v12 = $('#cigaret').val(),
		v13 = $('#alco').val(),
		v14 = $('input[name="gender"]').is(':checked'),
		v15 = $('#date').val(),
		v16 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12)  && (v13)  && (v14) && (v15) && (v16)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};