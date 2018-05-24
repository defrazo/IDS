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

	var q4111 = $("input[name='q4111']:checked").val();
	if (q4111) {
		localStorage.setItem("q4111", q4111);
		localStorage.setItem('v1', 1);	
	}
	
	var q4112 = $("input[name='q4112']:checked").val();
	if (q4112) {
		localStorage.setItem("q4112", q4112);
		localStorage.setItem('v2', 1);	
	}
	
	var q4113 = $("input[name='q4113']:checked").val();
	if (q4113) {
		localStorage.setItem("q4113", q4113);
		localStorage.setItem('v3', 1);	
	}
	
	var q4114 = $("input[name='q4114']:checked").val();
	if (q4114) {
		localStorage.setItem("q4114", q4114);
		localStorage.setItem('v4', 1);	
	}
	
	var q4115 = $("input[name='q4115']:checked").val();
	if (q4115) {
		localStorage.setItem("q4115", q4115);
		localStorage.setItem('v5', 1);	
	}
	
	var q4116 = $("input[name='q4116']:checked").val();
	if (q4116) {
		localStorage.setItem("q4116", q4116);
		localStorage.setItem('v6', 1);	
	}

	var q4117 = $("input[name='q4117']:checked").val();
	if (q4117) {
		localStorage.setItem("q4117", q4117);
		localStorage.setItem('v7', 1);	
	}

	var q4118 = $("input[name='q4118']:checked").val();
	if (q4118) {
		localStorage.setItem("q4118", q4118);
		localStorage.setItem('v8', 1);	
	}

	var q4119 = $("input[name='q4119']:checked").val();
	if (q4119) {
		localStorage.setItem("q4119", q4119);
		localStorage.setItem('v9', 1);	
	}

	var q41110 = $("input[name='q41110']:checked").val();
	if (q41110) {
		localStorage.setItem("q41110", q41110);
		localStorage.setItem('v10', 1);	
	}

	var q41111 = $("input[name='q41111']:checked").val();
	if (q41111) {
		localStorage.setItem("q41111", q41111);
		localStorage.setItem('v11', 1);	
	}

	var q41112 = $("input[name='q41112']:checked").val();
	if (q41112) {
		localStorage.setItem("q41112", q41112);
		localStorage.setItem('v12', 1);	
	}

	var q41113 = $("input[name='q41113']:checked").val();
	if (q41113) {
		localStorage.setItem("q41113", q41113);
		localStorage.setItem('v13', 1);	
	}

	var q41114 = $("input[name='q41114']:checked").val();
	if (q41114) {
		localStorage.setItem("q41114", q41114);
		localStorage.setItem('v14', 1);	
	}

	var q41115 = $("input[name='q41115']:checked").val();
	if (q41115) {
		localStorage.setItem("q41115", q41115);
		localStorage.setItem('v15', 1);	
	}

	var q41116 = $("input[name='q41116']:checked").val();
	if (q41116) {
		localStorage.setItem("q41116", q41116);
		localStorage.setItem('v16', 1);	
	}
};