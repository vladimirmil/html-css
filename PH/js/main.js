
function CalculateTime(){
    let hour_enter = document.getElementById("hour-enter").value;  
    let minute_enter = document.getElementById("minute-enter").value;
    let hour_exit = document.getElementById("hour-exit").value;  
    let same_day = document.getElementById("same-day").checked;
    let hour = 0;
    let minute = 0;


    if (same_day){
        hour = Number(hour_exit) - Number(hour_enter);
        
        if (Number(minute_enter) != 0){
            minute = 60 - Number(minute_enter);
            hour -= 1;
        }
    }else {
        hour = 24 - Number(hour_enter) + Number(hour_exit);
        
        if (Number(minute_enter) != 0){
            minute = 60 - Number(minute_enter);
            hour -= 1;
        }
    }

    document.getElementById("result").innerText = hour.toString() + ":" + minute.toString();
}