//scrivi una function che fonda due array (con stesso numero di elementi) prendendo da uno e dall altro in modo alternato.
//creo due array
//ciclo dentro entrambe e push elementi in nuova lista (films)

const movies = ['Avatar', 'Star Wars', 'Back to the future', 'Blade runner'];
console.log(movies);

const tvSeries = ['Supernatural', 'Heroes', 'Fringe', 'Big bang theory'];
console.log(tvSeries);

const films = alternateNewList(movies, tvSeries);

function alternateNewList(array1, array2) {
    let films = [];
    for (let i = 0; i < array1.length || i < array2.length; i++) {
      if (i < array1.length) {
        films.push(array1[i]);
      }
      if (i < array2.length) {
        films.push(array2[i]);
      }
    }
    return films;
}
console.log(films);