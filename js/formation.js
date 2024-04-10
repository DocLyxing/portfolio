var listFormation = document.getElementsByClassName("blocPerFormation");

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

listFormation[0].style.maxHeight = "300px";
listFormation[0].getElementsByClassName("plusMinusSign")[0].textContent = "-";


Array.prototype.forEach.call(listFormation, (element) => {
    element.addEventListener("click", () => {
        if(element.getElementsByClassName("plusMinusSign")[0].textContent == "-"){
            element.removeAttribute("style");
            sleep(500).then(() => {
                element.getElementsByClassName("plusMinusSign")[0].textContent = "+";
            });
        } else {
            element.style.maxHeight = "300px";
            element.style.marginBottom = "0";
            element.getElementsByClassName("plusMinusSign")[0].textContent = "-";
            Array.prototype.forEach.call(listFormation, (element2) => {
                if(element != element2){
                    element2.removeAttribute("style");
                    element2.getElementsByClassName("plusMinusSign")[0].textContent = "+";
                }
            });
        }
    });
});
