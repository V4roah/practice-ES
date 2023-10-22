var lastname = "Daniel"
lastname = 'Felipe'
console.log(lastname)

const animal = 'dog'
animal = 'cat'
console.log(animal) 

const fruits = () => {
    if(true){
        var fruit1 = 'apple' // functio n scope
        let fruit2 = 'banana' // block scope
        const fruit3 = 'kiwi' // block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()