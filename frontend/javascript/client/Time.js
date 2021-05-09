const Time = {
    getTimeNow() {
        const clock = new Date();
        const hh = clock.getHours();
        const mm = clock.getMinutes();
        const ss = clock.getSeconds();

        return Time.formatClock(hh, mm, ss);
    },
    formatClock: (hh, mm, ss) => {
        const clockFormated = {
            hh: `${hh}`.padStart(2, '0'),
            mm: `${mm}`.padStart(2, '0'),
            ss: `${ss}`.padStart(2, '0'),
        } 

        return `${clockFormated.hh}:${clockFormated.mm}:${clockFormated.ss}`;
    },
    render() {
        const clock = document.querySelector('#clock');

        setInterval(() => {
            clock.innerHTML = Time.getTimeNow();
        }, 1000)
    }
}

export default Time;