//* A CONTINUACIÓN VEREMOS TODOS LOS TIPOS DE COMPARACIÓN QUE PUEDEN EXISTIR EN JAVASCRIPT.

// Comparación de igualdad
console.log(5 == "5"); // true (compara solo el valor)
console.log(5 === "5"); // false (compara valor y tipo)

// Comparación de desigualdad
console.log(5 != "5"); // false (compara solo el valor)
console.log(5 !== "5"); // true (compara valor y tipo)

// Comparaciones mayor y menor
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false

// Comparación con objetos
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 == obj2); // false (comparación por referencia)
console.log(obj1 === obj2); // false (diferentes referencias en memoria)

// Comparación con null y undefined
console.log(null == undefined); // true (considerados equivalentes sin tipo)
console.log(null === undefined); // false (diferentes tipos)

// Comparación con NaN
console.log(NaN == NaN); // false (NaN no es igual a sí mismo)
console.log(isNaN(NaN)); // true (verifica si es NaN)

// Comparación con valores booleanos
console.log(true == 1); // true (true se convierte a 1)
console.log(false == 0); // true (false se convierte a 0)
console.log(true === 1); // false (diferente tipo)
console.log(false === 0); // false (diferente tipo)
