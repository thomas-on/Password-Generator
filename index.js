const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

// function to generate a 15 character password
function generatePasswords() {
    let passwordsList = []
    for (x = 0; x < 2; x++) {
        let password = ""
        for (i = 0; i < 16; i++) {
            randomIndex = Math.floor( Math.random() * characters.length)
            password += characters[randomIndex]
        }
        passwordsList.push(password)     
    }
    passwordEl1.textContent = passwordsList[0]
    passwordEl2.textContent = passwordsList[1]
}
    


//console.log(generatePasswords())

