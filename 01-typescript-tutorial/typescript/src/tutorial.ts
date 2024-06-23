//tasks.ts samples

/*
const btn = document.querySelector('.btn');
//must add '.?' to the element selected
btn?.addEventListener('click', () => {
  console.log('something');
}); 
//sometimes you can also use if for certainity
if (btn) {
  // do something
} 
*/

/*  
//The ! operator in TypeScript is officially known as the Non-null assertion operator. It is used to assert that its preceding expression is not null or undefined.
const btn = document.querySelector('.btn')!;

btn.addEventListener('click', () => {
  console.log('something');
});
*/

/* 
const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;
btn.disabled = true;
btn.addEventListener('click', () => {}) 
*/

