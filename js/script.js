const hourElm = document.querySelector(".hour");
const minuteElm = document.querySelector(".minute");
const secoundElm = document.querySelector(".secound");
const dayElm = document.querySelector(".dayname");
const tweelveHourElm = document.querySelector(".tweelve-hour");
const tweelveHourOnElm = document.querySelector(".tweelve-hour-on");
const amPmElm = document.querySelector(".ampm");

let storedValue ;
let clickOn = false ;
tweelveHourElm.addEventListener("click", ()=>{ 
    clickOn = !clickOn
    tweelveHourOnElm.style.top = "0";
    if (clickOn=== true) {
        tweelveHourOnElm.style.left ="18px"
    } else{
        tweelveHourOnElm.style.left = "0px"
    }
    if (clickOn=== true){
        storedValue = 12;
    } else{
        storedValue =24;
    }
});

function clock() {
    let time = new Date();
    let hour = time.getHours().toString().padStart(2, "0");
    let minute = time.getMinutes().toString().padStart(2, "0");
    let secound = time.getSeconds().toString().padStart(2, "0");
    let ampm;
    if (hour>storedValue) {
        hourElm.innerText = `${hour-12} :`;
        if (hour>storedValue) {
            amPmElm.innerText ="PM"
        } else {
            amPmElm.innerText ="AM"
        }
    } else {
        hourElm.innerText = `${hour} :`;
    }
    minuteElm.innerText = `${minute} :`;
    secoundElm.innerText = secound;  
    let dayNumber=time.getDay();
    let dayList=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saterday"]
    let today = dayList[dayNumber];
    dayElm.innerText=today;
    

}
setInterval(() => {
    clock()
}, 1000);






