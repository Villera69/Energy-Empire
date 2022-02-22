 let energy = 0;
let HamsterWheels = 0;
let Cyclists = 0;
let WindGenerators = 0;
let SolarPanels = 0;
let NuclearPowerPlants = 0;
let FusionPowerPlants = 0;
let DysonSpheres = 0;
let TotalEnergyPerSecond = 0;
let energySuffix = " ⚡";


const EnergyTotal = document.querySelector(".EnergyTotal")
const Inventory = document.querySelector(".Inventory")
const EnergyPerSecond = document.querySelector(".EnergyPerSec");

const ClickTarget = document.querySelector(".ClickTarget");
ClickTarget.addEventListener("click", ClickEnergy);

const BuyButton = document.querySelectorAll("button").forEach(BuyButton => {
    BuyButton.addEventListener("click", BuyButtonPressed);    
});



updateStats();
UpdatePerSec();


//The best way i could do it lol
function UpdatePerSec()
{

    energy += TotalEnergyPerSecond/60;
    updateStats();
    setTimeout(UpdatePerSec, 1000/60);

}



function ClickEnergy(event) {
    energy += 10000000;
    ClickTarget.classList.add('Scale');
    updateStats();
    setTimeout(()=>{ClickTarget.classList.remove('Scale')}, 50)
}





function BuyButtonPressed(event){

    switch (event.target.id)
    {
        case "HW":
            if(energy >= 25)
            {
                energy -= 25;
                HamsterWheels += 1;

            }
            break;

        case "C":
            if(energy >= 75)
            {
                energy -= 75;
                Cyclists += 1;
            }
            break;

        case "WG":
            if(energy >= 175)
            {
                energy -= 175;
                 WindGenerators += 1;

            }
            break;

        case "SP":
            if(energy >= 250)
            {
                energy -= 250;
                SolarPanels += 1;

            }
            break;
        case "NPP":
            if(energy >= 2500)
            {
                energy -= 2500;
                NuclearPowerPlants += 1;

            }
            break;
        case "FPP":
            if(energy >= 12500)
            {
                energy -= 12500;
                FusionPowerPlants += 1;

            }
            break;
        case "DS":
            if(energy >= 250000)
            {
                energy -= 250000;
                DysonSpheres += 1;

            }
            break;
    
    }
    


    updateStats();

}






function updateStats(){


    


    
    EnergyTotal.innerHTML = energy.toFixed(0) + energySuffix;    
    TotalEnergyPerSecond = HamsterWheels*0.1 + Cyclists*0.3 + WindGenerators*0.7 + SolarPanels*1.00 + NuclearPowerPlants*10.00 + FusionPowerPlants*50.00 + DysonSpheres*1000;
    EnergyPerSecond.innerHTML = TotalEnergyPerSecond.toFixed(1) + " ⚡/s";

}


//Idéer
//+1 runt bolten
//


