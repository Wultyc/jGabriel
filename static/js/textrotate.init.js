// Text-Rotate
var i = 0;
var text_rotate = [];
var time = 3500;

text_rotate[0] = "Queue";
text_rotate[1] = "Developer";
text_rotate[2] = "Freelancer";

function changeText() {
    if (document.getElementById("target")) {
        document.getElementById("target").innerHTML = text_rotate[i];
        console.log(document.getElementById("target").innerHTML)
        i = (i < text_rotate.length - 1) ? i + 1 : 0;
        setTimeout('changeText()', time);
    }
}