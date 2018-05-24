$(document).ready(function() { //Восстанавливает значения полей
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
	if (localStorage.getItem('j1') != '') {
		if (localStorage.getItem('j1') == '2')	$('input:radio[name="j1"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j1') == '1')	$('input:radio[name="j1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j1') == '0')	$('input:radio[name="j1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j2') != '') {
		if (localStorage.getItem('j2') == '2')	$('input:radio[name="j2"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j2') == '1')	$('input:radio[name="j2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j2') == '0')	$('input:radio[name="j2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j3') != '') {
		if (localStorage.getItem('j3') == '2')	$('input:radio[name="j3"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j3') == '1')	$('input:radio[name="j3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j3') == '0')	$('input:radio[name="j3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j4') != '') {
		if (localStorage.getItem('j4') == '2')	$('input:radio[name="j4"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j4') == '1')	$('input:radio[name="j4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j4') == '0')	$('input:radio[name="j4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j5') != '') {
		if (localStorage.getItem('j5') == '2')	$('input:radio[name="j5"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j5') == '1')	$('input:radio[name="j5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j5') == '0')	$('input:radio[name="j5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j6') != '') {
		if (localStorage.getItem('j6') == '2')	$('input:radio[name="j6"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j6') == '1')	$('input:radio[name="j6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j6') == '0')	$('input:radio[name="j6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j7') != '') {
		if (localStorage.getItem('j7') == '2')	$('input:radio[name="j7"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j7') == '1')	$('input:radio[name="j7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j7') == '0')	$('input:radio[name="j7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j8') != '') {
		if (localStorage.getItem('j8') == '2')	$('input:radio[name="j8"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j8') == '1')	$('input:radio[name="j8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j8') == '0')	$('input:radio[name="j8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j9') != '') {
		if (localStorage.getItem('j9') == '2')	$('input:radio[name="j9"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j9') == '1')	$('input:radio[name="j9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j9') == '0')	$('input:radio[name="j9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j10') != '') {
		if (localStorage.getItem('j10') == '2')	$('input:radio[name="j10"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j10') == '1')	$('input:radio[name="j10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j10') == '0')	$('input:radio[name="j10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j11') != '') {
		if (localStorage.getItem('j11') == '2')	$('input:radio[name="j11"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j11') == '1')	$('input:radio[name="j11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j11') == '0')	$('input:radio[name="j11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j12') != '') {
		if (localStorage.getItem('j12') == '2')	$('input:radio[name="j12"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j12') == '1')	$('input:radio[name="j12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j12') == '0')	$('input:radio[name="j12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j13') != '') {
		if (localStorage.getItem('j13') == '2')	$('input:radio[name="j13"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j13') == '1')	$('input:radio[name="j13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j13') == '0')	$('input:radio[name="j13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j14') != '') {
		if (localStorage.getItem('j14') == '2')	$('input:radio[name="j14"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j14') == '1')	$('input:radio[name="j14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j14') == '0')	$('input:radio[name="j14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j15') != '') {
		if (localStorage.getItem('j15') == '2')	$('input:radio[name="j15"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j15') == '1')	$('input:radio[name="j15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j15') == '0')	$('input:radio[name="j15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j16') != '') {
		if (localStorage.getItem('j16') == '2')	$('input:radio[name="j16"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j16') == '1')	$('input:radio[name="j16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j16') == '0')	$('input:radio[name="j16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j17') != '') {
		if (localStorage.getItem('j17') == '2')	$('input:radio[name="j17"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j17') == '1')	$('input:radio[name="j17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j17') == '0')	$('input:radio[name="j17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j18') != '') {
		if (localStorage.getItem('j18') == '2')	$('input:radio[name="j18"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j18') == '1')	$('input:radio[name="j18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j18') == '0')	$('input:radio[name="j18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j19') != '') {
		if (localStorage.getItem('j19') == '2')	$('input:radio[name="j19"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j19') == '1')	$('input:radio[name="j19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j19') == '0')	$('input:radio[name="j19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j20') != '') {
		if (localStorage.getItem('j20') == '2')	$('input:radio[name="j20"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j20') == '1')	$('input:radio[name="j20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j20') == '0')	$('input:radio[name="j20"]').filter('[value="0"]').attr('checked',true);
	}

	if (localStorage.getItem('j21') != '') {
		if (localStorage.getItem('j21') == '2')	$('input:radio[name="j21"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j21') == '1')	$('input:radio[name="j21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j21') == '0')	$('input:radio[name="j21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j22') != '') {
		if (localStorage.getItem('j22') == '2')	$('input:radio[name="j22"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j22') == '1')	$('input:radio[name="j22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j22') == '0')	$('input:radio[name="j22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j23') != '') {
		if (localStorage.getItem('j23') == '2')	$('input:radio[name="j23"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j23') == '1')	$('input:radio[name="j23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j23') == '0')	$('input:radio[name="j23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j24') != '') {
		if (localStorage.getItem('j24') == '2')	$('input:radio[name="j24"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j24') == '1')	$('input:radio[name="j24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j24') == '0')	$('input:radio[name="j24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j25') != '') {
		if (localStorage.getItem('j25') == '2')	$('input:radio[name="j25"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j25') == '1')	$('input:radio[name="j25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j25') == '0')	$('input:radio[name="j25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j26') != '') {
		if (localStorage.getItem('j26') == '2')	$('input:radio[name="j26"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j26') == '1')	$('input:radio[name="j26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j26') == '0')	$('input:radio[name="j26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j27') != '') {
		if (localStorage.getItem('j27') == '2')	$('input:radio[name="j27"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j27') == '1')	$('input:radio[name="j27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j27') == '0')	$('input:radio[name="j27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j28') != '') {
		if (localStorage.getItem('j28') == '2')	$('input:radio[name="j28"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j28') == '1')	$('input:radio[name="j28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j28') == '0')	$('input:radio[name="j28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j29') != '') {
		if (localStorage.getItem('j29') == '2')	$('input:radio[name="j29"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j29') == '1')	$('input:radio[name="j29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j29') == '0')	$('input:radio[name="j29"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j30') != '') {
		if (localStorage.getItem('j30') == '2')	$('input:radio[name="j30"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j30') == '1')	$('input:radio[name="j30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j30') == '0')	$('input:radio[name="j30"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j31') != '') {
		if (localStorage.getItem('j31') == '2')	$('input:radio[name="j31"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j31') == '1')	$('input:radio[name="j31"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j31') == '0')	$('input:radio[name="j31"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j32') != '') {
		if (localStorage.getItem('j32') == '2')	$('input:radio[name="j32"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j32') == '1')	$('input:radio[name="j32"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j32') == '0')	$('input:radio[name="j32"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j33') != '') {
		if (localStorage.getItem('j33') == '2')	$('input:radio[name="j33"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j33') == '1')	$('input:radio[name="j33"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j33') == '0')	$('input:radio[name="j33"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j34') != '') {
		if (localStorage.getItem('j34') == '2')	$('input:radio[name="j34"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j34') == '1')	$('input:radio[name="j34"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j34') == '0')	$('input:radio[name="j34"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j35') != '') {
		if (localStorage.getItem('j35') == '2')	$('input:radio[name="j35"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j35') == '1')	$('input:radio[name="j35"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j35') == '0')	$('input:radio[name="j35"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j36') != '') {
		if (localStorage.getItem('j36') == '2')	$('input:radio[name="j36"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j36') == '1')	$('input:radio[name="j36"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j36') == '0')	$('input:radio[name="j36"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j37') != '') {
		if (localStorage.getItem('j37') == '2')	$('input:radio[name="j37"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j37') == '1')	$('input:radio[name="j37"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j37') == '0')	$('input:radio[name="j37"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j38') != '') {
		if (localStorage.getItem('j38') == '2')	$('input:radio[name="j38"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j38') == '1')	$('input:radio[name="j38"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j38') == '0')	$('input:radio[name="j38"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j39') != '') {
		if (localStorage.getItem('j39') == '2')	$('input:radio[name="j39"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j39') == '1')	$('input:radio[name="j39"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j39') == '0')	$('input:radio[name="j39"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('j40') != '') {
		if (localStorage.getItem('j40') == '2')	$('input:radio[name="j40"]').filter('[value="2"]').attr('checked',true);
		if (localStorage.getItem('j40') == '1')	$('input:radio[name="j40"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('j40') == '0')	$('input:radio[name="j40"]').filter('[value="0"]').attr('checked',true);
	}
});