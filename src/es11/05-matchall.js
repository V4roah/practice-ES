const regex = /\b(Apple)+\b/g

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc.'

for(const match of fruit.matchAll(regex)){
    console.log(match)
}