let contador_Solved = Number(localStorage.getItem("Solved")) || 0;
let contador_Pending = Number(localStorage.getItem("Pending")) || 0;
let contador_Hold = Number(localStorage.getItem("Hold")) || 0;
let contador_Chats = Number(localStorage.getItem("Chats")) || 0;
let contador_Outbound = Number(localStorage.getItem("Outbound")) || 0;
let contador_Inbound = Number(localStorage.getItem("Inbound")) || 0;
let ticketNumberHistory = JSON.parse(localStorage.getItem("numeros")) || [];
const URL = "https://script.google.com/macros/s/AKfycbyxo05YuZgYkzdNdMDrGr3CGXS6ubXObGIZEnozFTgV4nHABNWUUn5mQ38th5ZTi0m-/exec";

let nombre = document.getElementById("nombre");

function enviar(user,ticket,tipe,productivity){

    fetch(URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
        usuario: user,
        ticket: ticket,
        categoria: tipe,
        total: productivity,
    })
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

}


function nombreUsuario() {

    let nombre = prompt("¿Cuál es tu nombre?");

    while (nombre === null || nombre.trim() === "") {
        nombre = prompt("Debes escribir tu nombre");
    }

    return nombre;
}

let usuario = nombreUsuario();
nombre.innerText = usuario



const ticketNumber = document.getElementById("miInput");

const cantidad_Solved = document.getElementById("cantidad_Solved");
const Sumar_Solved = document.getElementById("sumar_Solved");


const cantidad_Pending = document.getElementById("contador_Pending");
const Sumar_Pending = document.getElementById("sumar_Pending");


const cantidad_Hold = document.getElementById("contador_Hold");
const Sumar_Hold = document.getElementById("sumar_Hold");


const cantidad_Chats = document.getElementById("contador_Chats");
const Sumar_Chats = document.getElementById("sumar_Chats");


const cantidad_Outbound = document.getElementById("contador_Outbound");
const Sumar_Outbound = document.getElementById("sumar_Outbound");


const cantidad_Inbound = document.getElementById("contador_Inbound");
const Sumar_Inbound = document.getElementById("sumar_Inbound");


const resetmemory = document.getElementById("resetmemory");

cantidad_Solved.innerText = contador_Solved;
cantidad_Pending.innerText = contador_Pending;
cantidad_Hold.innerText = contador_Hold;
cantidad_Chats.innerText = contador_Chats;
cantidad_Outbound.innerText = contador_Outbound;
cantidad_Inbound.innerText = contador_Inbound;


function guardarContadores() {
    localStorage.setItem("Solved", contador_Solved);
    localStorage.setItem("Pending", contador_Pending);
    localStorage.setItem("Hold", contador_Hold);
    localStorage.setItem("Chats", contador_Chats);
    localStorage.setItem("Outbound", contador_Outbound);
    localStorage.setItem("Inbound", contador_Inbound);
    localStorage.setItem("numeros", JSON.stringify(ticketNumberHistory));

}

function resetiarContadores() {
    localStorage.setItem("Solved", 0);
    localStorage.setItem("Pending", 0);
    localStorage.setItem("Hold", 0);
    localStorage.setItem("Chats", 0);
    localStorage.setItem("Outbound", 0);
    localStorage.setItem("Inbound", 0);
    
}

function showHistory(letter) {

    let total = contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound;
    ticketNumberHistory.push([usuario,Number(ticketNumber.value),letter,total]);
    console.log(ticketNumberHistory)
    
    
};

function contar_Solved (){

    const clase = 'solved'
    contador_Solved++
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';
    
    
    return contador_Solved

}


function contar_Pending (){
    
    const clase = 'Pending'
    contador_Pending++
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';

    return contador_Pending

}


function contar_Hold (){

    const clase = 'On-hold'
    contador_Hold++
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';
    
    return contador_Hold

}



function contar_Chats (){

    const clase = 'Chat'
    contador_Chats++
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';
    
    return contador_Chats

}



function contar_Outbound (){

    const clase = 'Outbound call'
    contador_Outbound++;
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';

    return contador_Outbound

}



function contar_Inbound (){

    const clase = 'Inbound call'
    contador_Inbound++
    showHistory(clase)
    guardarContadores();
    enviar(nombre.innerText,ticketNumber.value,clase,contador_Solved+contador_Pending+contador_Hold+contador_Chats+contador_Outbound+contador_Inbound)
    ticketNumber.value ='';

    return contador_Inbound

}



Sumar_Solved.addEventListener("click", function() {

    
    contar_Solved();
    cantidad_Solved.innerText = contador_Solved
});


Sumar_Pending.addEventListener("click", function() {
    contar_Pending();
    cantidad_Pending.innerText = contador_Pending
});


Sumar_Hold.addEventListener("click", function() {
    contar_Hold();
    cantidad_Hold.innerText = contador_Hold
});


Sumar_Chats.addEventListener("click", function() {
    contar_Chats();
    cantidad_Chats.innerText = contador_Chats
});


Sumar_Outbound.addEventListener("click", function() {
    contar_Outbound();
    cantidad_Outbound.innerText = contador_Outbound
});


Sumar_Inbound.addEventListener("click", function() {
    contar_Inbound();
    cantidad_Inbound.innerText = contador_Inbound
});


resetmemory.addEventListener("click", function() {

    if (confirm("¿Estás seguro de reiniciar el contador?")) {
        
    resetiarContadores();
    contador_Solved = 0;
    contador_Pending = 0;
    contador_Hold = 0;
    contador_Chats = 0;
    contador_Outbound = 0;
    contador_Inbound = 0;
    ticketNumberHistory = [];

    cantidad_Solved.innerText = 0;
    cantidad_Pending.innerText = 0;
    cantidad_Hold.innerText = 0;
    cantidad_Chats.innerText = 0;
    cantidad_Outbound.innerText = 0;
    cantidad_Inbound.innerText = 0;
    ticketNumber.value ='';

    }
    
});


// https://docs.google.com/spreadsheets/d/1qybCNPZ28MYXZ5hUc8HV-kaZY3eCsD0fwdP2HOT4Ulk/edit?gid=0#gid=0






