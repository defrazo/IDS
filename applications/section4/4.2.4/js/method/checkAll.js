$(document).on('ready mousemove change', function() {

	var v1 = $('#mname').val(), 
		v2 = $('#fname').val(),
		v3 = $('#sname').val(),
		v4 = $('input[name="gender"]').is(':checked'),
		v5 = $("input[name=m1]:checked").is(':checked'),
		v6 = $("input[name=m2]:checked").is(':checked'),
		v7 = $("input[name=m3]:checked").is(':checked'),
		v8 = $("input[name=m4]:checked").is(':checked'),
		v9 = $("input[name=m5]:checked").is(':checked'),
		v10 = $("input[name=m6]:checked").is(':checked'),
		v11 = $("input[name=m7]:checked").is(':checked'),
		v12 = $("input[name=m8]:checked").is(':checked'),
		v13 = $("input[name=m9]:checked").is(':checked'),
		v14 = $("input[name=m10]:checked").is(':checked'),
		v15 = $("input[name=m11]:checked").is(':checked'),
		v16 = $("input[name=m12]:checked").is(':checked'),
		v17 = $("input[name=m13]:checked").is(':checked'),
		v18 = $("input[name=m14]:checked").is(':checked'),
		v19 = $("input[name=m15]:checked").is(':checked'),
		v20 = $("input[name=m16]:checked").is(':checked'),
		v21 = $("input[name=m17]:checked").is(':checked'),
		v22 = $("input[name=m18]:checked").is(':checked'),
		v23 = $("input[name=m19]:checked").is(':checked'),
		v24 = $("input[name=m20]:checked").is(':checked'),
		v25 = $("input[name=m21]:checked").is(':checked'),
		v26 = $("input[name=m22]:checked").is(':checked'),
		v27 = $("input[name=m23]:checked").is(':checked'),
		v28 = $("input[name=m24]:checked").is(':checked'),
		v29 = $("input[name=m25]:checked").is(':checked'),
		v30 = $("input[name=m26]:checked").is(':checked'),
		v31 = $("input[name=m27]:checked").is(':checked'),
		v32 = $("input[name=m28]:checked").is(':checked'),
		v33 = $("input[name=m29]:checked").is(':checked'),
		v34 = $("input[name=m30]:checked").is(':checked'),
		v35 = $("input[name=m31]:checked").is(':checked'),
		v36 = $("input[name=m32]:checked").is(':checked'),
		v37 = $("input[name=m33]:checked").is(':checked'),
		v38 = $("input[name=m34]:checked").is(':checked'),
		v39 = $("input[name=m35]:checked").is(':checked'),
		v40 = $("input[name=m36]:checked").is(':checked'),
		v41 = $("input[name=m37]:checked").is(':checked'),
		v42 = $("input[name=m38]:checked").is(':checked'),
		v43 = $("input[name=m39]:checked").is(':checked'),
		v44 = $("input[name=m40]:checked").is(':checked'),
		v45 = $("input[name=m41]:checked").is(':checked'),
		v46 = $("input[name=m42]:checked").is(':checked'),
		v47 = $("input[name=m43]:checked").is(':checked'),
		v48 = $("input[name=m44]:checked").is(':checked'),
		v49 = $("input[name=m45]:checked").is(':checked'),
		v50 = $("input[name=m46]:checked").is(':checked'),
		v51 = $("input[name=m47]:checked").is(':checked'),
		v52 = $("input[name=m48]:checked").is(':checked'),
		v53 = $("input[name=m49]:checked").is(':checked'),
		v54 = $("input[name=m50]:checked").is(':checked'),
		v55 = $("input[name=m51]:checked").is(':checked'),
		v56 = $("input[name=m52]:checked").is(':checked'),
		v57 = $("input[name=m53]:checked").is(':checked'),
		v58 = $("input[name=m54]:checked").is(':checked'),
		v59 = $("input[name=m55]:checked").is(':checked'),
		v60 = $("input[name=m56]:checked").is(':checked'),
		v61 = $("input[name=m57]:checked").is(':checked'),
		v62 = $("input[name=m58]:checked").is(':checked'),
		v63 = $("input[name=m59]:checked").is(':checked'),
		v64 = $("input[name=m60]:checked").is(':checked'),
		v65 = $("input[name=m61]:checked").is(':checked'),
		v66 = $("input[name=m62]:checked").is(':checked'),
		v67 = $("input[name=m63]:checked").is(':checked'),
		v68 = $("input[name=m64]:checked").is(':checked'),
		v69 = $("input[name=m65]:checked").is(':checked'),
		v70 = $("input[name=m66]:checked").is(':checked'),
		v71 = $("input[name=m67]:checked").is(':checked'),
		v72 = $("input[name=m68]:checked").is(':checked'),
		v73 = $("input[name=m69]:checked").is(':checked'),
		v74 = $("input[name=m70]:checked").is(':checked'),
		v75 = $("input[name=m71]:checked").is(':checked'),
		v76 = $("input[name=m72]:checked").is(':checked'),
		v77 = $("input[name=m73]:checked").is(':checked'),
		v78 = $("input[name=m74]:checked").is(':checked'),
		v79 = $("input[name=m75]:checked").is(':checked'),
		v80 = $('#date').val(),
		v81 = $('#fac').val();

	if ((v1) && (v2) && (v3) && (v4) && (v5) && (v6) && (v7) && (v8) && (v9) && (v10) && 
		(v11) && (v12) && (v13) && (v14) && (v15) && (v16) && (v17) && (v18) && (v19) && (v20) && 
		(v21) && (v22) && (v23) && (v24) && (v25) && (v26) && (v27) && (v28) && (v29) && (v30) && 
		(v31) && (v32) && (v33) && (v34) && (v35) && (v36) && (v37) && (v38) && (v39) && (v40) && 
		(v41) && (v42) && (v43) && (v44) && (v45) && (v46) && (v47) && (v48) && (v49) && (v50) && 
		(v51) && (v52) && (v53) && (v54) && (v55) && (v56) && (v57) && (v58) && (v59) && (v60) && 
		(v61) && (v62) && (v63) && (v64) && (v65) && (v66) && (v67) && (v68) && (v69) && (v70) && 
		(v71) && (v72) && (v73) && (v74) && (v75) && (v76) && (v77) && (v78) && (v79) && (v80) && (v81)) {
		if ($('#method_submit').is(':hidden')) {
			$('#method_submit').css('display', 'block');
			$('#method_submit').removeClass('no_click');	
		}

		if ($('#method_submit').is(':visible')) $('#method_submit').removeClass('no_click');
	}

	if ((!v1) || (!v2) || (!v3) || (!v4) || (!v5) || (!v6) || (!v7) || (!v8) || (!v9) || (!v10) || 
		(!v11) || (!v12) || (!v13) || (!v14) || (!v15) || (!v16) || (!v17) || (!v18) || (!v19) || (!v20) || 
		(!v21) || (!v22) || (!v23) || (!v24) || (!v25) || (!v26) || (!v27) || (!v28) || (!v29) || (!v30) || 
		(!v31) || (!v32) || (!v33) || (!v34) || (!v35) || (!v36) || (!v37) || (!v38) || (!v39) || (!v40) || 
		(!v41) || (!v42) || (!v43) || (!v44) || (!v45) || (!v46) || (!v47) || (!v48) || (!v49) || (!v50) || 
		(!v51) || (!v52) || (!v53) || (!v54) || (!v55) || (!v56) || (!v57) || (!v58) || (!v59) || (!v60) || 
		(!v61) || (!v62) || (!v63) || (!v64) || (!v65) || (!v66) || (!v67) || (!v68) || (!v69) || (!v70) || 
		(!v71) || (!v72) || (!v73) || (!v74) || (!v75) || (!v76) || (!v77) || (!v78) || (!v79) || (!v80) || (!v81)) {
		$('#method_submit').addClass('no_click');
		if ($('#method_submit').is(':visible')) $('#method_submit').css('display', 'none');
	}

	if (v79) {
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

		if (!v45) $("#d41").addClass("error_designation");
		else $("#d41").removeClass("error_designation");

		if (!v46) $("#d42").addClass("error_designation");
		else $("#d42").removeClass("error_designation");

		if (!v47) $("#d43").addClass("error_designation");
		else $("#d43").removeClass("error_designation");

		if (!v48) $("#d44").addClass("error_designation");
		else $("#d44").removeClass("error_designation");

		if (!v49) $("#d45").addClass("error_designation");
		else $("#d45").removeClass("error_designation");

		if ((!v45) || (!v46) || (!v47) || (!v48) || (!v49)) $("#tab10").addClass("error_radio");
		else $("#tab10").removeClass("error_radio");

		if (!v50) $("#d46").addClass("error_designation");
		else $("#d46").removeClass("error_designation");

		if (!v51) $("#d47").addClass("error_designation");
		else $("#d47").removeClass("error_designation");

		if (!v52) $("#d48").addClass("error_designation");
		else $("#d48").removeClass("error_designation");

		if (!v53) $("#d49").addClass("error_designation");
		else $("#d49").removeClass("error_designation");

		if (!v54) $("#d50").addClass("error_designation");
		else $("#d50").removeClass("error_designation");

		if ((!v50) || (!v51) || (!v52) || (!v53) || (!v54)) $("#tab11").addClass("error_radio");
		else $("#tab11").removeClass("error_radio");

		if (!v55) $("#d51").addClass("error_designation");
		else $("#d51").removeClass("error_designation");

		if (!v56) $("#d52").addClass("error_designation");
		else $("#d52").removeClass("error_designation");

		if (!v57) $("#d53").addClass("error_designation");
		else $("#d53").removeClass("error_designation");

		if (!v58) $("#d54").addClass("error_designation");
		else $("#d54").removeClass("error_designation");

		if (!v59) $("#d55").addClass("error_designation");
		else $("#d55").removeClass("error_designation");

		if ((!v55) || (!v56) || (!v57) || (!v58) || (!v59)) $("#tab12").addClass("error_radio");
		else $("#tab12").removeClass("error_radio");

		if (!v60) $("#d56").addClass("error_designation");
		else $("#d56").removeClass("error_designation");

		if (!v61) $("#d57").addClass("error_designation");
		else $("#d57").removeClass("error_designation");

		if (!v62) $("#d58").addClass("error_designation");
		else $("#d58").removeClass("error_designation");

		if (!v63) $("#d59").addClass("error_designation");
		else $("#d59").removeClass("error_designation");

		if (!v64) $("#d60").addClass("error_designation");
		else $("#d60").removeClass("error_designation");

		if ((!v60) || (!v61) || (!v62) || (!v63) || (!v64)) $("#tab13").addClass("error_radio");
		else $("#tab13").removeClass("error_radio");

		if (!v65) $("#d61").addClass("error_designation");
		else $("#d61").removeClass("error_designation");

		if (!v66) $("#d62").addClass("error_designation");
		else $("#d62").removeClass("error_designation");

		if (!v67) $("#d63").addClass("error_designation");
		else $("#d63").removeClass("error_designation");

		if (!v68) $("#d64").addClass("error_designation");
		else $("#d64").removeClass("error_designation");

		if (!v69) $("#d65").addClass("error_designation");
		else $("#d65").removeClass("error_designation");

		if ((!v65) || (!v66) || (!v67) || (!v68) || (!v69)) $("#tab14").addClass("error_radio");
		else $("#tab14").removeClass("error_radio");

		if (!v70) $("#d66").addClass("error_designation");
		else $("#d66").removeClass("error_designation");

		if (!v71) $("#d67").addClass("error_designation");
		else $("#d67").removeClass("error_designation");

		if (!v72) $("#d68").addClass("error_designation");
		else $("#d68").removeClass("error_designation");

		if (!v73) $("#d69").addClass("error_designation");
		else $("#d69").removeClass("error_designation");

		if (!v74) $("#d70").addClass("error_designation");
		else $("#d70").removeClass("error_designation");

		if ((!v70) || (!v71) || (!v72) || (!v73) || (!v74)) $("#tab15").addClass("error_radio");
		else $("#tab15").removeClass("error_radio");

		if (!v75) $("#d71").addClass("error_designation");
		else $("#d71").removeClass("error_designation");

		if (!v76) $("#d72").addClass("error_designation");
		else $("#d72").removeClass("error_designation");

		if (!v77) $("#d73").addClass("error_designation");
		else $("#d73").removeClass("error_designation");

		if (!v78) $("#d74").addClass("error_designation");
		else $("#d74").removeClass("error_designation");

		if (!v79) $("#d75").addClass("error_designation");
		else $("#d75").removeClass("error_designation");

		if ((!v75) || (!v76) || (!v77) || (!v78) || (!v79)) $("#tab16").addClass("error_radio");
		else $("#tab16").removeClass("error_radio");
	}
});

function valide() {
	$('#method_submit').addClass('no_click');
	return false;
};