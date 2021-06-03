/*
Desarrollar un sistemita de cajero automático
utilizar prompt , verificar la clave correcta
para mostrar un menu:
1. consulta saldo
2. depósito
3.retiro
4. transferencia , etc
utilizar el dom para colocar los mensajes
variables a usar:
clave, saldo, opción, monto
*/
var clave, saldo = 300, opcion, monto, claveCo = 123;
var div = document.querySelector("div");  //selecciona una etiqueta, en este caso div del html
clave = parseInt(window.prompt("Bienvenido al Banco Nación. Escriba la clave de cajero: "));
if (clave == claveCo) {
    //mostrar el menú
    opcion = parseInt(window.prompt("Escriba un número opción: \n1 saldo, \n2 depósito, \n3 retiro, \n4 transferencia.")); //el \n es el salto de linea para que quede más lindo
    switch(opcion) {
        case 1:
            div.innerHTML = "Tu saldo actual es: " + saldo;
            break;
        case 2:
            monto = parseInt(window.prompt("Escriba el monto a depositar: "));
            saldo += monto; // saldo = saldo + monto
            div.innerHTML = "Depósito realizado correctamente, tu saldo actual es " + saldo;
            break;
        case 3:
            monto = parseInt(window.prompt("Escriba el monto a retirar: "));
            if (monto < saldo){
                saldo -= monto; // saldo = saldo - monto
                div.innerHTML = "Retiro realizado correctamente. Su saldo actual es " + saldo;
            } else {
                div.innerHTML = "Saldo insuficiente.";
            }
            break;
        default:
            div.innerHTML = "Opción inválida";
            break;
    }

} else {
    //error, clave incorrecta
    div.innerHTML = "Datos de acceso incorrectos.";
}

/* var texto = "";
do {
    var palabra = window.prompt("Escribe una palabra: ");
    texto += palabra; // texto = texto + palabra
    //texto = texto + " " + palabra       --> para agregar un espacio entre palabra
} while (window.confirm("Seguir jugando?"));
document.write("Escribiste: " + texto);
*/

/*
for(var i = 1; i <= 10; i++) {      --> for(inicio; condición; ajuste) . El i++ significa que le suma un int 1
    document.write("X" + i + " - ");
}

var --> redeclarable, redefinible, scope global
let --> no redeclarable, redefinible, no scope global
const --> no redeclarable, no redefinible, no scope global

var x=2;
console.log(x)
                 if(true){
                     var x = 4;
                     console.log(x)
                 }


let f = new Date();
let g = f.getFullYear()
let g = f.getDay(); //3 (porque estamos en miércoles) día de la semana , va de 0-6 y empieza en Domingo
g = f.getDate(); //26 (porque es 26 de marzo) fecha por día
g = f.getMonth(); //4 (porque enero es mes 0) 
*/

let edad = [20,5, 4, 10, 80, 52];
let datos = ["Juan", 2, 80.2, true];
let nombre = new Array("Carlos", "Ricardo", "Ana");
console.log(nombre[2])
nombre[2] = "Teresa";
console.log(nombre[2])
console.log(edad.length)
var tamaño = edad.length;      //indice: edad.length - 1
for (var i = 0; i < tamaño; i++) {
    document.write(edad[i] + "<br>");
}

/*
atletas
crear un arreglo para guardar los nombres
otro para su tiempo
*/
let atletas =[]
let tiempo = []
let cantidad = parseInt(window.prompt("Escribe la cantidad de atletas: "));
for (var i = 0; i < cantidad; i++) {
    atletas[i]= window.prompt("Escribe el nombre del atleta: " + i);
    tiempo[i] = parseInt(window.prompt("Escribe el tiempo que tardó: " + i));
}