$(document).ready(function() {
    // Toggle footer_map
    $("#footer_contacts_map").click(function() {
        if($('#footer_map').css('display') == 'none') {
            $("#footer_map").fadeIn(100);
        } else {
            $("#footer_map").fadeOut(100);
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

});

document.querySelectorAll('details').forEach((card,_,A)=>{
    card.ontoggle = _ =>{ 
        if(card.open) A.forEach(card_d =>{ 
            if(card_d!=card) card_d.open=false 
        })
    }
});
