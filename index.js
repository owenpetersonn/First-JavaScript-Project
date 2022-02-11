let buttonCount = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let zeroButn = document.getElementById("zero-butn")


function increment() {
    buttonCount+=1
    countEl.textContent = buttonCount
    console.log(buttonCount)
}

function save() {
    let countStr = buttonCount + " - "
    saveEl.textContent += countStr
    buttonCount = 0
    countEl.textContent = "0"

}

function zero() {
    buttonCount = 0
    countEl.textContent = "0"

}