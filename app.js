// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const ingresoAmigo = document.getElementById("amigo"); 
let listaAmigos = []; 
const actualizar = document.getElementById("listaAmigos"); 
const respuesta = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = ingresoAmigo.value.trim().toLowerCase(); 

    if (nombre === "" || listaAmigos.includes(nombre)) {
        alert("Ingresa un nombre válido o que no esté repetido");
    } else {
        listaAmigos.push(nombre); 
        console.log("Nombres ingresados:", listaAmigos);
        actualizarLista(); 
    }
    
    ingresoAmigo.value = ""; 
}

function actualizarLista() {
    actualizar.innerHTML = ""; 

    listaAmigos.forEach((nombre) => {
        let listItem = document.createElement("li"); 
        listItem.textContent = nombre; 
        actualizar.appendChild(listItem); 
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de hacer el sorteo.");
        return;
    }

    let resultado = Math.floor(Math.random() * listaAmigos.length); // Corregido
    let amigoSecreto = listaAmigos[resultado]; 
    
    respuesta.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    console.log(`El amigo secreto es: ${amigoSecreto}`);
    
}









/*function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let nombreVerificado = nombre.toLowerCase(); 

    if (nombre !== "" && !amigos.includes(nombreVerificado)) { 
        amigos.push(nombreVerificado);
        console.log("Nombres actuales:", amigos);
        input.value = ""; 
    } else {
        alert("Ingresa un nombre válido o que no esté repetido.");
    }
    
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombreVerificado) => {
        let listItem = document.createElement("li"); // Cambiar "list" por "li"
        listItem.textContent = nombreVerificado; // Usar nombreVerificado en lugar de nombre
        lista.appendChild(listItem);
    });
}



*/


