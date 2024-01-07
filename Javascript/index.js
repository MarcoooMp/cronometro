
    let display = document.getElementById('display');
    let startButton = document.getElementById('start');
    let pauseButton = document.getElementById('pause');
    let resetButton = document.getElementById('reset');

    let startTime;
    let elapsedTime = 0;
    let timer;

    function start() {
        startTime = new Date();
        timer = setInterval(showTime, 10);
    }

    function pause() {
        clearInterval(timer);
        elapsedTime += new Date() - startTime;
    }

    function reset() {
        clearInterval(timer);
        elapsedTime = 0;
        displayTime();
    }

    function showTime() {
        elapsedTime += new Date() - startTime;
        startTime = new Date();
        displayTime();
    }

    function displayTime() {
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (milliseconds < 100) {
            milliseconds = '0' + milliseconds;
        }

        display.textContent = minutes + ':' + seconds + '.' + milliseconds;
    }

    startButton.addEventListener('click', start);
    pauseButton.addEventListener('click', pause);
    resetButton.addEventListener('click', reset);
