let contador_Solved = Number(localStorage.getItem("Solved")) || 0;
let contador_Pending = Number(localStorage.getItem("Pending")) || 0;
let contador_Hold = Number(localStorage.getItem("Hold")) || 0;
let contador_Chats = Number(localStorage.getItem("Chats")) || 0;
let contador_Outbound = Number(localStorage.getItem("Outbound")) || 0;
let contador_Inbound = Number(localStorage.getItem("Inbound")) || 0;

const cantidad_Solved = document.getElementById("cantidad_Solved");
const Sumar_Solved = document.getElementById("sumar_Solved");
const Restar_Solved = document.getElementById("restar_Solved");
const Reiniciar_Solved = document.getElementById("reiniciar_Solved");

const cantidad_Pending = document.getElementById("contador_Pending");
const Sumar_Pending = document.getElementById("sumar_Pending");
const Restar_Pending = document.getElementById("restar_Pending");
const Reiniciar_Pending = document.getElementById("reiniciar_Pending");

const cantidad_Hold = document.getElementById("contador_Hold");
const Sumar_Hold = document.getElementById("sumar_Hold");
const Restar_Hold = document.getElementById("restar_Hold");
const Reiniciar_Hold = document.getElementById("reiniciar_Hold");

const cantidad_Chats = document.getElementById("contador_Chats");
const Sumar_Chats = document.getElementById("sumar_Chats");
const Restar_Chats = document.getElementById("restar_Chats");
const Reiniciar_Chats = document.getElementById("reiniciar_Chats");

const cantidad_Outbound = document.getElementById("contador_Outbound");
const Sumar_Outbound = document.getElementById("sumar_Outbound");
const Restar_Outbound = document.getElementById("restar_Outbound");
const Reiniciar_Outbound = document.getElementById("reiniciar_Outbound");

const cantidad_Inbound = document.getElementById("contador_Inbound");
const Sumar_Inbound = document.getElementById("sumar_Inbound");
const Restar_Inbound = document.getElementById("restar_Inbound");
const Reiniciar_Inbound = document.getElementById("reiniciar_Inbound");

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
}

function resetiarContadores() {
    localStorage.setItem("Solved", 0);
    localStorage.setItem("Pending", 0);
    localStorage.setItem("Hold", 0);
    localStorage.setItem("Chats", 0);
    localStorage.setItem("Outbound", 0);
    localStorage.setItem("Inbound", 0);
}

function contar_Solved (){

    
    contador_Solved++
    guardarContadores();
    
    return contador_Solved

}

function descontar_Solved (){

    
    contador_Solved--
    guardarContadores();
    
    return contador_Solved

}

function resetiar_Solved (){

    
    contador_Solved = 0;
    guardarContadores();
    
    return contador_Solved

}


Sumar_Solved.addEventListener("click", function() {
    contar_Solved();
    cantidad_Solved.innerText = contador_Solved
});

Restar_Solved.addEventListener("click", function() {
    descontar_Solved();
    cantidad_Solved.innerText = contador_Solved
});

Reiniciar_Solved.addEventListener("click", function() {
    resetiar_Solved();
    cantidad_Solved.innerText = contador_Solved
});





function contar_Pending (){

    contador_Pending++
    guardarContadores();

    return contador_Pending

}

function descontar_Pending (){

    contador_Pending--
    guardarContadores();

    return contador_Pending

}

function resetiar_Pending (){

    contador_Pending = 0;
    guardarContadores();

    return contador_Pending

}


Sumar_Pending.addEventListener("click", function() {
    contar_Pending();
    cantidad_Pending.innerText = contador_Pending
});

Restar_Pending.addEventListener("click", function() {
    descontar_Pending();
    cantidad_Pending.innerText = contador_Pending
});

Reiniciar_Pending.addEventListener("click", function() {
    resetiar_Pending();
    cantidad_Pending.innerText = contador_Pending
});



function contar_Hold (){

    contador_Hold++
    guardarContadores();

    return contador_Hold

}

function descontar_Hold (){

    contador_Hold--
    guardarContadores();

    return contador_Hold

}

function resetiar_Hold (){

    contador_Hold = 0;
    guardarContadores();

    return contador_Hold

}


Sumar_Hold.addEventListener("click", function() {
    contar_Hold();
    cantidad_Hold.innerText = contador_Hold
});

Restar_Hold.addEventListener("click", function() {
    descontar_Hold();
    cantidad_Hold.innerText = contador_Hold
});

Reiniciar_Hold.addEventListener("click", function() {
    resetiar_Hold();
    cantidad_Hold.innerText = contador_Hold
});


function contar_Chats (){

    contador_Chats++
    guardarContadores();

    return contador_Chats

}

function descontar_Chats (){

    contador_Chats--
    guardarContadores();

    return contador_Chats

}

function resetiar_Chats (){

    contador_Chats = 0;
    guardarContadores();

    return contador_Chats

}


Sumar_Chats.addEventListener("click", function() {
    contar_Chats();
    cantidad_Chats.innerText = contador_Chats
});

Restar_Chats.addEventListener("click", function() {
    descontar_Chats();
    cantidad_Chats.innerText = contador_Chats
});

Reiniciar_Chats.addEventListener("click", function() {
    resetiar_Chats();
    cantidad_Chats.innerText = contador_Chats
});



function contar_Outbound (){

    contador_Outbound++
    guardarContadores();

    return contador_Outbound

}

function descontar_Outbound (){

    contador_Outbound--
    guardarContadores();

    return contador_Outbound

}

function resetiar_Outbound (){

    contador_Outbound = 0;
    guardarContadores();

    return contador_Outbound

}


Sumar_Outbound.addEventListener("click", function() {
    contar_Outbound();
    cantidad_Outbound.innerText = contador_Outbound
});

Restar_Outbound.addEventListener("click", function() {
    descontar_Outbound();
    cantidad_Outbound.innerText = contador_Outbound
});

Reiniciar_Outbound.addEventListener("click", function() {
    resetiar_Outbound();
    cantidad_Outbound.innerText = contador_Outbound
});





function contar_Inbound (){

    contador_Inbound++
    guardarContadores();

    return contador_Inbound

}

function descontar_Inbound (){

    contador_Inbound--
    guardarContadores();

    return contador_Inbound

}

function resetiar_Inbound (){

    contador_Inbound = 0;
    guardarContadores();

    return contador_Inbound

}


Sumar_Inbound.addEventListener("click", function() {
    contar_Inbound();
    cantidad_Inbound.innerText = contador_Inbound
});

Restar_Inbound.addEventListener("click", function() {
    descontar_Inbound();
    cantidad_Inbound.innerText = contador_Inbound
});

Reiniciar_Inbound.addEventListener("click", function() {
    resetiar_Inbound();
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
    cantidad_Solved.innerText = 0;
    cantidad_Pending.innerText = 0;
    cantidad_Hold.innerText = 0;
    cantidad_Chats.innerText = 0;
    cantidad_Outbound.innerText = 0;
    cantidad_Inbound.innerText = 0;

    }
    
});

