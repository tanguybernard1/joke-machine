/* A function to return random number from min to max */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    var element = document.getElementById("box");
    //generate random red, green and blue intensity
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
}, 1500);
