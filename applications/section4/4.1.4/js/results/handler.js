$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('h11inp'),
		q2 = localStorage.getItem('h12inp'),
		q3 = localStorage.getItem('h13inp'),
		q4 = localStorage.getItem('h14inp'),
		q5 = localStorage.getItem('h21inp'),
		q6 = localStorage.getItem('h22inp'),
		q7 = localStorage.getItem('h23inp'),
		q8 = localStorage.getItem('h24inp'),
		q9 = localStorage.getItem('h31inp'),
		q10 = localStorage.getItem('h32inp'),
		q11 = localStorage.getItem('h33inp'),
		q12 = localStorage.getItem('h34inp'),
		q13 = localStorage.getItem('h41inp'),
		q14 = localStorage.getItem('h42inp'),
		q15 = localStorage.getItem('h43inp'),
		q16 = localStorage.getItem('h44inp'),
		q17 = localStorage.getItem('h51inp'),
		q18 = localStorage.getItem('h52inp'),
		q19 = localStorage.getItem('h53inp'),
		q20 = localStorage.getItem('h54inp'),
		q21 = localStorage.getItem('h61inp'),
		q22 = localStorage.getItem('h62inp'),
		q23 = localStorage.getItem('h63inp'),
		q24 = localStorage.getItem('h64inp'),
		q25 = localStorage.getItem('h71inp'),
		q26 = localStorage.getItem('h72inp'),
		q27 = localStorage.getItem('h73inp'),
		q28 = localStorage.getItem('h74inp'),
		q29 = localStorage.getItem('h81inp'),
		q30 = localStorage.getItem('h82inp'),
		q31 = localStorage.getItem('h83inp'),
		q32 = localStorage.getItem('h84inp'),
		q33 = localStorage.getItem('h91inp'),
		q34 = localStorage.getItem('h92inp'),
		q35 = localStorage.getItem('h93inp'),
		q36 = localStorage.getItem('h94inp'),
		q37 = localStorage.getItem('h101inp'),
		q38 = localStorage.getItem('h102inp'),
		q39 = localStorage.getItem('h103inp'),
		q40 = localStorage.getItem('h104inp'),
		q41 = localStorage.getItem('h111inp'),
		q42 = localStorage.getItem('h112inp'),
		q43 = localStorage.getItem('h113inp'),
		q44 = localStorage.getItem('h114inp'),
		q45 = localStorage.getItem('h121inp'),
		q46 = localStorage.getItem('h122inp'),
		q47 = localStorage.getItem('h123inp'),
		q48 = localStorage.getItem('h124inp'),
		q49 = localStorage.getItem('h131inp'),
		q50 = localStorage.getItem('h132inp'),
		q51 = localStorage.getItem('h133inp'),
		q52 = localStorage.getItem('h134inp'),
		q53 = localStorage.getItem('h141inp'),
		q54 = localStorage.getItem('h142inp'),
		q55 = localStorage.getItem('h143inp'),
		q56 = localStorage.getItem('h144inp'),
		q57 = localStorage.getItem('h151inp'),
		q58 = localStorage.getItem('h152inp'),
		q59 = localStorage.getItem('h153inp'),
		q60 = localStorage.getItem('h154inp'),
		q61 = localStorage.getItem('h161inp'),
		q62 = localStorage.getItem('h162inp'),
		q63 = localStorage.getItem('h163inp'),
		q64 = localStorage.getItem('h164inp'),
		q65 = localStorage.getItem('h171inp'),
		q66 = localStorage.getItem('h172inp'),
		q67 = localStorage.getItem('h173inp'),
		q68 = localStorage.getItem('h174inp'),
		q69 = localStorage.getItem('h181inp'),
		q70 = localStorage.getItem('h182inp'),
		q71 = localStorage.getItem('h183inp'),
		q72 = localStorage.getItem('h184inp'),
		q73 = localStorage.getItem('h191inp'),
		q74 = localStorage.getItem('h192inp'),
		q75 = localStorage.getItem('h193inp'),
		q76 = localStorage.getItem('h194inp'),
		q77 = localStorage.getItem('h201inp'),
		q78 = localStorage.getItem('h202inp'),
		q79 = localStorage.getItem('h203inp'),
		q80 = localStorage.getItem('h204inp'),
		q81 = localStorage.getItem('h211inp'),
		q82 = localStorage.getItem('h212inp'),
		q83 = localStorage.getItem('h213inp'),
		q84 = localStorage.getItem('h214inp'),
		q85 = localStorage.getItem('h221inp'),
		q86 = localStorage.getItem('h222inp'),
		q87 = localStorage.getItem('h223inp'),
		q88 = localStorage.getItem('h224inp'),
		q89 = localStorage.getItem('h231inp'),
		q90 = localStorage.getItem('h232inp'),
		q91 = localStorage.getItem('h233inp'),
		q92 = localStorage.getItem('h234inp'),
		q93 = localStorage.getItem('h241inp'),
		q94 = localStorage.getItem('h242inp'),
		q95 = localStorage.getItem('h243inp'),
		q96 = localStorage.getItem('h244inp'),
		q97 = localStorage.getItem('h251inp'),
		q98 = localStorage.getItem('h252inp'),
		q99 = localStorage.getItem('h253inp'),
		q100 = localStorage.getItem('h254inp'),
		q101 = localStorage.getItem('h261inp'),
		q102 = localStorage.getItem('h262inp'),
		q103 = localStorage.getItem('h263inp'),
		q104 = localStorage.getItem('h264inp'),
		q105 = localStorage.getItem('h271inp'),
		q106 = localStorage.getItem('h272inp'),
		q107 = localStorage.getItem('h273inp'),
		q108 = localStorage.getItem('h274inp'),
		q109 = localStorage.getItem('h281inp'),
		q110 = localStorage.getItem('h282inp'),
		q111 = localStorage.getItem('h283inp'),
		q112 = localStorage.getItem('h284inp'),
		q113 = localStorage.getItem('h291inp'),
		q114 = localStorage.getItem('h292inp'),
		q115 = localStorage.getItem('h293inp'),
		q116 = localStorage.getItem('h294inp'),
		q117 = localStorage.getItem('h301inp'),
		q118 = localStorage.getItem('h302inp'),
		q119 = localStorage.getItem('h303inp'),
		q120 = localStorage.getItem('h304inp'),
		q121 = localStorage.getItem('h311inp'),
		q122 = localStorage.getItem('h312inp'),
		q123 = localStorage.getItem('h313inp'),
		q124 = localStorage.getItem('h314inp'),
		q125 = localStorage.getItem('h321inp'),
		q126 = localStorage.getItem('h322inp'),
		q127 = localStorage.getItem('h323inp'),
		q128 = localStorage.getItem('h324inp'),
		q129 = localStorage.getItem('h331inp'),
		q130 = localStorage.getItem('h332inp'),
		q131 = localStorage.getItem('h333inp'),
		q132 = localStorage.getItem('h334inp'),
		q133 = localStorage.getItem('h341inp'),
		q134 = localStorage.getItem('h342inp'),
		q135 = localStorage.getItem('h343inp'),
		q136 = localStorage.getItem('h344inp'),
		q137 = localStorage.getItem('h351inp'),
		q138 = localStorage.getItem('h352inp'),
		q139 = localStorage.getItem('h353inp'),
		q140 = localStorage.getItem('h354inp'),
		q141 = localStorage.getItem('h361inp'),
		q142 = localStorage.getItem('h362inp'),
		q143 = localStorage.getItem('h363inp'),
		q144 = localStorage.getItem('h364inp'),
		q145 = localStorage.getItem('h371inp'),
		q146 = localStorage.getItem('h372inp'),
		q147 = localStorage.getItem('h373inp'),
		q148 = localStorage.getItem('h374inp'),
		q149 = localStorage.getItem('h381inp'),
		q150 = localStorage.getItem('h382inp'),
		q151 = localStorage.getItem('h383inp'),
		q152 = localStorage.getItem('h384inp'),
		q153 = localStorage.getItem('h391inp'),
		q154 = localStorage.getItem('h392inp'),
		q155 = localStorage.getItem('h393inp'),
		q156 = localStorage.getItem('h394inp'),
		q157 = localStorage.getItem('h401inp'),
		q158 = localStorage.getItem('h402inp'),
		q159 = localStorage.getItem('h403inp'),
		q160 = localStorage.getItem('h404inp'),
		q161 = localStorage.getItem('h411inp'),
		q162 = localStorage.getItem('h412inp'),
		q163 = localStorage.getItem('h413inp'),
		q164 = localStorage.getItem('h414inp'),
		fac = localStorage.getItem('facinp');

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#fac').append(fac);
	$('#h11').append(q1 + '%');
	$('#h12').append(q2 + '%');
	$('#h13').append(q3);
	$('#h14').append(q4);
	$('#h21').append(q5 + '%');
	$('#h22').append(q6 + '%');
	$('#h23').append(q7);
	$('#h24').append(q8);
	$('#h31').append(q9 + '%');
	$('#h32').append(q10 + '%');
	$('#h33').append(q11);
	$('#h34').append(q12);
	$('#h41').append(q13 + '%');
	$('#h42').append(q14 + '%');
	$('#h43').append(q15);
	$('#h44').append(q16);
	$('#h51').append(q17 + '%');
	$('#h52').append(q18 + '%');
	$('#h53').append(q19);
	$('#h54').append(q20);
	$('#h61').append(q21 + '%');
	$('#h62').append(q22 + '%');
	$('#h63').append(q23);
	$('#h64').append(q24);
	$('#h71').append(q25 + '%');
	$('#h72').append(q26 + '%');
	$('#h73').append(q27);
	$('#h74').append(q28);
	$('#h81').append(q29 + '%');
	$('#h82').append(q30 + '%');
	$('#h83').append(q31);
	$('#h84').append(q32);
	$('#h91').append(q33 + '%');
	$('#h92').append(q34 + '%');
	$('#h93').append(q35);
	$('#h94').append(q36);
	$('#h101').append(q37 + '%');
	$('#h102').append(q38 + '%');
	$('#h103').append(q39);
	$('#h104').append(q40);
	$('#h111').append(q41 + '%');
	$('#h112').append(q42 + '%');
	$('#h113').append(q43);
	$('#h114').append(q44);
	$('#h121').append(q45 + '%');
	$('#h122').append(q46 + '%');
	$('#h123').append(q47);
	$('#h124').append(q48);
	$('#h131').append(q49 + '%');
	$('#h132').append(q50 + '%');
	$('#h133').append(q51);
	$('#h134').append(q52);
	$('#h141').append(q53 + '%');
	$('#h142').append(q54 + '%');
	$('#h143').append(q55);
	$('#h144').append(q56);
	$('#h151').append(q57 + '%');
	$('#h152').append(q58 + '%');
	$('#h153').append(q59);
	$('#h154').append(q60);
	$('#h161').append(q61 + '%');
	$('#h162').append(q62 + '%');
	$('#h163').append(q63);
	$('#h164').append(q64);
	$('#h171').append(q65 + '%');
	$('#h172').append(q66 + '%');
	$('#h173').append(q67);
	$('#h174').append(q68);
	$('#h181').append(q69 + '%');
	$('#h182').append(q70 + '%');
	$('#h183').append(q71);
	$('#h184').append(q72);
	$('#h191').append(q73 + '%');
	$('#h192').append(q74 + '%');
	$('#h193').append(q75);
	$('#h194').append(q76);
	$('#h201').append(q77 + '%');
	$('#h202').append(q78 + '%');
	$('#h203').append(q79);
	$('#h204').append(q80);
	$('#h211').append(q81 + '%');
	$('#h212').append(q82 + '%');
	$('#h213').append(q83);
	$('#h214').append(q84);
	$('#h221').append(q85 + '%');
	$('#h222').append(q86 + '%');
	$('#h223').append(q87);
	$('#h224').append(q88);
	$('#h231').append(q89 + '%');
	$('#h232').append(q90 + '%');
	$('#h233').append(q91);
	$('#h234').append(q92);
	$('#h241').append(q93 + '%');
	$('#h242').append(q94 + '%');
	$('#h243').append(q95);
	$('#h244').append(q96);
	$('#h251').append(q97 + '%');
	$('#h252').append(q98 + '%');
	$('#h253').append(q99);
	$('#h254').append(q100);
	$('#h261').append(q101 + '%');
	$('#h262').append(q102 + '%');
	$('#h263').append(q103);
	$('#h264').append(q104);
	$('#h271').append(q105 + '%');
	$('#h272').append(q106 + '%');
	$('#h273').append(q107);
	$('#h274').append(q108);
	$('#h281').append(q109 + '%');
	$('#h282').append(q110 + '%');
	$('#h283').append(q111);
	$('#h284').append(q112);
	$('#h291').append(q113 + '%');
	$('#h292').append(q114 + '%');
	$('#h293').append(q115);
	$('#h294').append(q116);
	$('#h301').append(q117 + '%');
	$('#h302').append(q118 + '%');
	$('#h303').append(q119);
	$('#h304').append(q120);
	$('#h311').append(q121 + '%');
	$('#h312').append(q122 + '%');
	$('#h313').append(q123);
	$('#h314').append(q124);
	$('#h321').append(q125 + '%');
	$('#h322').append(q126 + '%');
	$('#h323').append(q127);
	$('#h324').append(q128);
	$('#h331').append(q129 + '%');
	$('#h332').append(q130 + '%');
	$('#h333').append(q131);
	$('#h334').append(q132);
	$('#h341').append(q133 + '%');
	$('#h342').append(q134 + '%');
	$('#h343').append(q135);
	$('#h344').append(q136);
	$('#h351').append(q137 + '%');
	$('#h352').append(q138 + '%');
	$('#h353').append(q139);
	$('#h354').append(q140);
	$('#h361').append(q141 + '%');
	$('#h362').append(q142 + '%');
	$('#h363').append(q143);
	$('#h364').append(q144);
	$('#h371').append(q145 + '%');
	$('#h372').append(q146 + '%');
	$('#h373').append(q147);
	$('#h374').append(q148);
	$('#h381').append(q149 + '%');
	$('#h382').append(q150 + '%');
	$('#h383').append(q151);
	$('#h384').append(q152);
	$('#h391').append(q153 + '%');
	$('#h392').append(q154 + '%');
	$('#h393').append(q155);
	$('#h394').append(q156);
	$('#h401').append(q157 + '%');
	$('#h402').append(q158 + '%');
	$('#h403').append(q159);
	$('#h404').append(q160);
	$('#h411').append(q161 + '%');
	$('#h412').append(q162 + '%');
	$('#h413').append(q163);
	$('#h414').append(q164);
});