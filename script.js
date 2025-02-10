var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var ul = document.querySelector("#explist");
var itm = document.querySelector("#item");
var amt = document.querySelector("#amt");
var income = document.querySelector('#income');
var cal = document.querySelector('#cal');
var inc = document.querySelector("#in");
var am = document.querySelector("#inc");
var exp = document.querySelector("#exp");
var sav = document.querySelector("#sav");
let ame ;
let total =0;

cal.addEventListener("click",function(){

    if(income.value.trim() === ''){
      inc.textContent = " !Error";
       setTimeout(() =>location.reload(),1000);

    }else if( ul.children.length === 0){
      alert('Please provide Your Expenses details!');

    }else{
      ame = parseFloat(income.value);
      am.textContent = "₹"+income.value;
      exp.textContent = "₹"+total;
      sav.textContent = "₹"+ (ame-total);


    }
})


add.addEventListener("click",function(){

  if(itm.value.trim() === '' || amt.value.trim() === ''){

    alert('Please Income and provide Your Expenses details !')

  }else{
    let amount = parseFloat(amt.value); 
    total += amount;
    var li = document.createElement('li');
    li.textContent = itm.value + " - ₹"+amt.value;
    li.dataset.amount = amount;
    ul.appendChild(li);  

    itm.value = '';
    amt.value = '';
  }


})

remove.addEventListener("click",function(){

    ul.removeChild(ul.lastElementChild);

})

