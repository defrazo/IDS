function get_answers() { // Сохраняет введенные даные в localStorage
	
	var date = $("#date").val();
	if (date != 0) localStorage.setItem('dateinp', date);
	
	var sname = $("#sname").val();
	if (sname != 0) localStorage.setItem('snameinp', sname);
	
	var fname = $("#fname").val();
	if (fname != 0) localStorage.setItem('fnameinp', fname);
	
	var mname = $("#mname").val();
	if (mname != 0) localStorage.setItem('mnameinp', mname);
	
	var q1 = $("input[name='q1']:checked").val();
	if (q1) {
		localStorage.setItem("q1", q1);
		localStorage.setItem('vq1', 1);	
	}
	
	var q2 = $("input[name='q2']:checked").val();
	if (q2) {
		localStorage.setItem("q2", q2);
		localStorage.setItem('vq2', 1);	
	}
	
	var q3 = $("input[name='q3']:checked").val();
	if (q3) {
		localStorage.setItem("q3", q3);
		localStorage.setItem('vq3', 1);	
	}
	
	var q4 = $("input[name='q4']:checked").val();
	if (q4) {
		localStorage.setItem("q4", q4);
		localStorage.setItem('vq4', 1);	
	}
	
	var q5 = $("input[name='q5']:checked").val();
	if (q5) {
		localStorage.setItem("q5", q5);
		localStorage.setItem('vq5', 1);	
	}
	
	var q6 = $("input[name='q6']:checked").val();
	if (q6) {
		localStorage.setItem("q6", q6);
		localStorage.setItem('vq6', 1);	
	}
	
	var q7 = $("input[name='q7']:checked").val();
	if (q7) {
		localStorage.setItem("q7", q7);
		localStorage.setItem('vq7', 1);	
	}
	
	var q8 = $("input[name='q8']:checked").val();
	if (q8) {
		localStorage.setItem("q8", q8);
		localStorage.setItem('vq8', 1);	
	}
	
	var q9 = $("input[name='q9']:checked").val();
	if (q9) {
		localStorage.setItem("q9", q9);
		localStorage.setItem('vq9', 1);	
	}
	
	var q10 = $("input[name='q10']:checked").val();
	if (q10) {
		localStorage.setItem("q10", q10);
		localStorage.setItem('vq10', 1);	
	}
	
	var q11 = $("input[name='q11']:checked").val();
	if (q11) {
		localStorage.setItem("q11", q11);
		localStorage.setItem('vq11', 1);	
	}
	
	var q12 = $("input[name='q12']:checked").val();
	if (q12) {
		localStorage.setItem("q12", q12);
		localStorage.setItem('vq12', 1);	
	}
	
	var q13 = $("input[name='q13']:checked").val();
	if (q13) {
		localStorage.setItem("q13", q13);
		localStorage.setItem('vq13', 1);	
	}
	
	var q14 = $("input[name='q14']:checked").val();
	if (q14) {
		localStorage.setItem("q14", q14);
		localStorage.setItem('vq14', 1);	
	}
	
	var q15 = $("input[name='q15']:checked").val();
	if (q15) {
		localStorage.setItem("q15", q15);
		localStorage.setItem('vq15', 1);	
	}
	
	var q16 = $("input[name='q16']:checked").val();
	if (q16) {
		localStorage.setItem("q16", q16);
		localStorage.setItem('vq16', 1);	
	}
	
	var q17 = $("input[name='q17']:checked").val();
	if (q17) {
		localStorage.setItem("q17", q17);
		localStorage.setItem('vq17', 1);	
	}
	
	var q18 = $("input[name='q18']:checked").val();
	if (q18) {
		localStorage.setItem("q18", q18);
		localStorage.setItem('vq18', 1);	
	}
	
	var q19 = $("input[name='q19']:checked").val();
	if (q19) {
		localStorage.setItem("q19", q19);
		localStorage.setItem('vq19', 1);	
	}
	
	var q20 = $("input[name='q20']:checked").val();
	if (q20) {
		localStorage.setItem("q20", q20);
		localStorage.setItem('vq20', 1);	
	}
	
	var q21 = $("input[name='q21']:checked").val();
	if (q21) {
		localStorage.setItem("q21", q21);
		localStorage.setItem('vq21', 1);	
	}
	
	var q22 = $("input[name='q22']:checked").val();
	if (q22) {
		localStorage.setItem("q22", q22);
		localStorage.setItem('vq22', 1);	
	}
	
	var q23 = $("input[name='q23']:checked").val();
	if (q23) {
		localStorage.setItem("q23", q23);
		localStorage.setItem('vq23', 1);	
	}
	
	var q24 = $("input[name='q24']:checked").val();
	if (q24) {
		localStorage.setItem("q24", q24);
		localStorage.setItem('vq24', 1);	
	}
	
	var q25 = $("input[name='q25']:checked").val();
	if (q25) {
		localStorage.setItem("q25", q25);
		localStorage.setItem('vq25', 1);	
	}
	
	var q26 = $("input[name='q26']:checked").val();
	if (q26) {
		localStorage.setItem("q26", q26);
		localStorage.setItem('vq26', 1);	
	}
	
	var q27 = $("input[name='q27']:checked").val();
	if (q27) {
		localStorage.setItem("q27", q27);
		localStorage.setItem('vq27', 1);	
	}
	
	var q28 = $("input[name='q28']:checked").val();
	if (q28) {
		localStorage.setItem("q28", q28);
		localStorage.setItem('vq28', 1);	
	}
	
	var q29 = $("input[name='q29']:checked").val();
	if (q29) {
		localStorage.setItem("q29", q29);
		localStorage.setItem('vq29', 1);	
	}
	
	var q30 = $("input[name='q30']:checked").val();
	if (q30) {
		localStorage.setItem("q30", q30);
		localStorage.setItem('vq30', 1);	
	}
	
	var q31 = $("input[name='q31']:checked").val();
	if (q31) {
		localStorage.setItem("q31", q31);
		localStorage.setItem('vq31', 1);	
	}
	
	var q32 = $("input[name='q32']:checked").val();
	if (q32) {
		localStorage.setItem("q32", q32);
		localStorage.setItem('vq32', 1);	
	}
	
	var q33 = $("input[name='q33']:checked").val();
	if (q33) {
		localStorage.setItem("q33", q33);
		localStorage.setItem('vq33', 1);	
	}
	
	var q34 = $("input[name='q34']:checked").val();
	if (q34) {
		localStorage.setItem("q34", q34);
		localStorage.setItem('vq34', 1);	
	}
	
	var q35 = $("input[name='q35']:checked").val();
	if (q35) {
		localStorage.setItem("q35", q35);
		localStorage.setItem('vq35', 1);	
	}
	
	var q36 = $("input[name='q36']:checked").val();
	if (q36) {
		localStorage.setItem("q36", q36);
		localStorage.setItem('vq36', 1);	
	}
	
	var q37 = $("input[name='q37']:checked").val();
	if (q37) {
		localStorage.setItem("q37", q37);
		localStorage.setItem('vq37', 1);	
	}
	
	var q38 = $("input[name='q38']:checked").val();
	if (q38) {
		localStorage.setItem("q38", q38);
		localStorage.setItem('vq38', 1);	
	}
	
	var q39 = $("input[name='q39']:checked").val();
	if (q39) {
		localStorage.setItem("q39", q39);
		localStorage.setItem('vq39', 1);	
	}
	
	var q40 = $("input[name='q40']:checked").val();
	if (q40) {
		localStorage.setItem("q40", q40);
		localStorage.setItem('vq40', 1);	
	}
	
	var q41 = $("input[name='q41']:checked").val();
	if (q41) {
		localStorage.setItem("q41", q41);
		localStorage.setItem('vq41', 1);	
	}
	
	var q42 = $("input[name='q42']:checked").val();
	if (q42) {
		localStorage.setItem("q42", q42);
		localStorage.setItem('vq42', 1);	
	}
	
	var q43 = $("input[name='q43']:checked").val();
	if (q43) {
		localStorage.setItem("q43", q43);
		localStorage.setItem('vq43', 1);	
	}
	
	var q44 = $("input[name='q44']:checked").val();
	if (q44) {
		localStorage.setItem("q44", q44);
		localStorage.setItem('vq44', 1);	
	}
	
	var q45 = $("input[name='q45']:checked").val();
	if (q45) {
		localStorage.setItem("q45", q45);
		localStorage.setItem('vq45', 1);	
	}
	
	var q46 = $("input[name='q46']:checked").val();
	if (q46) {
		localStorage.setItem("q46", q46);
		localStorage.setItem('vq46', 1);	
	}
	
	var q47 = $("input[name='q47']:checked").val();
	if (q47) {
		localStorage.setItem("q47", q47);
		localStorage.setItem('vq47', 1);	
	}
	
	var q48 = $("input[name='q48']:checked").val();
	if (q48) {
		localStorage.setItem("q48", q48);
		localStorage.setItem('vq48', 1);	
	}
	
	var q49 = $("input[name='q49']:checked").val();
	if (q49) {
		localStorage.setItem("q49", q49);
		localStorage.setItem('vq49', 1);	
	}
	
	var q50 = $("input[name='q50']:checked").val();
	if (q50) {
		localStorage.setItem("q50", q50);
		localStorage.setItem('vq50', 1);	
	}
	
	var q51 = $("input[name='q51']:checked").val();
	if (q51) {
		localStorage.setItem("q51", q51);
		localStorage.setItem('vq51', 1);	
	}
	
	var q52 = $("input[name='q52']:checked").val();
	if (q52) {
		localStorage.setItem("q52", q52);
		localStorage.setItem('vq52', 1);	
	}
	
	var q53 = $("input[name='q53']:checked").val();
	if (q53) {
		localStorage.setItem("q53", q53);
		localStorage.setItem('vq53', 1);	
	}
	
	var q54 = $("input[name='q54']:checked").val();
	if (q54) {
		localStorage.setItem("q54", q54);
		localStorage.setItem('vq54', 1);	
	}
	
	var q55 = $("input[name='q55']:checked").val();
	if (q55) {
		localStorage.setItem("q55", q55);
		localStorage.setItem('vq55', 1);	
	}
	
	var q56 = $("input[name='q56']:checked").val();
	if (q56) {
		localStorage.setItem("q56", q56);
		localStorage.setItem('vq56', 1);	
	}
	
	var q57 = $("input[name='q57']:checked").val();
	if (q57) {
		localStorage.setItem("q57", q57);
		localStorage.setItem('vq57', 1);	
	}
	
	var q58 = $("input[name='q58']:checked").val();
	if (q58) {
		localStorage.setItem("q58", q58);
		localStorage.setItem('vq58', 1);	
	}
	
	var q59 = $("input[name='q59']:checked").val();
	if (q59) {
		localStorage.setItem("q59", q59);
		localStorage.setItem('vq59', 1);	
	}
	
	var q60 = $("input[name='q60']:checked").val();
	if (q60) {
		localStorage.setItem("q60", q60);
		localStorage.setItem('vq60', 1);	
	}
	
	var q61 = $("input[name='q61']:checked").val();
	if (q61) {
		localStorage.setItem("q61", q61);
		localStorage.setItem('vq61', 1);	
	}
	
	var q62 = $("input[name='q62']:checked").val();
	if (q62) {
		localStorage.setItem("q62", q62);
		localStorage.setItem('vq62', 1);	
	}
	
	var q63 = $("input[name='q63']:checked").val();
	if (q63) {
		localStorage.setItem("q63", q63);
		localStorage.setItem('vq63', 1);	
	}
	
	var q64 = $("input[name='q64']:checked").val();
	if (q64) {
		localStorage.setItem("q64", q64);
		localStorage.setItem('vq64', 1);	
	}
	
	var q65 = $("input[name='q65']:checked").val();
	if (q65) {
		localStorage.setItem("q65", q65);
		localStorage.setItem('vq65', 1);	
	}
	
	var q66 = $("input[name='q66']:checked").val();
	if (q66) {
		localStorage.setItem("q66", q66);
		localStorage.setItem('vq66', 1);	
	}
	
	var q67 = $("input[name='q67']:checked").val();
	if (q67) {
		localStorage.setItem("q67", q67);
		localStorage.setItem('vq67', 1);	
	}
	
	var q68 = $("input[name='q68']:checked").val();
	if (q68) {
		localStorage.setItem("q68", q68);
		localStorage.setItem('vq68', 1);	
	}
	
	var q69 = $("input[name='q69']:checked").val();
	if (q69) {
		localStorage.setItem("q69", q69);
		localStorage.setItem('vq69', 1);	
	}
	
	var q70 = $("input[name='q70']:checked").val();
	if (q70) {
		localStorage.setItem("q70", q70);
		localStorage.setItem('vq70', 1);	
	}
	
	var q71 = $("input[name='q71']:checked").val();
	if (q71) {
		localStorage.setItem("q71", q71);
		localStorage.setItem('vq71', 1);	
	}
	
	var q72 = $("input[name='q72']:checked").val();
	if (q72) {
		localStorage.setItem("q72", q72);
		localStorage.setItem('vq72', 1);	
	}
	
	var q73 = $("input[name='q73']:checked").val();
	if (q73) {
		localStorage.setItem("q73", q73);
		localStorage.setItem('vq73', 1);	
	}
	
	var q74 = $("input[name='q74']:checked").val();
	if (q74) {
		localStorage.setItem("q74", q74);
		localStorage.setItem('vq74', 1);	
	}
	
	var q75 = $("input[name='q75']:checked").val();
	if (q75) {
		localStorage.setItem("q75", q75);
		localStorage.setItem('vq75', 1);	
	}
	
	var q76 = $("input[name='q76']:checked").val();
	if (q76) {
		localStorage.setItem("q76", q76);
		localStorage.setItem('vq76', 1);	
	}
	
	var q77 = $("input[name='q77']:checked").val();
	if (q77) {
		localStorage.setItem("q77", q77);
		localStorage.setItem('vq77', 1);	
	}
	
	var q78 = $("input[name='q78']:checked").val();
	if (q78) {
		localStorage.setItem("q78", q78);
		localStorage.setItem('vq78', 1);	
	}
	
	var q79 = $("input[name='q79']:checked").val();
	if (q79) {
		localStorage.setItem("q79", q79);
		localStorage.setItem('vq79', 1);	
	}
	
	var q80 = $("input[name='q80']:checked").val();
	if (q80) {
		localStorage.setItem("q80", q80);
		localStorage.setItem('vq80', 1);	
	}
	
	var q81 = $("input[name='q81']:checked").val();
	if (q81) {
		localStorage.setItem("q81", q81);
		localStorage.setItem('vq81', 1);	
	}
	
	var q82 = $("input[name='q82']:checked").val();
	if (q82) {
		localStorage.setItem("q82", q82);
		localStorage.setItem('vq82', 1);	
	}
	
	var q83 = $("input[name='q83']:checked").val();
	if (q83) {
		localStorage.setItem("q83", q83);
		localStorage.setItem('vq83', 1);	
	}
	
	var q84 = $("input[name='q84']:checked").val();
	if (q84) {
		localStorage.setItem("q84", q84);
		localStorage.setItem('vq84', 1);	
	}
	
	var q85 = $("input[name='q85']:checked").val();
	if (q85) {
		localStorage.setItem("q85", q85);
		localStorage.setItem('vq85', 1);	
	}
	
	var q86 = $("input[name='q86']:checked").val();
	if (q86) {
		localStorage.setItem("q86", q86);
		localStorage.setItem('vq86', 1);	
	}
	
	var q87 = $("input[name='q87']:checked").val();
	if (q87) {
		localStorage.setItem("q87", q87);
		localStorage.setItem('vq87', 1);	
	}
	
	var q88 = $("input[name='q88']:checked").val();
	if (q88) {
		localStorage.setItem("q88", q88);
		localStorage.setItem('vq88', 1);	
	}
	
	var q89 = $("input[name='q89']:checked").val();
	if (q89) {
		localStorage.setItem("q89", q89);
		localStorage.setItem('vq89', 1);	
	}
	
	var q90 = $("input[name='q90']:checked").val();
	if (q90) {
		localStorage.setItem("q90", q90);
		localStorage.setItem('vq90', 1);	
	}
	
	var q91 = $("input[name='q91']:checked").val();
	if (q91) {
		localStorage.setItem("q91", q91);
		localStorage.setItem('vq91', 1);	
	}
	
	var q92 = $("input[name='q92']:checked").val();
	if (q92) {
		localStorage.setItem("q92", q92);
		localStorage.setItem('vq92', 1);	
	}
	
	var q93 = $("input[name='q93']:checked").val();
	if (q93) {
		localStorage.setItem("q93", q93);
		localStorage.setItem('vq93', 1);	
	}
	
	var q94 = $("input[name='q94']:checked").val();
	if (q94) {
		localStorage.setItem("q94", q94);
		localStorage.setItem('vq94', 1);	
	}
	
	var q95 = $("input[name='q95']:checked").val();
	if (q95) {
		localStorage.setItem("q95", q95);
		localStorage.setItem('vq95', 1);	
	}
	
	var q96 = $("input[name='q96']:checked").val();
	if (q96) {
		localStorage.setItem("q96", q96);
		localStorage.setItem('vq96', 1);	
	}
	
	var q97 = $("input[name='q97']:checked").val();
	if (q97) {
		localStorage.setItem("q97", q97);
		localStorage.setItem('vq97', 1);	
	}
	
	var q98 = $("input[name='q98']:checked").val();
	if (q98) {
		localStorage.setItem("q98", q98);
		localStorage.setItem('vq98', 1);	
	}
	
	var q99 = $("input[name='q99']:checked").val();
	if (q99) {
		localStorage.setItem("q99", q99);
		localStorage.setItem('vq99', 1);	
	}
	
	var q100 = $("input[name='q100']:checked").val();
	if (q100) {
		localStorage.setItem("q100", q100);
		localStorage.setItem('vq100', 1);	
	}
	
	var q101 = $("input[name='q101']:checked").val();
	if (q101) {
		localStorage.setItem("q101", q101);
		localStorage.setItem('vq101', 1);	
	}
	
	var q102 = $("input[name='q102']:checked").val();
	if (q102) {
		localStorage.setItem("q102", q102);
		localStorage.setItem('vq102', 1);	
	}
	
	var q103 = $("input[name='q103']:checked").val();
	if (q103) {
		localStorage.setItem("q103", q103);
		localStorage.setItem('vq103', 1);	
	}
	
	var q104 = $("input[name='q104']:checked").val();
	if (q104) {
		localStorage.setItem("q104", q104);
		localStorage.setItem('vq104', 1);	
	}
	
	var q105 = $("input[name='q105']:checked").val();
	if (q105) {
		localStorage.setItem("q105", q105);
		localStorage.setItem('vq105', 1);	
	}
	
	var q106 = $("input[name='q106']:checked").val();
	if (q106) {
		localStorage.setItem("q106", q106);
		localStorage.setItem('vq106', 1);	
	}
	
	var q107 = $("input[name='q107']:checked").val();
	if (q107) {
		localStorage.setItem("q107", q107);
		localStorage.setItem('vq107', 1);	
	}
	
	var q108 = $("input[name='q108']:checked").val();
	if (q108) {
		localStorage.setItem("q108", q108);
		localStorage.setItem('vq108', 1);	
	}
	
	var q109 = $("input[name='q109']:checked").val();
	if (q109) {
		localStorage.setItem("q109", q109);
		localStorage.setItem('vq109', 1);	
	}
	
	var q110 = $("input[name='q110']:checked").val();
	if (q110) {
		localStorage.setItem("q110", q110);
		localStorage.setItem('vq110', 1);	
	}
	
	var q111 = $("input[name='q111']:checked").val();
	if (q111) {
		localStorage.setItem("q111", q111);
		localStorage.setItem('vq111', 1);	
	}
	
	var q112 = $("input[name='q112']:checked").val();
	if (q112) {
		localStorage.setItem("q112", q112);
		localStorage.setItem('vq112', 1);	
	}
	
	var q113 = $("input[name='q113']:checked").val();
	if (q113) {
		localStorage.setItem("q113", q113);
		localStorage.setItem('vq113', 1);	
	}
	
	var q114 = $("input[name='q114']:checked").val();
	if (q114) {
		localStorage.setItem("q114", q114);
		localStorage.setItem('vq114', 1);	
	}		
	
	var q115 = $("input[name='q115']:checked").val();
	if (q115) {
		localStorage.setItem("q115", q115);
		localStorage.setItem('vq115', 1);	
	}
	
	var q116 = $("input[name='q116']:checked").val();
	if (q116) {
		localStorage.setItem("q116", q116);
		localStorage.setItem('vq116', 1);	
	}
	
	var q117 = $("input[name='q117']:checked").val();
	if (q117) {
		localStorage.setItem("q117", q117);
		localStorage.setItem('vq117', 1);	
	}
	
	var q118 = $("input[name='q118']:checked").val();
	if (q118) {
		localStorage.setItem("q118", q118);
		localStorage.setItem('vq118', 1);	
	}
	
	var q119 = $("input[name='q119']:checked").val();
	if (q119) {
		localStorage.setItem("q119", q119);
		localStorage.setItem('vq119', 1);	
	}
	
	var q120 = $("input[name='q120']:checked").val();
	if (q120) {
		localStorage.setItem("q120", q120);
		localStorage.setItem('vq120', 1);	
	}
	
	var q121 = $("input[name='q121']:checked").val();
	if (q121) {
		localStorage.setItem("q121", q121);
		localStorage.setItem('vq121', 1);	
	}
	
	var q122 = $("input[name='q122']:checked").val();
	if (q122) {
		localStorage.setItem("q122", q122);
		localStorage.setItem('vq122', 1);	
	}
	
	var q123 = $("input[name='q123']:checked").val();
	if (q123) {
		localStorage.setItem("q123", q123);
		localStorage.setItem('vq123', 1);	
	}
	
	var q124 = $("input[name='q124']:checked").val();
	if (q124) {
		localStorage.setItem("q124", q124);
		localStorage.setItem('vq124', 1);
	}	
	
	var q125 = $("input[name='q125']:checked").val();
	if (q125) {
		localStorage.setItem("q125", q125);
		localStorage.setItem('vq125', 1);	
	}
	
	var q126 = $("input[name='q126']:checked").val();
	if (q126) {
		localStorage.setItem("q126", q126);
		localStorage.setItem('vq126', 1);	
	}
	
	var q127 = $("input[name='q127']:checked").val();
	if (q127) {
		localStorage.setItem("q127", q127);
		localStorage.setItem('vq127', 1);	
	}
	
	var q128 = $("input[name='q128']:checked").val();
	if (q128) {
		localStorage.setItem("q128", q128);
		localStorage.setItem('vq128', 1);	
	}
	
	var q129 = $("input[name='q129']:checked").val();
	if (q129) {
		localStorage.setItem("q129", q129);
		localStorage.setItem('vq129', 1);	
	}
	
	var q130 = $("input[name='q130']:checked").val();
	if (q130) {
		localStorage.setItem("q130", q130);
		localStorage.setItem('vq130', 1);	
	}
	
	var q131 = $("input[name='q131']:checked").val();
	if (q131) {
		localStorage.setItem("q131", q131);
		localStorage.setItem('vq131', 1);	
	}
	
	var q132 = $("input[name='q132']:checked").val();
	if (q132) {
		localStorage.setItem("q132", q132);
		localStorage.setItem('vq132', 1);	
	}
	
	var q133 = $("input[name='q133']:checked").val();
	if (q133) {
		localStorage.setItem("q133", q133);
		localStorage.setItem('vq133', 1);	
	}
	
	var q134 = $("input[name='q134']:checked").val();
	if (q134) {
		localStorage.setItem("q134", q134);
		localStorage.setItem('vq134', 1);	
	}
	
	var q135 = $("input[name='q135']:checked").val();
	if (q135) {
		localStorage.setItem("q135", q135);
		localStorage.setItem('vq135', 1);	
	}
	
	var q136 = $("input[name='q136']:checked").val();
	if (q136) {
		localStorage.setItem("q136", q136);
		localStorage.setItem('vq136', 1);	
	}
	
	var q137 = $("input[name='q137']:checked").val();
	if (q137) {
		localStorage.setItem("q137", q137);
		localStorage.setItem('vq137', 1);	
	}
	
	var q138 = $("input[name='q138']:checked").val();
	if (q138) {
		localStorage.setItem("q138", q138);
		localStorage.setItem('vq138', 1);	
	}
	
	var q139 = $("input[name='q139']:checked").val();
	if (q139) {
		localStorage.setItem("q139", q139);
		localStorage.setItem('vq139', 1);	
	}
	
	var q140 = $("input[name='q140']:checked").val();
	if (q140) {
		localStorage.setItem("q140", q140);
		localStorage.setItem('vq140', 1);	
	}
	
	var q141 = $("input[name='q141']:checked").val();
	if (q141) {
		localStorage.setItem("q141", q141);
		localStorage.setItem('vq141', 1);	
	}
	var q142 = $("input[name='q142']:checked").val();
	if (q142) {
		localStorage.setItem("q142", q142);
		localStorage.setItem('vq142', 1);	
	}
	
	var q143 = $("input[name='q143']:checked").val();
	if (q143) {
		localStorage.setItem("q143", q143);
		localStorage.setItem('vq143', 1);	
	}
	
	var q144 = $("input[name='q144']:checked").val();
	if (q144) {
		localStorage.setItem("q144", q144);
		localStorage.setItem('vq144', 1);	
	}
	
	var q145 = $("input[name='q145']:checked").val();
	if (q145) {
		localStorage.setItem("q145", q145);
		localStorage.setItem('vq145', 1);	
	}
	
	var q146 = $("input[name='q146']:checked").val();
	if (q146) {
		localStorage.setItem("q146", q146);
		localStorage.setItem('vq146', 1);	
	}
	
	var q147 = $("input[name='q147']:checked").val();
	if (q147) {
		localStorage.setItem("q147", q147);
		localStorage.setItem('vq147', 1);	
	}
	
	var q148 = $("input[name='q148']:checked").val();
	if (q148) {
		localStorage.setItem("q148", q148);
		localStorage.setItem('vq148', 1);	
	}
	
	var q149 = $("input[name='q149']:checked").val();
	if (q149) {
		localStorage.setItem("q149", q149);
		localStorage.setItem('vq149', 1);	
	}
	
	var q150 = $("input[name='q150']:checked").val();
	if (q150) {
		localStorage.setItem("q150", q150);
		localStorage.setItem('vq150', 1);	
	}
	
	var q151 = $("input[name='q151']:checked").val();
	if (q151) {
		localStorage.setItem("q151", q151);
		localStorage.setItem('vq151', 1);	
	}
	
	var q152 = $("input[name='q152']:checked").val();
	if (q152) {
		localStorage.setItem("q152", q152);
		localStorage.setItem('vq152', 1);	
	}
	
	var q153 = $("input[name='q153']:checked").val();
	if (q153) {
		localStorage.setItem("q153", q153);
		localStorage.setItem('vq153', 1);	
	}
	
	var q154 = $("input[name='q154']:checked").val();
	if (q154) {
		localStorage.setItem("q154", q154);
		localStorage.setItem('vq154', 1);	
	}
	
	var q155 = $("input[name='q155']:checked").val();
	if (q155) {
		localStorage.setItem("q155", q155);
		localStorage.setItem('vq155', 1);	
	}
	
	var q156 = $("input[name='q156']:checked").val();
	if (q156) {
		localStorage.setItem("q156", q156);
		localStorage.setItem('vq156', 1);	
	}
	
	var q157 = $("input[name='q157']:checked").val();
	if (q157) {
		localStorage.setItem("q157", q157);
		localStorage.setItem('vq157', 1);	
	}
	
	var q158 = $("input[name='q158']:checked").val();
	if (q158) {
		localStorage.setItem("q158", q158);
		localStorage.setItem('vq158', 1);	
	}
	
	var q159 = $("input[name='q159']:checked").val();
	if (q159) {
		localStorage.setItem("q159", q159);
		localStorage.setItem('vq159', 1);	
	}
	
	var q160 = $("input[name='q160']:checked").val();
	if (q160) {
		localStorage.setItem("q160", q160);
		localStorage.setItem('vq160', 1);	
	}
	
	var q161 = $("input[name='q161']:checked").val();
	if (q161) {
		localStorage.setItem("q161", q161);
		localStorage.setItem('vq161', 1);	
	}
	
	var q162 = $("input[name='q162']:checked").val();
	if (q162) {
		localStorage.setItem("q162", q162);
		localStorage.setItem('vq162', 1);	
	}
	
	var q163 = $("input[name='q163']:checked").val();
	if (q163) {
		localStorage.setItem("q163", q163);
		localStorage.setItem('vq163', 1);	
	}
	
	var q164 = $("input[name='q164']:checked").val();
	if (q164) {
		localStorage.setItem("q164", q164);
		localStorage.setItem('vq164', 1);	
	}
	
	var q165 = $("input[name='q165']:checked").val();
	if (q165) {
		localStorage.setItem("q165", q165);
		localStorage.setItem('vq165', 1);	
	}
	
	var q166 = $("input[name='q166']:checked").val();
	if (q166) {
		localStorage.setItem("q166", q166);
		localStorage.setItem('vq166', 1);	
	}
	
	var q167 = $("input[name='q167']:checked").val();
	if (q167) {
		localStorage.setItem("q167", q167);
		localStorage.setItem('vq167', 1);	
	}
	
	var q168 = $("input[name='q168']:checked").val();
	if (q168) {
		localStorage.setItem("q168", q168);
		localStorage.setItem('vq168', 1);	
	}
	
	var q169 = $("input[name='q169']:checked").val();
	if (q169) {
		localStorage.setItem("q169", q169);
		localStorage.setItem('vq169', 1);	
	}
	
	var q170 = $("input[name='q170']:checked").val();
	if (q170) {
		localStorage.setItem("q170", q170);
		localStorage.setItem('vq170', 1);	
	}
	
	var q171 = $("input[name='q171']:checked").val();
	if (q171) {
		localStorage.setItem("q171", q171);
		localStorage.setItem('vq171', 1);	
	}
	
	var q172 = $("input[name='q172']:checked").val();
	if (q172) {
		localStorage.setItem("q172", q172);
		localStorage.setItem('vq172', 1);	
	}
	
	var q173 = $("input[name='q173']:checked").val();
	if (q173) {
		localStorage.setItem("q173", q173);
		localStorage.setItem('vq173', 1);	
	}
	
	var q174 = $("input[name='q174']:checked").val();
	if (q174) {
		localStorage.setItem("q174", q174);
		localStorage.setItem('vq174', 1);	
	}
};