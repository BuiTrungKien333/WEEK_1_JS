
// Bai 1

const BMI = (mass, height) => {
    return mass / height ** 2
}

const btnCalc = document.getElementById("btn_calc");

const eleMassMark = document.getElementById("weight_mark");

const eleHeightMark = document.getElementById("height_mark");

const eleMassJoin = document.getElementById("weight_join");

const eleHeightJoin = document.getElementById("height_join");


btnCalc.addEventListener('click', (e) => {
    e.preventDefault();

    let valMassMark = parseFloat(eleMassMark.value);
    let valHeightMark = parseFloat(eleHeightMark.value);
    let valMassJoin = parseFloat(eleMassJoin.value);
    let valHeightJoin = parseFloat(eleHeightJoin.value);

    let markBMI = BMI(valMassMark, valHeightMark);
    let joinBMI = BMI(valMassJoin, valHeightJoin);
    console.log("BMI of Mark: " + markBMI);
    console.log("BMI of Join: " +joinBMI);
    let bool = markBMI > joinBMI;
    console.log(bool ? "Mark has a higher BMI than Join" : "Mark has not a higher BMI than Join");
});

console.log(eleMassMark);


