// keycode_functions.js

let codes = [];
let currentIndex = 0;

var codeCounter = 0;
function init_keycode_logic() { 
  return fetch("210_codes.json")
    .then(r => r.json())
    .then(data => {
      codes = data;
      console.log("Codes loaded:", codes.length, "entries");
    });
}

function get_next_code() {
  if (codes.length === 0) {
    document.getElementById("code").innerHTML = "null";
    return "null"; // not loaded yet
  }
  const code = codes[currentIndex];
  currentIndex = (currentIndex + 1) % codes.length;
  document.getElementById("code").innerHTML = code;
  return code;
}
