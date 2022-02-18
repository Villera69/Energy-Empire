 let energy = 0.0;
let HamsterWheels = 0;
let Cyclists = 0;
let WindGenerators = 0;
let SolarPanels = 0;
let NuclearPowerPlants = 0;
let FusionPowerPlants = 0;
let energySuffix = "⚡";


let TotalEnergyPerSecond = 0;

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

    energy += TotalEnergyPerSecond;
    updateStats();
    setTimeout(UpdatePerSec, 1000);

}



function ClickEnergy(event) {
    energy += 1;
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
            console.log(event.target.id);
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
            console.log(event.target.id);
            if(energy >= 25)
            {
                energy -= 25;
                SolarPanels += 1;

            }
            break;
        case "NPP":
            if(energy >= 25)
            {
                energy -= 25;
                NuclearPowerPlants += 1;

            }
            break;
        case "FPP":
            console.log(event.target.id);
            if(energy >= 12500)
            {
                energy -= 12500;
                FusionPowerPlants += 1;

            }
            break;
    
    }
    


    updateStats();

}






function updateStats(){

    EnergyTotal.innerHTML = energy.toFixed(0) + " ⚡";    
    TotalEnergyPerSecond = HamsterWheels*0.10 + Cyclists*0.30 + WindGenerators*0.70 + SolarPanels*1.00 + NuclearPowerPlants*10.00 + FusionPowerPlants*50.00;
    EnergyPerSecond.innerHTML = TotalEnergyPerSecond.toFixed(1) + " ⚡/s";

}



