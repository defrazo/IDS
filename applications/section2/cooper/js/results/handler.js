$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	age = localStorage.getItem('ageinp');
	twelvewalk = localStorage.getItem('twelvewalkinp');
	twelveswim = localStorage.getItem('twelveswiminp');
	twelveride = localStorage.getItem('twelverideinp');
	run1 = localStorage.getItem('run1inp');
	run2 = localStorage.getItem('run2inp');
	run = run1 +'.'+ run2;
	walk1 = localStorage.getItem('walk1inp');
	walk2 = localStorage.getItem('walk2inp');
	walk = walk1 +'.'+ walk2;
	gender = localStorage.getItem('genderinp');
	fac = localStorage.getItem('facinp');
	
	if (twelvewalk != '') {
		switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (age <= 13) : var twelvewalkstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelvewalk <= 2.1) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.2)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 2.21) && (twelvewalk <= 2.5)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.51) && (twelvewalk <= 2.75)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.76) && (twelvewalk <= 3.0)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 3.1) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelvewalk <= 1.95) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.96) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.4)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.41) && (twelvewalk <= 2.6)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.61) && (twelvewalk <= 2.8)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.81) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelvewalk <= 1.9) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.3)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.31) && (twelvewalk <= 2.5)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.51) && (twelvewalk <= 2.7)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.71) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelvewalk <= 1.8) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.81) && (twelvewalk <= 2.0)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 2.01) && (twelvewalk <= 2.2)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.21) && (twelvewalk <= 2.45)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.46) && (twelvewalk <= 2.6)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.61) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelvewalk <= 1.65) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.66) && (twelvewalk <= 1.85)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.86) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.3)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.31) && (twelvewalk <= 2.5)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.51) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelvewalk <= 1.4) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.41) && (twelvewalk <= 1.6)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.61) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.4)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.41) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
				};
			break;

			case (gender == 'Женский') :
				switch (true) {
					case (age <= 13) : var twelvewalkstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelvewalk <= 1.6) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.61) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.3)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.31) && (twelvewalk <= 2.4)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.41) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelvewalk <= 1.55) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.56) && (twelvewalk <= 1.8)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.81) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.3)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.31) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelvewalk <= 1.5) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.51) && (twelvewalk <= 1.7)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.71) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.0)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.11) && (twelvewalk <= 2.2)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.21) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelvewalk <= 1.4) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.41) && (twelvewalk <= 1.6)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.61) && (twelvewalk <= 1.8)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.81) && (twelvewalk <= 2.0)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 2.01) && (twelvewalk <= 2.1)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.11) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelvewalk <= 1.35) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.36) && (twelvewalk <= 1.5)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.51) && (twelvewalk <= 1.7)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.71) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 1.91) && (twelvewalk <= 2.0)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 2.01) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelvewalk <= 1.25) : var twelvewalkstatus = 'Очень плохо'; break;
							case ((twelvewalk >= 1.26) && (twelvewalk <= 1.35)) : var twelvewalkstatus = 'Плохо'; break;
							case ((twelvewalk >= 1.36) && (twelvewalk <= 1.55)) : var twelvewalkstatus = 'Удовлетворительно'; break;
							case ((twelvewalk >= 1.56) && (twelvewalk <= 1.7)) : var twelvewalkstatus = 'Хорошо'; break;
							case ((twelvewalk >= 1.71) && (twelvewalk <= 1.9)) : var twelvewalkstatus = 'Отлично'; break;
							case (twelvewalk >= 1.91) : var twelvewalkstatus = 'Превосходно'; break;
						};
					break;
				}; 
			break;
		}
	} else var twelvewalkstatus = 'Данные для расчета не внесены';

	if (twelveswim != '') {
		switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (age <= 13) : var twelveswimstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelveswim <= 450) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 451) && (twelveswim <= 550)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 551) && (twelveswim <= 650)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 651) && (twelveswim <= 725)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 726) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelveswim <= 350) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 451) && (twelveswim <= 550)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 551) && (twelveswim <= 650)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 651) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelveswim <= 325) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 326) && (twelveswim <= 400)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 401) && (twelveswim <= 500)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 501) && (twelveswim <= 600)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 601) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelveswim <= 275) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 276) && (twelveswim <= 350)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 451) && (twelveswim <= 550)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 551) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelveswim <= 225) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 226) && (twelveswim <= 325)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 326) && (twelveswim <= 400)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 401) && (twelveswim <= 500)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 501) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelveswim <= 225) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 226) && (twelveswim <= 275)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 276) && (twelveswim <= 350)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 451) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
				};
			break;

			case (gender == 'Женский') :
				switch (true) {
					case (age <= 13) : var twelveswimstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelveswim <= 350) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 451) && (twelveswim <= 550)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 551) && (twelveswim <= 650)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 651) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelveswim <= 275) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 276) && (twelveswim <= 350)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 451) && (twelveswim <= 550)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 551) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelveswim <= 225) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 226) && (twelveswim <= 325)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 326) && (twelveswim <= 400)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 401) && (twelveswim <= 500)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 501) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelveswim <= 175) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 176) && (twelveswim <= 275)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 276) && (twelveswim <= 350)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 351) && (twelveswim <= 450)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 451) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelveswim <= 150) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 150) && (twelveswim <= 225)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 226) && (twelveswim <= 325)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 326) && (twelveswim <= 400)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 401) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelveswim <= 150) : var twelveswimstatus = 'Очень плохо'; break;
							case ((twelveswim >= 151) && (twelveswim <= 175)) : var twelveswimstatus = 'Плохо'; break;
							case ((twelveswim >= 176) && (twelveswim <= 275)) : var twelveswimstatus = 'Удовлетворительно'; break;
							case ((twelveswim >= 276) && (twelveswim <= 350)) : var twelveswimstatus = 'Хорошо'; break;
							case (twelveswim >= 351) : var twelveswimstatus = 'Отлично'; break;
						};
					break;
				}; 
			break;
		}
	} else var twelveswimstatus = 'Данные для расчета не внесены';

	if (twelveride != '') {
		switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (age <= 13) : var twelveridestatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelveride <= 4.2) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 4.21) && (twelveride <= 6.0)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 6.01) && (twelveride <= 7.5)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 7.51) && (twelveride <= 9.2)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 9.21) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelveride <= 4.0) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 4.01) && (twelveride <= 5.5)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 5.51) && (twelveride <= 7.1)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 7.11) && (twelveride <= 8.8)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 8.81) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelveride <= 3.6) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 3.61) && (twelveride <= 5.1)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 5.11) && (twelveride <= 6.7)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 6.71) && (twelveride <= 8.4)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 8.41) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelveride <= 3.2) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 3.21) && (twelveride <= 4.8)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 4.81) && (twelveride <= 6.4)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 6.41) && (twelveride <= 8.0)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 8.01) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelveride <= 2.8) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 2.81) && (twelveride <= 4.0)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 4.01) && (twelveride <= 5.5)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 5.51) && (twelveride <= 7.2)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 7.21) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelveride <= 2.8) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 2.81) && (twelveride <= 3.5)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 3.51) && (twelveride <= 4.7)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 4.71) && (twelveride <= 6.4)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 6.41) : var twelveridestatus = 'Отлично'; break;
						};
					break;
				};
			break;

			case (gender == 'Женский') :
				switch (true) {
					case (age <= 13) : var twelveridestatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (twelveride <= 2.8) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 2.81) && (twelveride <= 4.2)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 4.21) && (twelveride <= 6.0)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 6.01) && (twelveride <= 7.6)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 7.61) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (twelveride <= 2.4) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 2.41) && (twelveride <= 4.0)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 4.01) && (twelveride <= 5.5)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 5.51) && (twelveride <= 7.2)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 7.21) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (twelveride <= 2.0) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 2.01) && (twelveride <= 3.5)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 3.51) && (twelveride <= 5.2)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 5.21) && (twelveride <= 6.8)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 6.81) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (twelveride <= 1.6) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 1.61) && (twelveride <= 3.2)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 3.21) && (twelveride <= 4.8)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 4.81) && (twelveride <= 6.4)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 6.41) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (twelveride <= 1.2) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 1.21) && (twelveride <= 2.4)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 2.41) && (twelveride <= 4.0)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 4.01) && (twelveride <= 5.6)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 5.61) : var twelveridestatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (twelveride <= 1.2) : var twelveridestatus = 'Очень плохо'; break;
							case ((twelveride >= 1.21) && (twelveride <= 2.0)) : var twelveridestatus = 'Плохо'; break;
							case ((twelveride >= 2.01) && (twelveride <= 3.2)) : var twelveridestatus = 'Удовлетворительно'; break;
							case ((twelveride >= 3.21) && (twelveride <= 4.8)) : var twelveridestatus = 'Хорошо'; break;
							case (twelveride >= 4.81) : var twelveridestatus = 'Отлично'; break;
						};
					break;
				}; 
			break;
		}
	} else var twelveridestatus = 'Данные для расчета не внесены';

	if (run != '') {
		switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (age <= 13) : var runstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (run >= 16.30) : var runstatus = 'Очень плохо'; break;
							case ((run >= 12.11) && (run <= 15.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 10.49) && (run <= 12.10)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 9.41) && (run <= 10.48)) : var runstatus = 'Хорошо'; break;
							case ((run >= 9.37) && (run <= 9.40)) : var runstatus = 'Отлично'; break;
							case (run <= 8.37) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (run >= 16.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 14.01) && (run <= 16.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 12.01) && (run <= 14.00)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 10.46) && (run <= 12.00)) : var runstatus = 'Хорошо'; break;
							case ((run >= 9.45) && (run <= 10.45)) : var runstatus = 'Отлично'; break;
							case (run <= 9.44) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (run >= 16.31) : var runstatus = 'Очень плохо'; break;
							case ((run >= 14.44) && (run <= 16.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 12.31) && (run <= 14.45)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 11.31) && (run <= 13.00)) : var runstatus = 'Хорошо'; break;
							case ((run >= 10.30) && (run <= 11.30)) : var runstatus = 'Отлично'; break;
							case (run <= 10.00) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (run >= 17.31) : var runstatus = 'Очень плохо'; break;
							case ((run >= 15.36) && (run <= 17.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 13.01) && (run <= 15.35)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 11.31) && (run <= 13.00)) : var runstatus = 'Хорошо'; break;
							case ((run >= 10.30) && (run <= 11.30)) : var runstatus = 'Отлично'; break;
							case (run <= 10.29) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (run >= 19.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 17.01) && (run <= 19.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 14.31) && (run <= 17.00)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 12.31) && (run <= 14.30)) : var runstatus = 'Хорошо'; break;
							case ((run >= 11.00) && (run <= 12.30)) : var runstatus = 'Отлично'; break;
							case (run <= 10.59) : var runstatus = 'Превосходно'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (run >= 20.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 19.01) && (run <= 20.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 16.16) && (run <= 19.00)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 14.00) && (run <= 16.15)) : var runstatus = 'Хорошо'; break;
							case ((run >= 11.15) && (run <= 13.59)) : var runstatus = 'Отлично'; break;
							case (run <= 11.14) : var runstatus = 'Превосходно'; break;
						};
					break;
				};
			break;

			case (gender == 'Женский') :
				switch (true) {
					case (age <= 13) : var runstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (run >= 18.31) : var runstatus = 'Очень плохо'; break;
							case ((run >= 16.55) && (run <= 18.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 14.31) && (run <= 16.54)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 12.30) && (run <= 14.30)) : var runstatus = 'Хорошо'; break;
							case ((run >= 11.50) && (run <= 12.29)) : var runstatus = 'Отлично'; break;
							case (run <= 11.49) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (run >= 19.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 18.31) && (run <= 19.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 15.55) && (run <= 18.30)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 13.31) && (run <= 15.54)) : var runstatus = 'Хорошо'; break;
							case ((run >= 12.30) && (run <= 13.30)) : var runstatus = 'Отлично'; break;
							case (run <= 12.29) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (run >= 19.31) : var runstatus = 'Очень плохо'; break;
							case ((run >= 19.01) && (run <= 19.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 16.31) && (run <= 19.00)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 14.31) && (run <= 16.30)) : var runstatus = 'Хорошо'; break;
							case ((run >= 13.00) && (run <= 14.30)) : var runstatus = 'Отлично'; break;
							case (run <= 12.59) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (run >= 20.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 19.31) && (run <= 20.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 17.31) && (run <= 19.30)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 15.56) && (run <= 17.30)) : var runstatus = 'Хорошо'; break;
							case ((run >= 13.45) && (run <= 15.55)) : var runstatus = 'Отлично'; break;
							case (run <= 13.44) : var runstatus = 'Превосходно'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (run >= 20.31) : var runstatus = 'Очень плохо'; break;
							case ((run >= 20.01) && (run <= 20.30)) : var runstatus = 'Плохо'; break;
							case ((run >= 19.01) && (run <= 20.00)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 16.31) && (run <= 19.00)) : var runstatus = 'Хорошо'; break;
							case ((run >= 14.30) && (run <= 16.30)) : var runstatus = 'Отлично'; break;
							case (run <= 14.29) : var runstatus = 'Превосходно'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (run >= 21.01) : var runstatus = 'Очень плохо'; break;
							case ((run >= 20.31) && (run <= 21.00)) : var runstatus = 'Плохо'; break;
							case ((run >= 19.31) && (run <= 20.30)) : var runstatus = 'Удовлетворительно'; break;
							case ((run >= 17.30) && (run <= 19.30)) : var runstatus = 'Хорошо'; break;
							case ((run >= 16.30) && (run <= 17.30)) : var runstatus = 'Отлично'; break;
							case (run <= 16.29) : var runstatus = 'Превосходно'; break;
						};
					break;
				}; 
			break;
		}
	} else var runstatus = 'Данные для расчета не внесены';

	if (walk != '') {
		switch (true) {
			case (gender == 'Мужской') :
				switch (true) {
					case (age <= 13) : var walkstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (walk >= 45.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 41.01) && (walk <= 45.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 37.31) && (walk <= 41.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 33.00) && (walk <= 37.30)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 32.59)  : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (walk >= 46.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 42.01) && (walk <= 46.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 38.31) && (walk <= 42.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 34.00) && (walk <= 38.30)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 33.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (walk >= 49.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 44.31) && (walk <= 49.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 40.01) && (walk <= 44.30)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 35.00) && (walk <= 40.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 34.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (walk >= 52.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 47.01) && (walk <= 52.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 42.01) && (walk <= 47.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 36.30) && (walk <= 42.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 36.29) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (walk >= 55.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 50.01) && (walk <= 55.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 45.01) && (walk <= 50.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 39.00) && (walk <= 45.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 38.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (walk >= 60.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 54.01) && (walk <= 60.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 48.01) && (walk <= 54.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 41.00) && (walk <= 48.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 40.59) : var walkstatus = 'Отлично'; break;
						};
					break;
				};
			break;

			case (gender == 'Женский') :
				switch (true) {
					case (age <= 13) : var walkstatus = 'Неподходящий возраст'; break;
					case ((age >= 14) && (age <= 19)) :
						switch (true) {
							case (walk >= 47.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 43.01) && (walk <= 47.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 39.31) && (walk <= 43.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 35.00) && (walk <= 39.30)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 34.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 20) && (age <= 29)) :
						switch (true) {
							case (walk >= 48.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 44.01) && (walk <= 48.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 40.31) && (walk <= 44.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 36.00) && (walk <= 40.30)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 35.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 30) && (age <= 39)) :
						switch (true) {
							case (walk >= 51.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 46.31) && (walk <= 51.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 42.01) && (walk <= 46.30)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 37.30) && (walk <= 42.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 37.29) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 40) && (age <= 49)) :
						switch (true) {
							case (walk >= 54.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 49.01) && (walk <= 54.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 44.01) && (walk <= 49.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 39.00) && (walk <= 44.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 38.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case ((age >= 50) && (age <= 59)) :
						switch (true) {
							case (walk >= 57.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 52.01) && (walk <= 57.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 47.01) && (walk <= 52.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 42.00) && (walk <= 47.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 41.59) : var walkstatus = 'Отлично'; break;
						};
					break;
					case (age >= 60) :
						switch (true) {
							case (walk >= 63.01) : var walkstatus = 'Очень плохо'; break;
							case ((walk >= 57.01) && (walk <= 63.00)) : var walkstatus = 'Плохо'; break;
							case ((walk >= 51.01) && (walk <= 57.00)) : var walkstatus = 'Удовлетворительно'; break;
							case ((walk >= 45.00) && (walk <= 51.00)) : var walkstatus = 'Хорошо'; break;
							case (walk <= 44.59) : var walkstatus = 'Отлично'; break;
						};
					break;
				}; 
			break;
		}
	} else var walkstatus = 'Данные для расчета не внесены';

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#fac').append(fac);
	$('#age').append(age).append(' лет');
	$('#twelvewalkr').append(twelvewalkstatus);
	$('#twelveswimr').append(twelveswimstatus);
	$('#twelverider').append(twelveridestatus);
	$('#runr').append(runstatus);
	$('#walkr').append(walkstatus);
});