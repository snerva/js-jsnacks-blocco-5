//crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietá, peso e lunghezza
//dividi in due array le zucchine che misurano piu o meno di 15 cm. 
//stampa le somme del peso dei due gruppi 

const zucchine = [
    {
        varieta: 'Zolotinka',
        peso: 0.7,
        lunghezza: 15
    },
    {
        varieta: 'Skvorushka',
        peso: 1.2,
        lunghezza: 25
    },
    {
        varieta: 'Medusa',
        peso: 0.8,
        lunghezza: 25
    },
    {
        varieta: 'Zucchine verdi',
        peso: 0.4,
        lunghezza: 18
    },
    {
        varieta: 'Zucchine fiorentine',
        peso: 0.4,
        lunghezza: 15
    },
    {
        varieta: 'Zucchine trombetta',
        peso: 1.2,
        lunghezza: 60
    },
    {
        varieta: 'Zucchine gialle',
        peso: 0.3,
        lunghezza: 15
    },
    {
        varieta: 'Patisson',
        peso: 0.2,
        lunghezza: 10
    },
    {
        varieta: 'Bianca Triestina',
        peso: 1.5,
        lunghezza: 30
    },
    {
        varieta: 'Crookneck',
        peso: 0.6,
        lunghezza: 21
    }
]


const groupMajor = [];
const groupMinor = [];

zucchine.forEach(zucchino => {
    console.log(zucchino.lunghezza);
    
    if (zucchino.lunghezza < 15){
        groupMajor.push(zucchino)
        return groupMajor
    }else {
        groupMinor.push(zucchino)
        return groupMinor
    }
    
})

console.log(groupMajor);
console.log(groupMinor);

let totalGroupMajor = 0;
let totalGroupMinor = 0;

groupMajor.forEach(zucchino => {
    console.log(zucchino.peso);

    totalGroupMajor += zucchino.peso;
    return totalGroupMajor
})

groupMinor.forEach(zucchino => {
    console.log(zucchino.peso);

    totalGroupMinor += zucchino.peso;
    return totalGroupMinor
})


console.log(totalGroupMajor);
console.log(totalGroupMinor);