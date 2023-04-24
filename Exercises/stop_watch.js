// my solution to exercise 1 of JS OOP
function StopWatch() {
    // private properties
    let duration = 0;
    let stopped = true;
    let start = false;

    // private methods
    function increment() {
        duration++;
        console.log(duration);
    }

    // implementation properties
    this.start = function() {
        if (start) {
            throw new Error (`already started.`)
        }

        start = true;
        stopped = false;

        if (start) {
            timerId = setInterval(increment, 1000);
        }
    }

    this.stop = function() {
        if (stopped) {
            throw new Error(`Already stopped.`);
        }

        stopped = true;
        start = false;

        if (stopped) {
            this.stop = clearInterval(timerId);
            stopped = true;
        }
    }

    this.reset = function() {
        this.stop = clearInterval(timerId);
        duration = 0;
        stopped = false;
    }

    // getter
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

sw = new StopWatch();
sw.start();