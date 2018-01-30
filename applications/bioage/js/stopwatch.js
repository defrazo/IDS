$(document).ready(function() { //Секундомер
	
	$("#swoff").on('click',function () { //Показывает Секундомер после нажатия на кнопку "Секундомер"

		if ($("#sw").is(":visible")) $("#sw").fadeOut("slow"); //Уменьшает прозрачность "Медленно"

		if ($("#swon").is(":hidden")) $("#swon").delay(700).fadeIn("slow"); //Увеличивает прозрачность "Медленно"

		return false;
	});
});

$(document).ready(function() {
	
	$("#swon").on('click',function () { //Скрывает Секундомер после нажатия на кнопку "Выключить"

		if ($("#swon").is(":visible")) $("#swon").fadeOut("slow"); //Уменьшает прозрачность "Медленно"

		if ($("#sw").is(":hidden")) $("#sw").delay(700).fadeIn("slow"); //Увеличивает прозрачность "Медленно"

		return false;
	});
});

//Объявляем переменные
var base = 60; 
var clocktimer, dateObj, dh, dm, ds, ms; 
var readout = ''; 
var h = 1, m = 1, tm = 1, s = 0, ts = 0, ms = 0, init = 0; 

function ClearСlock() { //Функция для очистки поля
	clearTimeout(clocktimer); 
	h = 1; m = 1; tm = 1; s = 0; ts = 0; ms = 0; 
	init = 0;
	readout = '00:00:00.00'; 
	document.SW.stopwatch.value = readout; 
} 

function StartTIME() { //Функция для старта секундомера
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000); 
	if (t > 999) s++;
	
	if (s >= (m * base)) { 
		ts = 0; 
		m++; 
	} else { 
		ts = parseInt((ms / 100) + s); 
		if (ts >= base) ts = ts - ((m - 1) * base);
	} 

	if (m > (h * base)) { 
		tm = 1; 
		h++; 
	} else { 
		tm = parseInt((ms / 100) + m); 
		if (tm >= base) tm = tm - ((h - 1) * base);
	} 

	ms = Math.round(t / 10); 
	
	if (ms > 99) ms = 0;
	
	if (ms == 0) ms = '00';
	
	if (ms > 0 && ms <= 9) ms = '0' + ms;
	
	if (ts > 0) { ds = ts; 
		if (ts < 10) { ds = '0' + ts; }
	} else { 
		ds = '00'; 
	} 
	dm = tm - 1; 
	
	if (dm > 0) { 
		if (dm < 10) dm = '0' + dm;
	} else dm = '00'; 
	dh = h - 1; 
	
	if (dh > 0) { 
		if (dh < 10) dh = '0' + dh;
	} else dh = '00';

	readout = dh + ':' + dm + ':' + ds + '.' + ms; 
	document.SW.stopwatch.value = readout; 
	clocktimer = setTimeout("StartTIME()",1); 
} 
	
function StartStop() { //Функция запуска и остановки
	if (init == 0){ 
		ClearСlock();
		dateObj = new Date(); 
		StartTIME(); 
		init = 1; 
	} else { 
		/*clearTimeout(clocktimer);*/
		init = 0;
	} 
};

function Stop() { //Функция остановки секундомера при выходе из него
	if (init == 0){} else {
		clearTimeout(clocktimer);
		init = 0;
		ClearСlock();
	}};