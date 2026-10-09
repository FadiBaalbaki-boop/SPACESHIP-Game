let spaceshipName = "Falke";
let spaceshipHealth = 100;
let credits = 500;
let repairKits = 5;

const spaceship_tableRef = document.getElementById('spaceship_table');
const playButtonRef = document.getElementById('playButton');
const inputDamageRef = document.getElementById('inputDamage');
const gameOverRef = document.getElementById('gameOver');



function init(){
    renderStatus();
}

function startGame(){
    document.getElementById('start').hidden = true;
    document.getElementById('game').hidden = false;
    
}

function renderStatus(){

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
     <th>Repair: </th>
     <td>${repairKits}</td>
     </tr>`;
}


function useRepairKits(x){
    if(spaceshipHealth < 100 && repairKits > 0){
        repairKits = repairKits - x;
        spaceshipHealth = 100;

    }
}



function buyRepairKits(x){
    if (credits >= 50 ){
        repairKits = repairKits + x;
        credits = credits - 50;
    }
   
}


function toTakeDamage(){
    let damage = Number(inputDamageRef.value);
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