/* 
Dadas dos matrices no vacías de números enteros, escribe una función que determine si la segunda matriz es una subsecuencia de la primera.

Una subsecuencia de una matriz es un conjunto de números que no necesariamente son adyacentes en la matriz, pero que están en el mismo orden en que aparecen en la matriz. Por ejemplo, los números [1, 3, 4] forman una subsecuencia de la matriz [1, 2, 3, 4], al igual que los números [2, 4]. Ten en cuenta que un solo número en una matriz y la matriz misma son ambas subsecuencias válidas de la matriz.

Entrada de ejemplo:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Salida de ejemplo:
true
*/

const isSubsequence = ( array = [], subsequence = []) =>{

    if ( array.length <= 0 || subsequence.length <=0 ) {
        return 'The array does not have to be empty';
    }

    let aux= 0
    for (let i = 0; i < array.length; i++) {
        if( array[i] === subsequence[aux] ){
                aux++;
        }
        
    }
    return aux === subsequence.length
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequence = [1, 6, -1, 10]

console.log(isSubsequence(array,subsequence));