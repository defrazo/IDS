$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("#t1").val(),
		v6 = $("#t2").val(),
		v7 = $("#t3").val(),
		v8 = $("#t4").val(),
		v9 = $("#t5").val(),
		v10 = $("#t6").val(),
		v11 = $("#t7").val(),
		v12 = $("#t8").val(),
		v13 = $("#t9").val(),
		v14 = $("#t10").val(),
		v15 = $("#t11").val(),
		v16 = $("#t12").val(),
		v17 = $('#date').val(),
		v18 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};