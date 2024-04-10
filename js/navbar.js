//make nav absolute with a transition and fixed when scrolling past "after-welcome-page"

document.addEventListener("scroll", (e) => {
    console.log(window.scrollY + "|" + document.getElementById("after-welcome-page").offsetTop);
    /*
    if (window.scrollY > document.getElementById("after-welcome-page").offsetTop) {
        document.getElementById("nav").style.position = "fixed";
        document.getElementById("nav").style.backgroundColor = "rgb(12, 12, 12)";
        //document.getElementById("nav").style.color = "transparent";
        document.getElementById("nav").style.opacity = "0";
        document.getElementById("nav").style.transition = "background-color 0.75s, opacity 0.75s";
        document.getElementById("nav").style.opacity = "1";

        //document.getElementById("nav").style.setProperty("-webkit-transition", "color 0.75s");
    } else {
        document.getElementById("nav").style.position = "absolute";
        document.getElementById("nav").style.opacity = "1";
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("nav").style.transition = "background-color 0s";
    }*/
});

setupNavbar();

//make nav pop 

function setupNavbar() {
    const nav = document.getElementById("fixedNav");
    const initialNav = document.getElementById("nav");
    const afterWelcomePage = document.getElementById("after-welcome-page");

    // Initial setup
    nav.style.position = "fixed";
    nav.style.transform = "translateY(-100%)"; // Hide the navbar by moving it up
    nav.style.transition = "transform 0.75s, background-color 0.5s"; // Set the transition
    initialNav.style.transition = "background-color 0.5s"; // Set the transition

    document.addEventListener("scroll", () => {
        if (window.scrollY > presentationSection.offsetTop) {
            // If we've scrolled past the welcome page, show the navbar
            nav.style.backgroundColor = "rgb(12, 12, 12)";
            nav.style.transform = "translateY(0%)";
        }
        if (window.scrollY == 0){
            nav.hidden = true;
            nav.style.transform = "translateY(-100%)";
            nav.style.backgroundColor = "transparent";
            initialNav.style.backgroundColor = "transparent";
        } else {
            initialNav.style.backgroundColor = "rgb(12, 12, 12)";
            nav.hidden = false;
        }
    });
}