var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var ul = document.querySelector("#explist");
var itm = document.querySelector("#item");
var amt = document.querySelector("#amt");
var income = document.querySelector("#income");
var cal = document.querySelector("#cal");
var inc = document.querySelector("#income"); // Refers to the input
var am = document.querySelector("#inc");
var exp = document.querySelector("#exp");
var sav = document.querySelector("#sav");
let ame;
let total = 0;
let theme = document.querySelector("#dark");
let body = document.body;

function dark() {
  body.classList.add("darkmode");
  localStorage.setItem("dark", "enable");
}
function light() {
  body.classList.remove("darkmode");
  localStorage.setItem("dark", "disable");
}
if (localStorage.getItem("dark") === "enable") {
  dark();
}

theme.addEventListener("click", function () {
  if (body.classList.contains("darkmode")) {
    light();
  } else {
    dark();
  }
});
cal.addEventListener("click", function () {
  if (income.value.trim() === "") {
    inc.textContent = " !Error";
    income.style.border = "2px solid red";
    income.style.boxShadow = "0 0 10px red";
    return;
  } else {
    inc.textContent = "";
    income.style.border = "2px solid black";
    income.style.boxShadow = "0 0 10px black";
  }
  if (ul.children.length === 0) {
    alert("Please provide Your Expenses details!");
  } else {
    ame = parseFloat(income.value);
    am.textContent = "₹" + income.value;
    exp.textContent = "₹" + total;
    sav.textContent = "₹" + (ame - total);
  }
});

add.addEventListener("click", function () {
  if (itm.value.trim() === "" || amt.value.trim() === "") {
    alert("Please enter your expense details !");
  } else {
    let amount = parseFloat(amt.value);
    total += amount;
    var li = document.createElement("li");
    li.textContent = itm.value + " - ₹" + amt.value;
    li.dataset.amount = amount;
    ul.appendChild(li);

    itm.value = "";
    amt.value = "";
  }
});

remove.addEventListener("click", function () {
  ul.removeChild(ul.lastElementChild);
});
