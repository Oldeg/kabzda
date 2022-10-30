import React, {useState} from 'react';


export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: {count:number}) => {
    return <div>{props.count}</div>
}
type UsersType = {
    users: Array<string>

}
const UsersSecret = (props:UsersType ) => {
    return <div>
        {props.users.map((u,i)=> <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(['Dimych', 'Sveta', 'Nikita'])
    const addUser = () => {
        setUser([...users, 'Valera' + new Date().getTime()])
    }
    return <div>
        <button onClick={() => setCounter(counter +1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter} />
        <Users users={users}  />
    </div>
}