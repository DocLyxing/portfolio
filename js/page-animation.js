var mainPresSection = document.createElement("section");
var childPresSection = document.createElement("section");
var presTitle = document.createElement("h2");
var presPara = document.createElement("p");
var presImg = document.createElement("img");

mainPresSection.className = "presentationSection";
childPresSection.className = "presentationChilsSection";

presTitle.textContent = "Enchantée";
presPara.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptas molestiae architecto, placeat eligendi dignissimos? Amet odio qui laborum placeat quod eligendi, facere assumenda fuga aspernatur nemo at? Est, reiciendis."
presImg.src = "../rsc/img/cadre.png";

mainPresSection.style.overflow = "hidden";
mainPresSection.style.top = innerHeight +"px";

childPresSection.appendChild(presTitle);
childPresSection.appendChild(presPara);
mainPresSection.appendChild(childPresSection);
mainPresSection.appendChild(presImg);





var scroll = 0;
var shown = false;

document.addEventListener("wheel", (e) =>{
    scroll+=e.deltaY;
    if(scroll > 0){
        if(!shown){
            document.getElementById("a").appendChild(mainPresSection);
            shown = true;
        } else {
            mainPresSection.style.top = innerHeight - scroll +"px";
        }
    } else {
        if(shown){
            mainPresSection.hidden = false;
            shown = false;
        }
    }
});