$(document).mousemove(function() { // Проверяет заполнение всех полей и выводит кнопку "Продолжить"

	var 
	v1 = $("#mname").val(), 
	v2 = $("#fname").val(),
	v3 = $("#sname").val(),
	v4 = $("#date").val(),
	vq1 = $("input[name=q1]:checked").val(),
	vq2 = $("input[name=q2]:checked").val(),
	vq3 = $("input[name=q3]:checked").val(),
	vq4 = $("input[name=q4]:checked").val(),
	vq5 = $("input[name=q5]:checked").val(),
	vq6 = $("input[name=q6]:checked").val(),
	vq7 = $("input[name=q7]:checked").val(),
	vq8 = $("input[name=q8]:checked").val(),
	vq9 = $("input[name=q9]:checked").val(),
	vq10 = $("input[name=q10]:checked").val(),
	vq11 = $("input[name=q11]:checked").val(),
	vq12 = $("input[name=q12]:checked").val(),
	vq13 = $("input[name=q13]:checked").val(),
	vq14 = $("input[name=q14]:checked").val(),
	vq15 = $("input[name=q15]:checked").val(),
	vq16 = $("input[name=q16]:checked").val(),
	vq17 = $("input[name=q17]:checked").val(),
	vq18 = $("input[name=q18]:checked").val(),
	vq19 = $("input[name=q19]:checked").val(),
	vq20 = $("input[name=q20]:checked").val(),
	vq21 = $("input[name=q21]:checked").val(),
	vq22 = $("input[name=q22]:checked").val(),
	vq23 = $("input[name=q23]:checked").val(),
	vq24 = $("input[name=q24]:checked").val(),
	vq25 = $("input[name=q25]:checked").val(),
	vq26 = $("input[name=q26]:checked").val(),
	vq27 = $("input[name=q27]:checked").val(),
	vq28 = $("input[name=q28]:checked").val(),
	vq29 = $("input[name=q29]:checked").val(),
	vq30 = $("input[name=q30]:checked").val(),
	vq31 = $("input[name=q31]:checked").val(),
	vq32 = $("input[name=q32]:checked").val(),
	vq33 = $("input[name=q33]:checked").val(),
	vq34 = $("input[name=q34]:checked").val(),
	vq35 = $("input[name=q35]:checked").val(),
	vq36 = $("input[name=q36]:checked").val(),
	vq37 = $("input[name=q37]:checked").val(),
	vq38 = $("input[name=q38]:checked").val(),
	vq39 = $("input[name=q39]:checked").val(),
	vq40 = $("input[name=q40]:checked").val(),
	vq41 = $("input[name=q41]:checked").val(),
	vq42 = $("input[name=q42]:checked").val(),
	vq43 = $("input[name=q43]:checked").val(),
	vq44 = $("input[name=q44]:checked").val(),
	vq45 = $("input[name=q45]:checked").val(),
	vq46 = $("input[name=q46]:checked").val(),
	vq47 = $("input[name=q47]:checked").val(),
	vq48 = $("input[name=q48]:checked").val(),
	vq49 = $("input[name=q49]:checked").val(),
	vq50 = $("input[name=q50]:checked").val(),
	vq51 = $("input[name=q51]:checked").val(),
	vq52 = $("input[name=q52]:checked").val(),
	vq53 = $("input[name=q53]:checked").val(),
	vq54 = $("input[name=q54]:checked").val(),
	vq55 = $("input[name=q55]:checked").val(),
	vq56 = $("input[name=q56]:checked").val(),
	vq57 = $("input[name=q57]:checked").val(),
	vq58 = $("input[name=q58]:checked").val(),
	vq59 = $("input[name=q59]:checked").val(),
	vq60 = $("input[name=q60]:checked").val(),
	vq61 = $("input[name=q61]:checked").val(),
	vq62 = $("input[name=q62]:checked").val(),
	vq63 = $("input[name=q63]:checked").val(),
	vq64 = $("input[name=q64]:checked").val(),
	vq65 = $("input[name=q65]:checked").val(),
	vq66 = $("input[name=q66]:checked").val(),
	vq67 = $("input[name=q67]:checked").val(),
	vq68 = $("input[name=q68]:checked").val(),
	vq69 = $("input[name=q69]:checked").val(),
	vq70 = $("input[name=q70]:checked").val(),
	vq71 = $("input[name=q71]:checked").val(),
	vq72 = $("input[name=q72]:checked").val(),
	vq73 = $("input[name=q73]:checked").val(),
	vq74 = $("input[name=q74]:checked").val(),
	vq75 = $("input[name=q75]:checked").val(),
	vq76 = $("input[name=q76]:checked").val(),
	vq77 = $("input[name=q77]:checked").val(),
	vq78 = $("input[name=q78]:checked").val(),
	vq79 = $("input[name=q79]:checked").val(),
	vq80 = $("input[name=q80]:checked").val(),
	vq81 = $("input[name=q81]:checked").val(),
	vq82 = $("input[name=q82]:checked").val(),
	vq83 = $("input[name=q83]:checked").val(),
	vq84 = $("input[name=q84]:checked").val(),
	vq85 = $("input[name=q85]:checked").val(),
	vq86 = $("input[name=q86]:checked").val(),
	vq87 = $("input[name=q87]:checked").val(),
	vq88 = $("input[name=q88]:checked").val(),
	vq89 = $("input[name=q89]:checked").val(),
	vq90 = $("input[name=q90]:checked").val(),
	vq91 = $("input[name=q91]:checked").val(),
	vq92 = $("input[name=q92]:checked").val(),
	vq93 = $("input[name=q93]:checked").val(),
	vq94 = $("input[name=q94]:checked").val(),
	vq95 = $("input[name=q95]:checked").val(),
	vq96 = $("input[name=q96]:checked").val(),
	vq97 = $("input[name=q97]:checked").val(),
	vq98 = $("input[name=q98]:checked").val(),
	vq99 = $("input[name=q99]:checked").val(),
	vq100 = $("input[name=q100]:checked").val(),
	vq101 = $("input[name=q101]:checked").val(),
	vq102 = $("input[name=q102]:checked").val(),
	vq103 = $("input[name=q103]:checked").val(),
	vq104 = $("input[name=q104]:checked").val(),
	vq105 = $("input[name=q105]:checked").val(),
	vq106 = $("input[name=q106]:checked").val(),
	vq107 = $("input[name=q107]:checked").val(),
	vq108 = $("input[name=q108]:checked").val(),
	vq109 = $("input[name=q109]:checked").val(),
	vq110 = $("input[name=q110]:checked").val(),
	vq111 = $("input[name=q111]:checked").val(),
	vq112 = $("input[name=q112]:checked").val(),
	vq113 = $("input[name=q113]:checked").val(),
	vq114 = $("input[name=q114]:checked").val(),
	vq115 = $("input[name=q115]:checked").val(),
	vq116 = $("input[name=q116]:checked").val(),
	vq117 = $("input[name=q117]:checked").val(),
	vq118 = $("input[name=q118]:checked").val(),
	vq119 = $("input[name=q119]:checked").val(),
	vq120 = $("input[name=q120]:checked").val(),
	vq121 = $("input[name=q121]:checked").val(),
	vq122 = $("input[name=q122]:checked").val(),
	vq123 = $("input[name=q123]:checked").val(),
	vq124 = $("input[name=q124]:checked").val(),
	vq125 = $("input[name=q125]:checked").val(),
	vq126 = $("input[name=q126]:checked").val(),
	vq127 = $("input[name=q127]:checked").val(),
	vq128 = $("input[name=q128]:checked").val(),
	vq129 = $("input[name=q129]:checked").val(),
	vq130 = $("input[name=q130]:checked").val(),
	vq131 = $("input[name=q131]:checked").val(),
	vq132 = $("input[name=q132]:checked").val(),
	vq133 = $("input[name=q133]:checked").val(),
	vq134 = $("input[name=q134]:checked").val(),
	vq135 = $("input[name=q135]:checked").val(),
	vq136 = $("input[name=q136]:checked").val(),
	vq137 = $("input[name=q137]:checked").val(),
	vq138 = $("input[name=q138]:checked").val(),
	vq139 = $("input[name=q139]:checked").val(),
	vq140 = $("input[name=q140]:checked").val(),
	vq141 = $("input[name=q141]:checked").val(),
	vq142 = $("input[name=q142]:checked").val(),
	vq143 = $("input[name=q143]:checked").val(),
	vq144 = $("input[name=q144]:checked").val(),
	vq145 = $("input[name=q145]:checked").val(),
	vq146 = $("input[name=q146]:checked").val(),
	vq147 = $("input[name=q147]:checked").val(),
	vq148 = $("input[name=q148]:checked").val(),
	vq149 = $("input[name=q149]:checked").val(),
	vq150 = $("input[name=q150]:checked").val(),
	vq151 = $("input[name=q151]:checked").val(),
	vq152 = $("input[name=q152]:checked").val(),
	vq153 = $("input[name=q153]:checked").val(),
	vq154 = $("input[name=q154]:checked").val(),
	vq155 = $("input[name=q155]:checked").val(),
	vq156 = $("input[name=q156]:checked").val(),
	vq157 = $("input[name=q157]:checked").val(),
	vq158 = $("input[name=q158]:checked").val(),
	vq159 = $("input[name=q159]:checked").val(),
	vq160 = $("input[name=q160]:checked").val(),
	vq161 = $("input[name=q161]:checked").val(),
	vq162 = $("input[name=q162]:checked").val(),
	vq163 = $("input[name=q163]:checked").val(),
	vq164 = $("input[name=q164]:checked").val(),
	vq165 = $("input[name=q165]:checked").val(),
	vq166 = $("input[name=q166]:checked").val(),
	vq167 = $("input[name=q167]:checked").val(),
	vq168 = $("input[name=q168]:checked").val(),
	vq169 = $("input[name=q169]:checked").val(),
	vq170 = $("input[name=q170]:checked").val(),
	vq171 = $("input[name=q171]:checked").val(),
	vq172 = $("input[name=q172]:checked").val(),
	vq173 = $("input[name=q173]:checked").val(),
	vq174 = $("input[name=q174]:checked").val();

	if ((v1) && (v2) && (v3) && (v4) &&
		(vq1) && (vq2) && (vq3) && (vq4) && (vq5) && (vq6) && (vq7) && (vq8) && (vq9) && (vq10) && 
		(vq11) && (vq12) && (vq13) && (vq14) && (vq15) && (vq16) && (vq17) && (vq18) && (vq19) && (vq20) && 
		(vq21) && (vq22) && (vq23) && (vq24) && (vq25) && (vq26) && (vq27) && (vq28) && (vq29) && (vq30) &&
		(vq31) && (vq32) && (vq33) && (vq34) && (vq35) && (vq36) && (vq37) && (vq38) && (vq39) && (vq40) &&
		(vq41) && (vq42) && (vq43) && (vq44) && (vq45) && (vq46) && (vq47) && (vq48) && (vq49) && (vq50) &&
		(vq51) && (vq52) && (vq53) && (vq54) && (vq55) && (vq56) && (vq57) && (vq58) && (vq59) && (vq60) &&
		(vq61) && (vq62) && (vq63) && (vq64) && (vq65) && (vq66) && (vq67) && (vq68) && (vq69) && (vq70) &&
		(vq71) && (vq72) && (vq73) && (vq74) && (vq75) && (vq76) && (vq77) && (vq78) && (vq79) && (vq80) &&
		(vq81) && (vq82) && (vq83) && (vq84) && (vq85) && (vq86) && (vq87) && (vq88) && (vq89) && (vq90) &&
		(vq91) && (vq92) && (vq93) && (vq94) && (vq95) && (vq96) && (vq97) && (vq98) && (vq99) && (vq100) &&
		(vq101) && (vq102) && (vq103) && (vq104) && (vq105) && (vq106) && (vq107) && (vq108) && (vq109) && (vq110) &&
		(vq111) && (vq112) && (vq113) && (vq114) && (vq115) && (vq116) && (vq117) && (vq118) && (vq119) && (vq120) &&
		(vq121) && (vq122) && (vq123) && (vq124) && (vq125) && (vq126) && (vq127) && (vq128) && (vq129) && (vq130) &&
		(vq131) && (vq132) && (vq133) && (vq134) && (vq135) && (vq136) && (vq137) && (vq138) && (vq139) && (vq140) &&
		(vq141) && (vq142) && (vq143) && (vq144) && (vq145) && (vq146) && (vq147) && (vq148) && (vq149) && (vq150) &&
		(vq151) && (vq152) && (vq153) && (vq154) && (vq155) && (vq156) && (vq157) && (vq158) && (vq159) && (vq160) &&
		(vq161) && (vq162) && (vq163) && (vq164) && (vq165) && (vq166) && (vq167) && (vq168) && (vq169) && (vq170) &&
		(vq171) && (vq172) && (vq173) && (vq174)) {

			if ($("#test_submit").is(":hidden")) $("#test_submit").css("display", "block"); // Отображает кнопку "Продолжить"
		}

	if ((!v1) || (!v2) || (!v3)) {
		
		if ($("#test_submit").is(":visible")) $("#test_submit").css("display", "none"); // Скрывает кнопку "Продолжить"
	}
	
	if (vq174) { // Индикатор пропущенных вопросов 
		if (!vq1) $("#d1").addClass("error_designation"); // Добавляет класс ошибки при отсутствии значения
		else $("#d1").removeClass("error_designation");	// Убирает класс ошибки при наличии значения

		if (!vq2) $("#d2").addClass("error_designation");
		else $("#d2").removeClass("error_designation");

		if (!vq3) $("#d3").addClass("error_designation");
		else $("#d3").removeClass("error_designation");

		if (!vq4) $("#d4").addClass("error_designation");
		else $("#d4").removeClass("error_designation");

		if (!vq5) $("#d5").addClass("error_designation");
		else $("#d5").removeClass("error_designation");

		if ((!vq1) || (!vq2) || (!vq3) || (!vq4) || (!vq5)) $("#tab1").addClass("error_radio"); // Проверяет отсутствие значений
		else $("#tab1").removeClass("error_radio"); // Добавляет класс ошибки при отсутствии значений ко вкладке
		
		if (!vq6) $("#d6").addClass("error_designation");
		else $("#d6").removeClass("error_designation");

		if (!vq7) $("#d7").addClass("error_designation");
		else $("#d7").removeClass("error_designation");

		if (!vq8) $("#d8").addClass("error_designation");
		else $("#d8").removeClass("error_designation");

		if (!vq9) $("#d9").addClass("error_designation");
		else $("#d9").removeClass("error_designation");

		if (!vq10) $("#d10").addClass("error_designation");
		else $("#d10").removeClass("error_designation");
		
		if ((!vq6) || (!vq7) || (!vq8) || (!vq9) || (!vq10)) $("#tab2").addClass("error_radio"); 
		else $("#tab2").removeClass("error_radio"); 

		if (!vq11) $("#d11").addClass("error_designation");
		else $("#d11").removeClass("error_designation");

		if (!vq12) $("#d12").addClass("error_designation");
		else $("#d12").removeClass("error_designation");

		if (!vq13) $("#d13").addClass("error_designation");
		else $("#d13").removeClass("error_designation");

		if (!vq14) $("#d14").addClass("error_designation");
		else $("#d14").removeClass("error_designation");

		if (!vq15) $("#d15").addClass("error_designation");
		else $("#d15").removeClass("error_designation");

		if ((!vq11) || (!vq12) || (!vq13) || (!vq14) || (!vq15)) $("#tab3").addClass("error_radio"); 
		else $("#tab3").removeClass("error_radio"); 

		if (!vq16) $("#d16").addClass("error_designation");
		else $("#d16").removeClass("error_designation");

		if (!vq17) $("#d17").addClass("error_designation");
		else $("#d17").removeClass("error_designation");

		if (!vq18) $("#d18").addClass("error_designation");
		else $("#d18").removeClass("error_designation");

		if (!vq19) $("#d19").addClass("error_designation");
		else $("#d19").removeClass("error_designation");

		if (!vq20) $("#d20").addClass("error_designation");
		else $("#d20").removeClass("error_designation");

		if ((!vq16) || (!vq17) || (!vq18) || (!vq19) || (!vq20)) $("#tab4").addClass("error_radio"); 
		else $("#tab4").removeClass("error_radio"); 

		if (!vq21) $("#d21").addClass("error_designation");
		else $("#d21").removeClass("error_designation");

		if (!vq22) $("#d22").addClass("error_designation");
		else $("#d22").removeClass("error_designation");

		if (!vq23) $("#d23").addClass("error_designation");
		else $("#d23").removeClass("error_designation");

		if (!vq24) $("#d24").addClass("error_designation");
		else $("#d24").removeClass("error_designation");

		if (!vq25) $("#d25").addClass("error_designation");
		else $("#d25").removeClass("error_designation");

		if ((!vq21) || (!vq22) || (!vq23) || (!vq24) || (!vq25)) $("#tab5").addClass("error_radio"); 
		else $("#tab5").removeClass("error_radio"); 

		if (!vq26) $("#d26").addClass("error_designation");
		else $("#d26").removeClass("error_designation");

		if (!vq27) $("#d27").addClass("error_designation");
		else $("#d27").removeClass("error_designation");

		if (!vq28) $("#d28").addClass("error_designation");
		else $("#d28").removeClass("error_designation");

		if (!vq29) $("#d29").addClass("error_designation");
		else $("#d29").removeClass("error_designation");

		if (!vq30) $("#d30").addClass("error_designation");
		else $("#d30").removeClass("error_designation");

		if ((!vq26) || (!vq27) || (!vq28) || (!vq29) || (!vq30)) $("#tab6").addClass("error_radio"); 
		else $("#tab6").removeClass("error_radio"); 

		if (!vq31) $("#d31").addClass("error_designation");
		else $("#d31").removeClass("error_designation");

		if (!vq32) $("#d32").addClass("error_designation");
		else $("#d32").removeClass("error_designation");

		if (!vq33) $("#d33").addClass("error_designation");
		else $("#d33").removeClass("error_designation");

		if (!vq34) $("#d34").addClass("error_designation");
		else $("#d34").removeClass("error_designation");

		if (!vq35) $("#d35").addClass("error_designation");
		else $("#d35").removeClass("error_designation");

		if ((!vq31) || (!vq32) || (!vq33) || (!vq34) || (!vq35)) $("#tab7").addClass("error_radio"); 
		else $("#tab7").removeClass("error_radio"); 

		if (!vq36) $("#d36").addClass("error_designation");
		else $("#d36").removeClass("error_designation");

		if (!vq37) $("#d37").addClass("error_designation");
		else $("#d37").removeClass("error_designation");

		if (!vq38) $("#d38").addClass("error_designation");
		else $("#d38").removeClass("error_designation");

		if (!vq39) $("#d39").addClass("error_designation");
		else $("#d39").removeClass("error_designation");

		if (!vq40) $("#d40").addClass("error_designation");
		else $("#d40").removeClass("error_designation");

		if ((!vq36) || (!vq37) || (!vq38) || (!vq39) || (!vq40)) $("#tab8").addClass("error_radio"); 
		else $("#tab8").removeClass("error_radio"); 

		if (!vq41) $("#d41").addClass("error_designation");
		else $("#d41").removeClass("error_designation");

		if (!vq42) $("#d42").addClass("error_designation");
		else $("#d42").removeClass("error_designation");

		if (!vq43) $("#d43").addClass("error_designation");
		else $("#d43").removeClass("error_designation");

		if (!vq44) $("#d44").addClass("error_designation");
		else $("#d44").removeClass("error_designation");

		if (!vq45) $("#d45").addClass("error_designation");
		else $("#d45").removeClass("error_designation");

		if ((!vq41) || (!vq42) || (!vq43) || (!vq44) || (!vq45)) $("#tab9").addClass("error_radio"); 
		else $("#tab9").removeClass("error_radio"); 

		if (!vq46) $("#d46").addClass("error_designation");
		else $("#d46").removeClass("error_designation");

		if (!vq47) $("#d47").addClass("error_designation");
		else $("#d47").removeClass("error_designation");

		if (!vq48) $("#d48").addClass("error_designation");
		else $("#d48").removeClass("error_designation");

		if (!vq49) $("#d49").addClass("error_designation");
		else $("#d49").removeClass("error_designation");

		if (!vq50) $("#d50").addClass("error_designation");
		else $("#d50").removeClass("error_designation");

		if ((!vq46) || (!vq47) || (!vq48) || (!vq49) || (!vq50)) $("#tab10").addClass("error_radio"); 
		else $("#tab10").removeClass("error_radio"); 

		if (!vq51) $("#d51").addClass("error_designation");
		else $("#d51").removeClass("error_designation");

		if (!vq52) $("#d52").addClass("error_designation");
		else $("#d52").removeClass("error_designation");

		if (!vq53) $("#d53").addClass("error_designation");
		else $("#d53").removeClass("error_designation");

		if (!vq54) $("#d54").addClass("error_designation");
		else $("#d54").removeClass("error_designation");

		if (!vq55) $("#d55").addClass("error_designation");
		else $("#d55").removeClass("error_designation");

		if ((!vq51) || (!vq52) || (!vq53) || (!vq54) || (!vq55)) $("#tab11").addClass("error_radio"); 
		else $("#tab11").removeClass("error_radio"); 

		if (!vq56) $("#d56").addClass("error_designation");
		else $("#d56").removeClass("error_designation");

		if (!vq57) $("#d57").addClass("error_designation");
		else $("#d57").removeClass("error_designation");

		if (!vq58) $("#d58").addClass("error_designation");
		else $("#d58").removeClass("error_designation");

		if (!vq59) $("#d59").addClass("error_designation");
		else $("#d59").removeClass("error_designation");

		if (!vq60) $("#d60").addClass("error_designation");
		else $("#d60").removeClass("error_designation");

		if ((!vq56) || (!vq57) || (!vq58) || (!vq59) || (!vq60)) $("#tab12").addClass("error_radio"); 
		else $("#tab12").removeClass("error_radio"); 

		if (!vq61) $("#d61").addClass("error_designation");
		else $("#d61").removeClass("error_designation");

		if (!vq62) $("#d62").addClass("error_designation");
		else $("#d62").removeClass("error_designation");

		if (!vq63) $("#d63").addClass("error_designation");
		else $("#d63").removeClass("error_designation");

		if (!vq64) $("#d64").addClass("error_designation");
		else $("#d64").removeClass("error_designation");

		if (!vq65) $("#d65").addClass("error_designation");
		else $("#d65").removeClass("error_designation");

		if ((!vq61) || (!vq62) || (!vq63) || (!vq64) || (!vq65)) $("#tab13").addClass("error_radio"); 
		else $("#tab13").removeClass("error_radio"); 

		if (!vq66) $("#d66").addClass("error_designation");
		else $("#d66").removeClass("error_designation");

		if (!vq67) $("#d67").addClass("error_designation");
		else $("#d67").removeClass("error_designation");

		if (!vq68) $("#d68").addClass("error_designation");
		else $("#d68").removeClass("error_designation");

		if (!vq69) $("#d69").addClass("error_designation");
		else $("#d69").removeClass("error_designation");

		if (!vq70) $("#d70").addClass("error_designation");
		else $("#d70").removeClass("error_designation");

		if ((!vq66) || (!vq67) || (!vq68) || (!vq69) || (!vq70)) $("#tab14").addClass("error_radio"); 
		else $("#tab14").removeClass("error_radio"); 

		if (!vq71) $("#d71").addClass("error_designation");
		else $("#d71").removeClass("error_designation");

		if (!vq72) $("#d72").addClass("error_designation");
		else $("#d72").removeClass("error_designation");

		if (!vq73) $("#d73").addClass("error_designation");
		else $("#d73").removeClass("error_designation");

		if (!vq74) $("#d74").addClass("error_designation");
		else $("#d74").removeClass("error_designation");

		if (!vq75) $("#d75").addClass("error_designation");
		else $("#d75").removeClass("error_designation");

		if ((!vq71) || (!vq72) || (!vq73) || (!vq74) || (!vq75)) $("#tab15").addClass("error_radio"); 
		else $("#tab15").removeClass("error_radio"); 

		if (!vq76) $("#d76").addClass("error_designation");
		else $("#d76").removeClass("error_designation");

		if (!vq77) $("#d77").addClass("error_designation");
		else $("#d77").removeClass("error_designation");

		if (!vq78) $("#d78").addClass("error_designation");
		else $("#d78").removeClass("error_designation");

		if (!vq79) $("#d79").addClass("error_designation");
		else $("#d79").removeClass("error_designation");

		if (!vq80) $("#d80").addClass("error_designation");
		else $("#d80").removeClass("error_designation");

		if ((!vq76) || (!vq77) || (!vq78) || (!vq79) || (!vq80)) $("#tab16").addClass("error_radio"); 
		else $("#tab16").removeClass("error_radio"); 

		if (!vq81) $("#d81").addClass("error_designation");
		else $("#d81").removeClass("error_designation");

		if (!vq82) $("#d82").addClass("error_designation");
		else $("#d82").removeClass("error_designation");

		if (!vq83) $("#d83").addClass("error_designation");
		else $("#d83").removeClass("error_designation");

		if (!vq84) $("#d84").addClass("error_designation");
		else $("#d84").removeClass("error_designation");

		if (!vq85) $("#d85").addClass("error_designation");
		else $("#d85").removeClass("error_designation");

		if ((!vq81) || (!vq82) || (!vq83) || (!vq84) || (!vq85)) $("#tab17").addClass("error_radio"); 
		else $("#tab17").removeClass("error_radio"); 

		if (!vq86) $("#d86").addClass("error_designation");
		else $("#d86").removeClass("error_designation");

		if (!vq87) $("#d87").addClass("error_designation");
		else $("#d87").removeClass("error_designation");

		if (!vq88) $("#d88").addClass("error_designation");
		else $("#d88").removeClass("error_designation");

		if (!vq89) $("#d89").addClass("error_designation");
		else $("#d89").removeClass("error_designation");

		if (!vq90) $("#d90").addClass("error_designation");
		else $("#d90").removeClass("error_designation");

		if ((!vq86) || (!vq87) || (!vq88) || (!vq89) || (!vq90)) $("#tab18").addClass("error_radio"); 
		else $("#tab18").removeClass("error_radio"); 

		if (!vq91) $("#d91").addClass("error_designation");
		else $("#d91").removeClass("error_designation");

		if (!vq92) $("#d92").addClass("error_designation");
		else $("#d92").removeClass("error_designation");

		if (!vq93) $("#d93").addClass("error_designation");
		else $("#d93").removeClass("error_designation");

		if (!vq94) $("#d94").addClass("error_designation");
		else $("#d94").removeClass("error_designation");

		if (!vq95) $("#d95").addClass("error_designation");
		else $("#d95").removeClass("error_designation");

		if ((!vq91) || (!vq92) || (!vq93) || (!vq94) || (!vq95)) $("#tab19").addClass("error_radio"); 
		else $("#tab19").removeClass("error_radio"); 

		if (!vq96) $("#d96").addClass("error_designation");
		else $("#d96").removeClass("error_designation");

		if (!vq97) $("#d97").addClass("error_designation");
		else $("#d97").removeClass("error_designation");

		if (!vq98) $("#d98").addClass("error_designation");
		else $("#d98").removeClass("error_designation");

		if (!vq99) $("#d99").addClass("error_designation");
		else $("#d99").removeClass("error_designation");

		if (!vq100) $("#d100").addClass("error_designation");
		else $("#d100").removeClass("error_designation");

		if ((!vq96) || (!vq97) || (!vq98) || (!vq99) || (!vq100)) $("#tab20").addClass("error_radio"); 
		else $("#tab20").removeClass("error_radio"); 

		if (!vq101) $("#d101").addClass("error_designation");
		else $("#d101").removeClass("error_designation");

		if (!vq102) $("#d102").addClass("error_designation");
		else $("#d102").removeClass("error_designation");

		if (!vq103) $("#d103").addClass("error_designation");
		else $("#d103").removeClass("error_designation");

		if (!vq104) $("#d104").addClass("error_designation");
		else $("#d104").removeClass("error_designation");

		if (!vq105) $("#d105").addClass("error_designation");
		else $("#d105").removeClass("error_designation");

		if ((!vq101) || (!vq102) || (!vq103) || (!vq104) || (!vq105)) $("#tab21").addClass("error_radio"); 
		else $("#tab21").removeClass("error_radio"); 

		if (!vq106) $("#d106").addClass("error_designation");
		else $("#d106").removeClass("error_designation");

		if (!vq107) $("#d107").addClass("error_designation");
		else $("#d107").removeClass("error_designation");

		if (!vq108) $("#d108").addClass("error_designation");
		else $("#d108").removeClass("error_designation");

		if (!vq109) $("#d109").addClass("error_designation");
		else $("#d109").removeClass("error_designation");

		if (!vq110) $("#d110").addClass("error_designation");
		else $("#d110").removeClass("error_designation");

		if ((!vq106) || (!vq107) || (!vq108) || (!vq109) || (!vq110)) $("#tab22").addClass("error_radio"); 
		else $("#tab22").removeClass("error_radio"); 

		if (!vq111) $("#d111").addClass("error_designation");
		else $("#d111").removeClass("error_designation");

		if (!vq112) $("#d112").addClass("error_designation");
		else $("#d112").removeClass("error_designation");

		if (!vq113) $("#d113").addClass("error_designation");
		else $("#d113").removeClass("error_designation");

		if (!vq114) $("#d114").addClass("error_designation");
		else $("#d114").removeClass("error_designation");

		if (!vq115) $("#d115").addClass("error_designation");
		else $("#d115").removeClass("error_designation");

		if ((!vq111) || (!vq112) || (!vq113) || (!vq114) || (!vq115)) $("#tab23").addClass("error_radio"); 
		else $("#tab23").removeClass("error_radio"); 

		if (!vq116) $("#d116").addClass("error_designation");
		else $("#d116").removeClass("error_designation");

		if (!vq117) $("#d117").addClass("error_designation");
		else $("#d117").removeClass("error_designation");

		if (!vq118) $("#d118").addClass("error_designation");
		else $("#d118").removeClass("error_designation");

		if (!vq119) $("#d119").addClass("error_designation");
		else $("#d119").removeClass("error_designation");

		if (!vq120) $("#d120").addClass("error_designation");
		else $("#d120").removeClass("error_designation");

		if ((!vq116) || (!vq117) || (!vq118) || (!vq119) || (!vq120)) $("#tab24").addClass("error_radio"); 
		else $("#tab24").removeClass("error_radio"); 

		if (!vq121) $("#d121").addClass("error_designation");
		else $("#d121").removeClass("error_designation");

		if (!vq122) $("#d122").addClass("error_designation");
		else $("#d122").removeClass("error_designation");

		if (!vq123) $("#d123").addClass("error_designation");
		else $("#d123").removeClass("error_designation");

		if (!vq124) $("#d124").addClass("error_designation");
		else $("#d124").removeClass("error_designation");

		if (!vq125) $("#d125").addClass("error_designation");
		else $("#d125").removeClass("error_designation");

		if ((!vq121) || (!vq122) || (!vq123) || (!vq124) || (!vq125)) $("#tab25").addClass("error_radio"); 
		else $("#tab25").removeClass("error_radio"); 

		if (!vq126) $("#d126").addClass("error_designation");
		else $("#d126").removeClass("error_designation");

		if (!vq127) $("#d127").addClass("error_designation");
		else $("#d127").removeClass("error_designation");

		if (!vq128) $("#d128").addClass("error_designation");
		else $("#d128").removeClass("error_designation");

		if (!vq129) $("#d129").addClass("error_designation");
		else $("#d129").removeClass("error_designation");

		if (!vq130) $("#d130").addClass("error_designation");
		else $("#d130").removeClass("error_designation");

		if ((!vq126) || (!vq127) || (!vq128) || (!vq129) || (!vq130)) $("#tab26").addClass("error_radio"); 
		else $("#tab26").removeClass("error_radio"); 

		if (!vq131) $("#d131").addClass("error_designation");
		else $("#d131").removeClass("error_designation");

		if (!vq132) $("#d132").addClass("error_designation");
		else $("#d132").removeClass("error_designation");

		if (!vq133) $("#d133").addClass("error_designation");
		else $("#d133").removeClass("error_designation");

		if (!vq134) $("#d134").addClass("error_designation");
		else $("#d134").removeClass("error_designation");

		if (!vq135) $("#d135").addClass("error_designation");
		else $("#d135").removeClass("error_designation");

		if ((!vq131) || (!vq132) || (!vq133) || (!vq134) || (!vq135)) $("#tab27").addClass("error_radio"); 
		else $("#tab27").removeClass("error_radio"); 

		if (!vq136) $("#d136").addClass("error_designation");
		else $("#d136").removeClass("error_designation");

		if (!vq137) $("#d137").addClass("error_designation");
		else $("#d137").removeClass("error_designation");

		if (!vq138) $("#d138").addClass("error_designation");
		else $("#d139").removeClass("error_designation");

		if (!vq139) $("#d139").addClass("error_designation");
		else $("#d139").removeClass("error_designation");

		if (!vq140) $("#d140").addClass("error_designation");
		else $("#d140").removeClass("error_designation");

		if ((!vq136) || (!vq137) || (!vq138) || (!vq139) || (!vq140)) $("#tab28").addClass("error_radio"); 
		else $("#tab28").removeClass("error_radio");

		if (!vq141) $("#d141").addClass("error_designation");
		else $("#d141").removeClass("error_designation");

		if (!vq142) $("#d142").addClass("error_designation");
		else $("#d142").removeClass("error_designation");

		if (!vq143) $("#d143").addClass("error_designation");
		else $("#d143").removeClass("error_designation");

		if (!vq144) $("#d144").addClass("error_designation");
		else $("#d144").removeClass("error_designation");

		if (!vq145) $("#d145").addClass("error_designation");
		else $("#d145").removeClass("error_designation");

		if ((!vq141) || (!vq142) || (!vq143) || (!vq144) || (!vq145)) $("#tab29").addClass("error_radio"); 
		else $("#tab29").removeClass("error_radio"); 

		if (!vq146) $("#d146").addClass("error_designation");
		else $("#d146").removeClass("error_designation");

		if (!vq147) $("#d147").addClass("error_designation");
		else $("#d147").removeClass("error_designation");

		if (!vq148) $("#d148").addClass("error_designation");
		else $("#d148").removeClass("error_designation");

		if (!vq149) $("#d149").addClass("error_designation");
		else $("#d149").removeClass("error_designation");

		if (!vq150) $("#d150").addClass("error_designation");
		else $("#d150").removeClass("error_designation");

		if ((!vq146) || (!vq147) || (!vq148) || (!vq149) || (!vq150)) $("#tab30").addClass("error_radio"); 
		else $("#tab30").removeClass("error_radio"); 

		if (!vq151) $("#d151").addClass("error_designation");
		else $("#d151").removeClass("error_designation");

		if (!vq152) $("#d152").addClass("error_designation");
		else $("#d152").removeClass("error_designation");

		if (!vq153) $("#d153").addClass("error_designation");
		else $("#d153").removeClass("error_designation");

		if (!vq154) $("#d154").addClass("error_designation");
		else $("#d154").removeClass("error_designation");

		if (!vq155) $("#d155").addClass("error_designation");
		else $("#d155").removeClass("error_designation");

		if ((!vq151) || (!vq152) || (!vq153) || (!vq154) || (!vq155)) $("#tab31").addClass("error_radio"); 
		else $("#tab31").removeClass("error_radio"); 

		if (!vq156) $("#d156").addClass("error_designation");
		else $("#d156").removeClass("error_designation");

		if (!vq157) $("#d157").addClass("error_designation");
		else $("#d157").removeClass("error_designation");

		if (!vq158) $("#d158").addClass("error_designation");
		else $("#d158").removeClass("error_designation");

		if (!vq159) $("#d159").addClass("error_designation");
		else $("#d159").removeClass("error_designation");

		if (!vq160) $("#d160").addClass("error_designation");
		else $("#d160").removeClass("error_designation");

		if ((!vq156) || (!vq157) || (!vq158) || (!vq159) || (!vq160)) $("#tab32").addClass("error_radio"); 
		else $("#tab32").removeClass("error_radio");

		if (!vq161) $("#d161").addClass("error_designation");
		else $("#d161").removeClass("error_designation");

		if (!vq162) $("#d162").addClass("error_designation");
		else $("#d162").removeClass("error_designation");

		if (!vq163) $("#d163").addClass("error_designation");
		else $("#d163").removeClass("error_designation");

		if (!vq164) $("#d164").addClass("error_designation");
		else $("#d164").removeClass("error_designation");

		if (!vq165) $("#d165").addClass("error_designation");
		else $("#d165").removeClass("error_designation");

		if ((!vq161) || (!vq162) || (!vq163) || (!vq164) || (!vq165)) $("#tab33").addClass("error_radio"); 
		else $("#tab33").removeClass("error_radio");  

		if (!vq166) $("#d166").addClass("error_designation");
		else $("#d166").removeClass("error_designation");

		if (!vq167) $("#d167").addClass("error_designation");
		else $("#d167").removeClass("error_designation");

		if (!vq168) $("#d168").addClass("error_designation");
		else $("#d168").removeClass("error_designation");

		if (!vq169) $("#d169").addClass("error_designation");
		else $("#d169").removeClass("error_designation");

		if (!vq170) $("#d170").addClass("error_designation");
		else $("#d170").removeClass("error_designation");

		if ((!vq166) || (!vq167) || (!vq168) || (!vq169) || (!vq170)) $("#tab34").addClass("error_radio"); 
		else $("#tab34").removeClass("error_radio"); 

		if (!vq171) $("#d171").addClass("error_designation");
		else $("#d171").removeClass("error_designation");

		if (!vq172) $("#d172").addClass("error_designation");
		else $("#d172").removeClass("error_designation");

		if (!vq173) $("#d173").addClass("error_designation");
		else $("#d173").removeClass("error_designation");

		if (!vq174) $("#d174").addClass("error_designation");
		else $("#d174").removeClass("error_designation");

		if ((!vq171) || (!vq172) || (!vq173) || (!vq174)) $("#tab35").addClass("error_radio"); 
		else $("#tab35").removeClass("error_radio"); 
	};
});