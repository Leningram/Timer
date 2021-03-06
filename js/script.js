window.addEventListener('DOMContentLoaded', () => {
    let deadline = '2021-12-31',
        timeInterval;
    const calendar = document.querySelector('#calendar');

    calendar.addEventListener('change', () => {
        clearInterval(timeInterval);
        deadline = calendar.value;
        setClock('.timer__block-clock', deadline);

    })        


    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) - (3 * 60 * 60 * 1000),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor(t / 1000 % 60);

        return {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function getZero(num) {
            if (num < 10) {
                return (`0${num}`);
            } else {
                return (num);
            }
        }

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer__block-clock', deadline);
});