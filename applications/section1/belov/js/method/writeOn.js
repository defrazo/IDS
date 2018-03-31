function get_data() { //Вносит заполненные данные из полей формы в localStorage
	
	var date = $('#date').val();
	if (date != 0) localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != 0) localStorage.setItem('genderinp', gender);

	var group = $('input[name="group"]:checked').val();
	if (group != 0) localStorage.setItem('groupinp', group);

	var recovery = $('input[name="recovery"]:checked').val();
	if (recovery != 0) localStorage.setItem('recoveryinp', recovery);

	var exercise = $('input[name="exercise"]:checked').val();
	if (exercise != 0) localStorage.setItem('exerciseinp', exercise);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != 0) localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != 0) localStorage.setItem('mnameinp', mname);

	var cold = $('#cold').val();
	if (cold != 0) localStorage.setItem('coldinp', cold);

	var weight = $('#weight').val();
	if (weight != 0) localStorage.setItem('weightinp', weight);

	var height = $('#height').val();
	if (height != 0) localStorage.setItem('heightinp', height);

	var pulse = $('#pulse').val();
	if (pulse != 0) localStorage.setItem('pulseinp', pulse);

	var sist = $('#sist').val();
	if (sist != 0) localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != 0) localStorage.setItem('diainp', dia);

	var rec1 = $('#rec1').val();
	if (rec1 != 0) localStorage.setItem('rec1inp', rec1);

	var rec2 = $('#rec2').val();
	if (rec2 != 0) localStorage.setItem('rec2inp', rec2);

	var exercval = $('#exercval').val();
	if (exercval != 0) localStorage.setItem('exercvalinp', exercval);

	var lift = $('#lift').val();
	if (lift != 0) localStorage.setItem('liftinp', lift);

	var jump = $('#jump').val();
	if (jump != 0) localStorage.setItem('jumpinp', jump);

	var lung = $('#lung').val();
	if (lung != 0) localStorage.setItem('lunginp', lung);

	var training = $('#training').val();
	if (training != 0) localStorage.setItem('traininginp', training);
};