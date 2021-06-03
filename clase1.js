alert("Hola Js Externo ;)");
/*
variables: var, let, const
var identificador;//declarando una variable
identificador = valor;//inicializando una variable
--
var identificador = valor;
*/
var nombre = "Austry";//string
var edad = 16
var resultado = true;//boolean (true, false)
var X;//undefined
var arreglo = [];
var obj = {};
alert(nombre);
/* ahora cambiamos la variable de nombre y si ponemos un alert, aparecerá la nueva variable*/
//nombre = "Juan";
alert(nombre);
console.log(nombre);//escribe en la consola
//document.write("Hola html");//escribe en el dominio
//document.write("Mi nombre es " + nombre);
//operadores aritmeticos: + - * / %(modulo = resto)
//document.write(2 + 2);
var a = 4;
var b = 10;
var c = a + b;
console.log(a);
//operadores comparación < > <= >= == === !=
//el === compara el tipo de dato y el contenido. el == solo compara el contenido
//console.log(a == d);
//console.log(a === d);
// operadores lógicos: &&(and) ||(or)

var dia = window.prompt("Escribe tu día favorito")
document.write("Escribiste " + dia + " como día favorito.");
var num1 = parseInt(window.prompt("Escribe un número"));
var num2 = parseInt(window.prompt("Escribe otro número"));
console.log("La suma de los números es " + num1 + num2); //no lo suma sino que los concatena
console.log("La suma de los números es " + (num1 + num2)); //ahora sí hace la suma

