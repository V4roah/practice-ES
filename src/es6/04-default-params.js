function newUser(name, age, country){
    var name = name || "Daniel"
    var age = age || 23
    country = country || "Colombia"
    console.log(name, age, country)
}

newUser()
newUser("XXXXXX", 23, "CL")

function newAdmin (name = "Daniel", age = 23, country = "Colombia"){
    console.log(name, age, country)
}

newAdmin()
newAdmin("XXXXXX", 23, "CL")
