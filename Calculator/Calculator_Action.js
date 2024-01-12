function appendToDisplay(value) {
    document.getElementById('Show').value += value;
}

function clearDisplay() {
    document.getElementById('Show').value = '';
}

function calculate() {
    try {
        document.getElementById('Show').value = eval(document.getElementById('Show').value);
    } catch (error) {
        document.getElementById('Show').value = 'Error';
    }
}
