
    

    const xmasTime = "24 Dec 2020";

function countdown() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds"); 
    const xmasDate = new Date(xmasTime);
    const currentDate = new Date();

    const totalSeconds = (xmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = String(days);
    hoursEl.innerHTML = String(hours);
    minsEl.innerHTML = String(mins);
    secondsEl.innerHTML = String(seconds);

    console.log();
}

window.onload =function () {
    countdown();
    setInterval(countdown, 1000);
    }
