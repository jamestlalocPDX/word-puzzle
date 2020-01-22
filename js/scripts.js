$(document).ready(function() {
  $("form#wordPuzzle").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#input").val();
    var vowels = ["a", "e", "i", "o", "u"]
    var newSentence = userInput.split("");

    for (var word = 0; word < newSentence.length; word += 1) {
      vowels.forEach(function(vowel) {
        if (newSentence[word] === vowel)
          newSentence[word] = "-"
      })
    }
    
    var displayedSentence = newSentence.join("");
    $(".input").text(displayedSentence);

    
  });
});