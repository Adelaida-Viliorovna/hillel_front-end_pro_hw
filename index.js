class Timer {
    constructor(durationInSeconds, displayElementId) {
        this.totalTime = durationInSeconds;
        this.remainangTime = durationInSeconds;
        this.displayElement = document.getElementById(displayElementId);
        this.timerId = null;
    }

    formatTime(timeInSeconds) {
        const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
        const seconds = String(timeInSeconds % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    updateDisplay() {
        this.displayElement.textContent = this.formatTime(this.remainangTime);
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    start() {
        if (this.timerId !== null) {
            return;
        }
        this.updateDisplay();
        this.timerId = setInterval(() => {
            this.remainangTime--;
            this.updateDisplay();
            if (this.remainangTime <= 0) {
                this.stop();
                alert("Час вийшов!");
            }
        }, 1000);
    }
}

const timer = new Timer(85, "timer");
document.getElementById("startButton").addEventListener("click", () => timer.start());
document.getElementById("stopButton").addEventListener("click", () => timer.stop());