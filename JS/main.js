document.addEventListener("DOMContentLoaded", function() {
    // Skills Animation
    const skillSpans = document.querySelectorAll(".progress span");
    const animateSkills = () => {
        skillSpans.forEach(span => {
            span.style.width = "0%";
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY >= skills.offsetTop - 600) {
                skillSpans.forEach(span => {
                    span.style.width = span.dataset.width;
                });
            }
        });
    };

    // Event Countdown
    const countdownElements = {
        days: document.querySelector("#days-num"),
        hours: document.querySelector("#hours-num"),
        minutes: document.querySelector("#min-num"),
        seconds: document.querySelector("#sec-num")
    };
    const targetDate = new Date("Jun 28, 2024 23:59:59").getTime();
    const updateCountdown = () => {
        const currentDate = Date.now();
        const dateDiff = targetDate - currentDate;
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        countdownElements.days.innerHTML = days;
        countdownElements.hours.innerHTML = hours;
        countdownElements.minutes.innerHTML = minutes;
        countdownElements.seconds.innerHTML = seconds;
    };
    const eventTime = setInterval(updateCountdown, 1000);

    // Stats Animation
    const statNums = document.querySelectorAll("section .number");
    const animateStats = () => {
        let started = false;
        window.addEventListener("scroll", () => {
            if (window.scrollY >= stats.offsetTop - 400 && !started) {
                statNums.forEach(spanNum => countEach(spanNum));
                started = true;
            }
        });
    };
    const countEach = (spanNum) => {
        const stat = spanNum.dataset.num;
        let currentValue = 0;
        const count = setInterval(() => {
            currentValue++;
            spanNum.innerText = currentValue;
            if (currentValue >= stat) {
                clearInterval(count);
            }
        }, 2000 / stat);
    };

    // Call Functions
    animateSkills();
    animateStats();
});
