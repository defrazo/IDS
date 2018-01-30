$(function () { //Инициализирует подсказку
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function() { //Отображает подсказку
    $(function() {
        $("[data-tooltip]").mousemove(function(eventObject) {
            $data_tooltip = $(this).attr("data-tooltip");
            $("#replaceble_block").hide();
            $("#tooltip").text($data_tooltip).show();
        }).mouseout(function() {
            $("#replaceble_block").show();
            $("#tooltip").hide().text("")
        });
    });
});