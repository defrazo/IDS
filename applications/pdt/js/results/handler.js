$(document).ready(function() { // Обработчик результатов теста
	var
	sname = localStorage.getItem("snameinp"),
	fname = localStorage.getItem("fnameinp"),
	mname = localStorage.getItem("mnameinp"),
	date = localStorage.getItem("dateinp"),
	q1 = localStorage.getItem("q1"),
	q2 = localStorage.getItem("q2"),
	q3 = localStorage.getItem("q3"),
	q4 = localStorage.getItem("q4"),
	q5 = localStorage.getItem("q5"),
	q6 = localStorage.getItem("q6"),
	q7 = localStorage.getItem("q7"),
	q8 = localStorage.getItem("q8"),
	q9 = localStorage.getItem("q9"),
	q10 = localStorage.getItem("q10"),
	q11 = localStorage.getItem("q11"),
	q12 = localStorage.getItem("q12"),
	q13 = localStorage.getItem("q13"),
	q14 = localStorage.getItem("q14"),
	q15 = localStorage.getItem("q15"),
	q16 = localStorage.getItem("q16"),
	q17 = localStorage.getItem("q17"),
	q18 = localStorage.getItem("q18"),
	q19 = localStorage.getItem("q19"),
	q20 = localStorage.getItem("q20"),
	q21 = localStorage.getItem("q21"),
	q22 = localStorage.getItem("q22"),
	q23 = localStorage.getItem("q23"),
	q24 = localStorage.getItem("q24"),
	q25 = localStorage.getItem("q25"),
	q26 = localStorage.getItem("q26"),
	q27 = localStorage.getItem("q27"),
	q28 = localStorage.getItem("q28"),
	q29 = localStorage.getItem("q29"),
	q30 = localStorage.getItem("q30"),
	q31 = localStorage.getItem("q31"),
	q32 = localStorage.getItem("q32"),
	q33 = localStorage.getItem("q33"),
	q34 = localStorage.getItem("q34"),
	q35 = localStorage.getItem("q35"),
	q36 = localStorage.getItem("q36"),
	q37 = localStorage.getItem("q37"),
	q38 = localStorage.getItem("q38"),
	q39 = localStorage.getItem("q39"),
	q40 = localStorage.getItem("q40"),
	q41 = localStorage.getItem("q41"),
	q42 = localStorage.getItem("q42"),
	q43 = localStorage.getItem("q43"),
	q44 = localStorage.getItem("q44"),
	q45 = localStorage.getItem("q45"),
	q46 = localStorage.getItem("q46"),
	q47 = localStorage.getItem("q47"),
	q48 = localStorage.getItem("q48"),
	q49 = localStorage.getItem("q49"),
	q50 = localStorage.getItem("q50"),
	q51 = localStorage.getItem("q51"),
	q52 = localStorage.getItem("q52"),
	q53 = localStorage.getItem("q53"),
	q54 = localStorage.getItem("q54"),
	q55 = localStorage.getItem("q55"),
	q56 = localStorage.getItem("q56"),
	q57 = localStorage.getItem("q57"),
	q58 = localStorage.getItem("q58"),
	q59 = localStorage.getItem("q59"),
	q60 = localStorage.getItem("q60"),
	q61 = localStorage.getItem("q61"),
	q62 = localStorage.getItem("q62"),
	q63 = localStorage.getItem("q63"),
	q64 = localStorage.getItem("q64"),
	q65 = localStorage.getItem("q65"),
	q66 = localStorage.getItem("q66"),
	q67 = localStorage.getItem("q67"),
	q68 = localStorage.getItem("q68"),
	q69 = localStorage.getItem("q69"),
	q70 = localStorage.getItem("q70"),
	q71 = localStorage.getItem("q71"),
	q72 = localStorage.getItem("q72"),
	q73 = localStorage.getItem("q73"),
	q74 = localStorage.getItem("q74"),
	q75 = localStorage.getItem("q75"),
	q76 = localStorage.getItem("q76"),
	q77 = localStorage.getItem("q77"),
	q78 = localStorage.getItem("q78"),
	q79 = localStorage.getItem("q79"),
	q80 = localStorage.getItem("q80"),
	q81 = localStorage.getItem("q81"),
	q82 = localStorage.getItem("q82"),
	q83 = localStorage.getItem("q83"),
	q84 = localStorage.getItem("q84"),
	q85 = localStorage.getItem("q85"),
	q86 = localStorage.getItem("q86"),
	q87 = localStorage.getItem("q87"),
	q88 = localStorage.getItem("q88"),
	q89 = localStorage.getItem("q89"),
	q90 = localStorage.getItem("q90"),
	q91 = localStorage.getItem("q91"),
	q92 = localStorage.getItem("q92"),
	q93 = localStorage.getItem("q93"),
	q94 = localStorage.getItem("q94"),
	q95 = localStorage.getItem("q95"),
	q96 = localStorage.getItem("q96"),
	q97 = localStorage.getItem("q97"),
	q98 = localStorage.getItem("q98"),
	q99 = localStorage.getItem("q99"),
	q100 = localStorage.getItem("q100"),
	q101 = localStorage.getItem("q101"),
	q102 = localStorage.getItem("q102"),
	q103 = localStorage.getItem("q103"),
	q104 = localStorage.getItem("q104"),
	q105 = localStorage.getItem("q105"),
	q106 = localStorage.getItem("q106"),
	q107 = localStorage.getItem("q107"),
	q108 = localStorage.getItem("q108"),
	q109 = localStorage.getItem("q109"),
	q110 = localStorage.getItem("q110"),
	q111 = localStorage.getItem("q111"),
	q112 = localStorage.getItem("q112"),
	q113 = localStorage.getItem("q113"),
	q114 = localStorage.getItem("q114"),
	q115 = localStorage.getItem("q115"),
	q116 = localStorage.getItem("q116"),
	q117 = localStorage.getItem("q117"),
	q118 = localStorage.getItem("q118"),
	q119 = localStorage.getItem("q119"),
	q120 = localStorage.getItem("q120"),
	q121 = localStorage.getItem("q121"),
	q122 = localStorage.getItem("q122"),
	q123 = localStorage.getItem("q123"),
	q124 = localStorage.getItem("q124"),
	q125 = localStorage.getItem("q125"),
	q126 = localStorage.getItem("q126"),
	q127 = localStorage.getItem("q127"),
	q128 = localStorage.getItem("q128"),
	q129 = localStorage.getItem("q129"),
	q130 = localStorage.getItem("q130"),
	q131 = localStorage.getItem("q131"),
	q132 = localStorage.getItem("q132"),
	q133 = localStorage.getItem("q133"),
	q134 = localStorage.getItem("q134"),
	q135 = localStorage.getItem("q135"),
	q136 = localStorage.getItem("q136"),
	q137 = localStorage.getItem("q137"),
	q138 = localStorage.getItem("q138"),
	q139 = localStorage.getItem("q139"),
	q140 = localStorage.getItem("q140"),
	q141 = localStorage.getItem("q141"),
	q142 = localStorage.getItem("q142"),
	q143 = localStorage.getItem("q143"),
	q144 = localStorage.getItem("q144"),
	q145 = localStorage.getItem("q145"),
	q146 = localStorage.getItem("q146"),
	q147 = localStorage.getItem("q147"),
	q148 = localStorage.getItem("q148"),
	q149 = localStorage.getItem("q149"),
	q150 = localStorage.getItem("q150"),
	q151 = localStorage.getItem("q151"),
	q152 = localStorage.getItem("q152"),
	q153 = localStorage.getItem("q153"),
	q154 = localStorage.getItem("q154"),
	q155 = localStorage.getItem("q155"),
	q156 = localStorage.getItem("q156"),
	q157 = localStorage.getItem("q157"),
	q158 = localStorage.getItem("q158"),
	q159 = localStorage.getItem("q159"),
	q160 = localStorage.getItem("q160"),
	q161 = localStorage.getItem("q161"),
	q162 = localStorage.getItem("q162"),
	q163 = localStorage.getItem("q163"),
	q164 = localStorage.getItem("q164"),
	q165 = localStorage.getItem("q165"),
	q166 = localStorage.getItem("q166"),
	q167 = localStorage.getItem("q167"),
	q168 = localStorage.getItem("q168"),
	q169 = localStorage.getItem("q169"),
	q170 = localStorage.getItem("q170"),
	q171 = localStorage.getItem("q171"),
	q172 = localStorage.getItem("q172"),
	q173 = localStorage.getItem("q173"),
	q174 = localStorage.getItem("q174");

	$('#sname').append(sname+' '+fname+' '+mname);
	$('#date').append(date);
	
	//////////////////// Невротизм (BEGIN)
	var neuroticism = 0; 

	if (q2 == "yes") neuroticism++; // Увеличивает значение при каждом совпадении
	if (q3 == "yes") neuroticism++;
	if (q4 == "yes") neuroticism++;
	if (q31 == "yes") neuroticism++;
	if (q32 == "yes") neuroticism++;
	if (q33 == "yes") neuroticism++;
	if (q34 == "yes") neuroticism++;
	if (q61 == "yes") neuroticism++;
	if (q62 == "yes") neuroticism++;
	if (q91 == "yes") neuroticism++;
	if (q92 == "yes") neuroticism++;
	if (q94 == "yes") neuroticism++;
	if (q121 == "yes") neuroticism++;
	if (q122 == "yes") neuroticism++;
	if (q123 == "yes") neuroticism++;
	if (q124 == "yes") neuroticism++;
	if (q151 == "yes") neuroticism++;
	if (q152 == "yes") neuroticism++;
	if (q153 == "yes") neuroticism++;
	if (q154 == "yes") neuroticism++;
	if (q155 == "yes") neuroticism++;
	if (q1 == "no") neuroticism++;
	if (q63 == "no") neuroticism++;
	if (q64 == "no") neuroticism++;
	if (q93 == "no") neuroticism++;

	switch (true) { // Отображает результат соответствующий итоговому количеству баллов
		case (neuroticism == 0) : $("#neuroticism1").css("display", "table-cell"); $(".neuroticismR1").css("display", "table-cell"); break;
		case (neuroticism == 1) : $("#neuroticism1").css("display", "table-cell"); $(".neuroticismR1").css("display", "table-cell"); break;
		case (neuroticism == 2) : $("#neuroticism1").css("display", "table-cell"); $(".neuroticismR1").css("display", "table-cell"); break;
		case (neuroticism == 3) : $("#neuroticism1").css("display", "table-cell"); $(".neuroticismR1").css("display", "table-cell"); break;
		case (neuroticism == 4) : $("#neuroticism1").css("display", "table-cell"); $(".neuroticismR1").css("display", "table-cell"); break;
		case (neuroticism == 5) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 6) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 7) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 8) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 9) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 10) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 11) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 12) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 13) : $("#neuroticism2").css("display", "table-cell"); $(".neuroticismR2").css("display", "table-cell"); break;
		case (neuroticism == 14) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 15) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 16) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 17) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 18) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 19) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 20) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 21) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 22) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 23) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 24) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
		case (neuroticism == 25) : $("#neuroticism3").css("display", "table-cell"); $(".neuroticismR3").css("display", "table-cell"); break;
	}
	//////////////////// Невротизм (END)

	//////////////////// Психотизм (BEGIN)
	var psychotism = 0;

	if (q5 == "yes") psychotism++;
	if (q6 == "yes") psychotism++;
	if (q7 == "yes") psychotism++;
	if (q8 == "yes") psychotism++;
	if (q36 == "yes") psychotism++;
	if (q37 == "yes") psychotism++;
	if (q38 == "yes") psychotism++;
	if (q65 == "yes") psychotism++;
	if (q66 == "yes") psychotism++;
	if (q67 == "yes") psychotism++;
	if (q68 == "yes") psychotism++;
	if (q95 == "yes") psychotism++;
	if (q96 == "yes") psychotism++;
	if (q97 == "yes") psychotism++;
	if (q98 == "yes") psychotism++;
	if (q125 == "yes") psychotism++;
	if (q126 == "yes") psychotism++;
	if (q127 == "yes") psychotism++;
	if (q128 == "yes") psychotism++;
	if (q156 == "yes") psychotism++;
	if (q157 == "yes") psychotism++;
	if (q158 == "yes") psychotism++;
	if (q159 == "yes") psychotism++;
	if (q35 == "no") psychotism++;
	
	switch (true) {
		case (psychotism == 0) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 1) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 2) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 3) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 4) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 5) : $("#psychotism1").css("display", "table-cell"); $(".psychotismR1").css("display", "table-cell"); break;
		case (psychotism == 6) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 7) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 8) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 9) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 10) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 11) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 12) : $("#psychotism2").css("display", "table-cell"); $(".psychotismR2").css("display", "table-cell"); break;
		case (psychotism == 13) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 14) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 15) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 16) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 17) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 18) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 19) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 20) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 21) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 22) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 23) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 24) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
		case (psychotism == 25) : $("#psychotism3").css("display", "table-cell"); $(".psychotismR3").css("display", "table-cell"); break;
	}
	//////////////////// Психотизм (END)
	
	//////////////////// Депрессия (BEGIN)
	var depression = 0;
	
	if (q9 == "yes") depression++;
	if (q10 == "yes") depression++;
	if (q12 == "yes") depression++;
	if (q39 == "yes") depression++;
	if (q40 == "yes") depression++;
	if (q41 == "yes") depression++;
	if (q42 == "yes") depression++;
	if (q69 == "yes") depression++;
	if (q70 == "yes") depression++;
	if (q71 == "yes") depression++;
	if (q72 == "yes") depression++;
	if (q99 == "yes") depression++;
	if (q100 == "yes") depression++;
	if (q101 == "yes") depression++;
	if (q102 == "yes") depression++;
	if (q103 == "yes") depression++;
	if (q131 == "yes") depression++;
	if (q132 == "yes") depression++;
	if (q133 == "yes") depression++;
	if (q160 == "yes") depression++;
	if (q162 == "yes") depression++;
	if (q163 == "yes") depression++;
	if (q11 == "no") depression++;
	if (q161 == "no") depression++;

	switch (true) {
		case (depression == 0) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 1) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 2) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 3) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 4) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 5) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 6) : $("#depression1").css("display", "table-cell"); $(".depressionR1").css("display", "table-cell"); break;
		case (depression == 7) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 8) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 9) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 10) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 11) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 12) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 13) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 14) : $("#depression2").css("display", "table-cell"); $(".depressionR2").css("display", "table-cell"); break;
		case (depression == 15) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 16) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 17) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 18) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 19) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 20) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 21) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 22) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 23) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 24) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
		case (depression == 25) : $("#depression3").css("display", "table-cell"); $(".depressionR3").css("display", "table-cell"); break;
	}
	//////////////////// Депрессия (END)
	
	//////////////////// Совестливость (BEGIN)
	var conscientiousness = 0;
	
	if (q13 == "yes") conscientiousness++;
	if (q14 == "yes") conscientiousness++;
	if (q15 == "yes") conscientiousness++;
	if (q43 == "yes") conscientiousness++;
	if (q44 == "yes") conscientiousness++;
	if (q45 == "yes") conscientiousness++;
	if (q73 == "yes") conscientiousness++;
	if (q74 == "yes") conscientiousness++;
	if (q75 == "yes") conscientiousness++;
	if (q104 == "yes") conscientiousness++;
	if (q105 == "yes") conscientiousness++;
	if (q134 == "yes") conscientiousness++;
	if (q135 == "yes") conscientiousness++;
	if (q164 == "yes") conscientiousness++;
	if (q165 == "yes") conscientiousness++;
	
	switch (true) {
		case (conscientiousness == 0) : $("#conscientiousness1").css("display", "table-cell"); $(".conscientiousnessR1").css("display", "table-cell"); break;
		case (conscientiousness == 1) : $("#conscientiousness1").css("display", "table-cell"); $(".conscientiousnessR1").css("display", "table-cell"); break;
		case (conscientiousness == 2) : $("#conscientiousness1").css("display", "table-cell"); $(".conscientiousnessR1").css("display", "table-cell"); break;
		case (conscientiousness == 3) : $("#conscientiousness1").css("display", "table-cell"); $(".conscientiousnessR1").css("display", "table-cell"); break;
		case (conscientiousness == 4) : $("#conscientiousness1").css("display", "table-cell"); $(".conscientiousnessR1").css("display", "table-cell"); break;
		case (conscientiousness == 5) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 6) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 7) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 8) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 9) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 10) : $("#conscientiousness2").css("display", "table-cell"); $(".conscientiousnessR2").css("display", "table-cell"); break;
		case (conscientiousness == 11) : $("#conscientiousness3").css("display", "table-cell"); $(".conscientiousnessR3").css("display", "table-cell"); break;
		case (conscientiousness == 12) : $("#conscientiousness3").css("display", "table-cell"); $(".conscientiousnessR3").css("display", "table-cell"); break;
		case (conscientiousness == 13) : $("#conscientiousness3").css("display", "table-cell"); $(".conscientiousnessR3").css("display", "table-cell"); break;
		case (conscientiousness == 14) : $("#conscientiousness3").css("display", "table-cell"); $(".conscientiousnessR3").css("display", "table-cell"); break;
		case (conscientiousness == 15) : $("#conscientiousness3").css("display", "table-cell"); $(".conscientiousnessR3").css("display", "table-cell"); break;
	}                                                                                                                                                   
	//////////////////// Совестливость (END)
	
	//////////////////// Растроможенность (BEGIN)
	var disinhibition = 0;
	
	if (q16 == "yes") disinhibition++;
	if (q17 == "yes") disinhibition++;
	if (q46 == "yes") disinhibition++;
	if (q47 == "yes") disinhibition++;
	if (q76 == "yes") disinhibition++;
	if (q106 == "yes") disinhibition++;
	if (q107 == "yes") disinhibition++;
	if (q108 == "yes") disinhibition++;
	if (q136 == "yes") disinhibition++;
	if (q137 == "yes") disinhibition++;
	if (q166 == "yes") disinhibition++;
	if (q168 == "yes") disinhibition++;
	if (q77 == "no") disinhibition++;
	if (q138 == "no") disinhibition++;
	if (q167 == "no") disinhibition++;
	
	switch (true) {
		case (disinhibition == 0) : $("#disinhibition1").css("display", "table-cell"); $(".disinhibitionR1").css("display", "table-cell"); break;
		case (disinhibition == 1) : $("#disinhibition1").css("display", "table-cell"); $(".disinhibitionR1").css("display", "table-cell"); break;
		case (disinhibition == 2) : $("#disinhibition1").css("display", "table-cell"); $(".disinhibitionR1").css("display", "table-cell"); break;
		case (disinhibition == 3) : $("#disinhibition1").css("display", "table-cell"); $(".disinhibitionR1").css("display", "table-cell"); break;
		case (disinhibition == 4) : $("#disinhibition1").css("display", "table-cell"); $(".disinhibitionR1").css("display", "table-cell"); break;
		case (disinhibition == 5) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 6) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 7) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 8) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 9) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 10) : $("#disinhibition2").css("display", "table-cell"); $(".disinhibitionR2").css("display", "table-cell"); break;
		case (disinhibition == 11) : $("#disinhibition3").css("display", "table-cell"); $(".disinhibitionR3").css("display", "table-cell"); break;
		case (disinhibition == 12) : $("#disinhibition3").css("display", "table-cell"); $(".disinhibitionR3").css("display", "table-cell"); break;
		case (disinhibition == 13) : $("#disinhibition3").css("display", "table-cell"); $(".disinhibitionR3").css("display", "table-cell"); break;
		case (disinhibition == 14) : $("#disinhibition3").css("display", "table-cell"); $(".disinhibitionR3").css("display", "table-cell"); break;
		case (disinhibition == 15) : $("#disinhibition3").css("display", "table-cell"); $(".disinhibitionR3").css("display", "table-cell"); break;
	}
	//////////////////// Растроможенность (END)
	
	//////////////////// Активность (BEGIN)
	var activity = 0;
	
	if (q18 == "yes") activity++;
	if (q19 == "yes") activity++;
	if (q48 == "yes") activity++;
	if (q50 == "yes") activity++;
	if (q78 == "yes") activity++;
	if (q79 == "yes") activity++;
	if (q80 == "yes") activity++;
	if (q108 == "yes") activity++;
	if (q109 == "yes") activity++;
	if (q110 == "yes") activity++;
	if (q139 == "yes") activity++;
	if (q140 == "yes") activity++;
	if (q169 == "yes") activity++;
	if (q170 == "yes") activity++;
	if (q49 == "no") activity++;
	
	switch (true) {
		case (activity == 0) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 1) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 2) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 3) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 4) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 5) : $("#activity1").css("display", "table-cell"); $(".activityR1").css("display", "table-cell"); break;
		case (activity == 6) : $("#activity2").css("display", "table-cell"); $(".activityR2").css("display", "table-cell"); break;
		case (activity == 7) : $("#activity2").css("display", "table-cell"); $(".activityR2").css("display", "table-cell"); break;
		case (activity == 8) : $("#activity2").css("display", "table-cell"); $(".activityR2").css("display", "table-cell"); break;
		case (activity == 9) : $("#activity2").css("display", "table-cell"); $(".activityR2").css("display", "table-cell"); break;
		case (activity == 10) : $("#activity2").css("display", "table-cell"); $(".activityR2").css("display", "table-cell"); break;
		case (activity == 11) : $("#activity3").css("display", "table-cell"); $(".activityR3").css("display", "table-cell"); break;
		case (activity == 12) : $("#activity3").css("display", "table-cell"); $(".activityR3").css("display", "table-cell"); break;
		case (activity == 13) : $("#activity3").css("display", "table-cell"); $(".activityR3").css("display", "table-cell"); break;
		case (activity == 14) : $("#activity3").css("display", "table-cell"); $(".activityR3").css("display", "table-cell"); break;
		case (activity == 15) : $("#activity3").css("display", "table-cell"); $(".activityR3").css("display", "table-cell"); break;
	}
	//////////////////// Активность (END)
	
	//////////////////// Робость (BEGIN)
	var shyness = 0;
	
	if (q20 == "yes") shyness++;
	if (q21 == "yes") shyness++;
	if (q22 == "yes") shyness++;
	if (q51 == "yes") shyness++;
	if (q52 == "yes") shyness++;
	if (q81 == "yes") shyness++;
	if (q82 == "yes") shyness++;
	if (q101 == "yes") shyness++;
	if (q141 == "yes") shyness++;
	if (q142 == "yes") shyness++;
	if (q143 == "yes") shyness++;
	if (q53 == "no") shyness++;
	if (q83 == "no") shyness++;
	if (q111 == "no") shyness++;
	if (q113 == "no") shyness++;
	
	switch (true) {
		case (shyness == 0) : $("#shyness1").css("display", "table-cell"); $(".shynessR1").css("display", "table-cell"); break;
		case (shyness == 1) : $("#shyness1").css("display", "table-cell"); $(".shynessR1").css("display", "table-cell"); break;
		case (shyness == 2) : $("#shyness1").css("display", "table-cell"); $(".shynessR1").css("display", "table-cell"); break;
		case (shyness == 3) : $("#shyness1").css("display", "table-cell"); $(".shynessR1").css("display", "table-cell"); break;
		case (shyness == 4) : $("#shyness1").css("display", "table-cell"); $(".shynessR1").css("display", "table-cell"); break;
		case (shyness == 5) : $("#shyness2").css("display", "table-cell"); $(".shynessR2").css("display", "table-cell"); break;
		case (shyness == 6) : $("#shyness2").css("display", "table-cell"); $(".shynessR2").css("display", "table-cell"); break;
		case (shyness == 7) : $("#shyness2").css("display", "table-cell"); $(".shynessR2").css("display", "table-cell"); break;
		case (shyness == 8) : $("#shyness2").css("display", "table-cell"); $(".shynessR2").css("display", "table-cell"); break;
		case (shyness == 9) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 10) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 11) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 12) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 13) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 14) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
		case (shyness == 15) : $("#shyness3").css("display", "table-cell"); $(".shynessR3").css("display", "table-cell"); break;
	}
	//////////////////// Робость (END)
	
	//////////////////// Общительность (BEGIN)
	var sociability = 0;
	
	if (q23 == "yes") sociability++;
	if (q24 == "yes") sociability++;
	if (q25 == "yes") sociability++;
	if (q53 == "yes") sociability++;
	if (q54 == "yes") sociability++;
	if (q84 == "yes") sociability++;
	if (q85 == "yes") sociability++;
	if (q86 == "yes") sociability++;
	if (q114 == "yes") sociability++;
	if (q145 == "yes") sociability++;
	if (q55 == "no") sociability++;
	if (q115 == "no") sociability++;
	if (q116 == "no") sociability++;
	if (q144 == "no") sociability++;
	if (q146 == "no") sociability++;
	
	switch (true) {
		case (sociability == 0) : $("#sociability1").css("display", "table-cell"); $(".sociabilityR1").css("display", "table-cell"); break;
		case (sociability == 1) : $("#sociability1").css("display", "table-cell"); $(".sociabilityR1").css("display", "table-cell"); break;
		case (sociability == 2) : $("#sociability1").css("display", "table-cell"); $(".sociabilityR1").css("display", "table-cell"); break;
		case (sociability == 3) : $("#sociability1").css("display", "table-cell"); $(".sociabilityR1").css("display", "table-cell"); break;
		case (sociability == 4) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 5) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 6) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 7) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 8) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 9) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 10) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 11) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 12) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 13) : $("#sociability2").css("display", "table-cell"); $(".sociabilityR2").css("display", "table-cell"); break;
		case (sociability == 14) : $("#sociability3").css("display", "table-cell"); $(".sociabilityR3").css("display", "table-cell"); break;
		case (sociability == 15) : $("#sociability3").css("display", "table-cell"); $(".sociabilityR3").css("display", "table-cell"); break;
	}
	//////////////////// Общительность (END)
	
	//////////////////// Впечатлительность (BEGIN)
	var susceptibility = 0;
	
	if (q26 == "yes") susceptibility++;
	if (q28 == "yes") susceptibility++;
	if (q56 == "yes") susceptibility++;
	if (q57 == "yes") susceptibility++;
	if (q58 == "yes") susceptibility++;
	if (q87 == "yes") susceptibility++;
	if (q88 == "yes") susceptibility++;
	if (q89 == "yes") susceptibility++;
	if (q111 == "yes") susceptibility++;
	if (q118 == "yes") susceptibility++;
	if (q147 == "yes") susceptibility++;
	if (q148 == "yes") susceptibility++;
	if (q149 == "yes") susceptibility++;
	if (q27 == "no") susceptibility++;
	if (q119 == "no") susceptibility++;
	
	switch (true) {
		case (susceptibility == 0) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 1) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 2) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 3) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 4) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 5) : $("#susceptibility1").css("display", "table-cell"); $(".susceptibilityR1").css("display", "table-cell"); break;
		case (susceptibility == 6) : $("#susceptibility2").css("display", "table-cell"); $(".susceptibilityR2").css("display", "table-cell"); break;
		case (susceptibility == 7) : $("#susceptibility2").css("display", "table-cell"); $(".susceptibilityR2").css("display", "table-cell"); break;
		case (susceptibility == 8) : $("#susceptibility2").css("display", "table-cell"); $(".susceptibilityR2").css("display", "table-cell"); break;
		case (susceptibility == 9) : $("#susceptibility2").css("display", "table-cell"); $(".susceptibilityR2").css("display", "table-cell"); break;
		case (susceptibility == 10) : $("#susceptibility2").css("display", "table-cell"); $(".susceptibilityR2").css("display", "table-cell"); break;
		case (susceptibility == 11) : $("#susceptibility3").css("display", "table-cell"); $(".susceptibilityR3").css("display", "table-cell"); break;
		case (susceptibility == 12) : $("#susceptibility3").css("display", "table-cell"); $(".susceptibilityR3").css("display", "table-cell"); break;
		case (susceptibility == 13) : $("#susceptibility3").css("display", "table-cell"); $(".susceptibilityR3").css("display", "table-cell"); break;
		case (susceptibility == 14) : $("#susceptibility3").css("display", "table-cell"); $(".susceptibilityR3").css("display", "table-cell"); break;
		case (susceptibility == 15) : $("#susceptibility3").css("display", "table-cell"); $(".susceptibilityR3").css("display", "table-cell"); break;
	}
	//////////////////// Впечатлительность (END)
	
	//////////////////// Женственность (BEGIN)
	var femininity = 0;
	
	if (q29 == "yes") femininity++;
	if (q30 == "yes") femininity++;
	if (q59 == "yes") femininity++;
	if (q60 == "yes") femininity++;
	if (q89 == "yes") femininity++;
	if (q90 == "yes") femininity++;
	if (q120 == "yes") femininity++;
	if (q149 == "yes") femininity++;
	if (q150 == "yes") femininity++;
	if (q119 == "no") femininity++;
	
	switch (true) {
		case (femininity == 0) : $("#femininity1").css("display", "table-cell"); $(".femininityR1").css("display", "table-cell"); break;
		case (femininity == 1) : $("#femininity1").css("display", "table-cell"); $(".femininityR1").css("display", "table-cell"); break;
		case (femininity == 2) : $("#femininity2").css("display", "table-cell"); $(".femininityR2").css("display", "table-cell"); break;
		case (femininity == 3) : $("#femininity2").css("display", "table-cell"); $(".femininityR2").css("display", "table-cell"); break;
		case (femininity == 4) : $("#femininity2").css("display", "table-cell"); $(".femininityR2").css("display", "table-cell"); break;
		case (femininity == 5) : $("#femininity2").css("display", "table-cell"); $(".femininityR2").css("display", "table-cell"); break;
		case (femininity == 6) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 7) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 8) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 9) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 10) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 11) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 12) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 13) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 14) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
		case (femininity == 15) : $("#femininity3").css("display", "table-cell"); $(".femininityR3").css("display", "table-cell"); break;
	}                                                                                                                              
	//////////////////// Женственность (END)
});