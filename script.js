let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword= document.querySelector("#valor")
let Password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

// let testeRecebe= document.querySelector("#teste")
// let testeEnvia = document.querySelector("#valorR")


// testeEnvia.innerHTML =testeRecebe.value

// testeRecebe.oninput= function() {
//     testeEnvia.innerHTML= this.value
// }


let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let newPass=""

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput= function() {
    sizePassword.innerHTML= this.value
}

function generatePassword(){
    let pass="";
    for(let i =0, n = charset.length;i<sliderElement.value;i++)
    {
        pass+=charset.charAt(Math.floor(Math.random()*n))
        
    }
    console.log(pass);
    containerPassword.classList.remove("hide")
    Password.innerHTML=pass;
    newPass= pass;
}
function copyPassword(){
    alert("senha copiada")
    navigator.clipboard.writeText(newPass)
}

console.log(sliderElement)