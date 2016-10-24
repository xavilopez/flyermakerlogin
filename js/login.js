$(document).ready(function(){
  $("#inputUser").val('');
  $("#inputPass").val('');

  $("#btnLogin").on('click', function(){
      login();
  });

  $("#inputUser").keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode ==13){
      $("#inputPass").focus();
    }
  });

  $("#inputPass").keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode ==13){
      login();
    }
  });

});


function login() {
  var user = $("#inputUser").val(),
      pass = $("#inputPass").val();
  switch(user,pass){

    case 'admin', '123':
      console.log("entro admin");
      window.location.href='https://xavilopez.github.io/flyermakermain/';
      break;
    default:
      console.log("default");
      $("#inputUser").val('');
      $("#inputPass").val('');
      $("#inputUser").focus();
  };

}
