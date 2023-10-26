const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

//Concatenamos todos los caracteres en un solo objeto
const allCharacters = [].concat(upperCase, lowerCase, numbers, symbols);

// Get global element out of  function
let password1 = document.getElementById('password1-el')

let upperEl = document.getElementById('upercase')
let lowerEl = document.getElementById('lowercase')
let numberEl = document.getElementById('numbers')
let symbolEl = document.getElementById('symbols') 
let sliderControl = document.getElementById('slider')
let showNumber = document.getElementById('lenght')
let showQuality = document.getElementById('qualityPass')
let saveValue;
mostrar()
// Asign event to slider 
sliderControl.addEventListener('input', mostrar);
// Function to update the slider
function mostrar() {
    // Asing value from the  slider 
showNumber.textContent = sliderControl.value;
saveValue = showNumber.textContent
    
if  (saveValue <= 7){
    showQuality.textContent = "weak   🔓"
 }else if (saveValue <=15){
    showQuality.textContent = "strong  🔒"
 }else{
    showQuality.textContent = "very strong 🔒⛓"
 }
}

function generatePassword() {
    rendergeneratePass();
}


function rendergeneratePass(){
    
    password1.textContent = ''
    let lenght = sliderControl.value
    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    let passwordArray = []

    if (hasLower) {
        passwordArray = passwordArray.concat(lowerCase)
    }
    if (hasUpper) {
        passwordArray = passwordArray.concat(upperCase)
    }
    if (hasNumber) {
        passwordArray = passwordArray.concat(numbers)
    }
    if (hasSymbol) {
        passwordArray = passwordArray.concat(symbols)
    }else if (hasLower === false && hasUpper === false && hasNumber === false && hasSymbol === false){
        alert('You have to check at least one option')
        lenght = 0
    }

    for (i = 0; i < lenght; i++) {
        let randomPassword1 = Math.floor(Math.random() * passwordArray.length)
        password1.textContent += passwordArray[randomPassword1]
        }
}

function clearPass(){
    password1.textContent = ''
}

function copyPassword(){
    if (password1.innerText != "") {
        var range = document.createRange();
        range.selectNode(password1); //changed here
        window.getSelection().removeAllRanges(); 
        window.getSelection().addRange(range); 
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert('the password has been copied to the clipboard use it!')
}
}






