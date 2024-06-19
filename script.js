// Function for slider value
let slider = document.querySelector("input");
let value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function() {
    value.textContent = this.value;
};

// Function for generating passwords
function passgen(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+=~";
    const numbers = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerChars : "";
    allowedChars += includeUpperCase ? upperChars : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? numbers : "";

    if (passwordLength <= 0) {
        return "(password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(At least one set of character needs to be selected)";
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

let passwordLength = 1;
let includeUpperCase = false;
let includeLowerCase = false;
let includeNumbers = false;
let includeSymbols = false;


let check1 = document.getElementById('check-1');
let check2 = document.getElementById('check-2');
let check3 = document.getElementById('check-3');
let check4 = document.getElementById('check-4');

slider.addEventListener("change", (e) => {
    passwordLength = e.target.value;
    console.log(passwordLength);
})

check1.addEventListener("change", (e) => {
    includeUpperCase = e.target.checked;
    console.log(includeUpperCase);
});

check2.addEventListener("change", (e) => {
    includeLowerCase = e.target.checked;
    console.log(includeLowerCase);
});

check3.addEventListener("change", (e) => {
    includeNumbers = e.target.checked;
    console.log(includeNumbers);
});

check4.addEventListener("change", (e) => {
    includeSymbols = e.target.checked;
    console.log(includeSymbols);
});


const button = document.getElementById('generateNew')
button.addEventListener('click',function(){
    const password = passgen(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers)
document.getElementById("password-text").textContent = password;


})

document.getElementById('copybutton').addEventListener('click', function() {
    // Select the text from the paragraph
    const textToCopy = document.getElementById('password-text').textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});