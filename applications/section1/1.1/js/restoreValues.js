$(document).ready(function() {
	if (localStorage.getItem('dateinp') != '')	$('#date').val(localStorage.getItem('dateinp'));
	if (localStorage.getItem('genderinp') != '') {
		if (localStorage.getItem('genderinp') == 'Мужской')	$('input:radio[name="gender"]').filter('[value="Мужской"]').attr('checked',true);
		if (localStorage.getItem('genderinp') == 'Женский')	$('input:radio[name="gender"]').filter('[value="Женский"]').attr('checked',true);
	}
	if (localStorage.getItem('snameinp') != '')	$('#sname').val(localStorage.getItem('snameinp'));
	if (localStorage.getItem('fnameinp') != '')	$('#fname').val(localStorage.getItem('fnameinp'));
	if (localStorage.getItem('mnameinp') != '')	$('#mname').val(localStorage.getItem('mnameinp'));
	if (localStorage.getItem('ageinp') != '')	$('#age').val(localStorage.getItem('ageinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('sistinp') != '')	$('#sist').val(localStorage.getItem('sistinp'));
	if (localStorage.getItem('diainp') != '')	$('#dia').val(localStorage.getItem('diainp'));
	if (localStorage.getItem('inhainp') != '')	$('#inha').val(localStorage.getItem('inhainp'));
	if (localStorage.getItem('staticinp') != '')	$('#static').val(localStorage.getItem('staticinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('a1inp') != '') {
		if (localStorage.getItem('a1inp') == '1')	$('input:radio[name="a1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a1inp') == '0')	$('input:radio[name="a1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a2inp') != '') {
		if (localStorage.getItem('a2inp') == '1')	$('input:radio[name="a2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a2inp') == '0')	$('input:radio[name="a2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a3inp') != '') {
		if (localStorage.getItem('a3inp') == '1')	$('input:radio[name="a3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a3inp') == '0')	$('input:radio[name="a3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a4inp') != '') {
		if (localStorage.getItem('a4inp') == '1')	$('input:radio[name="a4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a4inp') == '0')	$('input:radio[name="a4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a5inp') != '') {
		if (localStorage.getItem('a5inp') == '1')	$('input:radio[name="a5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a5inp') == '0')	$('input:radio[name="a5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a6inp') != '') {
		if (localStorage.getItem('a6inp') == '1')	$('input:radio[name="a6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a6inp') == '0')	$('input:radio[name="a6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a7inp') != '') {
		if (localStorage.getItem('a7inp') == '1')	$('input:radio[name="a7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a7inp') == '0')	$('input:radio[name="a7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a8inp') != '') {
		if (localStorage.getItem('a8inp') == '1')	$('input:radio[name="a8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a8inp') == '0')	$('input:radio[name="a8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a9inp') != '') {
		if (localStorage.getItem('a9inp') == '1')	$('input:radio[name="a9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a9inp') == '0')	$('input:radio[name="a9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a10inp') != '') {
		if (localStorage.getItem('a10inp') == '1')	$('input:radio[name="a10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a10inp') == '0')	$('input:radio[name="a10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a11inp') != '') {
		if (localStorage.getItem('a11inp') == '1')	$('input:radio[name="a11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a11inp') == '0')	$('input:radio[name="a11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a12inp') != '') {
		if (localStorage.getItem('a12inp') == '1')	$('input:radio[name="a12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a12inp') == '0')	$('input:radio[name="a12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a13inp') != '') {
		if (localStorage.getItem('a13inp') == '1')	$('input:radio[name="a13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a13inp') == '0')	$('input:radio[name="a13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a14inp') != '') {
		if (localStorage.getItem('a14inp') == '1')	$('input:radio[name="a14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a14inp') == '0')	$('input:radio[name="a14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a15inp') != '') {
		if (localStorage.getItem('a15inp') == '1')	$('input:radio[name="a15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a15inp') == '0')	$('input:radio[name="a15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a16inp') != '') {
		if (localStorage.getItem('a16inp') == '1')	$('input:radio[name="a16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a16inp') == '0')	$('input:radio[name="a16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a17inp') != '') {
		if (localStorage.getItem('a17inp') == '1')	$('input:radio[name="a17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a17inp') == '0')	$('input:radio[name="a17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a18inp') != '') {
		if (localStorage.getItem('a18inp') == '1')	$('input:radio[name="a18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a18inp') == '0')	$('input:radio[name="a18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a19inp') != '') {
		if (localStorage.getItem('a19inp') == '1')	$('input:radio[name="a19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a19inp') == '0')	$('input:radio[name="a19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a20inp') != '') {
		if (localStorage.getItem('a20inp') == '1')	$('input:radio[name="a20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a20inp') == '0')	$('input:radio[name="a20"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a21inp') != '') {
		if (localStorage.getItem('a21inp') == '1')	$('input:radio[name="a21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a21inp') == '0')	$('input:radio[name="a21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a22inp') != '') {
		if (localStorage.getItem('a22inp') == '1')	$('input:radio[name="a22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a22inp') == '0')	$('input:radio[name="a22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a23inp') != '') {
		if (localStorage.getItem('a23inp') == '1')	$('input:radio[name="a23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a23inp') == '0')	$('input:radio[name="a23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a24inp') != '') {
		if (localStorage.getItem('a24inp') == '1')	$('input:radio[name="a24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a24inp') == '0')	$('input:radio[name="a24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a25inp') != '') {
		if (localStorage.getItem('a25inp') == '1')	$('input:radio[name="a25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a25inp') == '0')	$('input:radio[name="a25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a26inp') != '') {
		if (localStorage.getItem('a26inp') == '1')	$('input:radio[name="a26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a26inp') == '0')	$('input:radio[name="a26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a27inp') != '') {
		if (localStorage.getItem('a27inp') == '1')	$('input:radio[name="a27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a27inp') == '0')	$('input:radio[name="a27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a28inp') != '') {
		if (localStorage.getItem('a28inp') == '1')	$('input:radio[name="a28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a28inp') == '0')	$('input:radio[name="a28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('a29inp') != '') {
		if (localStorage.getItem('a29inp') == '1')	$('input:radio[name="a29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('a29inp') == '1.1')	$('input:radio[name="a29"]').filter('[value="1.1"]').attr('checked',true);
		if (localStorage.getItem('a29inp') == '0')	$('input:radio[name="a29"]').filter('[value="0"]').attr('checked',true);
		if (localStorage.getItem('a29inp') == '0.1')	$('input:radio[name="a29"]').filter('[value="0.1"]').attr('checked',true);
	}
});