function* iterate(arr){
    for(let value of arr){
        yield value;
    }
}

const it = iterate(['oscar','david','ana','isabel']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)


export function* getId() {
    let num = 0
    while (true) {
      yield `D${num+=1} `
    }
  
  
  }
  
let numMichi = getId()
console.log(numMichi.next().value)
console.log(numMichi.next().value)
console.log(numMichi.next().value)
console.log(numMichi.next().value)
