document.addEventListener('DOMContentLoaded', function() {
var content = document.getElementById('content');
var ariesButton = document.getElementById('add-button-0');
var tuarusButton = document.getElementById('add-button-1');
var geminiButton = document.getElementById('add-button-2');
var cancerButton = document.getElementById('add-button-3');
var leoButton = document.getElementById('add-button-4');
var virgoButton = document.getElementById('add-button-5');
var libraButton = document.getElementById('add-button-6');
var scorpioButton = document.getElementById('add-button-7');
var sagittariusButton = document.getElementById('add-button-8');
var capricornButton = document.getElementById('add-button-9');
var aquariusButton = document.getElementById('add-button-10');
var piscesButton = document.getElementById('add-button-11');

ariesButton.onclick = function() {
    var ariesH3 = document.createElement('h3');
    ariesH3.innerHTML = 'Aries The Ram (3/21 to 4/19) Element: Fire';

    var ariesP = document.createElement('p');
    ariesP.innerHTML = 'First sign of the zodiac';

    content.appendChild(ariesH3);
    content.appendChild(ariesP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = 'REMOVE';

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(ariesH3);
        content.removeChild(ariesP);
        content.removeChild(removeButton);
    }
}



})







