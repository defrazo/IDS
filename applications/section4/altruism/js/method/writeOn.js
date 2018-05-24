function get_data() { //Вносит заполненные данные из полей формы в localStorage
	
	var date = $('#date').val();
	if (date != '') localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != '') localStorage.setItem('genderinp', gender);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != '') localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != '') localStorage.setItem('mnameinp', mname);


	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);

	var g1 = $("input[name='g1']:checked").val();
	if (g1) {
		localStorage.setItem("g1", g1);
		localStorage.setItem('v1', 1);	
	}
	
	var g2 = $("input[name='g2']:checked").val();
	if (g2) {
		localStorage.setItem("g2", g2);
		localStorage.setItem('v2', 1);	
	}
	
	var g3 = $("input[name='g3']:checked").val();
	if (g3) {
		localStorage.setItem("g3", g3);
		localStorage.setItem('v3', 1);	
	}
	
	var g4 = $("input[name='g4']:checked").val();
	if (g4) {
		localStorage.setItem("g4", g4);
		localStorage.setItem('v4', 1);	
	}
	
	var g5 = $("input[name='g5']:checked").val();
	if (g5) {
		localStorage.setItem("g5", g5);
		localStorage.setItem('v5', 1);	
	}
	
	var g6 = $("input[name='g6']:checked").val();
	if (g6) {
		localStorage.setItem("g6", g6);
		localStorage.setItem('v6', 1);	
	}

	var g7 = $("input[name='g7']:checked").val();
	if (g7) {
		localStorage.setItem("g7", g7);
		localStorage.setItem('v7', 1);	
	}

	var g8 = $("input[name='g8']:checked").val();
	if (g8) {
		localStorage.setItem("g8", g8);
		localStorage.setItem('v8', 1);	
	}

	var g9 = $("input[name='g9']:checked").val();
	if (g9) {
		localStorage.setItem("g9", g9);
		localStorage.setItem('v9', 1);	
	}

	var g10 = $("input[name='g10']:checked").val();
	if (g10) {
		localStorage.setItem("g10", g10);
		localStorage.setItem('v10', 1);	
	}

	var g11 = $("input[name='g11']:checked").val();
	if (g11) {
		localStorage.setItem("g11", g11);
		localStorage.setItem('v11', 1);	
	}

	var g12 = $("input[name='g12']:checked").val();
	if (g12) {
		localStorage.setItem("g12", g12);
		localStorage.setItem('v12', 1);	
	}

	var g13 = $("input[name='g13']:checked").val();
	if (g13) {
		localStorage.setItem("g13", g13);
		localStorage.setItem('v13', 1);	
	}

	var g14 = $("input[name='g14']:checked").val();
	if (g14) {
		localStorage.setItem("g14", g14);
		localStorage.setItem('v14', 1);	
	}

	var g15 = $("input[name='g15']:checked").val();
	if (g15) {
		localStorage.setItem("g15", g15);
		localStorage.setItem('v15', 1);	
	}

	var g16 = $("input[name='g16']:checked").val();
	if (g16) {
		localStorage.setItem("g16", g16);
		localStorage.setItem('v16', 1);	
	}

	var g17 = $("input[name='g17']:checked").val();
	if (g17) {
		localStorage.setItem("g17", g17);
		localStorage.setItem('v17', 1);	
	}

	var g18 = $("input[name='g18']:checked").val();
	if (g18) {
		localStorage.setItem("g18", g18);
		localStorage.setItem('v18', 1);	
	}

	var g19 = $("input[name='g19']:checked").val();
	if (g19) {
		localStorage.setItem("g19", g19);
		localStorage.setItem('v19', 1);	
	}

	var g20 = $("input[name='g20']:checked").val();
	if (g20) {
		localStorage.setItem("g20", g20);
		localStorage.setItem('v20', 1);	
	}
};