let spaceshipName = "Falke";
let spaceshipHealth = 100;
let credits = 500;
let repairKits = 5;

function spaceshipStatus(){
    console.log("Status: ");
    console.log("Name: " + spaceshipName);
    console.log("Health: " + spaceshipHealth);
    console.log("credits: " + credits);
    console.log("repair: " + repairKits);
}
spaceshipStatus();

function useRepairKits(x){
    if(x > 0 && x <= repairKits){
        repairKits = repairKits - x;

    }
    return repairKits;
}

console.log(useRepairKits(0));

function buyRepairKits(x){
    if (x >= 0 && credits >= 50 ){
        repairKits = repairKits + x / 50;
        credits = credits - x;
    }
    return credits;
    return repairKits;
}
console.log(buyRepairKits(0));

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