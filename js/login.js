$(document).ready(function(){
  $("#inputUser").val('');
  $("#inputPass").val('');


  $("#modalUser").on('click', function(){
      $("#inputUser").focus();
  });
  $("#modalPass").on('click', function(){
      $("#inputPass").focus();
  });

  $("#btnLogin").on('click', function(){
      login();
  });


});


function login() {
  var user = $("#inputUser").val(),
      pass = $("#inputPass").val();
  switch(user,pass){

    case 'admin', '123':
      console.log("entro admin");
      window.location.href='https://xavilopez.github.io/Flyer1/';
      break;

    case 'martin', 'martin123':
      console.log("entro martin");
      window.location.href='https://xavilopez.github.io/Flyer2/';
      break;
    default:
      console.log("default");
  };

}
