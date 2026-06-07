// ######################################################################
// Scripts para ejercicios de clase
// ######################################################################

//en html se conecta dentro del head, medianto la etiqueta <script src="script.js"></script>

console.log("Estamos conectados a Javascript");

document.addEventListener("DOMContentLoaded", function () {
  // addEventListener es un método que se utiliza para escuchar eventos en el navegador.
  // En este caso, estamos escuchando el evento "load", que se dispara cuando la página ha terminado de cargarse completamente.
  // La función que se pasa como segundo argumento se ejecutará cuando ocurra ese evento, mostrando una alerta de bienvenida al usuario.
  alert(
    "Bienvenido a mi sitio web, donde te demostraré algunos conocimientos de Javascript. Presiona F12 para abrir la consola y ver el resultado de mis ejemplos.",
  );
});

// const animal = {
//   nombre:"",
//   hablar(sonido){
//     console.log(`${this.nombre} dice ${sonido}`);
//   },
// }

// const perro = Object.create(animal);
// perro.nombre = "Firulais";
// perro.hablar("guau guau");

// class animal{
//   constructor(nombre){
//     this.nombre = nombre;
//   }
//   hablar(sonido){
//     console.log(`${this.nombre} dice ${sonido}`);
//   }
// }

//#################################
//    1. VARIABLES Y TIPOS
//#################################
console.group("🔹 1. Variables y Tipos de Datos");
// let: es una palabra clave que se utiliza para declarar variables en JavaScript.
// Las variables declaradas con let pueden ser reasignadas a nuevos valores.
let animal = "perro";
console.log(animal); // perro
// const: Las constantes son variables cuyo valor no puede ser cambiado una vez que han sido asignadas.
// Deben ser inicializadas con un valor en el momento de su declaración.
const pi = 3.14;
console.log(pi); // 3.14
// var: Las variables declaradas con var tienen un alcance de función.
// Son accesibles dentro de la función donde fueron declaradas, pero no fuera de ella.
var isAvailable = true;
console.log(isAvailable); // true

//tipos de datos: string, number, boolean
//variables string
let product = "Laptop";
console.log(product); // "Laptop"
product = "Smartphone";
console.log(product); // "Smartphone"
//variables numericas
let price = 1000;
price += 200; // price = price + 200
console.log("El precio del producto es: " + price); //
console.log("El precio del producto es:", price); //
console.log(`El precio del producto es: ${price}`); // template literals
console.log(price);
// variables booleanas
let isStock = true;
console.log(isStock); // true
isStock = false;
console.log(isStock); // false

//typeof: se utiliza para determinar el tipo de dato de una variable o expresión.
console.log(typeof price); // number
console.log(typeof animal); // string

//#################################
//   2. OPERADORES Y EXPRESIONES
//#################################
console.group("🔹 2. Operadores y Expresiones");
//operadores aritméticos: +, -, *, /, %
const sum = 5 + 10; // suma de dos números, el resultado es 15
const difference = 10 - 5; // resta de dos números, el resultado es 5
const mult = 5 * 10; // multiplicación de dos números, el resultado es 50
const quotient = 10 / 5; // división de dos números, el resultado es 2
const remainder = 10 % 3; // módulo de dos números, el resultado es 1
const exponentiation = 2 ** 3; // exponenciación, el resultado es 8 (2 elevado a la potencia de 3)

//operadores de asignación: =, +=, -=, *=, /=
let count = 0; // asignación inicial, count es igual a 0
count += 5; // count ahora es igual a count + 5, lo que resulta en 5
count -= 2; // count ahora es igual a count - 2, lo que resulta en 3
count *= 4; // count ahora es igual a count * 4, lo que resulta en 12
count /= 3; // count ahora es igual a count / 3, lo que resulta en 4
count++; // count ahora es igual a count + 1, lo que resulta en 5
count--; // count ahora es igual a count - 1, lo que resulta en 4

//operadores de comparación: ==, ===, !=, !==, >, <, >=, <=
console.log(5 == "5"); // true, realiza una conversión de tipo antes de comparar los valores
console.log(5 === "5"); // false, compara tanto el valor como el tipo de datos
console.log(5 != "5"); // false, realiza una conversión de tipo antes de comparar los valores
console.log(5 !== "5"); // true, compara tanto el valor como el tipo de datos
console.log(10 > 5); // true
console.log(5 < 10); // true
console.log(5 >= 5); // true
console.log(4 <= 5); // true

// operadores lógicos: && (AND), || (OR), ! (NOT)

// cadenas de texto
const firstName = "Juan";
const lastName = "Pérez";
const fullName = firstName + " " + lastName;
console.log(fullName); // "Juan Pérez"

// template literals: permiten incluir variables y expresiones dentro de una cadena de texto utilizando la sintaxis ${variable} o ${expresión}.
const game = "Football Manager 2026";
const platform = "PC";
const finalPrice = 39.99;

const message = `Producto: ${game} | Plataforma: ${platform} | Precio: ${finalPrice} €`;
console.log(message); // "Producto: Football Manager 2026 | Plataforma: PC | Precio: 39.99 €"

const message1 = `El producto ${game} tiene un precio de ${finalPrice}.`;
console.log(message1); // "El producto Football Manager 2026 tiene un precio de 39.99."

// concatenación de cadenas: es el proceso de unir dos o más cadenas de texto para formar una sola cadena.
let nombreCompleto = firstName + " " + lastName; // concatenación utilizando el operador +
console.log(nombreCompleto); // "Juan Pérez"

// coerción de tipos
// convierte automáticamente un valor de un tipo a otro cuando se realiza una operación entre valores de diferentes tipos.
console.log("El primer valor es:", "5" + 10); // concatenación de string y número, el resultado es "510"
console.log("El primer valor es:", 5 + "10"); // suma de string y número, el resultado es "510"
console.log("El segundo valor es:", 5 * 10); // multiplicación de números, el resultado es 50
console.log("El tercer valor es:", "5" * "10"); // multiplicación de string y número, el resultado es 50
console.log("El cuarto valor es:", "5" + "10"); // concatenación de string y número, el resultado es "510"

//#################################
//   3. CONTROL DE FLUJO
//#################################
console.group("🔹 3. Control de Flujo");
// operadores lógicos: && (AND), || (OR), ! (NOT)

// if-else: estructura de control que permite ejecutar diferentes bloques de código según una condición.
// Si la condición es verdadera, se ejecuta el bloque de código dentro del if;
// si es falsa, se ejecuta el bloque de código dentro del else.

let productPrice = 49.99;
if (productPrice < 50) {
  console.log("El producto es barato");
} else {
  console.log("El producto es caro");
}

let isTimeday = 12; // ejemplo de valor para isTimeday
if (isTimeday >= 7 && isTimeday < 21) {
  console.log("Es de día");
} else {
  console.log("Es de noche");
} // muestra "Es de día" en la consola.

let nota = 85; // ejemplo de valor para nota
if (nota >= 90) {
  console.log("Sobresaliente");
} else if (nota >= 70) {
  console.log("Notable");
} else if (nota >= 60) {
  console.log("Bien");
} else if (nota >= 50) {
  console.log("Suficiente");
} else {
  console.log("Necesita mejorar");
} // muestra "Notable" en la consola

// truthy values: son valores que se consideran verdaderos en un contexto booleano.
const userName = "Juan";
if (userName) {
  console.log("El nombre de usuario no está vacío.");
} else {
  console.log("El nombre de usuario está vacío.");
}

// falsey values: son valores que se consideran falsos en un contexto booleano.
// los mas importantes son: false, 0, "", null, undefined y NaN.
const searchText = "";
if (searchText) {
  console.log("El texto de búsqueda no está vacío.");
} else {
  console.log("El texto de búsqueda está vacío.");
}
// false
const valorFalse = false;
if (valorFalse) {
  console.log("No se verá");
} else {
  console.log("Es falsy (false)");
}
// 0
const valorCero = 0;
if (valorCero) {
  console.log("No se verá");
} else {
  console.log("Es falsy (0)");
}
// null (ausencia de valor)
const valorNull = null;
if (valorNull) {
  console.log("No se verá");
} else {
  console.log("Es falsy (null)");
}
// undefined (variable no asignada)
let valorUndefined;
if (valorUndefined) {
  console.log("No se verá");
} else {
  console.log("Es falsy (undefined)");
}

// NaN (Not a Number)
const valorNaN = parseInt("Hola");
if (valorNaN) {
  console.log("No se verá");
} else {
  console.log("Es falsy (NaN)");
}

// igualdad estricta e igualdad débil
// La igualdad estricta (===) compara tanto el valor como el tipo de datos.
// La igualdad débil (==) compara solo el valor, realizando una conversión de tipo si es necesario.
const num1 = 5;
const num2 = "5";
console.log(num1 === num2); // false
console.log(num1 == num2); // true
console.log(typeof num1); // number
console.log(typeof num2); // string
console.log(5 == "5"); // true
console.log(5 === "5"); // false

//operadors logicos &&, ||, !
const isAdmin = true;
const isLoggedIn = true;

const canAccess = isAdmin && isLoggedIn; // canAccess será true solo si ambos isAdmin e isLoggedIn son true
console.log("¿Puede acceder?", canAccess); // true

const hasPermission = isAdmin || isLoggedIn; // hasPermission será true si al menos uno de los dos es true
console.log("¿Tiene permiso?", hasPermission); // true

const isGuest = false;
console.log("¿Es invitado?", !isGuest); // true, porque isGuest es false, entonces !isGuest es true

const isArchived = false;
if (!isArchived) {
  console.log("El elemento sigue activo");
} // En este caso, como isArchived es false, !isArchived es true, por lo que se ejecutará el bloque de código dentro del if.

//Sentencia if-else
const temperature = 30;
if (temperature > 25) {
  console.log("Hace calor");
} else {
  console.log("Hace frío");
}

// sentencia if-else if compuesta
let isTimeday1 = 12; // ejemplo de valor para isTimeday
if (isTimeday1 >= 7 && isTimeday1 < 21) {
  console.log("Es de día");
} else {
  console.log("Es de noche");
} // muestra "Es de día" en la consola.

// Operador ternario
const age = 18;
const canVote = age >= 18 ? "Puede votar" : "No puede votar";
console.log(canVote); // "Puede votar"

// sentencia switch
const day = "lunes";
switch (
  day // la variable day se evalúa en cada caso del switch
) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  default:
    console.log("No se ha especificado un día válido");
}

//#################################
//         4. FUNCIONES
//#################################
console.group("🔹 4. Funciones");
// Las funciones son bloques de código reutilizables que realizan una tarea específica. Se pueden definir utilizando la palabra clave function, y pueden aceptar parámetros y devolver valores.
//parametro: es una variable que se utiliza para recibir un valor cuando se llama a la función. Es una forma de pasar información a la función para que pueda realizar su tarea con esa información.
//argumento: es el valor real que se pasa a la función cuando se llama. Es el dato que se asigna al parámetro de la función para que esta pueda trabajar con él.
//return: es una palabra clave que se utiliza dentro de una función para indicar el valor que la función debe devolver al ser llamada. Cuando se ejecuta una declaración return, la función termina su ejecución y devuelve el valor especificado al lugar donde fue llamada.
//caso 1
let name = "Juan";
function greet(name) {
  // la función greet recibe un parámetro llamado name
  return `Hola, ${name}!`;
}
console.log(greet(name)); // "Hola, Juan!"

//caso 2
function calculateDiscountedPrice(price, discount) {
  const finalPrice = price - price * discount;
  return finalPrice;
}

const finalPrice1 = calculateDiscountedPrice(49.99, 0.15);
const finalPrice2 = calculateDiscountedPrice(29.99, 0.15);
const finalPrice3 = calculateDiscountedPrice(39.99, 0.15);
console.log(finalPrice1, finalPrice2, finalPrice3);

//declaracion de función
function suma(a, b) {
  return a + b; // la función sum toma dos parámetros a y b, y devuelve su suma
}
let name1 = "Laptop";
let platform1 = "Amazon";
function formatProductName(name, platform) {
  return `El producto ${name} está disponible en ${platform}.`; // la función formatProductName toma dos parámetros name y platform, y devuelve una cadena formateada con esa información
}
console.log(formatProductName(name1, platform1)); // "El producto Laptop está disponible en Amazon."

//funcion anonima
const greetAnonymous = function (name) {
  return `Hola, ${name}!`;
};

//arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 10)); // 50

const formatProductNameArrow = (name, platform) => {
  return `El producto ${name} está disponible en ${platform}.`;
};
console.log(formatProductNameArrow(name1, platform)); // "El producto Laptop está disponible en Amazon."

//scope: es el contexto en el que se pueden acceder a las variables y funciones.
// Las variables y funciones declaradas en el scope global son accesibles en todo el programa.
// Las variables y funciones declaradas en el scope local solo son accesibles dentro de ese contexto específico.
function names() {
  var prueba = "Laptop";
  return prueba;
}
console.log(names()); // "Laptop"

// function names() {
//   let prueba = "Laptop";
//   return prueba;
// }
// console.log(prueba); // ERROR

// funciones dentro de funciones
function outerFunction() {
  const outerVariable = "Soy la función externa";
  function innerFunction() {
    const innerVariable = "Soy la función interna";
    console.log(outerVariable); // "Soy la función externa"
    console.log(innerVariable); // "Soy la función interna"
  }
  innerFunction();
}
outerFunction(); // al llamar a la funcion, muestra "Soy la función externa" y "Soy la función interna" en la consola.

//#################################
//         5. ARRAYS
//#################################
console.group("🔹 5. Arrays y Métodos");
// Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Los arrays pueden contener elementos de cualquier tipo de dato, incluyendo otros arrays y objetos.
// Se pueden crear utilizando la sintaxis de corchetes [] o utilizando el constructor Array.

// literal syntax
const animals = ["perro", "gato", "conejo"];
console.log(animals); // ["perro", "gato", "conejo"]
// constructor Array
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

//índices y acceso a elementos
console.log(animals[0]); // "perro"
console.log(animals[1]); // "gato"
console.log(animals[2]); // "conejo"
console.log(animals[3]); // undefined, ya que no existe un elemento en esa posición

// length: es una propiedad que devuelve el número de elementos en un array.
console.log(animals.length); // 3
console.log(numbers.length); // 5
console.log(animals[animals.length - 1]); // "conejo", accede al último elemento del array utilizando la propiedad length

// arrays: mutabilidad
const fruits = ["melocotón", "fresa", "sandía"];
console.log(fruits); // ["melocotón", "fresa", "sandía"]
fruits[2] = "melón"; // modifica el tercer elemento del array
console.log(fruits); // ["melocotón", "fresa", "melón"], el array se ha modificado a pesar de ser declarado con const, ya que const solo impide la reasignación de la variable, pero no la mutabilidad del contenido del array.
//fruits = ["melocotón", "fresa", "sandía", "melón"]; // ERROR, no se puede reasignar un nuevo array a la variable fruits, ya que fue declarada con const.

// datos heterogéneos: los arrays pueden contener elementos de diferentes tipos de datos.
const mixedArray = ["texto", 42, true, null, undefined];
console.log(mixedArray); // ["texto", 42, true, null, undefined]

// métodos de arrays
fruits.push("sandía"); // push: agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
console.log(fruits); // ["melocotón", "fresa", "melón", "sandía"]
fruits.unshift("manzana"); // agrega un elemento al inicio del array
console.log(fruits); // ["manzana", "melocotón", "fresa", "melón", "sandía"]
fruits.pop(); // pop: elimina el último elemento de un array y lo devuelve.
console.log(fruits); // ["manzana", "melocotón", "fresa", "melón"]
const firstFruit = fruits.shift(); // almacena el elemento eliminado en una variable
console.log(firstFruit); // "manzana"
console.log(fruits); // ["melocotón", "fresa", "melón"]
console.log(fruits.indexOf("fresa")); // indexOf: devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si no se encuentra.
console.log(fruits.includes("melón")); // includes: determina si un array incluye un determinado elemento, devuelve true o false según corresponda.

//#################################
//         6. OBJETOS
//#################################
console.group("🔹 6. Objetos");
// Un objeto es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (clave) y un valor.
// Los objetos pueden contener propiedades de cualquier tipo de dato, incluyendo otros objetos y arrays.
// Se pueden crear utilizando la sintaxis de llaves {} o utilizando el constructor Object.

const person = {
  name: "Juan",
  age: 30,
  isStudent: false,
};
console.log(person); // {name: "Juan", age: 30, isStudent: false}

// ACCESO A PROPIEDADES DE UN OBJETO
// dot notation: se utiliza para acceder a las propiedades de un objeto utilizando un punto seguido del nombre de la propiedad.
console.log(person.name); // "Juan"
console.log(person.age); // 30
console.log(person.isStudent); // false

// bracket notation: se utiliza para acceder a las propiedades de un objeto utilizando corchetes y el nombre de la propiedad como una cadena de texto.
console.log(person["name"]); // "Juan"
console.log(person["age"]); // 30
console.log(person["isStudent"]); // false

// modificar/añadir propiedades
person.age = 31;
person.city = "Madrid"; // añade una nueva propiedad
console.log(person); // {name: "Juan", age: 31, isStudent: false, city: "Madrid"}
// no permite redefinir el objeto, pero sí modificar sus propiedades o añadir nuevas propiedades, ya que const solo impide la reasignación de la variable, pero no la mutabilidad del contenido del objeto.

// eliminar propiedades
delete person.isStudent;
console.log(person); // {name: "Juan", age: 31, city: "Madrid"}

// métodos de objetos
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  startEngine: function () {
    console.log(
      "El motor del " + this.brand + " " + this.model + " ha arrancado.",
    );
  },
};
car.startEngine(); // "El motor del Toyota Corolla ha arrancado."

//objetos anidados
const company = {
  name: "Tech Solutions",
  employees: [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
  ],
}; // objeto company con una propiedad employees que es un array de objetos, cada uno representando a un empleado con su nombre y posición.
console.log(company);

//#################################
//         7 BUCLES
//#################################
console.group("🔹 7. Bucles");
// Un bucle es una estructura de control que permite repetir un bloque de código varias veces, dependiendo de una condición. Los bucles más comunes en JavaScript son for, while y do-while.

// FOR: se utiliza para repetir un bloque de código un número específico de veces, generalmente cuando se conoce de antemano cuántas veces se debe ejecutar el bucle.
// Patrones habituales con for: contar, acumular, buscar y validar
for (let i = 0; i < 5; i++) {
  console.log(i); // muestra los números del 0 al 4 en la consola
} //conteo

let sum1 = 0;
for (let i = 1; i <= 5; i++) {
  sum1 += i;
} //acumulación
console.log(sum1); // muestra la suma de los números del 1 al 5 en la consola

const numbers1 = [10, 20, 30, 40, 50];
const target = 30;
let foundIndex = -1;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === target) {
    foundIndex = i;
    break;
  }
} //búsqueda
console.log(foundIndex); // muestra el índice del elemento encontrado o -1 si no se encuentra

let mayoresDe15 = true;
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] <= 15) {
    mayoresDe15 = false;
    break;
  }
} //validación
console.log(mayoresDe15); // muestra true si todos los números son mayores que 15, false en caso contrario

// Recorrido de arrays con for
const fruits1 = ["manzana", "banana", "naranja"];
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]); // muestra cada fruta en la consola
}

// Continue y break
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // salta a la siguiente iteración si i es un número par
  }
  console.log(i); // muestra los números impares del 1 al 9 en la consola
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // // se utiliza para salir de un bucle antes de que se complete su ejecución normal, cuando se cumple una condición específica.
  }
  console.log(i); // En este caso sale del bucle si i es igual a 5. muestra los números del 0 al 4 en la consola
}

// bucles anidados
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`); // muestra las combinaciones de i y j en la consola
  }
} // muestra "i: 1, j: 1", "i: 1, j: 2", "i: 2, j: 1", "i: 2, j: 2", "i: 3, j: 1" y "i: 3, j: 2" en la consola

// WHILE: se utiliza para repetir un bloque de código mientras una condición sea verdadera, generalmente cuando no se conoce de antemano cuántas veces se debe ejecutar el bucle.
let count1 = 0;
while (count1 < 5) {
  console.log(count1); // muestra los números del 0 al 4 en la consola
  count1++;
}

// DO-WHILE: se utiliza para repetir un bloque de código al menos una vez, y luego mientras una condición sea verdadera.
let num = 0;
do {
  console.log(num); // muestra los números del 0 al 4 en la consola
  num++;
} while (num < 5);

//#############################################
//     8. DOM Y MANIPULACIÓN DE ELEMENTOS
//#############################################
console.group("🔹 8. DOM y Manipulación");
console.log(document); // muestra el objeto document completo
console.log(document.children); // muestra los hijos directos del documento (normalmente <html>)

if (document.children[0] && document.children[0].children[1]) {
  console.log(document.children[0].children[1]); // <body>...</body>
}

const heroTitle = document.querySelector(".hero h1");
const heroText = document.querySelector(".hero p"); // Esto dará null porque no hay <p> en el HTML
const heroButton = document.querySelector(".hero a"); // Esto dará null porque no hay <a> en el HTML

console.log(heroTitle);
console.log(heroText);
console.log(heroButton);

if (heroTitle && heroText && heroButton) {
  heroTitle.textContent = "¡Bienvenido a mi sitio web!";
  heroText.textContent = "Esto es un ejemplo de texto de prueba.";
  heroButton.textContent = "¡Haz clic aquí!";

  heroTitle.style.color = "blue";
  heroText.style.fontSize = "18px";
} else {
  console.log(
    "Nota para clase: Algunos elementos de .hero no existen en este HTML, omitiendo manipulación.",
  );
}

const pageTitle = document.querySelector(".hero-title");

if (pageTitle) {
  const infoMessage = document.createElement("p");
  infoMessage.textContent =
    "(Este es un mensaje de manipulación de la clase de DOM)";
  infoMessage.classList.add("info-message");
  infoMessage.style.fontStyle = "italic";
  infoMessage.style.color = "yellow";

  pageTitle.after(infoMessage); // Agrega el nuevo elemento p después del título
}
