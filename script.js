/* SETTING UP SUSPECTS, WEAPONS AND MOTIVES */

let suspectList = ["The Brooding Baron", "The Cunning Curator","The Nervous Novelist","The Trembling Thespian","The Suspicious Senator"];
let weaponList = ["a broken blade", "a cursed cane", "a perilous pistol", "a stained stiletto", "a venomous vial"];
let motiveList = ["bitter betrayal","concealed conspiracy","greedy gain", "hidden hatred","ruthless revenge"];

let randomizeCase = function () {
    return Math.floor(Math.random() * (4 - 0 + 1) + 0)
} /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive*/

let murderSuspect = suspectList[randomizeCase()];
let murderWeapon = weaponList[randomizeCase()];
let murderMotive = motiveList[randomizeCase()];

const newCase = document.querySelector("#new-case");

newCase.addEventListener("click", loadNewCase);

function loadNewCase() {
    suspectList.forEach((suspect,index) => {
        murderSuspect = suspectList[randomizeCase()];
        const suspectReference = document.querySelector("#suspect-" + index);
        suspectReference.style.display = "block"
        suspectReference.textContent = suspect;
    });
    weaponList.forEach((weapon,index) => {
        murderWeapon = weaponList[randomizeCase()];
        const weaponReference = document.querySelector("#weapon-" + index);
        weaponReference.style.display = "block"
        weaponReference.textContent = weapon;
    });
    motiveList.forEach((motive,index) => {
        murderMotive = motiveList[randomizeCase()];
        const motiveReference = document.querySelector("#motive-" + index);
        motiveReference.style.display = "block"
        motiveReference.textContent = motive;
    });
    turnMeter.value = turnStart;
    turnCounter = 1;
}

/* https://www.w3schools.com/jsref/prop_select_selectedindex.asp */

/* COUNTING TURNS AND CHECKING GUESSES */


const playerGuess = document.querySelector("#accuse-button");
let uncoveredSuspect = false;
let uncoveredWeapon = false;
let uncoveredMotive = false;

const turnMeter = document.querySelector("#turn-meter");
let turnCounter = 1;
const turnStart = 1;
const turnOver = 6;

playerGuess.addEventListener("click", () => {   
    checkGuess();
    if (uncoveredSuspect === true && uncoveredWeapon === true && uncoveredMotive === true) {
        console.log("You win")
    } else if (turnCounter === turnOver) {
        console.log("You lose")
    } else {
        checkGuess();
        turnCounter++;
        turnMeter.value = turnCounter;
    }
});

function checkGuess () {
    if (uncoveredSuspect === true) {
        /**/
    } else {
        let getSuspectIndex = document.querySelector("#suspect-list").selectedIndex;
        let getSuspect = suspectList[getSuspectIndex];
        if (getSuspect === murderSuspect) {
            document.querySelector("#suspect-list").outerHTML =`<span class="uncovered"> ${murderSuspect} <span>`;
            uncoveredSuspect = true;
        } else {
            document.querySelector("#suspect-" + getSuspectIndex).style.display = "none";
        }};

    if (uncoveredWeapon === true) {
        /**/
    } else {
        let getWeaponIndex = document.querySelector("#weapon-list").selectedIndex;
        let getWeapon = weaponList[getWeaponIndex];
        if (getWeapon === murderWeapon) {
            document.querySelector("#weapon-list").outerHTML =`<span class="uncovered"> ${murderWeapon} <span>`;
            uncoveredWeapon = true;
        } else {
            document.querySelector("#weapon-" + getWeaponIndex).style.display = "none";
        }};
    if (uncoveredMotive === true) {
        /**/
    } else {
        let getMotiveIndex = document.querySelector("#motive-list").selectedIndex;
        let getMotive = motiveList[getMotiveIndex];
        if (getMotive === murderMotive) {
            document.querySelector("#motive-list").outerHTML =`<span class="uncovered"> ${murderMotive} <span>`;
            uncoveredMotive = true;
        } else {
            document.querySelector("#motive-" + getMotiveIndex).style.display = "none";
        }}
}

/* API */

let baseURL = "https://opentdb.com/api.php?amount=6";
const triviaCategory = document.querySelector("#select-category");
const triviaDifficulty = document.querySelector("#select-difficulty");
const triviaType = document.querySelector("#select-type");

function triviaCustom () {
    const triviaCategoryIndex = triviaCategory.selectedIndex
    triviaCategoryIndex !== 0
    ? baseURL += "&category" + triviaCategory.selectedIndex
    : console.log("rogan")

    const triviaDifficultyIndex = triviaDifficulty.selectedIndex
    triviaDifficultyIndex !== 0
    ? baseURL += "&difficulty=" + triviaDifficulty.value
    : console.log("rogan")

    const triviaTypeIndex = triviaType.selectedIndex
    triviaTypeIndex !== 0
    ? baseURL += "&type=" + triviaType.value
    : console.log("rogan")

    
}

const beginCase = document.querySelector("#begin-case");

beginCase.addEventListener("click", triviaCustom)