const clock = document.querySelector("#clock");
const judgementClock = document.querySelector("#jclock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

function getJclock() {
    const judgementDay = new Date('August 27, 1997 02:14:00 GMT-05:00');
    const date = new Date();
    const daysFromJday = date - judgementDay;
    const second = String(Math.floor(daysFromJday / 1000 % 60)).padStart(2,"0");
    const minute = String(Math.floor(daysFromJday / (1000*60) % 60)).padStart(2,"0");
    const hour = String(Math.floor(daysFromJday / (1000*60*60) % 24)).padStart(2,"0");
    const day = Math.floor(daysFromJday / (1000*60*60*24));
    // 출력
    judgementClock.innerText = `${day}일 ${hour}시간 ${minute}분 ${second}초가`;
}

getJclock();
setInterval(getJclock, 1000);
getClock();
setInterval(getClock, 1000);


