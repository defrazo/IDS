$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=aa1]:checked").is(':checked'),
		v6 = $("input[name=aa2]:checked").is(':checked'),
		v7 = $("input[name=aa3]:checked").is(':checked'),
		v8 = $("input[name=aa4]:checked").is(':checked'),
		v9 = $("input[name=aa5]:checked").is(':checked'),
		v10 = $("input[name=aa6]:checked").is(':checked'),
		v11 = $("input[name=aa7]:checked").is(':checked'),
		v12 = $("input[name=aa8]:checked").is(':checked'),
		v13 = $("input[name=aa9]:checked").is(':checked'),
		v14 = $("input[name=aa10]:checked").is(':checked'),
		v15 = $("input[name=aa11]:checked").is(':checked'),
		v16 = $("input[name=aa12]:checked").is(':checked'),
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

	if (v16) {
		if (!v5) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v6) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!v7) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!v8) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!v9) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if (!v10) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if ((!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");

		if (!v11) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!v12) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!v13) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!v14) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");

		if (!v15) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if ((!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15)) $("#tab3").addClass("error_radio");
		else $("#tab3").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};