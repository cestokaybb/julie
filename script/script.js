let flowerContainer = document.getElementById("flower-container");

let border1 = document.getElementById("border-1");
let border2 = document.getElementById("border-2");

let star1 = document.getElementById("etoile-1");
let star2 = document.getElementById("etoile-2");

let petale1 = document.getElementById("petale1");
let petale2 = document.getElementById("petale2");
let petale3 = document.getElementById("petale3");
let petale4 = document.getElementById("petale4");
let petale5 = document.getElementById("petale5");
let center = document.getElementById("centre")

let letter = document.getElementById("letter")

var petale_index = 0
var liste_petales = [petale1, petale2, petale3, petale4, petale5]
var upperMessage = document.getElementById("upper-message")
var upper_message_list = ["elle m'aime..", "un peu..", "beaucoup?", "passionnément??", "A LA FOLIE!!"]
var rem_size = 3

document.addEventListener("DOMContentLoaded", () => {
    
    // On affiche les bordures
    border1.style.top = "100%"
    border2.style.top = "0%"

    // On affiche la fleur ( )

    // On affiche les étoile ( qui ont une transition 0.6 )
    star1.style.opacity = "1"
    star2.style.opacity = "1"

    
    let star_side = 'right'

    let duration = 0
    liste_petales.forEach((petale) => {
        duration += 100
        setTimeout(() => {
            petale.style.opacity = "1"
        }, duration)
        
    })

    setInterval(() => {
        if (star_side === 'left') {
            star1.style.transform = "rotate(130deg)";
            star2.style.transform = "rotate(130deg)";
            star_side = "right";
        } else {
            star1.style.transform = "rotate(-130deg)";
            star2.style.transform = "rotate(-130deg)";
            star_side = "left";
        }
    }, 500);

});

display_letter = () => {
    center.style.transition = "1s ease-in-out all"
    center.style.width = "0px"

    letter.style.top = "27%"
    letter.style.width = "700px"
    letter.style.height = "610px"

    border1.style.top = "140%"
    border2.style.top = "-30%"
    
    star1.style.left = "0%"
    star2.style.right = "0%"

    upperMessage.style.fontSize = "3rem"
}

document.addEventListener("click", () => {
    liste_petales[petale_index].style.opacity = "0"
    upperMessage.innerHTML = upper_message_list[petale_index]
    upperMessage.style.fontSize = `${rem_size}rem`
    petale_index++;
    rem_size += 0.4
    if (petale_index >= 5) {
        display_letter()
    } 
}) 


