$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {
    var userInput = $("input#input1").val();
    var vowels = $()

    
    
    $(".input1").text(userInput);

    event.preventDefault();
    
  });
});