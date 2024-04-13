document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('equal')) {
                calculateResult();
            } else if (button.classList.contains('clear')) {
                clearDisplay();
            } else if (button.classList.contains('delete')) {
                // Assuming you have a deleteLastInput function from earlier discussion
                deleteLastInput();
            } else {
                // This handles numbers, operators, and now explicitly includes the modulo operation
                currentInput += button.textContent;
                display.value = currentInput;
            }
        });
    });
    
    
    function calculateResult() {
        
        try {
            currentInput = eval(currentInput);
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }
});
