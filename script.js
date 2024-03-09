function processText() {
  // Get the value from the text input
  var inputText = document.getElementById('textInput').value;

  // Replace spaces with the + symbol
  var processedText = inputText.replace(/ /g, '+');

  // Display the result (you can modify this part based on your use case)
  //alert('Processed text: ' + processedText);
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSewgwrB9I3cAilW52QDrWLKaVuG_Yg87AbnEfexhFA_LRC9KQ/formResponse?usp=pp_url&entry.876892622=' + processedText + '&submit=Submit');
}
