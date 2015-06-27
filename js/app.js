function appMain() {


/*  $(document).on("tap",function(){
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();

  }); */

  $(document.body).on("swipeup",function(){
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();
  });

  $('#btnMenu').click(function () {
    $('#menu').show('slow');
  });
}

$(document).ready(appMain);
