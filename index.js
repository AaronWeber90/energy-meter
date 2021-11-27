const energyInput = document.getElementById("input")
const batteryEl = document.querySelector("#battery")
const batteryBars =  document.getElementsByClassName("battery__lvl")
const errorEl = document.querySelector(".error-el")
let color = ""
energyInput.value = 1

energyInput.addEventListener("change", () => {
    errorEl.classList.add("error-el-inactive")
    batteryEl.classList.remove("battery--loaded")
    if (energyInput.value == 0) {
         batteryEl.innerHTML = ""
    } else if(energyInput.value > 0 && energyInput.value <= 5) {
        batteryEl.innerHTML = ""
        for (let i = 1; i <= energyInput.value; i++) {
        batteryEl.innerHTML += `<div class="battery__lvl"></div>`
        }
        switch(energyInput.value) {
            case "1":
                color = "#f44041"
                break;
            case "2":
                color = "#fda22e"
                break;
            case "3":
               color = "#ffde59"
                break;
            case "4":
                color = "#6dcc00"
                break;
            case "5":
               color = "#01ae20"
               batteryEl.classList.add("battery--loaded")
        }
        
        for (let bar of batteryBars) {
        bar.style.background = `${color}`
        }
        
    } else {
        console.error("Invalid number")
        console.error("Try 1 - 5")
        errorEl.classList.remove("error-el-inactive")
        errorEl.innerHTML = "<strong>Error:</strong> Invalid Number, try 1 - 5"
    }
})
