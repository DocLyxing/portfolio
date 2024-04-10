function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(1000).then(() => {
    let point = document.getElementsByClassName("point")[0];
    point.style.display = "block";
    setTimeout(() => { point.classList.add("visible"); }, 50);
});

sleep(2000).then(() => {
    let point = document.getElementsByClassName("point")[1];
    point.style.display = "block";
    setTimeout(() => { point.classList.add("visible"); }, 50);
});

sleep(3000).then(() => {
    let point = document.getElementsByClassName("point")[2];
    point.style.display = "block";
    setTimeout(() => { point.classList.add("visible"); }, 50);
});