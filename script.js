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

console.log(useRepairKits(1));

