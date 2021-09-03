
class CountdownTimer {
    constructor(setting) {
        this.setting = setting;
        
    }

    


    start() {

        const daysEl = document.querySelector('[data-value="days"]')
        const hoursEl = document.querySelector('[data-value="hours"]');
        const minsEl = document.querySelector('[data-value="mins"]');
        const secsEl = document.querySelector('[data-value="secs"]');

        

        setInterval(() => {
            const currentTime = Date.now()

            const deltaTime = this.setting.targetDate - currentTime;
            const {days, hours, mins, secs} = this.getTimeComponents(deltaTime)
           
            
            daysEl.textContent = `${days}`
            hoursEl.textContent = `${hours}`
            minsEl.textContent = `${mins}`
            secsEl.textContent = `${secs}`
        }, 1000);
    }


        getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs}
    }
    
        pad(value) {
        return String(value).padStart(2, "0")
    }

}


const timer = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Sep 11, 2021'),
    
})

timer.start();
