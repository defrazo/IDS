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

	var q1 = $("input[name='q1']:checked").val();
	if (q1) {
		localStorage.setItem("q1", q1);
		localStorage.setItem('v1', 1);	
	}
	
	var q2 = $("input[name='q2']:checked").val();
	if (q2) {
		localStorage.setItem("q2", q2);
		localStorage.setItem('v2', 1);	
	}
	
	var q3 = $("input[name='q3']:checked").val();
	if (q3) {
		localStorage.setItem("q3", q3);
		localStorage.setItem('v3', 1);	
	}
	
	var q4 = $("input[name='q4']:checked").val();
	if (q4) {
		localStorage.setItem("q4", q4);
		localStorage.setItem('v4', 1);	
	}
	
	var q5 = $("input[name='q5']:checked").val();
	if (q5) {
		localStorage.setItem("q5", q5);
		localStorage.setItem('v5', 1);	
	}
	
	var q6 = $("input[name='q6']:checked").val();
	if (q6) {
		localStorage.setItem("q6", q6);
		localStorage.setItem('v6', 1);	
	}

	var q7 = $("input[name='q7']:checked").val();
	if (q7) {
		localStorage.setItem("q7", q7);
		localStorage.setItem('v7', 1);	
	}

	var q8 = $("input[name='q8']:checked").val();
	if (q8) {
		localStorage.setItem("q8", q8);
		localStorage.setItem('v8', 1);	
	}

	var q9 = $("input[name='q9']:checked").val();
	if (q9) {
		localStorage.setItem("q9", q9);
		localStorage.setItem('v9', 1);	
	}

	var q10 = $("input[name='q10']:checked").val();
	if (q10) {
		localStorage.setItem("q10", q10);
		localStorage.setItem('v10', 1);	
	}

	var q11 = $("input[name='q11']:checked").val();
	if (q11) {
		localStorage.setItem("q11", q11);
		localStorage.setItem('v11', 1);	
	}

	var q12 = $("input[name='q12']:checked").val();
	if (q12) {
		localStorage.setItem("q12", q12);
		localStorage.setItem('v12', 1);	
	}

	var q13 = $("input[name='q13']:checked").val();
	if (q13) {
		localStorage.setItem("q13", q13);
		localStorage.setItem('v13', 1);	
	}

	var q14 = $("input[name='q14']:checked").val();
	if (q14) {
		localStorage.setItem("q14", q14);
		localStorage.setItem('v14', 1);	
	}

	var q15 = $("input[name='q15']:checked").val();
	if (q15) {
		localStorage.setItem("q15", q15);
		localStorage.setItem('v15', 1);	
	}

	var q16 = $("input[name='q16']:checked").val();
	if (q16) {
		localStorage.setItem("q16", q16);
		localStorage.setItem('v16', 1);	
	}

	var q17 = $("input[name='q17']:checked").val();
	if (q17) {
		localStorage.setItem("q17", q17);
		localStorage.setItem('v17', 1);	
	}

	var q18 = $("input[name='q18']:checked").val();
	if (q18) {
		localStorage.setItem("q18", q18);
		localStorage.setItem('v18', 1);	
	}

	var q19 = $("input[name='q19']:checked").val();
	if (q19) {
		localStorage.setItem("q19", q19);
		localStorage.setItem('v19', 1);	
	}

	var q20 = $("input[name='q20']:checked").val();
	if (q20) {
		localStorage.setItem("q20", q20);
		localStorage.setItem('v20', 1);	
	}

	var q21 = $("input[name='q21']:checked").val();
	if (q21) {
		localStorage.setItem("q21", q21);
		localStorage.setItem('v21', 1);	
	}

	var q22 = $("input[name='q22']:checked").val();
	if (q22) {
		localStorage.setItem("q22", q22);
		localStorage.setItem('v22', 1);	
	}

	var q23 = $("input[name='q23']:checked").val();
	if (q23) {
		localStorage.setItem("q23", q23);
		localStorage.setItem('v23', 1);	
	}
};