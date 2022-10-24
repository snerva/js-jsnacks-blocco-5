//crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietá, peso e lunghezza
//calcola quanto pesano tutte le zucchine 

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

let total = 0;

zucchine.forEach(zucchino => {
    console.log(zucchino.peso);

    total += zucchino.peso;
    return total
})

console.log(total);