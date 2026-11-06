let counter_Solved = Number(localStorage.getItem("Solved")) || 0;
let counter_Chats = Number(localStorage.getItem("Chats")) || 0;
let counter_Outbound = Number(localStorage.getItem("Outbound")) || 0;
let ticketNumberHistory = JSON.parse(localStorage.getItem("numbers")) || [];
const URL = "https://script.google.com/macros/s/AKfycbyfpSsrQj9WJW_n_82_6uD6gMfCBbhI9g6AVJ7boyetDyXXp85O8lL13Ja_3yni0uq5/exec";

let userNameDisplay = document.getElementById("userNameDisplay");

function send(user,ticket,tipe,productivity){

    fetch(URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
        user: user,
        ticket: ticket,
        tipe: tipe,
        productivity: productivity,
    })
})
.then(response => response.text())
.catch(error => console.error("Error:", error));

}


function userName() {

    let user = prompt("What is your name?");

    while (user === null || user.trim() === "") {
        user = prompt("you must type your name");
    }

    return user;
}

let user = userName();
userNameDisplay.innerText = user

function ticketNumberLock() {

    if (ticketNumber.value === null || ticketNumber.value.trim() === "") {
        alert('Please enter ticket number!')
    }

}

const ticketNumber = document.getElementById("myInput");

const solvedQuantity = document.getElementById("solvedQuantity");
const addSolved = document.getElementById("addSolved");

const chatsQuantity = document.getElementById("chatsQuantity");
const addChats = document.getElementById("addChats");

const outboundQuantity = document.getElementById("outboundQuantity");
const addOutbound = document.getElementById("addOutbound");

const resetmemory = document.getElementById("resetmemory");

solvedQuantity.innerText = counter_Solved;
chatsQuantity.innerText = counter_Chats;
outboundQuantity.innerText = counter_Outbound;



function storeCounters() {
    localStorage.setItem("Solved", counter_Solved);
    localStorage.setItem("Chats", counter_Chats);
    localStorage.setItem("Outbound", counter_Outbound);
    localStorage.setItem("numbers", JSON.stringify(ticketNumberHistory));
}

function resetCounters() {
    localStorage.setItem("Solved", 0);
    localStorage.setItem("Chats", 0);
    localStorage.setItem("Outbound", 0);
    
    
}

function showHistory(letter) {

    let total = counter_Solved+counter_Chats+counter_Outbound;
    ticketNumberHistory.push([user,Number(ticketNumber.value),letter,total]);
    
    
    
};

function incrementSolvedCount (){

    const category = 'Email Updated'
    counter_Solved++
    showHistory(category)
    storeCounters();
    send(userNameDisplay.innerText,ticketNumber.value,category,counter_Solved+counter_Chats+counter_Outbound)
    ticketNumber.value ='';
    
    
    return counter_Solved

}


function incrementChatsCount (){
    
    const category = 'Chat'
    counter_Chats++
    showHistory(category)
    storeCounters();
    send(userNameDisplay.innerText,ticketNumber.value,category,counter_Solved+counter_Chats+counter_Outbound)
    ticketNumber.value ='';

    return counter_Chats

}


function incrementOutboundCount (){

    const category = 'Call'
    counter_Outbound++;
    showHistory(category)
    storeCounters();
    send(userNameDisplay.innerText,ticketNumber.value,category,counter_Solved+counter_Chats+counter_Outbound)
    ticketNumber.value ='';

    return counter_Outbound

}


addSolved.addEventListener("click", function() {

    if (ticketNumber.value === null || ticketNumber.value.trim() === "") {
        alert('Please enter ticket number!')
    }else{

        incrementSolvedCount();
        solvedQuantity.innerText = counter_Solved

    }
    
});


addChats.addEventListener("click", function() {

    if (ticketNumber.value === null || ticketNumber.value.trim() === "") {
        alert('Please enter ticket number!')
    }else{

        incrementChatsCount();
        chatsQuantity.innerText = counter_Chats

    }

   
});


addOutbound.addEventListener("click", function() {

    if (ticketNumber.value === null || ticketNumber.value.trim() === "") {
        alert('Please enter ticket number!')
    }else{

        incrementOutboundCount();
        outboundQuantity.innerText = counter_Outbound

    }

    
});


resetmemory.addEventListener("click", function() {

    if (confirm("¿Estás seguro de reiniciar el contador?")) {
        
    resetCounters();
    counter_Solved = 0;
    counter_Chats = 0;
    counter_Outbound = 0;
    ticketNumberHistory = [];

    solvedQuantity.innerText = 0;
    chatsQuantity.innerText = 0;
    outboundQuantity.innerText = 0;
    ticketNumber.value ='';

    }
    
});


// https://docs.google.com/spreadsheets/d/1qybCNPZ28MYXZ5hUc8HV-kaZY3eCsD0fwdP2HOT4Ulk/edit?gid=0#gid=0






