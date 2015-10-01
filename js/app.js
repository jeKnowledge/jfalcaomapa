var idleTime = 0;

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
      $('#btnMenu').show('fast');
    },50);
  });
}



//=======================================//
//IdleTimer
//======================================//
var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });


function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2) { // 20 minutes
        window.location.reload();
    }
}


$(document).ready(appMain);
