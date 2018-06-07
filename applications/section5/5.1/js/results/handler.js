$(document).ready(function() {
	
	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('y1inp'),
		q2 = localStorage.getItem('y2inp'),
		q3 = localStorage.getItem('y3inp'),
		q4 = localStorage.getItem('y4inp'),
		q5 = localStorage.getItem('y5inp'),
		q6 = localStorage.getItem('y6inp'),
		q7 = localStorage.getItem('y7inp'),
		q8 = localStorage.getItem('y8inp'),
		q9 = localStorage.getItem('y9inp'),
		q10 = localStorage.getItem('y10inp'),
		q11 = localStorage.getItem('y11inp'),
		q12 = localStorage.getItem('y12inp'),
		q13 = localStorage.getItem('y13inp'),
		q14 = localStorage.getItem('y14inp'),
		q15 = localStorage.getItem('y15inp'),
		q16 = localStorage.getItem('y16inp'),
		fac = localStorage.getItem('facinp');
	
	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16);

	switch (true) {
		case (value <= 160): var status = 'По правде говоря, незавидная у вас жизнь. Если вы уже жалуетесь на какие-то недомогания, особенно сердечно-сосудистой системы, то можете смело винить лишь ваш собственный образ жизни. Думаем, что и на работе дела у вас идут не лучшим образом. Вам уже не обойтись благими намерениями, несколькими взмахами рук по утрам. Нужен совет специалиста – врача. Но лучше, если вы сами найдете в себе силы преодолеть нынешний жизненный кризис, пока не поздно вернуть здоровье.'; break;
		case ((value >= 161) && (value <= 280)) : var status = 'Вы «середнячок». Если вы будете и дальше жить в таком же режиме, ваши шансы дожить до пенсии в добром здравии невелики. Опомнитесь, пока не поздно, ведь время работает против вас. У вас есть все предпосылки, чтобы изменить свои вредные гигиенические навыки и служебные привычки. Примите наш совет как предостережение друга и не откладывайте профилактику на завтра.'; break;
		case ((value >= 281) && (value <= 400)) : var status = 'Вы близки к идеалу, хотя и не достигли его. Во всяком случае, вы уже овладели искусством восстанавливать свои силы и при самой напряженной работе. Важно, чтобы ваша служебная деятельность и семейная жизнь и впредь оставались уравновешенными, без стихийных бедствий. Но у вас есть еще резервы для повышения производительности за счет более разумной организации ритма своей работы в соответствии с особенностями вашего организма.'; break;
		case (value >= 400) : var status = 'Вы набрали почти максимальную сумму очков и можно смело сказать, что вы умеете жить. Вы хорошо организовали режим работы и эффективного отдыха, что, безусловно, положительно скажется на результатах вашей служебной деятельности. Не бойтесь, что регламентированность вашей жизни придает ей монотонность – напротив, сбереженные силы и здоровье сделают ее разнообразной и интересной.'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});