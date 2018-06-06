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

	var pulseop = $('#pulseop').val();
	if (pulseop != '') localStorage.setItem('pulseopinp', pulseop);

	var sistp = $('#sistp').val();
	if (sistp != '') localStorage.setItem('sistpinp', sistp);

	var diap = $('#diap').val();
	if (diap != '') localStorage.setItem('diapinp', diap);

	var pulsep = $('#pulsep').val();
	if (pulsep != '') localStorage.setItem('pulsepinp', pulsep);

	var pulsebb = $('#pulsebb').val();
	if (pulsebb != '') localStorage.setItem('pulsebbinp', pulsebb);

	var pulseba = $('#pulseba').val();
	if (pulseba != '') localStorage.setItem('pulsebainp', pulseba);

	var pulsebaa = $('#pulsebaa').val();
	if (pulsebaa != '') localStorage.setItem('pulsebaainp', pulsebaa);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};