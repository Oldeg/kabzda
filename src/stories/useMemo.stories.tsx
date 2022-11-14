import React, {useCallback, useMemo, useState} from "react";
import {UsersType} from "./React.memo.stories";

export default {
    title: 'useMemo'
}


export const DifficultCounting = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1;
    let resultB = 1;
    resultA = useMemo<number>(() => {
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: UsersType) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpToRectMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(['Dimych', 'Sveta', 'Nikita'])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={users}/>
    </div>
}
export const LikeUseCallback= () => {
    console.log('like useCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'HTML', 'JS'])
    const addBook = () => {
        setBooks([...books, 'CSS' + new Date().getTime()])
    }
    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'CSS' + new Date().getTime()])
        }
    }, [books])
    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, 'CSS' + new Date().getTime()])
    },[books])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addBook()}>add book</button>
        {counter}
        <Books  addBook={memoizedAddBook}/>
    </div>
}
const BookSecret = (props:{ addBook: () => void}) => {
    console.log('USERS SECRET')
    return <div>
        <button onClick={() => props.addBook()}> add book</button>

    </div>
}
const Books = React.memo(BookSecret)


