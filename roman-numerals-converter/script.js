// Select DOM elements
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

// Function to convert numbers to Roman numerals
function convertToRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let result = "";

    for (let [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// Event listener for form submission
convertBtn.addEventListener("click", (event) => {
    // Prevent form submission or page refresh
    event.preventDefault(); 
    const number = parseInt(numberInput.value, 10);

    // Clear any previous output and reset styles
    output.hidden = true;
    output.textContent = "";
    output.classList.remove("alert");

    // Validate input
    if (isNaN(number)) {
        output.textContent = "Please enter a valid number.";
        output.classList.add("alert");
        output.hidden = false;
        return;
    }

    if (number < 1 || number > 3999) {
        output.textContent = "Please enter a number between 1 and 3999.";
        output.classList.add("alert");
        output.hidden = false;
        return;
    }

    // Convert the number and display the result
    output.textContent = convertToRoman(number);
    output.hidden = false;
});
