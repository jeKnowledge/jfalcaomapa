function appMain() {




$('#welcomeScreen').click(function() {
  $('#menu').hide();
  $('#welcomeScreen').slideUp('slow', function(){
    $('#welcomeScreen').hide();
  });
  $('#mainView').show();
  console.log("Welcome Screen swiped up")
});
console.log("ready!");
  /*$(document).on("tap",function(){
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();

  });

  //$(document.body).on("swipeup",function(){
  //$('#welcomeScreen').on("swipeup",function(){
  $(document.body).click(function () {
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();
    $('#menu').hide();
  });


*/
  $('#btnMenu').click(function () {


    if ($('#menu').is(':visible')) {
      $('#menu').hide('slow');
      $('#optionRow').fadeOut('fast');
      $('#menuQuestion').fadeOut('fast');

    //  $('#btnMenu').show();
   }
   else{
    $('#menu').show('slow');
    setTimeout(function(){
      $('#optionRow').fadeIn('slow');
      $('#menuQuestion').fadeIn('slow');
    },150);

//    $('#btnMenu').hide();
  };
});


/*  $('#menu').on("swipedown",function(){
    $('#menu').slideToggle('slow');
  })
}
*/
}

$(document).ready(appMain);
