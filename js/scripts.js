
$(".btn").click(function(){
    $("html, body").animate({scrollTop: $("header").height()+ 1800 },"slow");
    
    var valPlaces =    $('select[value="places"]').val()
    $('#check-holder1').text(valPlaces);

    var valCheckIn =    $('input[value="check-in"]').val()
    $('#check-holder2').text(valCheckIn);

    var valCheckOut =    $('input[value="check-out"]').val()
    $('#check-holder3').text(valCheckOut);

    var valRooms =    $('select[value="rooms"]').val()
    $('#check-holder4').text(valRooms);
});

// var valPlaces =    $('select.places option:checked').val()
// $('#check-holder').text(valPlaces);

// var valCheckIn =    $('input.check-in option:checked').val()
// $('#check-holder').text(valCheckIn);

// var valCheckOut =    $('input.check-out option:checked').val()
// $('#check-holder').text(valCheckOut);

// var valRooms =    $('select.rooms option:checked').val()
// $('#check-holder').text(valRooms);