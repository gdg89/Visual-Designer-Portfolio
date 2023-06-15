const el = document.querySelector('.exp-test');

export function counter(el) {
   const elMaxValue = el.dataset.value;
   let elValue = 0;
   let interval = 200;

   const counterInterval = setInterval(() => {
      showCounter(el, elValue);
      elValue++;

      if(elValue > 20) interval = 10;
      if(elValue > elMaxValue) clearInterval(counterInterval);
   }, interval);
}


function showCounter(el, value) {
   el.innerText = value.toString().padStart(2, '0');
}