$(document).ready(function(){
  "use strict";
  var $contactform = $("#contactform");
  var $inputs = $contactform.find('input, textarea, button');
  
  $contactform.submit(function(){
    event.preventDefault();
    $inputs.attr('disabled', 'disabled');
    var formData = new FormData(document.querySelector('form'));
    var request = new XMLHttpRequest();
    request.open("POST", "inc/email.php");
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //Il server invia sempre 200
        document.getElementById("status").innerHTML = this.responseText
      }
      $inputs.attr('disabled', false);
    };
    request.send(formData);
  });
});
