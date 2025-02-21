//* A CONTINUACIÓN VAMOS A VISUALIZAR CÓMO SE TRABAJA Y REACCIONAN LOS INCREMENTOS Y DECREMENTOS.
// Operadores Incremento / Decremento

let a, b, c;
a = 0;

++a;
// Pre-incremento
console.log(a);

a++;
// Post-incremento
console.log(a);

--a;
// Pre-decremento
console.log(a);

a--;
// Post-decremento
console.log(a);


//* EJEMPLO
a = 5
b= 2
c= ++a * b--
d= ++a * b--
console.log(c);
console.log(d);

// Cuando se utiliza por primera vez la variable y es (--x ó ++x) se aumenta o decrementa de inmediato el valor.
// Cuando se utiliza por segunda vez la variable y es (x-- ó x++) se aumenta o decrementa al ser utilizado en segunda ocasión.


