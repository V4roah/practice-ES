const user = {username: "Dani", age: 34, country: "Colombia"}

const {username, ...values} = user;

console.log(username);
console.log(values)