// <!-- BENDRAI

// 1. tekstas1.includes(tekstas2) <- tikrina ar tekstas2 yra tekstas1 viduje (grąžina boolean reikšmę);
// 2. tekstas.slice() <- apkarpo tekstą pagal paduodamus parametrus (t.y. nukerpa pradžią ar/ir galą);
// 3. tekstas.trim() <- ištrina priekyje teksto padėtus tarpelius;
// tekstas.toUpperCase(), tekstas.toLowerCase() <- didina/mažina teksto kapitalizaciją (pvz. "a" => "A").
// 4. tekstas.repeat(skaičius) <- atkartoja tekstą tiek kartų, kiek nurodo skaičius.
// 5. tekstas.split(parametras) <- padalina tekstą į kelias dalis (pagal paduotą parametrą) ir grąžina array (pvz. per tarpelį: "BMW AUDI".split(" ") => ["BMW", "AUDI"]).

// UŽDUOTYS

// 1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.


const tikrinamBtn = document.getElementsByClassName("tikrinamBtn")[0];
const h1Display = document.getElementsByClassName("h1Display")[0];
const vardas = document.getElementsByClassName("vardas")[0];
const number = document.getElementsByClassName("oddEvenNr")[0].value;

tikrinamBtn.addEventListener("click", function(){

   
    function checkOddOrEven(number) {
        if (number === "") {
            alert("Pretty please, add a number :)");
        } else if (number % 2 !== 0) {
            alert("odd");
        } else {
            return h1Display.value;    
        }
    }
    
    const result = checkOddOrEven(Number(number));
   
        h1Display.textContent = vardas.value; 
});

// 2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

const task2Btn = document.getElementsByClassName("task2Btn")[0];
var firstName = document.getElementsByClassName("firstName")

task2Btn.addEventListener("click", function(){
   firstNameValue = firstName[0].value;
   firstNameValueTrim = firstNameValue.trim();

    alert(`Your name is ${firstNameValueTrim.trim().length} letters long!`);
    console.log(firstNameValue);
});



// 3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.

//   (append?)

// Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. -->

const addBtn = document.getElementsByClassName("addBtn")[0];
const firstNameDisplay = document.getElementsByClassName("firstNameDisplay")[0];
const lastNameDisplay = document.getElementsByClassName("lastNameDisplay")[0];

console.log(firstNameDisplay, lastNameDisplay)


addBtn.addEventListener("click", function(){
  const fullNameInput = document.getElementsByClassName("fullNameInput")[0].value;

    function fullNameSplit(fullNameInput){
        const fullNameSplit1 = fullNameInput.split(' ');
        const firstName = fullNameSplit1[0];
        const lastName = fullNameSplit1.slice(1).join(' ');
        [0];
        return { firstName, lastName};
    }

    const splitNames = fullNameSplit(fullNameInput);
    
    
    console.log(splitNames);
    
     firstNameDisplay.textContent = splitNames.firstName;
     lastNameDisplay.textContent = splitNames.lastName;
    
    
  });

