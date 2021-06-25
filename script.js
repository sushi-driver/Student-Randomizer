var slowCheckbox = document.querySelector('input[id="slow"]')
var names = ['Gage', 'James', 'J. Parker', 'J. Pine', 'Tayler', 'Tim'];
var nameCount = 0;
var song = new Audio();
song.src = "song.wav";
x = 0;
intSpeed = 10;

function startInterval() {
    if (x === 0){
        interval = setInterval(cycleNames, intSpeed);
    }
    x = 1;
}

function cycleNames() {
    document.getElementById("student").innerText = names[nameCount];
    nameCount++;
    if (nameCount === names.length){
        nameCount = 0;
    }
}

function stop() {
    clearInterval(interval);
    x = 0;
}

function slow() {
    if (slowCheckbox.checked) {
        intSpeed = 1000;
        stop();
        startInterval();
        cycleNames();
    }
    else {
        intSpeed = 10;
        stop();
        startInterval();
        cycleNames();
    }
}

function uncheck() {
    slowCheckbox.checked = false;
}

