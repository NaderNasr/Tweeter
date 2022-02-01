/* eslint-disable no-undef */
$(document).ready(function() {
  $("#charOverLimit").hide();
  $("#inputEmpty").hide();
  $("output").css({'color': 'black'});

  $("textarea").on('input', function() {
    const textCounter = $(this).closest("section").find("output")[0];
    const tweetTextCount = $(this).val().length;
    textCounter.innerHTML = 140 - tweetTextCount;

    if (textCounter.innerHTML <= 135) {
      $("#charOverLimit").show(); //comment here
      $("output").css({'color': 'red'}); //
    } else {
      $("output").css({'color': 'black'});
      $("#charOverLimit").hide();
      
    }
  });
});