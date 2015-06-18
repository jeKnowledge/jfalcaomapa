function appMain() {
  $(document.body).click(function () {
    $('#welcomeScreen').slideUp('slow');
    $('#mainView').show();
  });


  $('#btnMenu').click(function () {
    $('#menu').show('slow');
  });
}

$(document).ready(appMain);
