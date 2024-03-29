const el = document.querySelector('.exp-test');

export function counter(el) {
   const elMaxValue = el.dataset.value;
   let elValue = 0;
   let interval = elMaxValue > 50 ? 100 : 200;

   const counterInterval = setInterval(() => {
      showCounter(el, elValue);
      elValue++;

      if (elValue > elMaxValue) clearInterval(counterInterval);
   }, interval);
}


function showCounter(el, value) {
   if (value > 50) {
      el.innerHTML = value.toString().padStart(2, '0') + "+";
   } else {
      el.innerHTML = value.toString().padStart(2, '0');
   }

}

