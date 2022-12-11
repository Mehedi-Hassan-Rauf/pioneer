const login = document.getElementById("login");
const sign = document.getElementById("sign");
const newPage = document.getElementById("newPage");
const signDep = document.getElementById("signDep");
const signWith = document.getElementById("signWith");

// Log in event handler
sign.addEventListener("click", function (event) {
  event.preventDefault();
  login.style.display = "none";
  newPage.style.display = "block";
});
// Log in event handler

// Deposit event handler
signDep.addEventListener("click", function (event) {
  event.preventDefault();
  let inputDep = document.getElementById("inputDep").value;
  if (inputDep == "") {
    inputDep = "00";
  }
  const numDep = parseFloat(inputDep);
  document.getElementById("inputDep").value = "";
  const valDep = document.getElementById("valDep");
  const depNum = parseFloat(valDep.innerText);
  const totalDep = numDep + depNum;
  valDep.innerText = totalDep;
  //Balance Part
  const valTot = document.getElementById("valTot").innerText;
  const totalNum = parseFloat(valTot);
  const total = totalNum + numDep;
  document.getElementById("valTot").innerText = total;
  //Balance Part
});
// Deposit event handler

// Withdraw event handler
signWith.addEventListener("click", function (event) {
  event.preventDefault();
  let inputWith = document.getElementById("inputWith").value;
  if (inputWith == "") {
    inputWith = "00";
  }
  const numWith = parseFloat(inputWith);
  document.getElementById("inputWith").value = "";
  const valWith = document.getElementById("valWith");
  const WithNum = parseFloat(valWith.innerText);
  const totalWith = numWith + WithNum;
  valWith.innerText = totalWith;
  //Balance Part
  const valTot = document.getElementById("valTot").innerText;
  const totalNum = parseFloat(valTot);
  const total = totalNum - numWith;
  document.getElementById("valTot").innerText = total;
  //Balance Part
});
// Withdraw event handler
