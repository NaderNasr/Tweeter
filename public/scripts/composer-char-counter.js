/* eslint-disable no-undef */
$(document).ready(function() {
  $("#charOverLimit").hide();
  $("#inputEmpty").hide();
  $("output").css({'color': 'black'});

  $("textarea").on('input', function() {
    const textCounter = $(this).closest("section").find("output")[0];
    const tweetTextCount = $(this).val().length;
    textCounter.innerHTML = 140 - tweetTextCount;

    if (textCounter.innerHTML < 0) {
      $("#charOverLimit").show();
      $("output").css({'color': 'red'});
      $("#button").attr("disabled", true);
      $("#button").css({'cursor': 'not-allowed', 'color': 'red', 'background': 'white'});
      
    } else {
      $("output").css({'color': 'black'});
      $("#charOverLimit").hide();
      $("#button").attr("disabled", false);
      $("#button").css({'cursor': 'pointer', 'color': 'white', 'background': '#4156A2'});
      
    }
  });
});