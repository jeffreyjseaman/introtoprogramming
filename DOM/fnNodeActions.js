(function(){
  'use strict';

  var newElement = document.createElement('li');
  newElement.textContent = 'I am a new Element';


}());


function appendMyNode() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Wine");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
