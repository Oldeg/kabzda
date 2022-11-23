import React, {useCallback, useEffect, useState} from 'react';
import './Clock.css'



/*function get2DigitsString(number: number) {
    return number < 10 ? '0' + number : number
}*/

const Clock = () => {
    const [state, setState] = useState({
        secondRatio: 0,
        minuteRatio: 0,
        hourRatio: 0
    })
    const setClock = useCallback(() => {
        const currentDate = new Date();
        let secondRatio = currentDate.getSeconds() / 60;
        let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

        setState({
            ...state, secondRatio: secondRatio,
            minuteRatio: minuteRatio,
            hourRatio: hourRatio
        })
    },[state])
    useEffect(() => {
        setInterval(() => {
            setClock()
        },1000)
    },[setClock])
    return (
        <div className='clock'>
            <div className='hand hours' style={{transform: `translate(-50%) rotate(${state.hourRatio*360}deg)`}}></div>
            <div className='hand minutes' style={{transform: `translate(-50%) rotate(${state.minuteRatio*360}deg)`}}></div>
            <div className='hand seconds' style={{transform: `translate(-50%) rotate(${state.secondRatio*360}deg)`}}></div>
            <div className='number number1'>1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    )
        ;
};

export default Clock;