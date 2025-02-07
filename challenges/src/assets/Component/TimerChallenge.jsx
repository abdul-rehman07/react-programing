import React, { useRef, useState } from 'react'


function TimerChallenge({ title, targetTime }) {
    const [timerstart, settimerstart] = useState(false);
    const [timerexpired, settimerexpired] = useState(false);
    const timer = useRef()
    function handleStart() {
        timer.current = setTimeout(() => {
            settimerexpired(true)
        }, targetTime * 1000);
        settimerstart(true);
    }
    function handlestop() {
        clearTimeout(timer.current);
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerexpired && <p>you lost!</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerstart ? handlestop : handleStart}>
                    {timerstart ? "stop" : "Start"} challenge</button>
            </p>
            <p className={timerstart ? 'active' : undefined}>
                {timerstart ? "Timer is running..." : "timer inactive"}
            </p>
        </section>

    )
}

export default TimerChallenge
