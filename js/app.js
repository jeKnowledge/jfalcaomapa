function appMain() {


/*  $(document).on("tap",function(){
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();

  }); */

  $('#welcomeScreen').on("swipeup",function(){
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();
    $('#menu').hide();
  });



  $('#btnMenu').click(function () {
    $('#menu').slideToggle('slow');
  });


  $('#menu').on("swipedown",function(){
    $('#menu').slideToggle('slow');
  })
}


$(document).ready(appMain);
