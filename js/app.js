$(document).ready(function(){
  "use strict";
  $("#contactform").submit(function(){
    event.preventDefault();
    var formData = new FormData(document.querySelector('form'));
    var request = new XMLHttpRequest();
    request.open("POST", "inc/email.php");
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //Il server invia sempre 200
        document.getElementById("status").innerHTML = this.responseText
      }
    };
    request.send(formData);
  });
});
