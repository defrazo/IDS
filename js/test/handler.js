function get_points() { //Проверяет количество неблагоприятных баллов
	
	var 
	num = 0,
	head = localStorage.getItem("headinp"),
	wake = localStorage.getItem("wakeinp"),
	heart = localStorage.getItem("heartinp"),
	vision = localStorage.getItem("visioninp"),
	hearing = localStorage.getItem("hearinginp"),
	water = localStorage.getItem("waterinp"),
	seat = localStorage.getItem("seatinp"),
	joint = localStorage.getItem("jointinp"),
	beach = localStorage.getItem("beachinp"),
	weather = localStorage.getItem("weatherinp"),
	sleep = localStorage.getItem("sleepinp"),
	constip = localStorage.getItem("constipinp"),
	effic = localStorage.getItem("efficinp"),
	liver = localStorage.getItem("liverinp"),
	dizzi = localStorage.getItem("dizziinp"),
	focus = localStorage.getItem("focusinp"),
	happy = localStorage.getItem("happyinp"),
	creep = localStorage.getItem("creepinp"),
	forget = localStorage.getItem("forgetinp"),
	noise = localStorage.getItem("noiseinp"),       
	medic = localStorage.getItem("medicinp"),
	swell = localStorage.getItem("swellinp"),
	dish = localStorage.getItem("dishinp"),
	dysp = localStorage.getItem("dyspinp"),
	loins = localStorage.getItem("loinsinp"),       
	mineral = localStorage.getItem("mineralinp"),
	taste = localStorage.getItem("tasteinp"),
	cry = localStorage.getItem("cryinp"),
	state = localStorage.getItem("stateinp");

	if (head == "yes") num++
	if (wake == "yes") num++
	if (heart == "yes") num++
	if (vision == "yes") num++
	if (hearing == "yes") num++
	if (water == "yes") num++
	if (seat == "yes") num++
	if (joint == "yes") num++
	if (beach == "no") num++
	if (weather == "yes") num++
	if (sleep == "yes") num++
	if (constip == "yes") num++
	if (effic == "no") num++
	if (liver == "yes") num++
	if (dizzi == "yes") num++
	if (focus == "yes") num++
	if (happy == "yes") num++
	if (creep == "yes") num++
	if (forget == "no") num++
	if (noise == "yes") num++
	if (medic == "yes") num++
	if (swell == "yes") num++
	if (dish == "yes") num++
	if (dysp == "yes") num++
	if (loins == "yes") num++
	if (mineral == "yes") num++
	if (taste == "yes") num++
	if (cry == "yes") num++
	if ((state == "bad") || (state =="badly")) num++
	localStorage.setItem("num", num);
};
  