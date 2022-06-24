document.addEventListener('DOMContentLoaded', function() {
var superHero = document.getElementById('superHero');
var overlay = document.getElementsByClassName('overlay');
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
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var ariesH3 = document.createElement('h3');
    ariesH3.setAttribute('class', 'signTitle');
    ariesH3.innerHTML = 'Aries The Ram ♈<br>(3/21 to 4/19) Element: Fire';

    var ariesP = document.createElement('p');
    ariesP.setAttribute('class', 'signTraits');
    ariesP.innerHTML = 'First sign of the zodiac, aries people are bold and ambitious, and are always up for a challenge. Passionate and confident leaders with a direct approach, arians believe in an uncomplicated way of doing things without making time with unnecessary details.';

    divCol.appendChild(ariesH3);
    divCol.appendChild(ariesP);
    row.appendChild(divCol);
    superHero.appendChild(row);


    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = 'REMOVE';

    divCol.appendChild(removeButton);



    removeButton.onclick = function() {
        divCol.removeChild(ariesH3);
        divCol.removeChild(ariesP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);

    }


}

tuarusButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var tuarusH3 = document.createElement('h3');
    tuarusH3.setAttribute('class', 'signTitle');
    tuarusH3.innerHTML = 'Taurus The Bull ♉<br>(4/20 to 5/20) Element: Earth';

    var tuarusP = document.createElement('p');
    tuarusP.setAttribute('class', 'signTraits');
    tuarusP.innerHTML = 'Second sign of the zodiac, taurus individuals are intelligent, hardworking, dependable, dedicated, and stubborn. Taureans believe in honesty above all else and will protect those who they trust and love. Taures is ruled by the planet venus, who is the roman goddess of love and beauty.';

    divCol.appendChild(tuarusH3);
    divCol.appendChild(tuarusP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(tuarusH3);
        divCol.removeChild(tuarusP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }


}

geminiButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var geminiH3 = document.createElement('h3');
    geminiH3.setAttribute('class', 'signTitle');
    geminiH3.innerHTML = 'Gemini The Twins ♊<br>(5/21 to 6/20) Element: Air';

    var geminiP = document.createElement('p');
    geminiP.setAttribute('class', 'signTraits');
    geminiP.innerHTML = 'Third sign of the zodiac, Gemini indivduals are funny, smart, kind, genuine, and quirky. They are one of the more interesting types of people you will meet. Their unique nature makes them the life of the party, or any social setting they are apart of. Geminis are known for their dual personalities which gives them a twin like persona.';

    divCol.appendChild(geminiH3);
    divCol.appendChild(geminiP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(geminiH3);
        divCol.removeChild(geminiP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

cancerButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var cancerH3 = document.createElement('h3');
    cancerH3.setAttribute('class', 'signTitle');
    cancerH3.innerHTML = 'Cancer The Crab ♋<br>(6/21 to 7/22) Element: Water';

    var cancerP = document.createElement('p');
    cancerP.setAttribute('class', 'signTraits');
    cancerP.innerHTML = 'The fourth sign of the zodiac, Cancer individuals are caring, loyal, and empathetic. Regardless on how busy they are during the entire day, cancer people will always be there for you during a sitaution or crisis. These personality traits make them great friends and lovers. Cancers offer their upmost attention during emotional times you may be facing, these traits make cancers someone that you can easily trust.';

    divCol.appendChild(cancerH3);
    divCol.appendChild(cancerP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(cancerH3);
        divCol.removeChild(cancerP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

leoButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var leoH3 = document.createElement('h3');
    leoH3.setAttribute('class', 'signTitle');
    leoH3.innerHTML = 'Leo the Lion ♌<br>(7/23 to 8/22) Element: Fire';

    var leoP = document.createElement('p');
    leoP.setAttribute('class', 'signTraits');
    leoP.innerHTML = 'The fifth sign of the zodiac, leo individuals are known for their stability, loyalty, and consitency. They are dedicated friends and lovers who put out their heart and warmth to all of their loving relationships. Leos are natural leaders of the zodiac, who are proud, confident, and joyful people.';

    divCol.appendChild(leoH3);
    divCol.appendChild(leoP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(leoH3);
        divCol.removeChild(leoP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

virgoButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var virgoH3 = document.createElement('h3');
    virgoH3.setAttribute('class', 'signTitle');
    virgoH3.innerHTML = 'Virgo The Angel ♍<br>(8/23 to 9/22) Element: Earth';

    var virgoP = document.createElement('p');
    virgoP.setAttribute('class', 'signTraits');
    virgoP.innerHTML = 'The sixth sign of the zodiac, virgo indivduals are perfectionists at heart. Their organized analytical minds are what bring out the perfectionist soul they carry out to be. Virgos are private people who may prefer more alone time than other signs. Curious by nature, virgos make great researchers for career or as a hobbyist.';

    divCol.appendChild(virgoH3);
    divCol.appendChild(virgoP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(virgoH3);
        divCol.removeChild(virgoP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

libraButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var libraH3 = document.createElement('h3');
    libraH3.setAttribute('class', 'signTitle');
    libraH3.innerHTML = 'Libra The Scales ♎<br>(9/23 to 10/22) Element: Air';

    var libraP = document.createElement('p');
    libraP.setAttribute('class', 'signTraits');
    libraP.innerHTML = 'The seventh sign of the zodiac, libra indivduals are always in search of balance, harmony, and justice. Libra people can often be shy, and letting their guard down. This sign is known for their emotional intelligence and are able to read emotions and feelings from others. At their vey core, they are nurturing and caring, but tend to have trouble moving on from situations or relationships.';

    divCol.appendChild(libraH3);
    divCol.appendChild(libraP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(libraH3);
        divCol.removeChild(libraP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

scorpioButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var scorpioH3 = document.createElement('h3');
    scorpioH3.setAttribute('class', 'signTitle');
    scorpioH3.innerHTML = 'Scorpio The Scorpion ♏<br>(10/23 to 11/21) Element: Water';

    var scorpioP = document.createElement('p');
    scorpioP.setAttribute('class', 'signTraits');
    scorpioP.innerHTML = 'The eighth sign of the zodiac, scorpio indivduals are one of most intense and passionate signs of the zodiac. Often secretive, discrete, observing and detailed, scorpios have a mysterious aura about them that many often feel when encountering them for the first time. However, scorpios do not shy away from the unknown, and are very protective when it comes to their loved ones.'

    divCol.appendChild(scorpioH3);
    divCol.appendChild(scorpioP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(scorpioH3);
        divCol.removeChild(scorpioP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

sagittariusButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var sagittariusH3 = document.createElement('h3');
    sagittariusH3.setAttribute('class', 'signTitle');
    sagittariusH3.innerHTML = 'Sagittarius The Archer ♐<br>(11/22 to 12/21) Element: Fire';

    var sagittariusP = document.createElement('p');
    sagittariusP.setAttribute('class', 'signTraits');
    sagittariusP.innerHTML = 'The ninth sign of the zodiac, sagittarius indivduals love to explore and wander the world. They are full of energy, and are always up for any adventure. Sagittarius people will be the most loyal friend you will ever have; however, they can be impatient at times, desire freedom, and expansion on their own.'

    divCol.appendChild(sagittariusH3);
    divCol.appendChild(sagittariusP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(sagittariusH3);
        divCol.removeChild(sagittariusP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

capricornButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var capricornH3 = document.createElement('h3');
    capricornH3.setAttribute('class', 'signTitle');
    capricornH3.innerHTML = 'Capricorn The Sea Goat ♑<br>(12/22 to 01/19) Element: Earth';

    var capricornP = document.createElement('p');
    capricornP.setAttribute('class', 'signTraits');
    capricornP.innerHTML = 'The tenth sign of the zodiac, capricorn indivduals are often known as the work-o-holics of the zodiac. These people are extremely disciplined, and are able to focus on their goals in a steady and effeciant matter. Capricorns are patient, calm, and not the type to get angry as easily. These indivduals will always work hard and sacrifice for their goals above else.'


    divCol.appendChild(capricornH3);
    divCol.appendChild(capricornP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(capricornH3);
        divCol.removeChild(capricornP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

aquariusButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var aquariusH3 = document.createElement('h3');
    aquariusH3.setAttribute('class', 'signTitle');
    aquariusH3.innerHTML = 'Aquarius The Water Bearer ♒<br>(01/20 to 02/18) Element: Air';

    var aquariusP = document.createElement('p');
    aquariusP.setAttribute('class', 'signTraits');
    aquariusP.innerHTML = 'The eleventh sign of the zodiac, aquarius individuals are advanced, self-reliant, clever, exceptional, and optimisitc. Aquarians like air lack a disitnct form, and appear to resist classification. Others are enthusiastic and active, while others are calm and sensitive. Aqurius symbol is the water bearer, a mystical healer who gives life to the land.'


    divCol.appendChild(aquariusH3);
    divCol.appendChild(aquariusP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(aquariusH3);
        divCol.removeChild(aquariusP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }

}

piscesButton.onclick = function(){
    var row = document.createElement('div');
    row.setAttribute('class', 'row mini-hero');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12 col-lg-6');

    var piscesH3 = document.createElement('h3');
    piscesH3.setAttribute('class', 'signTitle');
    piscesH3.innerHTML = 'Pisces The Fish ♓<br>(02/19 to 03/20) Element: Water';

    var piscesP = document.createElement('p');
    piscesP.setAttribute('class', 'signTraits');
    piscesP.innerHTML = 'The twelve sign of the zodiac, pisces indivduals have great empathy for people, and have a great capacity in expressing their emotions. Pisces people will go into great length to make the people around them happy as they are the most emotionally aware and gracious sign in the zodiac. Like the waters of the earth, pisces energy is magical and mysterious. Pisces is ruled by the planet Neptune, the planet of governing dreams, creativity, and boundless imagination.'


    divCol.appendChild(piscesH3);
    divCol.appendChild(piscesP);
    row.appendChild(divCol);
    superHero.appendChild(row);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn-danger');
    removeButton.innerHTML = "REMOVE";

    divCol.appendChild(removeButton);

    removeButton.onclick = function() {
        divCol.removeChild(piscesH3);
        divCol.removeChild(piscesP);
        divCol.removeChild(removeButton);
        row.removeChild(divCol);
        superHero.removeChild(row);
        overlay.removeChild(superHero);
    }
}


})







