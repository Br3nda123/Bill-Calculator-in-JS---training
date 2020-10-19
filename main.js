const errorP = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const spanCost = document.querySelector('.cost');
const inputPrice = document.querySelector('#price');
const inputPeople = document.querySelector('#people');
const btnCount = document.querySelector('.count');
const tip = document.querySelector('#tip');

const checkForm = function () {
   if (!inputPrice.value || !inputPeople.value || tip.value == 0) {
      errorP.textContent = 'Wszystkie pola muszą być wypełnione';
      costInfo.style.display = 'none';
   } else {
      errorP.textContent = '';
      countBill();
   }
}

const countBill = () => {
   const newPrice = Number(inputPrice.value);
   const newPeople = parseInt(inputPeople.value); //zwraca liczbę całkowitą
   const newTip = parseFloat(tip.value); //zwraca liczbę po przecinku

   // console.log(typeof newPrice);
   // console.log(typeof newPeople);
   // console.log(typeof newTip);

   const sum = (newPrice + newPrice * newTip) / newPeople;
   costInfo.style.display = 'block';
   spanCost.textContent = sum.toFixed(2);
}

btnCount.addEventListener('click', checkForm)