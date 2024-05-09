/*Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
  if (numero1 >= numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
export function findLongestWord(array) {
  let arrayLongest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > arrayLongest.length) {
      arrayLongest = array[i];
    }
  }
  return arrayLongest;
}
export function sumArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
}
export function averageNumbers(array) {
  let suma = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      suma = suma + array[i];
    }
    let average = suma / array.length;
    return average;
  } else {
    return undefined;
  }
}
export function averageWordLength(array) {
  let suma = 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      suma = suma + array[i].length;
    }
    let average = suma / array.length;
    return average;
  } else {
    return undefined;
  }
}
export function uniquifyArray(array) {
  if (array.length > 0) {
    console.log("array-->" + array);
    let array2 = [];
    let idx;

    for (let i = 0; i < array.length; i++) {
      idx = array2.indexOf(array[i]);
      console.log("array[" + i + "] = " + array[i] + "index -->" + idx);
      if (idx == -1) {
        array2.push(array[i]);
      }
      if (array2.length < 1) {
        array2 = array[1];
      }
    }
    console.log(array2);
    return array2;
  } else {
    return undefined;
  }
}
export function doesWordExist(array, palabra) {
  let resultat = false;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + "/" + palabra);
    if (array[i] == palabra) {
      console.log("true");
      resultat = true;
    }
  }
  console.log("doesWordExist: " + resultat);
  return resultat;
}

export function howManyTimes(array, palabra) {
  if (array.length > 0) {
    console.log("exercici: " + array);
    let resultat = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == palabra) {
        resultat++;
      }
    }
    console.log("howmanyTimes " + palabra + ": " + resultat);
    return resultat;
  } else {
    return undefined;
  }
}
export function greatestProduct(matrix) {
  let maxProduct = 1;
  for (let i = 0; i < matrix.length; i++) {
    for(let j=0; j < matrix[i].length; j++) {

      
      let multiplicacioH = matrix[i][j] 
      if (matrix[j].length > j+1) {
        multiplicacioH = multiplicacioH * matrix[i][j+1]
      } 
      if (matrix[j].length > j+2) {
        multiplicacioH = multiplicacioH * matrix[i][j+2]
      } 
      if (matrix[j].length > j+3) {
        multiplicacioH = multiplicacioH * matrix[i][j+3]
      } 

      if (multiplicacioH > maxProduct) {
        maxProduct = multiplicacioH
        console.log("Multiplicacio Horitzontal", multiplicacioH)
      }
      
      let multiplicacioV = matrix[i][j] 
      if (matrix[i].length > i+1) {
        multiplicacioV = multiplicacioV * matrix[i+1][j]
      } 
      if (matrix[i].length > i+2) {
        multiplicacioV = multiplicacioV * matrix[i+2][j]
      } 
      if (matrix[i].length > i+3) {
        multiplicacioV = multiplicacioV * matrix[i+3][j]
      } 
      if (multiplicacioV > maxProduct) {
        console.log("Multiplicacio vertical", multiplicacioV)
        maxProduct = multiplicacioV
      }
      
      let multiplicacioD = matrix[i][j] 
      if (matrix[i].length > i+1 && matrix[j].length > j+1) {
        multiplicacioD = multiplicacioD * matrix[i+1][j+1]
      } 
      if (matrix[i].length > i+2 && matrix[j].length > j+2) {
        multiplicacioD = multiplicacioD * matrix[i+2][j+2]
      } 
      if (matrix[i].length > i+3 && matrix[j].length > j+3) {
        multiplicacioD = multiplicacioD * matrix[i+3][j+3]
      } 
      if (multiplicacioD > maxProduct) {
        console.log("Multiplicacio diagonal", multiplicacioD)
        maxProduct = multiplicacioD
      }
    }
  }
  console.log(maxProduct)
  return maxProduct;
}
