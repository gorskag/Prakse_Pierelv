$(document).ready(function() {
    // Toggle footer_map
    $("#footer_contacts_map").click(function() {
        if($('#footer_map').css('display') == 'none') {
            $("#footer_map").fadeIn(100);
        } else {
            $("#footer_map").fadeOut(100);
        }
    });

});