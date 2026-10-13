let spaceshipName = "Falke";
let spaceshipHealth = 100;
let credits = 500;
let repairKits = 5;

const spaceship_tableRef = document.getElementById('spaceship_table');
const playButtonRef = document.getElementById('playButton');
const inputDamageRef = document.getElementById('inputDamage');
const gameOverRef = document.getElementById('gameOver');
const errorRef = document.getElementById('error');
const inputBuyKitsRef = document.getElementById('inputBuyKits');
const inputUseKitsRef = document.getElementById('inputUseKits');
const inventoryListRef = document.getElementById('inventoryList');

let itemArray = [];



function init(){
    renderStatus();
}

function startGame(){
    document.getElementById('start').hidden = true;
    document.getElementById('game').hidden = false;
    
}

function renderStatus(){
    const repairkitCount = itemArray.filter(item => item === "Reparaturkit").length;

    inventoryListRef.innerHTML = "";
    for (let i = 0; i < itemArray.length; i++){
        inventoryListRef.innerHTML  += "<li>" + itemArray[i] + "</li>";
    }

    spaceship_tableRef.innerHTML = 
    `<th>Status: </th>
     <tr>
     <th>Name:</th>
     <td>${spaceshipName}</td>
     </tr>
     <tr>
     <th>Health: </th>
     <td>${spaceshipHealth}</td>
     </tr>
     <tr>
     <th>Credits: </th>
     <td>${credits}</td>
     </tr>
     <tr>
     <th>Inventar: </th>
     <td>${repairkitCount}</td>
     </tr>`;
}


function useRepairKits(){
    const kitIndex = itemArray.indexOf("Reparaturkit");

    inputUseKitsRef.value = "";

    if(spaceshipHealth < 100 && kitIndex >= 0){
        itemArray.splice(kitIndex, 1);
        spaceshipHealth = 100;
        errorRef.innerHTML = "";
    }else if(kitIndex < 0){
        errorRef.innerHTML = "Du hast keine RepairKits mehr!"
    }
    renderStatus();
}

function buySchild(){
    itemArray.push("Schild")
    renderStatus();
}

function useSchild(){
    const schildindex = itemArray.indexOf("Schild");
    
    if (schildindex >= 0){
        itemArray.splice(schildindex, 1);
        errorRef.innerHTML = "";

    }else{
        errorRef.innerHTML = "Du Hast Kein Schild!";
    }
    renderStatus();
}


function buyRepairKits(){
    let count = Number(inputBuyKitsRef.value);
    const price = 50;
    const totalPrice = price * count;

    inputBuyKitsRef.value = "";

    if (credits > 0 && credits >= totalPrice){
        for (let i = 0; i < count; i++){
            itemArray.push("Reparaturkit");
        }
        credits = credits - totalPrice;
        errorRef.innerHTML = "";
    }else{
        errorRef.innerHTML = "Du hast nicht genügend Geld!";
    }
   renderStatus();  
}


function toTakeDamage(){
    let damage = Number(inputDamageRef.value);

    if(itemArray.includes("Schild")){
        damage = damage * 0.5;
    }
    spaceshipHealth = spaceshipHealth - damage;
    inputDamageRef.value = "";


    if(spaceshipHealth <= 0){
        spaceshipHealth = 0;
        gameOverRef.innerHTML = "Game Over!";
    }
    renderStatus();
    }
    
    



function resetGame(){
    spaceshipHealth = 100;
    credits = 500;
    repairKits = 5;
}
resetGame();