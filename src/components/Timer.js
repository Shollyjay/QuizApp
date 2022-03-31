import { useState, useEffect } from "react";

export default function Timer({ setStoptime, questionNumber }) {

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer === 0) return setStoptime(true)
        const interval = setInterval(() => {
            setTimer(prev => prev -1);
        }, 1000);
        return () => clearInterval(interval);
    }, [setStoptime, timer])

    useEffect(() => {
        setTimer(30);
    }, [questionNumber])

    return timer
}