import React, {useEffect, useState} from "react";




export default {
    title: 'useEffect demo'
}


export const UseEffect = () => {
    console.log('useEffect')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    let today = new Date();
    let time1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [time, setTime] = useState(time1)

    console.log(time1)
    useEffect(() => {
        console.log('useEffect every ')

    })
    useEffect(() => {
        console.log('useEffect first ')
        document.title = counter + ''
    }, [])
    useEffect(() => {
        console.log('useEffect counter changes ')
        document.title = counter + ''

    }, [counter])

    useEffect(() => {
        window.setInterval(() => {
            let b = new Date()
            let c = b.getHours() + ':' + b.getMinutes() + ':' + b.getSeconds()
            setTime(c)
        }, 1000)

    }, [time])

    return <div>
        <button onClick={() => setCounter(state => state + 1)}>counter+</button>
        <button onClick={() => setFake(fake => fake + 1)}>fake+</button>
        {counter}
        {fake}
        <br/>
        {time}

    </div>
}

export const SetIntervalExample = () => {
    const [int, setInt] = useState(0)
    console.log('Component rendered with :' + int)

    useEffect(() => {
        const id = setInterval(() => {
            setInt(int + 1)
            console.log('3 second passed')
        },3000)
        return () => {
            clearInterval(id)
        }

    },[int])
    return <div>
        count: {int}
    </div>
}
