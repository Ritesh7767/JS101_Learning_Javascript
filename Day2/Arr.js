supercars = ["lamborgini", "ferarri", "bugatti"]
console.log(supercars)
console.log(supercars.length)
supercars[2] = "asto martin"
supercars.push("mercedes")
let removed_car = supercars.pop()
supercars.push("audi")
console.log(supercars)
console.log(removed_car)
supercars[supercars.length] = "supra"
console.log(supercars)
supercars[6] = "rolls royse"
console.log(supercars)

let superString = supercars.toString()
console.log(superString)

person = new Array("rites")
let car = supercars.shift()
console.log(supercars)
console.log(car)
console.log(supercars)
supercars.unshift("lamborgini")
console.log(supercars)
console.log(supercars.length)
delete supercars[1]
console.log(supercars)
let name = ["ritesh", "rinky", "vivek", "ritu"]
let newarr = supercars.concat(name)
console.log(newarr)
let data1 = ["vampire", 7767823741, 56921]
let data2 = ["OO7", "james bond"]
let finalData = supercars.concat(data1, data2, newarr)
console.log(finalData)
let arr = supercars.flat();
console.log(arr)
arr = ["ritesh", "rinky"]
console.log(arr)
newarr = [[1,2,3], [4,5,6], [7,8,9]]
console.log(newarr)
let ritesh = newarr.flat()
console.log(ritesh)










