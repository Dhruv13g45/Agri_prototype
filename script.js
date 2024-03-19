let cards = document.querySelectorAll(".card")
let info1 = document.querySelector(".infodiv1")
let info2 = document.querySelector(".infodiv2")
let info3 = document.querySelector(".infodiv3")
let info4 = document.querySelector(".infodiv4")
let close = document.querySelectorAll(".close");
let closeArray = Array.from(close);
let cardArray = Array.from(cards);



cardArray.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.classList.value === "card grape") {
            info1.classList.remove("hide");
            info2.classList.add("hide");
            info3.classList.add("hide");
            info4.classList.add("hide");
        }
        else if (element.classList.value === "card cabbage") {
            info3.classList.remove("hide");
            info4.classList.add("hide");
            info2.classList.add("hide");
            info1.classList.add("hide");
        }
        else if (element.classList.value === "card spinach") {
            info2.classList.remove("hide");
            info1.classList.add("hide");
            info3.classList.add("hide");
            info4.classList.add("hide");
        }
        else {
            info4.classList.remove("hide")
            info3.classList.add("hide")
            info2.classList.add("hide")
            info1.classList.add("hide")
        }
    })
})


closeArray.forEach((element) => {
    element.addEventListener("click", () => {
        let node = element.parentNode.classList.value;
        if (node === "infodiv1") {
            info1.classList.add("hide");
        }
        else if (node === "infodiv2") {
            info2.classList.add("hide");
        }
        else if (node === "infodiv3") {
            info3.classList.add("hide")
        }
        else {
            info4.classList.add("hide")
        }
    })
})