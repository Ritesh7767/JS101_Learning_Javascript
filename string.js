let name = "Ritesh laxman gupta"
console.log(name.length)
// let fullname = "\t ritesh \n laxman \vgupta"
// console.log(fullname)

let x = "ritesh"
let y = String("ritesh")
let z = new String("ritesh")

console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))

let fullname = "Ritesh laxman gupta"
let firstname = fullname.slice(0,6)
let firstname1 = fullname.substring(0,6)
let firstname2 = fullname.substr(0,5)
console.log(firstname)
console.log(firstname1)
console.log(firstname2 + "\n\n")
console.log(fullname)

let vivek = fullname.replace("Ritesh", "Vivek")
console.log(vivek)
let rinky = fullname.replace(/RITESH/i, "rinky")
console.log(rinky)

let text = "ritesh laxman gupta ritesh ritesh"
let text1 = text.replace(/ritesh/g , "vivek")
console.log(text1)

text2 = text.replaceAll("ritesh", "vivek")
console.log(text2)

console.log(fullname)
let upper = fullname.toUpperCase()
let lower = fullname.toLowerCase()
console.log(upper, lower)

let first = "ritesh"
let last = "gupta"

let full = first.concat(" ", last)
console.log(full)

fullname = "         ritesh laxman gupta            "
console.log(fullname)

fullname1 = fullname.trimEnd()
fullname2 = fullname.trimStart()
fullname3 = fullname.trim()

console.log(fullname1, fullname2, fullname3)

let number1 = 5
let number = number1.toString()
text = number.padStart(4,"x")
console.log(text)

fullname = "Ritesh"
let character = fullname.charAt(0)
console.log(character)

let arr = fullname.split("")
console.log(arr)
