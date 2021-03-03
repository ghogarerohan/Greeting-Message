
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var localTime = hours + ":" + minutes + ":" + seconds;

var clockTime = hours;

console.log(clockTime);

console.log(localTime);



function myClock() {
    if (clockTime < 10) {
        return "Good morning";
      } else if (clockTime < 20) {
        return "Good day";
      } else {
        return "Good evening";
      }
}

function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + " " + myClock();
    }
    document.getElementById("demo").innerHTML = txt
  }

myFunction();