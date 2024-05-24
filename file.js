// let names = ["Fazal" , "Ali" , "Faizan" , "Hamza" , "Hanzala"  , false , ["Hasan" , "qasim"]];
// console.log(names);
// console.log(names.length)




// let car = "toyota";
// let cars = ["nissanGTR" , "mercedes" , "honda"];
// cars.push ("BMW");
// cars.pop("")
// cars.unshift("ferrari" , "Lamborghini" , "Supra");
// cars.shift("")
// console.log(cars) 




// let bikes = ["Honda" , "KTM" , "Ducati" , "Yamaha" , "Ninja" , "Duke" , "Choper"];
// bikes[1].pop();
// bikes.splice(5 , 0 , "Kawasaki" , "BMW");
// bikes.splice(3 , 2);
// console.log(bikes);




// let newArray = bikes.split["kawasaki"];
// console.log(newArray)





// const num = "10";
// console.log(typeof(num))


// const fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple" , "Strawberry"]
// let check = document.querySelector("#check");
// function getInputValue(){
//     console.log(check.value)
//     if(fruits.includes(check.value)){
//         console.log('fruit available haa..')
//         h2.innerHTML = `${check.value} is available`
//     }
//     else{
//         console.log('fruit available nahi ha');
//         h2.innerHTML = `${check.value} is not available`
//     }
    
    
//     input.value = ''
// }




// loop started 
// infinite loop
// loop ke ander loop 

// let userInput = +prompt("Enter a number");
// const times = +prompt("How many times");

// for(let i = 1; i <= times; i++){
    // console.log("Hello, Loop!");
//     console.log(`${userInput} * ${i} = ${userInput*i}`)
// }




// for (let i = 1; i <= 10; i++) {
//     console.log("Outer Loop ===>" , i);

//     for (let j = 1; j <=5; j++) {
//         console.log("Inner Loop ===>" , j);
//     }
// }



// 1 to 100 table 

// for (let i = 1; i <= 100; i++) {
//     console.log("Table of ===>" , i);

//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}` );
//     }
// }




// let bikes = ["Honda" , "KTM" , "Ducati" , "Yamaha" , "Ninja" , "Duke" , "Choper"];
// console.log(bikes)
// let ul = document.querySelector("ul");
// for (let i = 0; i < bikes.length; i++) {
//     // console.log(bikes [i])
//     ul.innerHTML += `<li>${bikes[i]}</li>`
// }




// function renderol()
// {
//     var input = document.querySelector('ol');
//     let bikes = ["Honda" , "KTM" , "Ducati" , "Yamaha" , "Ninja" , "Duke" , "Choper"];
//     // for(i = 0; i < bikes.length; i++){
//     // ol.innerHTML += `<li>${bikes[i]}</li>`
//     // }
//     let i = 0;
//     while(i < bikes.length){
//     input.innerHTML += `<li>${bikes[i]}</li>`
//     i++;
//     }

// }





// while loop
// let i = 15;
// while(i < 14){
//     console.log("while Loop===>", i);
//     i++
// }




//Do while loop
// let j = 15;
// do{
//     console.log("do while Loop===>", i);
//     i++
// }while(j < 14)




// let arr = ['fazal','ali','bilal','hassan'];
// let ol = document.querySelector('ol')
// for (let i = 0; i < arr.length; i++) {
//     ol.innerHTML += `<li>${arr[i]}</li>`
//     console.log(arr[i])
// }




// const todo = document.querySelector("#todo");
// function addValue(){
    
// }




// let name1 = document.querySelector("#name1");
// let name2 = document.querySelector("#name2");
// let head1 = document.querySelector("#head1");
// let head2 = document.querySelector("#head2");
// function getValue(){
//     head1.innerHTML = `${name1.value}`;
//     head2.innerHTML = `${name2.value}`;
// }





// let form1 = +document.querySelector("#form1").value;
// let form2 = +document.querySelector("#form2").value;
// let h1 = document.querySelector("h1");
// function getValue(){
//     h1.innerHTML = form1 + form2;
// }




// let fruit = ["Apple" , "Banana" , "Orange" , "Mango" , "Strawberry" , "Pineapple" , "Watermelon" , "Guava" , "Appricot" , "Blackberry", "Blueberry" , "Canary Melon" , "Dates" , "Papaya" , "Lychee" , "Peach" , "Pear" , "Dragonfruit" , "Grapes" , "Plum"];
// let ol = document.querySelector("ol");
// for (let i = 0; i < fruit.length; i++) {
//     ol.innerHTML += `<li>${fruit[i]}<Button onclick="deleteTodo(${i})">Delete</Button></li>`;
// }

// function showTodo(){
//     ol.innerHTML = "";
//     for (let i = 0; i < fruit.length; i++) {
//         ol.innerHTML += `<li>${fruit[i]}<Button onclick="deleteTodo(${i})">Delete</Button></li>`;
//     }
// }

// function deleteTodo(index){
//     fruit.splice(index , 1);
//     showTodo();
// }



// toLowerCase()
// toUpperCase()
// length 
// charAt 
// indexOf 
// slice 
// replace
// replaceALL
// split 





// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);




// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)




// let para =document.querySelector('#para');
// let user = "Fazal";
// para.innerHTML = `${user}`;
// console.log(user);

// function upperCase(){
//     if(para.innerHTML===`${user}`){
//         para.innerHTML=`${user.toUpperCase()}`
//     }else{
//         para.innerHTML=`${user}`
//     }
// }

// function lowerCase(){
//     if(para.innerHTML===`${user}`){
//         para.innerHTML=`${user.toLowerCase()}`
//     }else{
//         para.innerHTML=`${user}`
//     }
// }




// const age = 26;
// if(age >=18 && age <=25){
//     console.log("eliogible")
// }
// else if(age >=12 && age <=17){
//     console.log("eliogible2")
// }
// else{
//     console.log("not")
// }




// let num1 = +prompt("Enter Your Number");
// let num2 = +prompt("Enter Your Second Number");
// let sum = num1 + num2;
// console.log(sum);
// if(sum >100){
//     console.log("limit nhe hai");
// }
// else{
//     console.log("sahi hai")
// }




// function greetUser(name , age , gender){
//     console.log(`Hello ${name} , my age is ${age} , gender is ${gender} `)
// }
// // greetUser("ali" , 20 , "male")




// let input = +prompt("Enter Your Number");
// for (let i = 1; i <= 100; i++) 
// {
    // console.log(`${input} * ${i} = ${input * i}`);
//     console.log("Bahar wala loop");
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
        
//     }
// }

// const number = 20.5657687;
// const number1 = 39;
// console.log(parseInt(number));
// console.log(typeof parseFloat(number));




// let num = 10.9;
// console.log(Math.round(num));
// console.log(Math.ceil(Math.random() * 100));
// console.log(Math.floor(num));




// console.log(Math.random() * 100)





// let obj = {
//     username : 'Fazal',
//     email : 'syedfazal808@gmail.com',
//     age : 22,
//     available : true,
//     greetUser : function(){
//         return  `hello ${this.firstName}`
//     }
// }

// obj.firstName = "Ali";
// obj.lastName = "Jafferi";
// delete obj.username;

// console.log(obj.greetUser());
// console.log(obj);





// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let input3 = document.querySelector("#input3");
// let input4 = document.querySelector("#input4");


// function getValue(){
//     const obj = {
//         name : input1.value,
//         email : input2.value,
//         city : input3.value,
//         age : input4.value,
//     }
//     console.log(obj);
// }




// const obj = document.querySelector("#obj")


// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         hobbies: ["Reading", "Painting"]
//     },
//     {
//         name: "Bob",
//         age: 30,
//         hobbies: ["Playing guitar", "Cooking"]
//     },
//     {
//         name: "Charlie",
//         age: 22,
//         hobbies: ["Hiking", "Photography"]
//     },
//     {
//         name: "David",
//         age: 28,
//         hobbies: ["Running", "Watching movies"]
//     },
//     {
//         name: "Ella",
//         age: 35,
//         hobbies: ["Traveling", "Knitting"]
//     },
//     {
//         name: "Frank",
//         age: 20,
//         hobbies: ["Gaming", "Drawing"]
//     },
//     {
//         name: "Grace",
//         age: 27,
//         hobbies: ["Singing", "Dancing"]
//     },
//     {
//         name: "Hannah",
//         age: 32,
//         hobbies: ["Cooking", "Yoga"]
//     },
//     {
//         name: "Ian",
//         age: 24,
//         hobbies: ["Playing football", "Reading"]
//     },
//     {
//         name: "Jessica",
//         age: 29,
//         hobbies: ["Writing", "Cycling" , 'swimming']
//     }
// ];

// for(i = 0 ; i < users.length ; i++){
//     let hobbies = ""
//     // console.log(users[i])
//     for(j = 0; j < users[i].hobbies.length ; j++){
//         // console.log(users[i].hobbies[j])
//         hobbies +=`<li>${users[i].hobbies[j]}</li>`
//     }
    
//     obj.innerHTML += `
//     <h1>Name :  ${users[i].name} </h1> 
//     <h1>Age : ${users[i].age} </h1> 
//     <h1>Hobbies : </h1>
//     <ul>${hobbies}</ul>
//     <\hr>`
// }

// const div = document.querySelector('div')
// function click(){

//     const ul = document.createElement('UL');
//     const li = document.createElement('li');
//     const liText = document.createTextNode('Fazal');
//     li.appendChild(liText);
//     ul.appendChild(li)
//     div.appendChild(ul);
// }




// const users = [
//     {
//         name: "Alice",
//         age: 25,
//     },
//     {
//         name: "Bob",
//         age: 30,
//     },
//     {
//         name: "Charlie",
//         age: 22,
//     },
//     {
//         name: "David",
//         age: 28,
//     },
//     {
//         name: "Ella",
//         age: 35,
//     },
//     {
//         name: "Frank",
//         age: 20,
//     },
//     {
//         name: "Grace",
//         age: 27,
//     },
//     {
//         name: "Hannah",
//         age: 32,
//     }
// ];
// console.log(users);
// for (let i = 0; i < users.length; i++) {
//     div.innerHTML = `
//     <h1></h1>
//         <p></p>
//         <button onclick="render()">Add to cart</button>

// `
    
// }

// function render(){

// }




// let grade = "A";
// switch(grade){
//     case"A":
//         console.log ("Pass")
//         break
//     case "B":
//         console.log("guzara hai")
//         break
//     default:
//         console.log("fail")
//         break    
// }



// const div = document.querySelector("div");
//  const arr = ['Fazal' , 'Ali' , 'Owais' , 'Subhan' ,'Hasan'];
//  arr.forEach((item)=>{
//     console.log(item)
//  })


// arr.forEach(function (item , index){
//         console.log(item , index)
//         div.innerHTML += `<h1>${item}</h1>`
//      })





// arr.map(function (item ){
//         console.log(item )
//         div.innerHTML += `<h1>${item}</h1>`
//      })



