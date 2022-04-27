$(document).ready(function() {
    //--- Toggle footer_map
    $("#footer_contacts_map").click(function() {
        if($('#footer_map').css('display') == 'none') {
            $("#footer_map").fadeIn(150);
        } else {
            $("#footer_map").fadeOut(150);
        }
    });

    //--- Toggle mentor blocks
    $('input[name="mentor"]').click(function () {
        $('.mentor_widgets_wrapper').removeClass('mentor_widget_first');
        $('.mentor_widgets_wrapper').removeClass('mentor_widget_second');
        $('.mentor_widgets_wrapper').removeClass('mentor_widget_third');

        if ($(this).attr("value") == "mentor_1") {
            $('.mentor_widgets_wrapper:nth-of-type(1)').addClass('mentor_widget_first');
            $('.mentor_widgets_wrapper:nth-of-type(2)').addClass('mentor_widget_second');
            $('.mentor_widgets_wrapper:nth-of-type(3)').addClass('mentor_widget_third');
        }
        if ($(this).attr("value") == "mentor_2") {
            $('.mentor_widgets_wrapper:nth-of-type(2)').addClass('mentor_widget_first');
            $('.mentor_widgets_wrapper:nth-of-type(3)').addClass('mentor_widget_second');
            $('.mentor_widgets_wrapper:nth-of-type(1)').addClass('mentor_widget_third');
        }
        if ($(this).attr("value") == "mentor_3") {
            $('.mentor_widgets_wrapper:nth-of-type(3)').addClass('mentor_widget_first');
            $('.mentor_widgets_wrapper:nth-of-type(1)').addClass('mentor_widget_second');
            $('.mentor_widgets_wrapper:nth-of-type(2)').addClass('mentor_widget_third');
        }
    });

    //--- Toggle students blocks
    $('input[name="student"]').click(function () {
        if ($(this).attr("value") == "student_1") {
            $('.students_row').removeClass('active_students_block');
            $('.students_row:nth-of-type(1)').addClass('active_students_block');
        }
        if ($(this).attr("value") == "student_2") {
            $('.students_row').removeClass('active_students_block');
            $('.students_row:nth-of-type(2)').addClass('active_students_block');
        }
        if ($(this).attr("value") == "student_3") {
            $('.students_row').removeClass('active_students_block');
            $('.students_row:nth-of-type(3)').addClass('active_students_block');
        }
    });

    //--- Toggle team blocks
    $('input[name="graduate"]').click(function () {
        $('.graduates_block').removeClass('active_graduates_block');

        if ($(this).attr("value") == "graduate_1") {
            $('.graduates_block:nth-of-type(1)').addClass('active_graduates_block');
        }
        if ($(this).attr("value") == "graduate_2") {
            $('.graduates_block:nth-of-type(2)').addClass('active_graduates_block');
        }
        if ($(this).attr("value") == "graduate_3") {
            $('.graduates_block:nth-of-type(3)').addClass('active_graduates_block');
        }
    }); 

    //--- Toggle portfolio blocks
    $('input[name="portfolio"]').click(function () {
        $('.portfolio_card').removeClass('active_card');

        if ($(this).attr("value") == "portfolio_1") {
            $('.portfolio_card:nth-of-type(1)').addClass('active_card');
        }
        if ($(this).attr("value") == "portfolio_2") {
            $('.portfolio_card:nth-of-type(2)').addClass('active_card');
        }
        if ($(this).attr("value") == "portfolio_3") {
            $('.portfolio_card:nth-of-type(3)').addClass('active_card');
        }
    });

    //--- Toggle between bootcamp process sub-lists arrow
    var $bootcamp_process = $('.flex_block_ol');
    $bootcamp_process.click(function(){
        $bootcamp_process.removeClass('active_block');
        $(this).addClass('active_block');
    });

    // -- Toggle between bootcamp process sub-lists
    var $bootcamp_first_block = $('#first_active_block');
    var $bootcamp_first_sublist = $('#first_active_sublist');

    var $bootcamp_second_block = $('#second_active_block');
    var $bootcamp_second_sublist = $('#second_active_sublist');

    var $bootcamp_third_block = $('#third_active_block');
    var $bootcamp_third_sublist = $('#third_active_sublist');

    var $bootcamp_sublists = $('.grid_2');

    $bootcamp_first_block.click(function(){
        $bootcamp_sublists.removeClass('active_sublist');
        $bootcamp_first_sublist.addClass('active_sublist');
    });

    $bootcamp_second_block.click(function(){
        $bootcamp_sublists.removeClass('active_sublist');
        $bootcamp_second_sublist.addClass('active_sublist');
    });

    $bootcamp_third_block.click(function(){
        $bootcamp_sublists.removeClass('active_sublist');
        $bootcamp_third_sublist.addClass('active_sublist');
    });

    //--- Toggle team blocks
    $('input[name="team"]').click(function () {
        if ($(this).attr("value") == "team_1") {
            $('.team_block').removeClass('active_team_block');
            $('.team_block:nth-of-type(1)').addClass('active_team_block');
        }
        if ($(this).attr("value") == "team_2") {
            $('.team_block').removeClass('active_team_block');
            $('.team_block:nth-of-type(2)').addClass('active_team_block');
        }
        if ($(this).attr("value") == "team_3") {
            $('.team_block').removeClass('active_team_block');
            $('.team_block:nth-of-type(3)').addClass('active_team_block');
        }
    });    

});

//-- Toggle details cards
// document.querySelectorAll('details').forEach((card,_,A)=>{
//     card.ontoggle = _ =>{ 
//         if(card.open) A.forEach(card_d =>{ 
//             if(card_d!=card) card_d.open=false 
//         })
//     }
// });
