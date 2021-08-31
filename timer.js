const daysEl = document.querySelector('[data-value="days"]')
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor(setting) {
        this.setting = setting;
        
    }

    


    start() {
        

        setInterval(() => {
            const currentTime = Date.now()

            const deltaTime = this.setting.targetDate - currentTime;
            const {days, hours, mins, secs} = getTimeComponents(deltaTime)
           
            
            daysEl.textContent = `${days}`
            hoursEl.textContent = `${hours}`
            minsEl.textContent = `${mins}`
            secsEl.textContent = `${secs}`
        }, 1000);
    }

}


function pad(value) {
    return String(value).padStart(2, "0")
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
}


const timer = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Sep 11, 2021'),
    onTick: getTimeComponents,
})

timer.start();
