$(document).ready(function() {
	if (localStorage.getItem('dateinp') != 0) $('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != 0) {
		if (localStorage.getItem('genderinp') == 'Мужской') $('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский') $('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != 0) $('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != 0) $('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != 0) $('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('ageinp') != 0) $('#age').val(localStorage.getItem('ageinp'));
	if (localStorage.getItem('weightinp') != 0) $('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('sistinp') != 0) $('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('diainp') != 0) $('#dia').val(localStorage.getItem('diainp'));
	if (localStorage.getItem('inhainp') != 0) $('#inha').val(localStorage.getItem('inhainp'));
	if (localStorage.getItem('staticinp') != 0) $('#static').val(localStorage.getItem('staticinp'));
});