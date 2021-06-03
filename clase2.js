/*

var edad = parseInt(window.prompt("Escribe tu edad"));
if (edad >= 18 && edad <= 25) {
    document.write("Bienvenid@ a Black Jagger 😜");
    if(edad == 21){
        document.write("...pasa pibe en la barra hay trago gratis para vos");
    }
}else{
    document.write("No puede pasar ☹️");
    if(edad < 18){
        document.write("...por bebito");
    }else{
        document.write("...por viejito");
    }
}

*/
/*
var num = parseInt(window.prompt("Escribe un número"));
if (num > 0 && num < 10) {
    document.write("El número " + num + " tiene una cifra");
} else if (num >= 10 && num < 100) {
    document.write("El número " + num + " tiene dos cifras");
} else if (num >= 100 && num < 1000) {
    document.write("El número " + num + " tiene tres cifras");
} else if (num >= 1000 && num < 10000) {
    document.write("El número " + num + " tiene cuatro cifras");
} else if (num >= 10000) {
    document.write("El número " + num + " tiene más de cuatro cifras");
} else {
    document.write("Dato incorrecto para el sistema");
}
*/
/*
var color = "azul";
switch(color){
    case "amarillo":
        console.log("Color amarillo");
        break;
    case "verde":
        console.log("Color verde");
        break;
    case "azul":
    case "AZUL":
    case "Azul":
        console.log("color azul");
        break;
    case "negro":
        console.log("Color negro");
        break;
    default:
        console.log("No existe en el sistema");
        break;
}

*/
//MANEJO DEL DOM (DOCUMENT OBJECT MODELS)
//var h1 = document.querySelector("h1");
//var h1 = document.querySelector("#titulo");
//var h1 = document.querySelector(".titulo");
//var h1 = document.getElementsByClassName("titulo")[0]
var h1 = document.querySelector("h1");
console.log(h1);
alert(h1.innerHTML);
h1.innerText = "Hola html desde Js";
var p = document.querySelector("p");
p.innerHTML = "Lorem ipsum dolor <strong> sit amet </strong>";
console.log(h1.id)
h1.style.color = "red";
h1.style.backgroundColor = "lightpink";
h1.style.padding = "50px";
h1.style.border = "1px solid blue";
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
