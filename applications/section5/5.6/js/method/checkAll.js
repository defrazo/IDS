$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=ad1]:checked").is(':checked'),
		v6 = $("input[name=ad2]:checked").is(':checked'),
		v7 = $("input[name=ad3]:checked").is(':checked'),
		v8 = $("input[name=ad4]:checked").is(':checked'),
		v9 = $("input[name=ad5]:checked").is(':checked'),
		v10 = $("input[name=ad6]:checked").is(':checked'),
		v11 = $("input[name=ad7]:checked").is(':checked'),
		v12 = $("input[name=ad8]:checked").is(':checked'),
		v13 = $("input[name=ad9]:checked").is(':checked'),
		v14 = $("input[name=ad10]:checked").is(':checked'),
		v15 = $("input[name=ad11]:checked").is(':checked'),
		v16 = $("input[name=ad12]:checked").is(':checked'),
		v17 = $("input[name=ad13]:checked").is(':checked'),
		v18 = $("input[name=ad14]:checked").is(':checked'),
		v19 = $("input[name=ad15]:checked").is(':checked'),
		v20 = $("input[name=ad16]:checked").is(':checked'),
		v21 = $("input[name=ad17]:checked").is(':checked'),
		v22 = $("input[name=ad18]:checked").is(':checked'),
		v23 = $("input[name=ad19]:checked").is(':checked'),
		v24 = $("input[name=ad20]:checked").is(':checked'),
		v25 = $("input[name=ad21]:checked").is(':checked'),
		v26 = $("input[name=ad22]:checked").is(':checked'),
		v27 = $("input[name=ad23]:checked").is(':checked'),
		v28 = $("input[name=ad24]:checked").is(':checked'),
		v29 = $("input[name=ad25]:checked").is(':checked'),
		v30 = $("input[name=ad26]:checked").is(':checked'),
		v31 = $("input[name=ad27]:checked").is(':checked'),
		v32 = $("input[name=ad28]:checked").is(':checked'),
		v33 = $("input[name=ad29]:checked").is(':checked'),
		v34 = $("input[name=ad30]:checked").is(':checked'),
		v35 = $('#date').val(),
		v36 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && (v20) && 
		(v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && (v30) && 
		(v31) && (v32) && (v33) && (v34) && (v35) && (v36)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20) || 
		(!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || (!v30) || 
		(!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v34) {
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

		if ((!v5) || (!v6) || (!v7) || (!v8) || (!v9)) $("#tab2").addClass("error_radio");
		else $("#tab2").removeClass("error_radio");
		
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

		if ((!v10) || (!v11) || (!v12) || (!v13) || (!v14)) $("#tab3").addClass("error_radio");
		else $("#tab3").removeClass("error_radio");

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

		if ((!v15) || (!v16) || (!v17) || (!v18) || (!v19)) $("#tab4").addClass("error_radio");
		else $("#tab4").removeClass("error_radio");

		if (!v20) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!v21) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if (!v22) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!v23) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!v24) $("#d20").addClass("error_designation");
		else $("#d22").removeClass("error_designation");

		if ((!v20) || (!v21) || (!v22) || (!v23) || (!v24)) $("#tab5").addClass("error_radio");
		else $("#tab5").removeClass("error_radio");

		if (!v25) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if (!v26) $("#d22").addClass("error_designation");
		else $("#d22").removeClass("error_designation");

		if (!v27) $("#d23").addClass("error_designation");
		else $("#d23").removeClass("error_designation");

		if (!v28) $("#d24").addClass("error_designation");
		else $("#d24").removeClass("error_designation");

		if (!v29) $("#d25").addClass("error_designation");
		else $("#d25").removeClass("error_designation");

		if ((!v25) || (!v26) || (!v27) || (!v28) || (!v29)) $("#tab6").addClass("error_radio");
		else $("#tab6").removeClass("error_radio");

		if (!v30) $("#d26").addClass("error_designation");
		else $("#d26").removeClass("error_designation");

		if (!v31) $("#d27").addClass("error_designation");
		else $("#d27").removeClass("error_designation");

		if (!v32) $("#d28").addClass("error_designation");
		else $("#d28").removeClass("error_designation");

		if (!v33) $("#d29").addClass("error_designation");
		else $("#d29").removeClass("error_designation");

		if (!v34) $("#d30").addClass("error_designation");
		else $("#d30").removeClass("error_designation");

		if ((!v30) || (!v31) || (!v32) || (!v33) || (!v34)) $("#tab7").addClass("error_radio");
		else $("#tab7").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};