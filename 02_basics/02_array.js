const marvel_heros =["Thor", "Iron Man", "Spider Man"]
const dc_heros =["Superman", "Flash", "Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

//const combinedHeros=marvel_heros.concat(dc_heros)
//console.log(combinedHeros);

const combinedHeros=[...marvel_heros,...dc_heros]
//console.log(combinedHeros)

const another_array =[1, 2, 3, [4, 5, 7], 8, 9,[10 ,11, [12 , 13 ]]]

const real_another_array = [another_array.flat(Infinity)]
console.log(another_array)
console.log(real_another_array)

console.log(Array.isArray("Ishan"))
console.log(Array.from("Ishan"))
console.log(Array.from({name : "Ishan"})) // Intresting for interview

let score1= 100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3))