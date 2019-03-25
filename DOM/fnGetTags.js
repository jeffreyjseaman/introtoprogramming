
function getTags() {
var x = document.getElementsByTagName("p");
document.getElementById("ppu").innerHTML =
'The text in first paragraph (index 1) is: ' + x[0].innerHTML;
}
