//scrivi una function che accetti una stringa come argomento e la return reverse 
const saluto = reverseSaluto('hello')

function reverseSaluto(stringa){
    return stringa.split('').reverse().join(''); 
}

console.log(saluto);