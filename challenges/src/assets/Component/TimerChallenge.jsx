import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';


function TimerChallenge({ title, targetTime }) {
    const [timerstart, settimerstart] = useState(false);
    const [timerexpired, settimerexpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            settimerexpired(true)
            dialog.current.showModal()
        }, targetTime * 1000);
        settimerstart(true);
    }
    function handlestop() {
        clearTimeout(timer.current);
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
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
        </>
    )
}

export default TimerChallenge
