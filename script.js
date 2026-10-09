let spaceshipName = "Falke";
let spaceshipHealth = 100;
let credits = 500;
let repairKits = 5;

const spaceship_tableRef = document.getElementById('spaceship_table');

function init(){
    renderStatus();
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

    //console.log("Status: ");
    //console.log("Name: " + spaceshipName);
    //console.log("Health: " + spaceshipHealth);
    //console.log("credits: " + credits);
    //console.log("repair: " + repairKits);
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


function toTakeDamage(x){
    spaceshipHealth = spaceshipHealth - x;
    if(spaceshipHealth <= 0){
        spaceshipHealth = 0;
        console.log("Game over!");
    }
    return spaceshipHealth;
}
console.log(toTakeDamage(0));

function resetGame(){
    spaceshipHealth = 100;
    credits = 500;
    repairKits = 5;
}
resetGame();