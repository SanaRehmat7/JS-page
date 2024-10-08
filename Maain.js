//type-1
// //Single element selector//
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//type-2
// //Multiple element selector//
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementByClasName('item'));
// console.log(document.getElementsByTagName('li'));

//type-3 arrow function
// const items= document.querySelectorAll('.items');
// items.forEach((items) => console.log(items));

//type-4

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'hello'; // Works fine
// ul.children[1].innerHTML = 'bread';         // Works fine

// // Fix: Make the <h1> tag a string by enclosing it in quotes
// ul.lastElementChild.innerHTML = '<h1>hello</h1>'; // Now works fine

// const button = document.querySelector('.button');
// button.style.background= 'black';

// const button = document.querySelector('.button');
// button.addEventListener('click', (e) =>{
//     e.preventDefault();
//     // console.log(e.target.id);
//     // console.log('click');

//     document.querySelector('#my-form')
//     .getElementByClasName.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>hello</h1>';
// });

//type-6
const myForm = document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value=== ''|| emailInput.value===''){
        // alert('Please Enter Fields');
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
setTimeout(() =>msg.remove(), 3000);
    } else{
        // console.log('success')
        constli = document.createElement('li');
        FileList.appendChild(document.createTextNode (`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        //clear fields//
    n
    nameInput.value = '';
    emailInput.value = '';
    }

} 
//done//