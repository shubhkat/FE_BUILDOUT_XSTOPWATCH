import React, { useRef, useState } from "react";

const Stopwatch = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [runTime, setRunTime] = useState(0);
    const timeRef = useRef(null);
    const handleclick = (event) => {
        console.log(event.target.name);
        if (event.target.name === "reset") {
            clearInterval(timeRef.current);
            setIsStarted(false);
            setRunTime(0);
        }
        else {
            if (isStarted) {
                clearInterval(timeRef.current);
            }
            else {
                timeRef.current = setInterval(() => {
                    setRunTime((prevState) => prevState+1);
                }, 1000);
            }
            setIsStarted(!isStarted);
        }
        // console.log(isStarted);
    }
    const timeFormat = (timeInSec) => {
        const minutes = Math.floor(timeInSec/60);
        const seconds = timeInSec%60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: <span ref={timeRef}>{timeFormat(runTime)}</span></p>
            {!isStarted ? (<button name="start" onClick={(event) => handleclick(event)}>Start</button>) : (<button name="stop" onClick={(event) => handleclick(event)}>Stop</button>)}
            <button name="reset" onClick={(event) => handleclick(event)}>Reset</button>
        </div>
    );
};

export default Stopwatch;
