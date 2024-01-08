cars = ["lamborgini", "ferrari", "mercedes", "audi", "bmw"]
cars[2] = "volvo"
cars.push("toyota")
cars.push("asto martin")
cars.pop()
cars.push("mercedes")
console.log(cars)
console.log(cars.toString())
console.log(typeof cars)
console.log(cars.length)
console.log(cars.sort())
console.log(cars)
console.log(cars[cars.length-1])
console.log(cars[0])
console.log('\n')

for(let i = 0; i < cars.length ; i++){
    console.log(cars[i])
}

cars[9] = "TATA"
console.log(cars)
console.log(Array.isArray(cars))
console.log(cars instanceof Array)









