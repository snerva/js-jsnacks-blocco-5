//scrivi una function che accetti tre arguments: un array e due numbers (a < b e b >= array.lenght)
//function return newArray con i valori che hanno posizione compresa tra a e b
const list = [1, 5, 12, 26, 69];
const a = 2;
const b = 30;

const newList = mix()

function mix(){
    let newList = [];
    list.forEach(i => {
        console.log(i);
        if(i >= a && i <= b){
           newList.push(i);           
        }
    });
    return newList
}

console.log(newList);