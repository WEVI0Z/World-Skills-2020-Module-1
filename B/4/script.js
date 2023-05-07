const digits = document.querySelectorAll(".digit");

function clear(digit) {
    const segments = digit.querySelectorAll(".segment");

    segments[0].classList.remove("segment--active");
    segments[1].classList.remove("segment--active");
    segments[2].classList.remove("segment--active");
    segments[3].classList.remove("segment--active");
    segments[4].classList.remove("segment--active");
    segments[6].classList.remove("segment--active");
    segments[5].classList.remove("segment--active");
}

function showZero(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[0].classList.add("segment--active");
    segments[1].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[3].classList.add("segment--active");
    segments[4].classList.add("segment--active");
    segments[6].classList.add("segment--active");
}

function showOne(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[2].classList.add("segment--active");
    segments[3].classList.add("segment--active");
}

function showTwo(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[4].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[6].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[1].classList.add("segment--active");
}

function showThree(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[4].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[6].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[3].classList.add("segment--active");
}

function showFour(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[0].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[3].classList.add("segment--active");
}

function showFive(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);

    segments[0].classList.add("segment--active");
    segments[4].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[3].classList.add("segment--active");
    segments[6].classList.add("segment--active");
}

function showSix(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);


    segments[0].classList.add("segment--active");
    segments[4].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[3].classList.add("segment--active");
    segments[6].classList.add("segment--active");
    segments[1].classList.add("segment--active");
}

function showSeven(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);


    segments[2].classList.add("segment--active");
    segments[3].classList.add("segment--active");
    segments[4].classList.add("segment--active");
}

function showEight(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);


    segments[0].classList.add("segment--active");
    segments[1].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[3].classList.add("segment--active");
    segments[4].classList.add("segment--active");
    segments[6].classList.add("segment--active");
    segments[5].classList.add("segment--active");
}

function showNine(digit) {
    const segments = digit.querySelectorAll(".segment");
    clear(digit);


    segments[0].classList.add("segment--active");
    segments[2].classList.add("segment--active");
    segments[4].classList.add("segment--active");
    segments[5].classList.add("segment--active");
    segments[3].classList.add("segment--active");
}

secondTimer = 0;
minuteTimer = 998;

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

function toMarkup(digit, number) {
    switch (digit) {
        case 0:
            showZero(digits[number]);
            break;

        case 1:            
            showOne(digits[number]);
            break;
            
        case 2:
            showTwo(digits[number]);
            break;
            
        case 3:
            showThree(digits[number]);
            break;
            
        case 4:
            showFour(digits[number]);
            break;
            
        case 5:
            showFive(digits[number]);
            break;
            
        case 6:
            showSix(digits[number]);
            break;
            
        case 7:
            showSeven(digits[number]);
            break;
            
        case 8:
            showEight(digits[number]);
            break;
            
        case 9:
            showNine(digits[number]);
            break;
    }
}

function toDigits() {
    const firstDigit = +(minuteTimer >= 100 ? ('' + minuteTimer)[0] : 0);
    const secondDigit = +(minuteTimer >= 10 ? minuteTimer > 100 ? ('' + minuteTimer)[1] : ('' + minuteTimer)[0]  : 0);
    const thirdDigit = minuteTimer % 10;
    const fourthDigit = +(secondTimer >= 10 ? ('' + secondTimer)[0] : 0);
    const fifthDigit = secondTimer % 10;

    toMarkup(firstDigit, 0);
    toMarkup(secondDigit, 1);
    toMarkup(thirdDigit, 2);
    toMarkup(fourthDigit, 3);
    toMarkup(fifthDigit, 4);
}

function encrease() {
    if(secondTimer === 59) {
        secondTimer = 0;

        if(minuteTimer === 999) {
            minuteTimer = 0;
        } else {
            minuteTimer++;
        }

    } else {
        secondTimer++;
    }

    toDigits();
}

function startButtonHandler(event) {
    event.preventDefault();

    const inter = setInterval(encrease, 1000);

    stopButton.addEventListener("click", (event) => {
        event.preventDefault();
    
        clearInterval(inter);
        startButton.addEventListener("click", startButtonHandler);
    });

    startButton.removeEventListener("click", startButtonHandler);
}

startButton.addEventListener("click", startButtonHandler);


resetButton.addEventListener("click", (event) => {
    minuteTimer = 0;
    secondTimer = 0;
    showZero(digits[0]);
    showZero(digits[1]);
    showZero(digits[2]);
    showZero(digits[3]);
    showZero(digits[4]);
    showZero(digits[5]);
    showZero(digits[6]);
})