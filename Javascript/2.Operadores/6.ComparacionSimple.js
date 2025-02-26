//* Operadores Relacionales (Comparacion) simple dentro de JavaScript.
let a = 5;
let b = '5';
console.log(a);
console.log(b);


//* Operadores igualdad ==
//* (solo compara valores, y hace una conversion si es necesario)
console.log("a == b -> ", a == b);


//* String interpolation
console.log(`${a} == ${b} -> ${a == b}`);


//* Operador igualdad estricta o exacto
//* se compara el valor y el tipo de dato
console.log("a === b -> ", a === b);


//* String interpolation
console.log(`${a} === ${b} -> ${a === b}`);

//* Como podemos observar al realizar comparacion no solo por el dato sino por el tipo
//* podemos generar mayor enfoque en que se cumplan las condiciones como corresponde. 
