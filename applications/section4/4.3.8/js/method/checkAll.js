$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=x1]:checked").is(':checked'),
		v6 = $("input[name=x2]:checked").is(':checked'),
		v7 = $("input[name=x3]:checked").is(':checked'),
		v8 = $("input[name=x4]:checked").is(':checked'),
		v9 = $("input[name=x5]:checked").is(':checked'),
		v10 = $("input[name=x6]:checked").is(':checked'),
		v11 = $("input[name=x7]:checked").is(':checked'),
		v12 = $("input[name=x8]:checked").is(':checked'),
		v13 = $("input[name=x9]:checked").is(':checked'),
		v14 = $("input[name=x10]:checked").is(':checked'),
		v15 = $("input[name=x11]:checked").is(':checked'),
		v16 = $("input[name=x12]:checked").is(':checked'),
		v17 = $("input[name=x13]:checked").is(':checked'),
		v18 = $("input[name=x14]:checked").is(':checked'),
		v19 = $("input[name=x15]:checked").is(':checked'),
		v20 = $("input[name=x16]:checked").is(':checked'),
		v21 = $("input[name=x17]:checked").is(':checked'),
		v22 = $('#date').val(),
		v23 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v21) {
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

		if (!v16) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!v17) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v18) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v19) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if (!v20) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};