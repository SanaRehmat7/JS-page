            //PART 1//
// alert('hello');
// let & const have a block-leve scope
// let age= 25;
// age= 31;
// console.log(age);

// score;
// score = 10;
// console.log(score);
                      
               //PART 2//
// string, numbers, boolean, null, undefined//

// const name= 'sana';
// const age = 23
// const rating= 4.5;
// const isCool= true;
// const S=null;
// const D=undefined;
// let l;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof S);
// console.log(typeof D);
// console.log(typeof l);

                  //PART 3//
//string let see concatenation//
// const name= 'choocha';
// const age= 25;
// //concatenation...
// console.log('my name is ' + name + ' and i am ' +age);
// //Tamplate string 1 type//
// console.log(`My name is ${name} and i am ${age}`);
// //typ 2//
// const hello = `my name is ${name} and i am ${age}`;
// console.log (hello);

                   //PART 4//
//string properties in msg//
//...main...// const s= 'hello world';
// console.log(s. toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
//(0,5) is the length of characters digits...
// console.log(s.split(''));
// const D = 'sana, Rehmat, coding';
// console.log(D.split(' , '));

                  //PART 5//
//Array - variables that hold the multiple values...//
//  const numbers= new Array (1,2,3,4,5);
//  console.log(numbers);
//  const fruits= ['apples', 'oranges', 'pears', 'grapes'];
// //  console.log(fruits);
//  fruits[3]='grapes';
//  //for adding another elem
//
//  fruits.push('mango');
//  fruits.unshift('peach');
//  fruits.pop();
// //array started with 0 and if we declare one fruit then org will be 1 and anoters so on//
// //e.g
// //for true or fals//
// console.log(Array.isArray(fruits));
// //for checking inde
// console.log(fruits.indexOf('pears'));
// console.log(fruits);

                      //PART 6//
// const person ={
//     firstName: 'choocha',
//     lastName: 'Ameer Haider',
//     age: 25,
//     hobbies: ['painting', 'sleeping', 'screning'],
//     address:{
//         street: '71 main st',
//         city: 'lahore',
//         state: 'PK'
//     }
// }
// console.log(person);
// console.log(person.lastName);
// console.log(person.hobbies[1]);
// const { firstName,  lastName, address:{city} }=person;
// console.log(city);
// alert(person);

//add more properties//
// person.email = 'choocha@gmail.com';
// console.log(person);

                     //PART 7//
// const todos=[
//     {
//      id: 1,
//      Text: 'take it easy' ,
//      isCompleted:true
// },
// {
//     id: 2,
//     Text: 'time to do something' ,
//     isCompleted:true
// },
// {
//     id: 3,
//     Text: 'lets start' ,
//     isCompleted:true
// },
// {
//     id: 4,
//     Text: 'at the end of' ,
//     isCompleted: false
// }
// ];
                 //functional programming//
//forEach, map, filter
// const todoText=todos.map(function(todo){
// return todo.Text;
// });
// console.log(todoText);
//filter//
// const todoCompleted=todos.filter(function(todo){
//     return todo.isCompleted===true;
// });
// console.log(todoCompleted);
//for loop//
// for(let i=0; i<todos.length;i++){
//     console.log(todos[i].Text);
// }
// console.log(todos);
// 
// JSON converter
// const todosJSON= JSON.stringify(todos);
// console.log(todosJSON);

//FOR LOOP//

// for(let i=0; i<10; i++){
// // console.log(i);
// console.log(`For Loop Numbers: ${i}`);
// }

//while loop//

// let i=0;
// while (i<10){
//     console.log(`while loop numers:${i}`);
//     i++;
// }
// for(let i=10; i<todos.length;i++){
//     console.log(todos[i].Text);
// }


//                       //PART 8//
//if else// SIMPLE--                     
// const r=20;
// if(r==10){

// // console.log('r is 10');
// // }
// // else if (r>10){
// //     console.log('r is greater than 10');
// // }
// // else{
// // console.log('r is less than 10');
// }

// TWO VALUES//
// const d= 5;
// const s= 10;
// if(d>4 || s>9 ){
// console.log('d is moore than 4 or s is more than 9');
// }

// if (d>4) {
//     if (s>9) {

//     }
// }
//ternary operators//
// const y=10;
// const color=y>10? 'red':'blue';
// console.log(color);
         //switches//
// const y=10;
// const color= 'green';
// switch(color) {
//     case 'red':
//         console.lo('color is red');
//         break;
//         case 'blue':
//             console.log('color is blue');
//         break;
//         default:
//             console.log('color is not red or blue');
//             break;
// }


                    //PART 9//
                    //Functions//
 //1-                
//   function addNum  (num1 , num2){
//     console.log(num1 + num2);
//   }   
//   addNum(5,10);    
//2-
// function addNum  (num1 , num2){
//     return num1 + num2;
//   }   
//   console.log(addNum(8,10)); 
  //3-arrow function--
//   const addNum = (num1=1, num2= 1) =>{
//     return num1 + num2;
//   }
//   console.log(addNum(4,5));

  //4-
//   const addNum = num1 => num1 +5;
//   console.log(addNum(5));
//  todos.forEach(todo) = console.log(todo);


                       //PART 10//
            //OBJECT ORIENTED PROGRAMMING (OOP)//
//constructor function...//
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getFullName = function(){
//     // return `${this.firstName} ${this.lastName}`;
//     // }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;   
// }
                        
                         //part 11//
//class//

// class person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//        return this.dob.getFullYear(); 
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// //instantiate object//
// const person1 = new person('choocha', 'Ameer Haider', '2000-08-26');
// const person2 = new person('sana', 'rehmat ali', '2003-07-06');
// // const person3 = new Person('sabi', 'rehmat ali', '2004-03-21');
// // const person4 = new Person('sadi', 'rehmat ali', '2005-07-21');
// // console.log(person4.firstName);
// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1);
// we add new with dob for running

                      
                       