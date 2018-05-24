$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	f1 = localStorage.getItem('f11inp');
	f2 = localStorage.getItem('f12inp');
	f3 = localStorage.getItem('f21inp');
	f4 = localStorage.getItem('f22inp');
	f5 = localStorage.getItem('f31inp');
	f6 = localStorage.getItem('f32inp');
	f7 = localStorage.getItem('f41inp');
	f8 = localStorage.getItem('f42inp');
	f9 = localStorage.getItem('f51inp');
	f10 = localStorage.getItem('f52inp');
	f11 = localStorage.getItem('f61inp');
	f12 = localStorage.getItem('f62inp');
	f13 = localStorage.getItem('f71inp');
	f14 = localStorage.getItem('f72inp');
	f15 = localStorage.getItem('f81inp');
	f16 = localStorage.getItem('f82inp');
	f17 = localStorage.getItem('f91inp');
	f18 = localStorage.getItem('f92inp');
	f19 = localStorage.getItem('f101inp');
	f20 = localStorage.getItem('f102inp');
	f21 = localStorage.getItem('f111inp');
	f22 = localStorage.getItem('f112inp');
	f23 = localStorage.getItem('f121inp');
	f24 = localStorage.getItem('f122inp');
	f25 = localStorage.getItem('f131inp');
	f26 = localStorage.getItem('f132inp');
	f27 = localStorage.getItem('f141inp');
	f28 = localStorage.getItem('f142inp');
	f29 = localStorage.getItem('f151inp');
	f30 = localStorage.getItem('f152inp');
	f31 = localStorage.getItem('f161inp');
	f32 = localStorage.getItem('f162inp');
	fac = localStorage.getItem('facinp');

	work1 = parseInt(f3) + parseInt(f19);

	work2 = parseInt(f4) + parseInt(f20);

	home1 = parseInt(f5) + parseInt(f7) + parseInt(f9) + parseInt(f11) + parseInt(f13);

	home2 = parseInt(f6) + parseInt(f8) + parseInt(f10) + parseInt(f12) + parseInt(f14);

	social1 = parseInt(f15) + parseInt(f17) + parseInt(f21) + parseInt(f23) + parseInt(f25);

	social2 = parseInt(f16) + parseInt(f18) + parseInt(f22) + parseInt(f24) + parseInt(f26);

	activity1 = parseInt(f27) + parseInt(f29) + parseInt(f31);

	activity2 = parseInt(f28) + parseInt(f30) + parseInt(f32);

	sleep1 = parseInt(f1);

	sleep2 = parseInt(f2);

	relax1 = parseInt(f31);

	relax2 = parseInt(f32);

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#work').append(work1 + ' / ' + work2 + ' часов');
	$('#home').append(home1 + ' / ' + home2 + ' часов');
	$('#social').append(social1 + ' / ' + social2 + ' часов');
	$('#activity').append(activity1 + ' / ' + activity2 + ' часов');
	$('#relax').append(relax1 + ' / ' + relax2 + ' часов');
	$('#sleep').append(sleep1 + ' / ' + sleep2 + ' часов');
	$('#fac').append(fac);
});