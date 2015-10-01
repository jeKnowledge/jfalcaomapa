function appMain() {



  $('#welcomeScreen').click(function() {
  $('#menu').hide();
  $('#welcomeScreen').slideUp('slow', function(){
  $('#welcomeScreen').hide();
});
$('#mainView').show();
console.log("Welcome Screen swiped up")
}).children().find(".bss-prev, .bss-next").click(function(e) {
  return false;
});
console.log("ready!");


  $('#welcomeScreen').on("swipeup",function(){
    $('#menu').hide();
    $('#welcomeScreen').slideUp('slow', function(){
      $('#welcomeScreen').hide();
    });
    $('#mainView').show();
    console.log("Welcome Screen swiped up")
  });

//==========================================//
//==========================================//


  $('#btnMenu').click(function () {

    if ($('#menu').is(':visible')) {
      $('#menu').hide('slow');
      $('#optionRow').fadeOut('fast');
      $('#menuQuestion').fadeOut('fast');
    }
    else{
      $('#menu').show('slow');
      setTimeout(function(){
        $('#optionRow').fadeIn('slow');
        $('#menuQuestion').fadeIn('slow');
      },150);
      $('#btnMenu').hide();
    };
  });


//==========================================//
//addsSwipeDown function to menu
//==========================================//

  $('#menu').on("swipedown",function(){
    $('#menu').hide('slow');
    $('#optionRow').fadeOut('fast');
    $('#menuQuestion').fadeOut('fast');
    setTimeout(function(){
      $('#btnMenu').show('slow');
    },200);
  });
}


$(document).ready(appMain);
