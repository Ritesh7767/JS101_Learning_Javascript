let x = 3432
console.log(x)

carName = "Volvo"
var carName
console.log(carName)

const carname = ["mercedes", "lamborgini", "bmw"]
carname[1] = "audi"
console.log(carname[1])
carname.push = "rolls royse"
console.log(carname)
console.log(carname[3])

const client = {name:"ritesh", emp_code:56927, color:"black"}
console.log(client.color)
client.car = "lamborgini"
console.log(client.car)
client.color = "teal"
console.log(client.color)
console.log(client) 

let name = 'ritesh'
let second_name = 'rinky'
let number = 3232
let result1 = name > second_name
let result2 = name > number
console.log(result1)
console.log(result2)
console.log(typeof(result2))

let fullname = "ritesh"
fullname += " laxman "
console.log(fullname)
fullname += "gupta"
console.log(fullname)