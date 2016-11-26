$(document).ready(function() {
    $('.collapsible').collapsible();
    $('.collapsible-header').on('click', function() {
        if ($(this).hasClass('banane')) {
            if ($(this).parent().parent().parent().parent().children().first().hasClass('hide')) {
                $(this).parent().parent().parent().addClass('s5').removeClass('s10');
                $(this).parent().parent().parent().parent().children().first().removeClass('hide');
            } else {
                $(this).parent().parent().parent().removeClass('s5').addClass('s10');
                $(this).parent().parent().parent().parent().children().first().addClass('hide');
            }
        } else {
            if ($(this).parent().parent().parent().parent().children().last().hasClass('hide')) {
                $(this).parent().parent().parent().addClass('s5').removeClass('s10');
                $(this).parent().parent().parent().parent().children().last().removeClass('hide');
            } else {
                $(this).parent().parent().parent().removeClass('s5').addClass('s10');
                $(this).parent().parent().parent().parent().children().last().addClass('hide');
            }
        }
    });
});
