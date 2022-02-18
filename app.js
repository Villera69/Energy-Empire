let energy = 0;
let windGeneretors = 0;


const EnergyTotal = document.querySelector(".EnergyTotal")
const Inventory = document.querySelector(".Inventory")


const ClickTarget = document.querySelector(".ClickTarget")
ClickTarget.addEventListener("click", ClickEnergy)

updateStats();



function ClickEnergy(event) {
    energy ++;
    ClickTarget.style.width = '175px';
    ClickTarget.style.height = '174px';
    setTimeout(updateStats, 50)
}


function updateStats(){

    EnergyTotal.innerHTML = energy;
    ClickTarget.style.width = '150px';
    ClickTarget.style.height = '149px';
}

