$(document).ready(function() {
    // Toggle footer_map
    $("#footer_contacts_map").click(function() {
        if($('#footer_map').css('display') == 'none') {
            $("#footer_map").fadeIn(100);
        } else {
            $("#footer_map").fadeOut(100);
        }
    });

    // $('li').click(function(){
    //     $('li').removeClass("active");
    //     $(this).addClass("active");
    // });
});

document.querySelectorAll('details').forEach((card,_,A)=>{
    card.ontoggle = _ =>{ 
        if(card.open) A.forEach(card_d =>{ 
            if(card_d!=card) card_d.open=false 
        })
    }
});