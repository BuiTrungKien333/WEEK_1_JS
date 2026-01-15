const val = document.getElementById("val");

const btnCalc = document.getElementById("btn_calc");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();

  let bill = parseInt(val.value);

  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  console.log(
    `“The bill was ${bill}, the tip was ${tip}, and the total value ${
      bill + tip
    }`
  );
});
