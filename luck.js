const telEL = document.querySelector(".tel")
const btnEL = document.querySelector(".btn")

const TEL_NUMBERS = [
    "+998 758 44 54",
    "+998 824 23 12",
    "+998 432 23 54",
    "+998 431 32 56",
    "+998 088 37 43",
    "+998 345 44 76",
    "+998 888 43 43", 
    "+998 234 44 44",
    "+998 499 99 99",
    "+998 377 77 77",
    "+998 665 66 55",
]

function getRandomNumber(){
    btnEL.setAttribute("disableb", true)

    const interval = setInterval(()=> {
let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
telEL.innerHTML = TEL_NUMBERS[randomNumber]
}, 100)

setTimeout(() => {
    clearInterval(interval)
    btnEL.removeAttribute("disabled")
}, 2500);
}