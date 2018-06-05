$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=dd1]:checked").is(':checked'),
		v6 = $("input[name=dd2]:checked").is(':checked'),
		v7 = $("input[name=dd3]:checked").is(':checked'),
		v8 = $("input[name=dd4]:checked").is(':checked'),
		v9 = $("input[name=dd5]:checked").is(':checked'),
		v10 = $("input[name=dd6]:checked").is(':checked'),
		v11 = $("input[name=dd7]:checked").is(':checked'),
		v12 = $("input[name=dd8]:checked").is(':checked'),
		v13 = $("input[name=dd9]:checked").is(':checked'),
		v14 = $("input[name=dd10]:checked").is(':checked'),
		v15 = $("input[name=dd11]:checked").is(':checked'),
		v16 = $("input[name=dd12]:checked").is(':checked'),
		v17 = $("input[name=dd13]:checked").is(':checked'),
		v18 = $("input[name=dd14]:checked").is(':checked'),
		v19 = $("input[name=dd15]:checked").is(':checked'),
		v20 = $("input[name=dd16]:checked").is(':checked'),
		v21 = $("input[name=dd17]:checked").is(':checked'),
		v22 = $("input[name=dd18]:checked").is(':checked'),
		v23 = $("input[name=dd19]:checked").is(':checked'),
		v24 = $("input[name=dd20]:checked").is(':checked'),
		v25 = $("input[name=dd21]:checked").is(':checked'),
		v26 = $("input[name=dd22]:checked").is(':checked'),
		v27 = $("input[name=dd23]:checked").is(':checked'),
		v28 = $('#date').val(),
		v29 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && 
		(v10) && (v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || 
		(!v10) || (!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v27) {
		if (!v5) $("#d1").addClass("error_designation");
		else $("#d1").removeClass("error_designation");

		if (!v6) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if ((!v5) || (!v6)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");

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

		if ((!v7) || (!v8) || (!v9) || (!v10) || (!v11)) $("#tab3").addClass("error_radio"); 
		else $("#tab3").removeClass("error_radio"); 

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

		if ((!v12) || (!v13) || (!v4) || (!v15) || (!v16)) $("#tab4").addClass("error_radio"); 
		else $("#tab4").removeClass("error_radio"); 

		if (!v17) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!v18) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!v19) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if (!v20) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!v21) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if ((!v17) || (!v18) || (!v19) || (!v20) || (!v21)) $("#tab5").addClass("error_radio"); 
		else $("#tab5").removeClass("error_radio"); 

		if (!v22) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!v23) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!v24) $("#d20").addClass("error_designation");
		else $("#d20").removeClass("error_designation");

		if (!v25) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if (!v26) $("#d22").addClass("error_designation");
		else $("#d22").removeClass("error_designation");

		if (!v27) $("#d23").addClass("error_designation");
		else $("#d23").removeClass("error_designation");

		if ((!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27)) $("#tab6").addClass("error_radio"); 
		else $("#tab6").removeClass("error_radio"); 
	}
});

function valide() {	
	$('#method_submit').addClass('no_click');
	return false;
};