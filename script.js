
//CHALLENGE ********************************************************************

//Initialize
var text = ["This is a test","foobar","all your base"];
for (var i = 0; i < text.length; i++) {
  addToList(text[i],"normalList");
}

for (var i = 0; i < text.length; i++) {
  var newText = ReverseOrder(text[i]);
  addToList(newText, "reverseList");
}

//Reverse word order
function ReverseOrder(text) {

  var newText = text.split(" ");
  var len = newText.length;
  var reverseText = "";

  for (var i = len-1; i >= 0; i--) {
    reverseText += newText[i];
    if (i > 0) {reverseText += " ";}
  }

  return reverseText;
}

//Quick-add to a list: reverseList
function addToList(text, list) {
  var ul = document.getElementById(list);
  var newLi = document.createElement('li');
  var ulLength = ul.getElementsByTagName('li').length+1;
  document.getElementById('listAmount').innerHTML = ulLength;
  newLi.appendChild(document.createTextNode('Case #' + ulLength + ': ' + text));
  ul.appendChild(newLi);
}

//END OF CHALLENCE *************************************************************

//Add new text by button click
document.getElementById('btn').addEventListener("click", function() {
  var text = document.getElementById('txt').value;
  addToList(text,"normalList");
  var newText = ReverseOrder(text);
  addToList(newText,"reverseList");
  document.getElementById('txt').value = "";
});
