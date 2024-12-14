console.log("Pomodoro Timer service worker running!");

chrome.alarms.create("pomodoroTimer", {
    periodInMinutes: 1 / 60 // This sets the alarm to trigger every minute
});

// Correctly assign a function to onAlarm
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "pomodoroTimer") {
        chrome.storage.local.get(["timer", "isRunning"], (res) => {
            if (res.isRunning) {
                let timer = res.timer + 1; // Increment the timer
		 let isRunning = false

		if(timer === 60 * 25){
			this.registration.showNotification("pomodoro Timer",{
				body: "25 minutes has passed!",
				icon: "icon.png"

			}
			timer =0
			isRunning = false
		}
                console.log(timer);
                chrome.storage.local.set({
                    timer,
                });
            }
        });
    }
});

// Initialize storage values if they don't exist
chrome.storage.local.get(["timer", "isRunning"], (res) => {
    chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0,
        isRunning: "isRunning" in res ? res.isRunning : false,
    });
});
