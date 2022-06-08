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
    ariesH3.setAttribute('class', 'signTitle');
    ariesH3.innerHTML = 'Aries The Ram ♈ (3/21 to 4/19) Element: Fire';

    var ariesP = document.createElement('p');
    ariesP.setAttribute('class', 'ariesTraits');
    ariesP.innerHTML = 'First sign of the zodiac. Aries people are bold and ambitious, and are always up for a challenge. Passionate and confident leaders with a direct approach. Arians believe in an uncomplicated way of doing things without making time with unnecessary details.';

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

tuarusButton.onclick = function(){
    var tuarusH3 = document.createElement('h3');
    tuarusH3.setAttribute('class', 'signTitle');
    tuarusH3.innerHTML = 'Taurus The Bull ♉ (4/20 to 5/20) Element: Earth';

    var tuarusP = document.createElement('p');
    tuarusP.setAttribute('class', 'tuarusTraits');
    tuarusP.innerHTML = 'Second sign of the zodiac. Taurus individuals are known for their strong memory. Not known to talk about personal things unless they are very comfortable with you. Patience is a virtue when it comes to taures; however, beware! Once taures runs out of patience, an explosive side suddenly comes out. This earth sign is willing to make sacrifices to the people they love and protect them as well.';

    content.appendChild(tuarusH3);
    content.appendChild(tuarusP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(tuarusH3);
        content.removeChild(tuarusP);
        content.removeChild(removeButton);
    }
}

geminiButton.onclick = function(){
    var geminiH3 = document.createElement('h3');
    geminiH3.setAttribute('class', 'signTitle');
    geminiH3.innerHTML = 'Gemini The Twins ♊ (5/21 to 6/20) Element: Air';

    var geminiP = document.createElement('p');
    geminiP.setAttribute('class', 'geminiTraits');
    geminiP.innerHTML = 'Third sign of the zodiac, Gemini indivduals are funny, smart, kind, genuine, and quirky. They are one of the more interesting types of people you will meet. Their unique nature makes them the life of a party or any social setting they are apart of. Geminis are known for their dual personalities which gives them a twin like persona.';

    content.appendChild(geminiH3);
    content.appendChild(geminiP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(geminiH3);
        content.removeChild(geminiP);
        content.removeChild(removeButton);
    }
}

cancerButton.onclick = function(){
    var cancerH3 = document.createElement('h3');
    cancerH3.setAttribute('class', 'signTitle');
    cancerH3.innerHTML = 'Cancer The Crab ♋ (6/21 to 7/22) Element: Water';

    var cancerP = document.createElement('p');
    cancerP.setAttribute('class', 'cancerTraits');
    cancerP.innerHTML = 'The fourth sign of the zodiac, Cancer individuals are caring, loyal, and empathetic. Regardless on how busy they are during the entire day, cancer people will always be there for you during a sitaution or crisis. These personality traits make them great friends and lovers who give good advice and offer their upmost attention during emotional times you may be facing. These traits make cancers someone that you can easily trust.';

    content.appendChild(cancerH3);
    content.appendChild(cancerP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(cancerH3);
        content.removeChild(cancerP);
        content.removeChild(removeButton);
    }
}

leoButton.onclick = function(){
    var leoH3 = document.createElement('h3');
    leoH3.setAttribute('class', 'signTitle');
    leoH3.innerHTML = 'Leo the Lion ♌ (7/23 to 8/22) Element: Fire';

    var leoP = document.createElement('p');
    leoP.setAttribute('class', 'leoTraits');
    leoP.innerHTML = 'The fifth sign of the zodiac, leo individuals are known for their stability, loyalty, and consitency. They are dedicated friends and lovers who put out their heart & warmth to all of their loving relationships. Leos are natural leaders of the zodiac, who are proud, confident, and joyful people.';

    content.appendChild(leoH3);
    content.appendChild(leoP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(leoH3);
        content.removeChild(leoP);
        content.removeChild(removeButton);
    }
}

virgoButton.onclick = function(){
    var virgoH3 = document.createElement('h3');
    virgoH3.setAttribute('class', 'signTitle');
    virgoH3.innerHTML = 'Virgo The Angel ♍ (8/23 to 9/22) Element: Earth';

    var virgoP = document.createElement('p');
    virgoP.setAttribute('class', 'virgoTraits');
    virgoP.innerHTML = 'The sixth sign of the zodiac, virgo indivduals are perfectionists at heart. Their organized anylitcal minds are what bring out the perfectionist soul they carry out to be. Virgos are private people who may prefer more alone time than other signs. Curious by nature, virgos make great researchers for career or as a hobbyist.';

    content.appendChild(virgoH3);
    content.appendChild(virgoP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(virgoH3);
        content.removeChild(virgoP);
        content.removeChild(removeButton);
    }
}

libraButton.onclick = function(){
    var libraH3 = document.createElement('h3');
    libraH3.setAttribute('class', 'signTitle');
    libraH3.innerHTML = 'Libra The Scales ♎ (9/23 to 10/22) Element: Air';

    var libraP = document.createElement('p');
    libraP.setAttribute('class', 'libraTraits');
    libraP.innerHTML = 'The seventh sign of the zodiac, libra indivduals are always in search of balance, harmony, and justice. Libra people can often be shy and hard letting their guard down. This sign is known for their emotional intelligence and are able to read emotions and feelings from others. At their vey core they are nurturing and caring, but tend to have trouble moving on from situations or relationships.';

    content.appendChild(libraH3);
    content.appendChild(libraP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(libraH3);
        content.removeChild(libraP);
        content.removeChild(removeButton);
    }
}

scorpioButton.onclick = function(){
    var scorpioH3 = document.createElement('h3');
    scorpioH3.setAttribute('class', 'signTitle');
    scorpioH3.innerHTML = 'Scorpio The Scorpion ♏ (10/23 to 11/21) Element: Water';

    var scorpioP = document.createElement('p');
    scorpioP.setAttribute('class', 'scorpioTraits');
    scorpioP.innerHTML = 'The eighth sign of the zodiac, scorpio indivduals are one of most intense and passionate signs of the zodiac. Often secretive, discrete, observing and detailed, scorpios have a mysterious aura about them that many often feel when encountering them for the first time. However scorpios do not shy away from the unknown and are very protective when it comes to their loved ones.'

    content.appendChild(scorpioH3);
    content.appendChild(scorpioP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(scorpioH3);
        content.removeChild(scorpioP);
        content.removeChild(removeButton);
    }
}

sagittariusButton.onclick = function(){
    var sagittariusH3 = document.createElement('h3');
    sagittariusH3.setAttribute('class', 'signTitle');
    sagittariusH3.innerHTML = 'Sagittarius The Archer ♐ (11/22 to 12/21) Element: Fire';

    var sagittariusP = document.createElement('p');
    sagittariusP.setAttribute('class', 'sagittariusTraits');
    sagittariusP.innerHTML = 'The ninth sign of the zodiac, sagittarius indivduals love to explore and wander the world. They are full of energy and are always up for any adventure. Sagittarius people will be the most loyal friend you will have; however, they can be impatient at times and desire freedom and expansion on their own.'

    content.appendChild(sagittariusH3);
    content.appendChild(sagittariusP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(sagittariusH3);
        content.removeChild(sagittariusP);
        content.removeChild(removeButton);
    }
}

capricornButton.onclick = function(){
    var capricornH3 = document.createElement('h3');
    capricornH3.setAttribute('class', 'signTitle');
    capricornH3.innerHTML = 'Capricorn The Sea Goat ♑ (12/22 to 01/19) Element: Earth';

    var capricornP = document.createElement('p');
    capricornP.setAttribute('class', 'capricornTraits');
    capricornP.innerHTML = 'The tenth sign of the zodiac, capricorn indivduals are often known as the work-o-holics of the zodiac. These people are extremely disciplined and are able to focus on their goals in a steady and effeciant matter. Capricorns are patient and generally calm who dont get angry as easily. These indivduals will always work hard and sacrifice for their goals above else.'

    content.appendChild(capricornH3);
    content.appendChild(capricornP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(capricornH3);
        content.removeChild(capricornP);
        content.removeChild(removeButton);
    }
}

aquariusButton.onclick = function(){
    var aquariusH3 = document.createElement('h3');
    aquariusH3.setAttribute('class', 'signTitle');
    aquariusH3.innerHTML = 'Aquarius The Water Bearer ♒ (01/20 to 02/18) Element: Air';

    var aquariusP = document.createElement('p');
    aquariusP.setAttribute('class', 'aquariusTraits');
    aquariusP.innerHTML = 'The eleventh sign of the zodiac, aquarius individuals are advanced, self-reliant, clever, exceptional, and optimisitc. Aquarians like air lack a disitnct form and appear to resist classification. Others are enthusiastic and active, while others are calm and sensitive. Aqurius symbol is the water bearer, a mystical healer who gives life to the land.'

    content.appendChild(aquariusH3);
    content.appendChild(aquariusP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(aquariusH3);
        content.removeChild(aquariusP);
        content.removeChild(removeButton);
    }
}

piscesButton.onclick = function(){
    var piscesH3 = document.createElement('h3');
    piscesH3.setAttribute('class', 'signTitle');
    piscesH3.innerHTML = 'Pisces The Fish ♓ (02/19 to 03/20) Element: Water';

    var piscesP = document.createElement('p');
    piscesP.setAttribute('class', 'piscesTraits');
    piscesP.innerHTML = 'The twelve sign of the zodiac, pisces indivduals have great empathy for people and have a great capacity in expressing their emotions. Pisces people will go into great length to make the people around them happy as they are the most emotionally aware and gracious sign in the zodiac. Like the waters of the earth, pisces energy is magical and mysterious. Pisces is ruled by the planet Neptune, the planet of governing dreams, creativity, and boundless imagination.'

    content.appendChild(piscesH3);
    content.appendChild(piscesP);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerHTML = "REMOVE";

    content.appendChild(removeButton);

    removeButton.onclick = function() {
        content.removeChild(piscesH3);
        content.removeChild(piscesP);
        content.removeChild(removeButton);
    }
}

})







