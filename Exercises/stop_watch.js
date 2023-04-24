// my solution to exercise 1 of JS OOP
function StopWatch() {
    // private properties
    let duration = 0;
    let stopped = false;
    let startClicked = 0;
    let stopClicked = 0;

    // private methods
    function increment() {
        duration++;
        console.log(duration);
    }

    // implementation properties
    this.start = function() {
        startClicked++;
        stopClicked = false;
        stopped = false;
        
        if (startClicked > 1) {
            throw new Error (`already started.`)
        }
        if (!stopped) {
            timerId = setInterval(increment, 1000);
        }
    }

    this.stop = function() {
        stopClicked++;
        startClicked = false;
        stopped = true;

        if (stopClicked > 1) {
            throw new Error(`Already stopped.`);
            return;
        }

        if (stopped) {
            this.stop = clearInterval(timerId);
            stopped = true;
            return;
        }
    }

    this.reset = function() {
        this.stop = clearInterval(timerId);
        duration = 0;
        stopped = false;
        startClicked = 0;
        stopClicked = 0;
    }

    // getter
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

sw = new StopWatch();