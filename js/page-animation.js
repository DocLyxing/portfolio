const scrollLerpSpeed = 0.1;

var mainPresSection = document.createElement("section");
var childPresSection = document.createElement("section");
var presTitle = document.createElement("h2");
var presPara = document.createElement("p");
var presImg = document.createElement("img");

mainPresSection.className = "presentationSection";
childPresSection.className = "presentationTextSection";

presTitle.textContent = "Enchantée";
presPara.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptas molestiae architecto, placeat eligendi dignissimos? Amet odio qui laborum placeat quod eligendi, facere assumenda fuga aspernatur nemo at? Est, reiciendis."
presImg.src = "../rsc/img/cadre.png";

mainPresSection.style.overflow = "hidden";
mainPresSection.style.top = innerHeight +"px";

childPresSection.appendChild(presTitle);
childPresSection.appendChild(presPara);
mainPresSection.appendChild(childPresSection);
mainPresSection.appendChild(presImg);

scrollingItems = [];

scrollingItems.push(new ScrollItem(mainPresSection, 0, 0));

var targetScroll = 0;
var scroll = 0;
var shown = false;

document.addEventListener("wheel", (e) =>{
    targetScroll +=e.deltaY;
});

interval = setInterval(drawLoop, 1000/60);

function drawLoop(){
    scroll = lerp(scroll, targetScroll, scrollLerpSpeed);
    console.log(targetScroll);
    scrollingItems.forEach(element => {
        element.show(scroll);
        element.setPos(scroll);
    });
}

function lerp(a, b, t){
    return a + (b-a)*t;
}