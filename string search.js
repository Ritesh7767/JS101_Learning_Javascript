let text = "please locate where locate first occurs"
console.log(text.indexOf("locate"))
console.log(text.lastIndexOf("locate"))
console.log(text.indexOf("ritesh"))
console.log(text.lastIndexOf("locate", 15))
console.log(text.search("locate"))
console.log(text.search("ritesh"))


text = "A rain in SPAIN stays mainly in PLAIN"
let text2 = text.match("ain")
console.log(text2)
let text3 = text.match(/ain/)
console.log(text3)

let text4 = text.match(/ain/g)
console.log(text4)

let text5 = text.match(/ain/i)
console.log(text5)

let text6 = text.match(/ain/i)
console.log(text6)

let text7 = text.match(/ain/gi)
console.log(text7)

let text8 = text.matchAll(/ain/gi)
console.log(text8)

let text9 = text.includes("SPAIN")
console.log(text9)

let text10 = text.startsWith("A rain")
console.log(text10)
console.log(text.endsWith("PLAIN"))