/* 
Escribe una función que reciba una matriz no vacía de enteros distintos y un número entero que representa una suma objetivo. 
Si cualquier par de números en la matriz de entrada suma la suma objetivo, la función debe devolverlos en una matriz, en cualquier orden. Si no hay dos números que sumen la suma objetivo, la función debe devolver una matriz vacía.

Ten en cuenta que la suma objetivo debe obtenerse sumando dos números diferentes en la matriz; no puedes sumar un solo número consigo mismo para obtener la suma objetivo.

Puedes asumir que habrá a lo sumo un par de números cuya suma sea igual a la suma objetivo.

Entrada de ejemplo:
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Salida de ejemplo:
[-1, 11] // los números podrían estar en orden inverso
*/

const escontrarParSuma = ( matriz = [] , sumaObjetivo = 0 ) => {

    if ( matriz.length <= 0 ) {
        return 'La matriz tiene no tiene que estar vacia';
    }

    const arraySumaObjetivo = [];
 
    for( let i = 0; i < matriz.length - 1; i++){

        for (let j = i + 1; j < matriz.length; j++) {
            const resultado =  matriz[i] + matriz[j] === sumaObjetivo;
            if ( resultado ){
                arraySumaObjetivo.push( [ matriz[i], matriz[j] ]);
            }
          
            
        }
    }
    return arraySumaObjetivo;


}
const matriz = [3, 5, -4, 8, 11, 1, -1, 6, 4];
const sumaObjetivo = 10;

console.log(escontrarParSuma( matriz,sumaObjetivo ));
