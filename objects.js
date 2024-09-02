const jsuser= {
    name: "Abhishek Singh",
    age : "24",
    location: "Delhi"
}
console.log(jsuser.age)
console.log(jsuser["name"])
jsuser.name= "abhi"
console.log(jsuser["name"])
Object.freeze(jsuser) // to freeze object in js to avoid changes
console.log(jsuser) 