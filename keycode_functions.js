function change_greeting() {
  document.getElementById("hello_world").innerHTML = "HELLO, I SAIDZ!";
}



//let fileData = ""

var myCodes = ["0123", "1234", "2345"];
var codeCounter = 0;
function init_keycode_logic() { 
  //document.getElementById("code").innerHTML = myCodes[0];
}

function get_next_code(type) {
  document.getElementById("code").innerHTML = myCodes[codeCounter];
  codeCounter++;
  if (codeCounter >= myCodes.length) {
    codeCounter = 0;
  }
}
