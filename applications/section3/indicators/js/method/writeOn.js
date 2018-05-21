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

	var age = $('#age').val();
	if (age != '') localStorage.setItem('ageinp', age);

	var weight = $('#weight').val();
	if (weight != '') localStorage.setItem('weightinp', weight);

	var height = $('#height').val();
	if (height != '') localStorage.setItem('heightinp', height);

	var heightsit = $('#heightsit').val();
	if (heightsit != '') localStorage.setItem('heightsitinp', heightsit);

	var heightmother = $('#heightmother').val();
	if (heightmother != '') localStorage.setItem('heightmotherinp', heightmother);

	var heightfather = $('#heightfather').val();
	if (heightfather != '') localStorage.setItem('heightfatherinp', heightfather);

	var dynam = $('#dynam').val();
	if (dynam != '') localStorage.setItem('dynaminp', dynam);

	var chest = $('#chest').val();
	if (chest != '') localStorage.setItem('chestinp', chest);

	var lung = $('#lung').val();
	if (lung != '') localStorage.setItem('lunginp', lung);

	var waist = $('#waist').val();
	if (waist != '') localStorage.setItem('waistinp', waist);

	var legs = $('#legs').val();
	if (legs != '') localStorage.setItem('legsinp', legs);

	var shoulders = $('#shoulders').val();
	if (shoulders != '') localStorage.setItem('shouldersinp', shoulders);

	var fac = $('#fac').val();
	if (fac != '') localStorage.setItem('facinp', fac);
};