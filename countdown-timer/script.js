const newYears = "1 Jan 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
function countdown(){
    // miliseconds
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const remainSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(remainSeconds/(3600*24));
    const hours = Math.floor((remainSeconds%(3600*24))/3600)
    const minutes = Math.floor((remainSeconds%3600)/60);
    const seconds = Math.floor(remainSeconds%60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
}

// initial call
countdown();

// update per second
setInterval(countdown,1000);