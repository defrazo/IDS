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
	if (localStorage.getItem('m1inp') != '') {
		if (localStorage.getItem('m1inp') == '1')	$('input:radio[name="m1"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m1inp') == '0')	$('input:radio[name="m1"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m2inp') != '') {
		if (localStorage.getItem('m2inp') == '1')	$('input:radio[name="m2"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m2inp') == '0')	$('input:radio[name="m2"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m3inp') != '') {
		if (localStorage.getItem('m3inp') == '1')	$('input:radio[name="m3"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m3inp') == '0')	$('input:radio[name="m3"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m4inp') != '') {
		if (localStorage.getItem('m4inp') == '1')	$('input:radio[name="m4"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m4inp') == '0')	$('input:radio[name="m4"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m5inp') != '') {
		if (localStorage.getItem('m5inp') == '1')	$('input:radio[name="m5"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m5inp') == '0')	$('input:radio[name="m5"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m6inp') != '') {
		if (localStorage.getItem('m6inp') == '1')	$('input:radio[name="m6"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m6inp') == '0')	$('input:radio[name="m6"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m7inp') != '') {
		if (localStorage.getItem('m7inp') == '1')	$('input:radio[name="m7"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m7inp') == '0')	$('input:radio[name="m7"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m8inp') != '') {
		if (localStorage.getItem('m8inp') == '1')	$('input:radio[name="m8"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m8inp') == '0')	$('input:radio[name="m8"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m9inp') != '') {
		if (localStorage.getItem('m9inp') == '1')	$('input:radio[name="m9"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m9inp') == '0')	$('input:radio[name="m9"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m10inp') != '') {
		if (localStorage.getItem('m10inp') == '1')	$('input:radio[name="m10"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m10inp') == '0')	$('input:radio[name="m10"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m11inp') != '') {
		if (localStorage.getItem('m11inp') == '1')	$('input:radio[name="m11"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m11inp') == '0')	$('input:radio[name="m11"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m12inp') != '') {
		if (localStorage.getItem('m12inp') == '1')	$('input:radio[name="m12"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m12inp') == '0')	$('input:radio[name="m12"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m13inp') != '') {
		if (localStorage.getItem('m13inp') == '1')	$('input:radio[name="m13"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m13inp') == '0')	$('input:radio[name="m13"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m14inp') != '') {
		if (localStorage.getItem('m14inp') == '1')	$('input:radio[name="m14"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m14inp') == '0')	$('input:radio[name="m14"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m15inp') != '') {
		if (localStorage.getItem('m15inp') == '1')	$('input:radio[name="m15"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m15inp') == '0')	$('input:radio[name="m15"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m16inp') != '') {
		if (localStorage.getItem('m16inp') == '1')	$('input:radio[name="m16"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m16inp') == '0')	$('input:radio[name="m16"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m17inp') != '') {
		if (localStorage.getItem('m17inp') == '1')	$('input:radio[name="m17"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m17inp') == '0')	$('input:radio[name="m17"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m18inp') != '') {
		if (localStorage.getItem('m18inp') == '1')	$('input:radio[name="m18"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m18inp') == '0')	$('input:radio[name="m18"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m19inp') != '') {
		if (localStorage.getItem('m19inp') == '1')	$('input:radio[name="m19"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m19inp') == '0')	$('input:radio[name="m19"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m20inp') != '') {
		if (localStorage.getItem('m20inp') == '1')	$('input:radio[name="m20"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m20inp') == '0')	$('input:radio[name="m20"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m21inp') != '') {
		if (localStorage.getItem('m21inp') == '1')	$('input:radio[name="m21"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m21inp') == '0')	$('input:radio[name="m21"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m22inp') != '') {
		if (localStorage.getItem('m22inp') == '1')	$('input:radio[name="m22"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m22inp') == '0')	$('input:radio[name="m22"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m23inp') != '') {
		if (localStorage.getItem('m23inp') == '1')	$('input:radio[name="m23"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m23inp') == '0')	$('input:radio[name="m23"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m24inp') != '') {
		if (localStorage.getItem('m24inp') == '1')	$('input:radio[name="m24"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m24inp') == '0')	$('input:radio[name="m24"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m25inp') != '') {
		if (localStorage.getItem('m25inp') == '1')	$('input:radio[name="m25"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m25inp') == '0')	$('input:radio[name="m25"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m26inp') != '') {
		if (localStorage.getItem('m26inp') == '1')	$('input:radio[name="m26"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m26inp') == '0')	$('input:radio[name="m26"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m27inp') != '') {
		if (localStorage.getItem('m27inp') == '1')	$('input:radio[name="m27"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m27inp') == '0')	$('input:radio[name="m27"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m28inp') != '') {
		if (localStorage.getItem('m28inp') == '1')	$('input:radio[name="m28"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m28inp') == '0')	$('input:radio[name="m28"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m29inp') != '') {
		if (localStorage.getItem('m29inp') == '1')	$('input:radio[name="m29"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m29inp') == '0')	$('input:radio[name="m29"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m30inp') != '') {
		if (localStorage.getItem('m30inp') == '1')	$('input:radio[name="m30"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m30inp') == '0')	$('input:radio[name="m30"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m31inp') != '') {
		if (localStorage.getItem('m31inp') == '1')	$('input:radio[name="m31"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m31inp') == '0')	$('input:radio[name="m31"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m32inp') != '') {
		if (localStorage.getItem('m32inp') == '1')	$('input:radio[name="m32"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m32inp') == '0')	$('input:radio[name="m32"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m33inp') != '') {
		if (localStorage.getItem('m33inp') == '1')	$('input:radio[name="m33"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m33inp') == '0')	$('input:radio[name="m33"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m34inp') != '') {
		if (localStorage.getItem('m34inp') == '1')	$('input:radio[name="m34"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m34inp') == '0')	$('input:radio[name="m34"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m35inp') != '') {
		if (localStorage.getItem('m35inp') == '1')	$('input:radio[name="m35"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m35inp') == '0')	$('input:radio[name="m35"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m36inp') != '') {
		if (localStorage.getItem('m36inp') == '1')	$('input:radio[name="m36"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m36inp') == '0')	$('input:radio[name="m36"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m37inp') != '') {
		if (localStorage.getItem('m37inp') == '1')	$('input:radio[name="m37"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m37inp') == '0')	$('input:radio[name="m37"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m38inp') != '') {
		if (localStorage.getItem('m38inp') == '1')	$('input:radio[name="m38"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m38inp') == '0')	$('input:radio[name="m38"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m39inp') != '') {
		if (localStorage.getItem('m39inp') == '1')	$('input:radio[name="m39"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m39inp') == '0')	$('input:radio[name="m39"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m40inp') != '') {
		if (localStorage.getItem('m40inp') == '1')	$('input:radio[name="m40"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m40inp') == '0')	$('input:radio[name="m40"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m41inp') != '') {
		if (localStorage.getItem('m41inp') == '1')	$('input:radio[name="m41"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m41inp') == '0')	$('input:radio[name="m41"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m42inp') != '') {
		if (localStorage.getItem('m42inp') == '1')	$('input:radio[name="m42"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m42inp') == '0')	$('input:radio[name="m42"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m43inp') != '') {
		if (localStorage.getItem('m43inp') == '1')	$('input:radio[name="m43"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m43inp') == '0')	$('input:radio[name="m43"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m44inp') != '') {
		if (localStorage.getItem('m44inp') == '1')	$('input:radio[name="m44"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m44inp') == '0')	$('input:radio[name="m44"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m45inp') != '') {
		if (localStorage.getItem('m45inp') == '1')	$('input:radio[name="m45"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m45inp') == '0')	$('input:radio[name="m45"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m46inp') != '') {
		if (localStorage.getItem('m46inp') == '1')	$('input:radio[name="m46"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m46inp') == '0')	$('input:radio[name="m46"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m47inp') != '') {
		if (localStorage.getItem('m47inp') == '1')	$('input:radio[name="m47"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m47inp') == '0')	$('input:radio[name="m47"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m48inp') != '') {
		if (localStorage.getItem('m48inp') == '1')	$('input:radio[name="m48"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m48inp') == '0')	$('input:radio[name="m48"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m49inp') != '') {
		if (localStorage.getItem('m49inp') == '1')	$('input:radio[name="m49"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m49inp') == '0')	$('input:radio[name="m49"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m50inp') != '') {
		if (localStorage.getItem('m50inp') == '1')	$('input:radio[name="m50"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m50inp') == '0')	$('input:radio[name="m50"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m51inp') != '') {
		if (localStorage.getItem('m51inp') == '1')	$('input:radio[name="m51"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m51inp') == '0')	$('input:radio[name="m51"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m52inp') != '') {
		if (localStorage.getItem('m52inp') == '1')	$('input:radio[name="m52"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m52inp') == '0')	$('input:radio[name="m52"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m53inp') != '') {
		if (localStorage.getItem('m53inp') == '1')	$('input:radio[name="m53"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m53inp') == '0')	$('input:radio[name="m53"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m54inp') != '') {
		if (localStorage.getItem('m54inp') == '1')	$('input:radio[name="m54"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m54inp') == '0')	$('input:radio[name="m54"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m55inp') != '') {
		if (localStorage.getItem('m55inp') == '1')	$('input:radio[name="m55"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m55inp') == '0')	$('input:radio[name="m55"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m56inp') != '') {
		if (localStorage.getItem('m56inp') == '1')	$('input:radio[name="m56"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m56inp') == '0')	$('input:radio[name="m56"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m57inp') != '') {
		if (localStorage.getItem('m57inp') == '1')	$('input:radio[name="m57"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m57inp') == '0')	$('input:radio[name="m57"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m58inp') != '') {
		if (localStorage.getItem('m58inp') == '1')	$('input:radio[name="m58"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m58inp') == '0')	$('input:radio[name="m58"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m59inp') != '') {
		if (localStorage.getItem('m59inp') == '1')	$('input:radio[name="m59"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m59inp') == '0')	$('input:radio[name="m59"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m60inp') != '') {
		if (localStorage.getItem('m60inp') == '1')	$('input:radio[name="m60"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m60inp') == '0')	$('input:radio[name="m60"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m61inp') != '') {
		if (localStorage.getItem('m61inp') == '1')	$('input:radio[name="m61"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m61inp') == '0')	$('input:radio[name="m61"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m62inp') != '') {
		if (localStorage.getItem('m62inp') == '1')	$('input:radio[name="m62"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m62inp') == '0')	$('input:radio[name="m62"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m63inp') != '') {
		if (localStorage.getItem('m63inp') == '1')	$('input:radio[name="m63"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m63inp') == '0')	$('input:radio[name="m63"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m64inp') != '') {
		if (localStorage.getItem('m64inp') == '1')	$('input:radio[name="m64"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m64inp') == '0')	$('input:radio[name="m64"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m65inp') != '') {
		if (localStorage.getItem('m65inp') == '1')	$('input:radio[name="m65"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m65inp') == '0')	$('input:radio[name="m65"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m66inp') != '') {
		if (localStorage.getItem('m66inp') == '1')	$('input:radio[name="m66"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m66inp') == '0')	$('input:radio[name="m66"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m67inp') != '') {
		if (localStorage.getItem('m67inp') == '1')	$('input:radio[name="m67"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m67inp') == '0')	$('input:radio[name="m67"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m68inp') != '') {
		if (localStorage.getItem('m68inp') == '1')	$('input:radio[name="m68"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m68inp') == '0')	$('input:radio[name="m68"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m69inp') != '') {
		if (localStorage.getItem('m69inp') == '1')	$('input:radio[name="m69"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m69inp') == '0')	$('input:radio[name="m69"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m70inp') != '') {
		if (localStorage.getItem('m70inp') == '1')	$('input:radio[name="m70"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m70inp') == '0')	$('input:radio[name="m70"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m71inp') != '') {
		if (localStorage.getItem('m71inp') == '1')	$('input:radio[name="m71"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m71inp') == '0')	$('input:radio[name="m71"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m72inp') != '') {
		if (localStorage.getItem('m72inp') == '1')	$('input:radio[name="m72"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m72inp') == '0')	$('input:radio[name="m72"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m73inp') != '') {
		if (localStorage.getItem('m73inp') == '1')	$('input:radio[name="m73"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m73inp') == '0')	$('input:radio[name="m73"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m74inp') != '') {
		if (localStorage.getItem('m74inp') == '1')	$('input:radio[name="m74"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m74inp') == '0')	$('input:radio[name="m74"]').filter('[value="0"]').attr('checked',true);
	}
	if (localStorage.getItem('m75inp') != '') {
		if (localStorage.getItem('m75inp') == '1')	$('input:radio[name="m75"]').filter('[value="1"]').attr('checked',true);
		if (localStorage.getItem('m75inp') == '0')	$('input:radio[name="m75"]').filter('[value="0"]').attr('checked',true);
	}
});