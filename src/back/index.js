var d = document.getElementById("show");
var pass = document.getElementById("pass");

d.addEventListener("click", showf);

function showf() {
  if (d.checked == true) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
