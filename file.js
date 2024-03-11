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


const fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Pineapple" , "Strawberry"]
let check = document.querySelector("#check");
function getInputValue(){
    console.log(check.value)
    if(fruits.includes(check.value)){
        console.log('fruit available haa..')
        h2.innerHTML = `${check.value} is available`
    }
    else{
        console.log('fruit available nahi ha');
        h2.innerHTML = `${check.value} is not available`
    }
    
    
    input.value = ''
}
