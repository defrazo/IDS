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
	if (localStorage.getItem('heightinp') != '')	$('#height').val(localStorage.getItem('heightinp'));
	if (localStorage.getItem('weightinp') != '')	$('#weight').val(localStorage.getItem('weightinp'));
	if (localStorage.getItem('facinp') != '')	$('#fac').val(localStorage.getItem('facinp'));
	if (localStorage.getItem('j1inp') != '') {
		if (localStorage.getItem('j1inp') == '2')	$('input:radio[name="j1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j1inp') == '1')	$('input:radio[name="j1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j1inp') == '0')	$('input:radio[name="j1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j2inp') != '') {
		if (localStorage.getItem('j2inp') == '2')	$('input:radio[name="j2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j2inp') == '1')	$('input:radio[name="j2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j2inp') == '0')	$('input:radio[name="j2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j3inp') != '') {
		if (localStorage.getItem('j3inp') == '2')	$('input:radio[name="j3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j3inp') == '1')	$('input:radio[name="j3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j3inp') == '0')	$('input:radio[name="j3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j4inp') != '') {
		if (localStorage.getItem('j4inp') == '2')	$('input:radio[name="j4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j4inp') == '1')	$('input:radio[name="j4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j4inp') == '0')	$('input:radio[name="j4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j5inp') != '') {
		if (localStorage.getItem('j5inp') == '2')	$('input:radio[name="j5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j5inp') == '1')	$('input:radio[name="j5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j5inp') == '0')	$('input:radio[name="j5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j6inp') != '') {
		if (localStorage.getItem('j6inp') == '2')	$('input:radio[name="j6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j6inp') == '1')	$('input:radio[name="j6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j6inp') == '0')	$('input:radio[name="j6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j7inp') != '') {
		if (localStorage.getItem('j7inp') == '2')	$('input:radio[name="j7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j7inp') == '1')	$('input:radio[name="j7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j7inp') == '0')	$('input:radio[name="j7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j8inp') != '') {
		if (localStorage.getItem('j8inp') == '2')	$('input:radio[name="j8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j8inp') == '1')	$('input:radio[name="j8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j8inp') == '0')	$('input:radio[name="j8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j9inp') != '') {
		if (localStorage.getItem('j9inp') == '2')	$('input:radio[name="j9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j9inp') == '1')	$('input:radio[name="j9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j9inp') == '0')	$('input:radio[name="j9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j10inp') != '') {
		if (localStorage.getItem('j10inp') == '2')	$('input:radio[name="j10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j10inp') == '1')	$('input:radio[name="j10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j10inp') == '0')	$('input:radio[name="j10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j11inp') != '') {
		if (localStorage.getItem('j11inp') == '2')	$('input:radio[name="j11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j11inp') == '1')	$('input:radio[name="j11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j11inp') == '0')	$('input:radio[name="j11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j12inp') != '') {
		if (localStorage.getItem('j12inp') == '2')	$('input:radio[name="j12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j12inp') == '1')	$('input:radio[name="j12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j12inp') == '0')	$('input:radio[name="j12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j13inp') != '') {
		if (localStorage.getItem('j13inp') == '2')	$('input:radio[name="j13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j13inp') == '1')	$('input:radio[name="j13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j13inp') == '0')	$('input:radio[name="j13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j14inp') != '') {
		if (localStorage.getItem('j14inp') == '2')	$('input:radio[name="j14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j14inp') == '1')	$('input:radio[name="j14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j14inp') == '0')	$('input:radio[name="j14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j15inp') != '') {
		if (localStorage.getItem('j15inp') == '2')	$('input:radio[name="j15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j15inp') == '1')	$('input:radio[name="j15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j15inp') == '0')	$('input:radio[name="j15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j16inp') != '') {
		if (localStorage.getItem('j16inp') == '2')	$('input:radio[name="j16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j16inp') == '1')	$('input:radio[name="j16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j16inp') == '0')	$('input:radio[name="j16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j17inp') != '') {
		if (localStorage.getItem('j17inp') == '2')	$('input:radio[name="j17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j17inp') == '1')	$('input:radio[name="j17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j17inp') == '0')	$('input:radio[name="j17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j18inp') != '') {
		if (localStorage.getItem('j18inp') == '2')	$('input:radio[name="j18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j18inp') == '1')	$('input:radio[name="j18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j18inp') == '0')	$('input:radio[name="j18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j19inp') != '') {
		if (localStorage.getItem('j19inp') == '2')	$('input:radio[name="j19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j19inp') == '1')	$('input:radio[name="j19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j19inp') == '0')	$('input:radio[name="j19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j20inp') != '') {
		if (localStorage.getItem('j20inp') == '2')	$('input:radio[name="j20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j20inp') == '1')	$('input:radio[name="j20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j20inp') == '0')	$('input:radio[name="j20"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j21inp') != '') {
		if (localStorage.getItem('j21inp') == '2')	$('input:radio[name="j21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j21inp') == '1')	$('input:radio[name="j21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j21inp') == '0')	$('input:radio[name="j21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j22inp') != '') {
		if (localStorage.getItem('j22inp') == '2')	$('input:radio[name="j22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j22inp') == '1')	$('input:radio[name="j22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j22inp') == '0')	$('input:radio[name="j22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j23inp') != '') {
		if (localStorage.getItem('j23inp') == '2')	$('input:radio[name="j23"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j23inp') == '1')	$('input:radio[name="j23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j23inp') == '0')	$('input:radio[name="j23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j24inp') != '') {
		if (localStorage.getItem('j24inp') == '2')	$('input:radio[name="j24"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j24inp') == '1')	$('input:radio[name="j24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j24inp') == '0')	$('input:radio[name="j24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j25inp') != '') {
		if (localStorage.getItem('j25inp') == '2')	$('input:radio[name="j25"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j25inp') == '1')	$('input:radio[name="j25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j25inp') == '0')	$('input:radio[name="j25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j26inp') != '') {
		if (localStorage.getItem('j26inp') == '2')	$('input:radio[name="j26"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j26inp') == '1')	$('input:radio[name="j26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j26inp') == '0')	$('input:radio[name="j26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j27inp') != '') {
		if (localStorage.getItem('j27inp') == '2')	$('input:radio[name="j27"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j27inp') == '1')	$('input:radio[name="j27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j27inp') == '0')	$('input:radio[name="j27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j28inp') != '') {
		if (localStorage.getItem('j28inp') == '2')	$('input:radio[name="j28"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j28inp') == '1')	$('input:radio[name="j28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j28inp') == '0')	$('input:radio[name="j28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j29inp') != '') {
		if (localStorage.getItem('j29inp') == '2')	$('input:radio[name="j29"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j29inp') == '1')	$('input:radio[name="j29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j29inp') == '0')	$('input:radio[name="j29"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j30inp') != '') {
		if (localStorage.getItem('j30inp') == '2')	$('input:radio[name="j30"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j30inp') == '1')	$('input:radio[name="j30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j30inp') == '0')	$('input:radio[name="j30"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j31inp') != '') {
		if (localStorage.getItem('j31inp') == '2')	$('input:radio[name="j31"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j31inp') == '1')	$('input:radio[name="j31"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j31inp') == '0')	$('input:radio[name="j31"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j32inp') != '') {
		if (localStorage.getItem('j32inp') == '2')	$('input:radio[name="j32"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j32inp') == '1')	$('input:radio[name="j32"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j32inp') == '0')	$('input:radio[name="j32"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j33inp') != '') {
		if (localStorage.getItem('j33inp') == '2')	$('input:radio[name="j33"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j33inp') == '1')	$('input:radio[name="j33"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j33inp') == '0')	$('input:radio[name="j33"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j34inp') != '') {
		if (localStorage.getItem('j34inp') == '2')	$('input:radio[name="j34"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j34inp') == '1')	$('input:radio[name="j34"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j34inp') == '0')	$('input:radio[name="j34"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j35inp') != '') {
		if (localStorage.getItem('j35inp') == '2')	$('input:radio[name="j35"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j35inp') == '1')	$('input:radio[name="j35"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j35inp') == '0')	$('input:radio[name="j35"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j36inp') != '') {
		if (localStorage.getItem('j36inp') == '2')	$('input:radio[name="j36"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j36inp') == '1')	$('input:radio[name="j36"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j36inp') == '0')	$('input:radio[name="j36"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j37inp') != '') {
		if (localStorage.getItem('j37inp') == '2')	$('input:radio[name="j37"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j37inp') == '1')	$('input:radio[name="j37"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j37inp') == '0')	$('input:radio[name="j37"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j38inp') != '') {
		if (localStorage.getItem('j38inp') == '2')	$('input:radio[name="j38"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j38inp') == '1')	$('input:radio[name="j38"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j38inp') == '0')	$('input:radio[name="j38"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j39inp') != '') {
		if (localStorage.getItem('j39inp') == '2')	$('input:radio[name="j39"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j39inp') == '1')	$('input:radio[name="j39"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j39inp') == '0')	$('input:radio[name="j39"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j40inp') != '') {
		if (localStorage.getItem('j40inp') == '2')	$('input:radio[name="j40"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j40inp') == '1')	$('input:radio[name="j40"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j40inp') == '0')	$('input:radio[name="j40"]').filter('[value="0"]').attr('checked',true);
	}
});