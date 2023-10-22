    // Arrays destructure

let fruits = ["Banana", "Apples"];
let [a,b] = fruits;
console.log(a,b)

// object destructuring

let user = {username: "Daniel", age: 29}
let {username, age} = user;
console.log(username, age)

// spread operator 

let person = {name: "Daniel", age: 29}
let country = "Mexico"

let data = {id:1, ...person, country}
console.log(data)

// rest 


function sum(num, ...values) {
    console.log(values)
    console.log(num)
    console.log(num + values[0])   
    return num + values[2]
}

console.log(sum(1,2,3,4,5))