let weightInput = document.querySelector(".weightInput")
let heightInput = document.querySelector(".heightInput")
function calculateBMI() {
    let oldResult = document.querySelector(".resultText")
    if(oldResult){
        oldResult.remove()
    }

    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value)

    let BMI = weight / height ** 2;
    let result = document.createElement("p")
    result.classList.add("resultText")

    result.textContent = `BMI: ${BMI.toFixed(2)}`
    document.querySelector(".calculator").appendChild(result)
}

let calculateButton = document.querySelector(".calculateBMI")

calculateButton.addEventListener("click", calculateBMI)
