$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=j1]:checked").is(':checked'),
		v6 = $("input[name=j2]:checked").is(':checked'),
		v7 = $("input[name=j3]:checked").is(':checked'),
		v8 = $("input[name=j4]:checked").is(':checked'),
		v9 = $("input[name=j5]:checked").is(':checked'),
		v10 = $("input[name=j6]:checked").is(':checked'),
		v11 = $("input[name=j7]:checked").is(':checked'),
		v12 = $("input[name=j8]:checked").is(':checked'),
		v13 = $("input[name=j9]:checked").is(':checked'),
		v14 = $("input[name=j10]:checked").is(':checked'),
		v15 = $("input[name=j11]:checked").is(':checked'),
		v16 = $("input[name=j12]:checked").is(':checked'),
		v17 = $("input[name=j13]:checked").is(':checked'),
		v18 = $("input[name=j14]:checked").is(':checked'),
		v19 = $("input[name=j15]:checked").is(':checked'),
		v20 = $("input[name=j16]:checked").is(':checked'),
		v21 = $("input[name=j17]:checked").is(':checked'),
		v22 = $("input[name=j18]:checked").is(':checked'),
		v23 = $("input[name=j19]:checked").is(':checked'),
		v24 = $("input[name=j20]:checked").is(':checked'),
		v25 = $("input[name=j21]:checked").is(':checked'),
		v26 = $("input[name=j22]:checked").is(':checked'),
		v27 = $("input[name=j23]:checked").is(':checked'),
		v28 = $("input[name=j24]:checked").is(':checked'),
		v29 = $("input[name=j25]:checked").is(':checked'),
		v30 = $("input[name=j26]:checked").is(':checked'),
		v31 = $("input[name=j27]:checked").is(':checked'),
		v32 = $("input[name=j28]:checked").is(':checked'),
		v33 = $("input[name=j29]:checked").is(':checked'),
		v34 = $("input[name=j30]:checked").is(':checked'),
		v35 = $("input[name=j31]:checked").is(':checked'),
		v36 = $("input[name=j32]:checked").is(':checked'),
		v37 = $("input[name=j33]:checked").is(':checked'),
		v38 = $("input[name=j34]:checked").is(':checked'),
		v39 = $("input[name=j35]:checked").is(':checked'),
		v40 = $("input[name=j36]:checked").is(':checked'),
		v41 = $("input[name=j37]:checked").is(':checked'),
		v42 = $("input[name=j38]:checked").is(':checked'),
		v43 = $("input[name=j39]:checked").is(':checked'),
		v44 = $("input[name=j40]:checked").is(':checked'),
		v45 = $('#date').val(),
		v46 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && 
		(v20) && (v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && 
		(v30) && (v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38) && (v39) && 
		(v40) && (v41) && (v42) && (v43) && (v44) && (v45) && (v46)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || 
		(!v20) || (!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || 
		(!v30) || (!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38) || (!v39) || 
		(!v40) || (!v41) || (!v42) || (!v43) || (!v44) || (!v45) || (!v46)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v44) {
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

		if (!v35) $("#d31").addClass("error_designation");
		else $("#d31").removeClass("error_designation");

		if (!v36) $("#d32").addClass("error_designation");
		else $("#d32").removeClass("error_designation");

		if (!v37) $("#d33").addClass("error_designation");
		else $("#d33").removeClass("error_designation");

		if (!v38) $("#d34").addClass("error_designation");
		else $("#d34").removeClass("error_designation");

		if (!v39) $("#d35").addClass("error_designation");
		else $("#d35").removeClass("error_designation");

		if ((!v35) || (!v36) || (!v37) || (!v38) || (!v39)) $("#tab8").addClass("error_radio");
		else $("#tab8").removeClass("error_radio");

		if (!v40) $("#d36").addClass("error_designation");
		else $("#d36").removeClass("error_designation");

		if (!v41) $("#d37").addClass("error_designation");
		else $("#d37").removeClass("error_designation");

		if (!v42) $("#d38").addClass("error_designation");
		else $("#d38").removeClass("error_designation");

		if (!v43) $("#d39").addClass("error_designation");
		else $("#d39").removeClass("error_designation");

		if (!v44) $("#d40").addClass("error_designation");
		else $("#d40").removeClass("error_designation");

		if ((!v40) || (!v41) || (!v42) || (!v43) || (!v44)) $("#tab9").addClass("error_radio");
		else $("#tab9").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};