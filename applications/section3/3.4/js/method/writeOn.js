function get_data() {
	
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

	var sist = $('#sist').val();
	if (sist != '') localStorage.setItem('sistinp', sist);

	var dia = $('#dia').val();
	if (dia != '') localStorage.setItem('diainp', dia);

	var pulse = $('#pulse').val();
	if (pulse != '') localStorage.setItem('pulseinp', pulse);

	var stab = $('#stab').val();
	if (stab != '') localStorage.setItem('stabinp', stab);

	var ortopulseh = $('#ortopulseh').val();
	if (ortopulseh != '') localStorage.setItem('ortopulsehinp', ortopulseh);

	var ortopulsev = $('#ortopulsev').val();
	if (ortopulsev != '') localStorage.setItem('ortopulsevinp', ortopulsev);

	var clinopulseh = $('#clinopulseh').val();
	if (clinopulseh != '') localStorage.setItem('clinopulsehinp', clinopulseh);

	var clinopulsev = $('#clinopulsev').val();
	if (clinopulsev != '') localStorage.setItem('clinopulsevinp', clinopulsev);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};