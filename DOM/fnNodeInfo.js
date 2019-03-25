function myFunction() {
  var x = document.getElementById("myDIV").firstChild;
  var txt = "";
  txt += "The node name: " + x.nodeName + "<br>";
  txt += "The node value: " + x.nodeValue + "<br>";
  txt += "The node type: " + x.nodeType;
  document.getElementById("demo").innerHTML = txt;
}
