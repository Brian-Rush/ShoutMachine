$(document).ready(function() {
  $("#inputForm").submit(function(event) {

    var inputText = $("input#inputText").val();

    $("#uppercaseText").text(inputText.toUpperCase());

    $(".initiallyHidden").show();
    // alert(inputText);

    event.preventDefault();

  });
});
