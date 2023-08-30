let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

let ceoList = [
    {name: "a", age: 23, ceo:true},
    {name: "b", age: 25, ceo:true},
    {name: "c", age: 23, ceo:false}
]

let printName = (item)=>{console.log(item);}

// forEach
// names.forEach(printName);
names.forEach((item, index)=>{
    console.log(item, index)
});

// map -> array
let data = names.map((item)=>{
    return item
});
console.log(data);

// filter -> array
let dataFil = ceoList.filter((item)=>{
    return item.ceo == true
});
console.log(dataFil);

let dataFil2 = names.filter((item)=>{
    return item.startsWith("L")
});
console.log(dataFil2);

// some -> boolean
let dataSome = names.some((item)=>{
    return item.startsWith("L")
});
console.log(dataSome);

// every -> boolean
let dataEvery = names.every((item)=>{
    return item.startsWith("L")
});
console.log(dataEvery);

// find
let dataFind = names.find((item)=>{
    return item.startsWith("L")
});
console.log(dataFind);

// findIndex
let dataFindIndex = names.findIndex((item)=>{
    return item.startsWith("L")
});
console.log(dataFindIndex);