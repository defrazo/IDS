function get_data() {
	
	var date = $('#date').val();
	if (date != '') localStorage.setItem('dateinp', date);

	var gender = $('input[name="gender"]:checked').val();
	if (gender != '') localStorage.setItem('genderinp', gender);

	var group = $('input[name="group"]:checked').val();
	if (group != '') localStorage.setItem('groupinp', group);

	var recovery = $('input[name="recovery"]:checked').val();
	if (recovery != '') localStorage.setItem('recoveryinp', recovery);

	var exercise = $('input[name="exercise"]:checked').val();
	if (exercise != '') localStorage.setItem('exerciseinp', exercise);

	var sname = $('#sname').val();
	if (sname != '') localStorage.setItem('snameinp', sname);
	
	var fname = $('#fname').val();
	if (fname != '') localStorage.setItem('fnameinp', fname);

	var mname = $('#mname').val();
	if (mname != '') localStorage.setItem('mnameinp', mname);

	var cold = $('#cold').val();
	if (cold != '') localStorage.setItem('coldinp', cold);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var height = $('#height').val();
	if (height != '') localStorage.setItem('heightinp', height);

	var pulse = $('#pulse').val();
	if (pulse != '') localStorage.setItem('pulseinp', pulse);

	var sist = $('#sist').val();
	if (sist != '') localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != '') localStorage.setItem('diainp', dia);

	var rec1 = $('#rec1').val();
	if (rec1 != '') localStorage.setItem('rec1inp', rec1);

	var rec2 = $('#rec2').val();
	if (rec2 != '') localStorage.setItem('rec2inp', rec2);

	var exercval = $('#exercval').val();
	if (exercval != '') localStorage.setItem('exercvalinp', exercval);

	var lift = $('#lift').val();
	if (lift != '') localStorage.setItem('liftinp', lift);

	var jump = $('#jump').val();
	if (jump != '') localStorage.setItem('jumpinp', jump);

	var lung = $('#lung').val();
	if (lung != '') localStorage.setItem('lunginp', lung);

	var training = $('#training').val();
	if (training != '') localStorage.setItem('traininginp', training);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};