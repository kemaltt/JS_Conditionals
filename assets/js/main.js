//String Methodeen================================

//Lev1_1------------------------
let vorName = 'Sena'
let nachName = 'Türksoy'
let name = vorName + ' ' + nachName

console.log(vorName.length); //4
console.log(nachName.length); //7
console.log(name.length); //12

//Lev1_2--------------------
let txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean'

console.log(txt.indexOf('h')); //27
console.log(txt.indexOf('Earth')); //38
console.log(txt.indexOf('Moon')); //-1

//Lev1_3--------------------

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log(txt2.search(';')); //34
console.log(txt2.search('green')); //6
console.log(txt2.search('blue')); //-1

//Lev1_4--------------------
let A = 'Sam is going to coding school';


// document.write(A.slice(0, 4) + '<br>')
// document.write(A.slice(4, 6) + '<br>')
// document.write(A.slice(1, -13) + A.slice(22) + '<br>')
// document.write(A.slice(3, -13) + A.slice(22) + '<br>')
// document.write(A.slice(22) + '<br>')
// document.write(A.slice(0, 6) + A.slice(22) + '<br>')

//Lev1_5--------------------

let text = 'Sam is back from coding school';

// document.write(text.slice(0, 4) + '<br>')
// document.write(text.slice(4, 6) + '<br>')
// document.write(text.slice(23) + '<br>')
// document.write(text.slice(0, 7) + text.slice(23))

//Lev1_6--------------------
// let text2 = 'Sam is working at coding school';

let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')

// output1.innerHTML = text2.substr(0, 3)
// output2.innerHTML = text2.substr(4, 2)
// output3.innerHTML = text2.substr(15, 2) + ' ' + text2.substr(25, 6)
// output4.innerHTML = text2.substr(0, 3) + ' ' + text2.substr(7, 7).replace('working', 'works') + ' ' + text2.substr(15, 2) + ' ' + text2.substr(24, 7)


//Lev1_8--------------------
// let txt1 = 'Sam is going to coding school';

console.log(A.toUpperCase().replace('CODING ', ''));
console.log(A.toLowerCase().replace('coding ', ''));
console.log(A.slice(0, 3).toUpperCase().concat(A.slice(3, 15).concat(A.slice(-7).toUpperCase())));
console.log(A.slice(0, 3).concat(A.slice(3, 6).replace('i', 'I')).concat(A.slice(6, 15).replace('g', 'G').replace('t', 'T')).concat(A.slice(-7).replace('s', 'S')));


//Lev1_9--------------------
let text1 = 'Sam is going to coding school';
let text2 = 'Tom'
let text3 = 'programming bike'
let text4 = 'and'

console.log(text1.slice(0, 15).concat(text1.slice(-7)).concat(' ').concat(text4).concat(' to the movie theater'));
console.log(text1.slice(0, 15).concat(' the movie theater'));
console.log(text2.concat(' ').concat(text4).concat(' ').concat(text1.slice(0, 4)).concat('are').concat(text1.slice(6, 16)).concat(text1.slice(-7)));
console.log(text2.concat(' ').concat(text4).concat(' ').concat(text1.slice(0, 4)).concat('are').concat(text1.slice(6, 16)).concat('gym ').concat(text4).concat(' to the movie theater'));

//template-literals================================
//Lev1_1--------------

let firstName = 'Kemal'
let lastName = 'Tütüncü'
let age = 36
let geburtOrt = 'Kayseri'
let größe = 1.76
let gewicht = 80
let hobbys = 'Fahrrad fahren und Spazieren gehen'
let essen = 'Nudeln'
let spiel = 'Fußball'
let sport = 'Fußball'
let modeMarke = 'Adidas'
let jahresZeit = 'Mai'
let urlaubOrt = 'Antalya'

let output5 = document.getElementById('output5')
const perDaten = `Ich bin ${firstName} ${lastName}. Ich bin ${age} Jahre alt und in ${geburtOrt} geboren.Mein Größe ist ${größe}cm und mein Gewicht ist ${gewicht}kg.Mein Lieblingsessen ist ${essen}. Mein Hobbys sind ${hobbys}. Ich spiele gern ${spiel} als Computerspeile.Außerden spiele ich gerne ${sport}. Mein Lieblingsmodemarke ist ${modeMarke} und Lieblingsjahreszeit ist ${jahresZeit}.Ich fliege gerne für den Urlaub nach ${urlaubOrt} .`

output5.innerHTML = perDaten
console.log(perDaten);

//Lev1_2-------------------------




//conditional-statements Lev_1=====================================================

//Lev1_1---------------
let alter = document.getElementById('age')
let outputAge = document.getElementById('output-age')

function adult() {
    const age = alter.value
    if (age >= 18) {
        console.log('true');
    } else if (age < 18) {
        console.log('false');
    }

    if (age >= 18) {
        outputAge.innerHTML = 'volljährig'
    } else {
        outputAge.innerHTML = 'minderjährig'
    }
}

//Lev1_2---------------
let inputNum = document.getElementById('num')

let outputWetter = document.getElementById('output-wetter')
const weather = () => {
    const number = inputNum.value
    if (number >= 8 && number <= 10) {
        console.log('super');
        outputWetter.innerHTML = 'super'
    } else if (number >= 6 && number <= 7) {
        console.log('gut');
        outputWetter.innerHTML = 'gut'
    } else if (number >= 3 && number <= 5) {
        console.log('okay');
        outputWetter.innerHTML = 'okay'
    } else if (number >= 0 && number <= 2) {
        console.log('schlecht');
        outputWetter.innerHTML = 'schlecht'
    }
}


//Lev1_3---------------

let inputAge = document.getElementById('input')
let outputRauch = document.getElementById('output-rauchen')

function greaterThan() {
    event.preventDefault();
    let age = inputAge.value

    if (age == '') {
        alert('enter an age')
    } else if (age >= 18) {
        outputRauch.innerHTML = 'Ja. Du kannst Shisha rauchen'
    } else {
        outputRauch.innerHTML = 'Nein.Du darfst noch nicht Shisha rauchen'
    }
}


//conditional-statements Lev_2=====================================================
// Lev2_2---------------
let inputRange = document.getElementById('range');
let inputPoint = document.getElementById('points');
let section2_2 = document.getElementById('lev2_2')
let concern = document.getElementById('output-concern')
let effect = document.getElementById('output-effect')

const checkAirQuality = () => {
        let qualität = inputPoint.value
        inputRange.innerHTML = inputPoint.value
        if (qualität <= 50) {
            concern.innerHTML = 'Good'
            effect.innerHTML = 'Little or no risk'
            section2_2.style.backgroundColor = 'green'
        } else if (qualität > 50 && qualität <= 100) {
            concern.innerHTML = 'Moderate'
            effect.innerHTML = 'Acceptable quality'
            section2_2.style.backgroundColor = 'gold'
        } else if (qualität > 100 && qualität <= 150) {
            concern.innerHTML = 'Unhealthy for sensitive groups '
            effect.innerHTML = 'Generable publics not likely affected'
            section2_2.style.backgroundColor = 'coral'
        }

    }
    // Lev2_3---------------

function differenz(num) {
    let result = num - 27

    if (num > 27) {
        return result * 2

    }

}

console.log(differenz(35));

// Lev2_4---------------

function berechne(a, b) {

    let summe = a + b
    if (a == b) {
        return summe * 5
    } else {
        return summe
    }
}

console.log(berechne(5, 4)); //9
console.log(berechne(5, 5)); //50