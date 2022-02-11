
$(".btn").click(function(){
    $("html, body").animate({scrollTop: $("header").height()+ 1800 },"slow");
    var valPlaces = $('select.places option:checked').val()
    $('#check-holder').text(valPlaces);
});

// var valPlaces =    $('select.places option:checked').val()
// $('#check-holder').text(valPlaces);

// var valCheckIn =    $('input.check-in option:checked').val()
// $('#check-holder').text(valCheckIn);

// var valCheckOut =    $('input.check-out option:checked').val()
// $('#check-holder').text(valCheckOut);

// var valRooms =    $('select.rooms option:checked').val()
// $('#check-holder').text(valRooms);