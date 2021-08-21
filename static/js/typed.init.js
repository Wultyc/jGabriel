
// Typed Text
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 200,
    loop: true,
    strings: document.getElementById('TypedData').dataset.elements.split(','),
});