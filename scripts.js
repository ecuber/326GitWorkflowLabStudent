
let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here

function runNaturalLog() {
    const v = naturalLog(display.value);
    display.value = v;
}

function runSine() {
    const v = sine(display.value);
    display.value = v;
}

function runCosine() {
    const v = cosine(display.value);
    display.value = v;
}

function runTangent() {
    const v = tangent(display.value);
    display.value = v;
}

let memory = 0;
function memoryStore() {
    memory = parseFloat(display.value);
    document.getElementById('memoryDisplay').value = memory;
    return memory;
}

function memoryRecall() {
    display.value = memory;
    return memory;
}

function memoryClear() {
    memory = 0;
    document.getElementById('memoryDisplay').value = memory;
    return memory;
}



document.addEventListener('keypress', event => {
    if (event.key === '1') {
        appendToDisplay("1");
    }
    if (event.key === '2') {
        appendToDisplay("2");
    }
    if (event.key === '3') {
        appendToDisplay("3");
    }
    if (event.key === '0') {
        appendToDisplay("0");
    }
    if (event.key === '4') {
        appendToDisplay("4");
    }
    if (event.key === '5') {
        appendToDisplay("5");
    }
    if (event.key === '6') {
        appendToDisplay("6");
    }
    if (event.key === '7') {
        appendToDisplay("7");
    }
    if (event.key === '8') {
        appendToDisplay("8");
    }
    if (event.key === '9') {
        appendToDisplay("9");
    }
})

module.exports = {
    memory,
    memoryStore,
    memoryRecall,
    memoryClear
};