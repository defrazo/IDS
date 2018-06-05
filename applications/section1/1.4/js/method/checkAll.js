$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('#age').val(),
		v5 = $('#height').val(),
		v6 = $('#weight').val(),
		v7 = $("input[name=b1]:checked").val(),
		v8 = $("input[name=b2]:checked").val(),
		v9 = $("input[name=b3]:checked").val(),
		v10 = $("input[name=b4]:checked").val(),
		v11 = $("input[name=b5]:checked").val(),
		v12 = $("input[name=b6]:checked").val();
		v13 = $('input[name="gender"]').is(':checked'),
		v14 = $('#date').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v12) {
		if (!v7) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v8) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v9) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v10) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v11) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};